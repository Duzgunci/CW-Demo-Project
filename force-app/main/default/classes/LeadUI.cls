public class LeadUI {
    @AuraEnabled
    public static string CreateAd(Ad__c singleAd){

        List<Campaign> singleCampaign = new List<Campaign>();
        string searchCamp = '%' + singleAd.UTM_Source__c + '%'; // '%Webinar%'
        string Result;

        singleCampaign = [SELECT Id, Name, IsActive FROM Campaign WHERE (Name LIKE :searchCamp AND IsActive=True)
        LIMIT 1];

        if (singleCampaign.size()== 0){
            insert singleAd;

        }else {

            singleAd.Campaign__c = singleCampaign.get(0).Id;
            insert singleAd;
        }

        Result = singleAd.Id;

        return Result;
        
    }
    
    @AuraEnabled
    public static string CreateLead(Lead singleLead, string Search){
        List<Campaign> singleCampaign = new List<Campaign>();
        CampaignMember singleCampaignMember = new CampaignMember();
        string searchCamp = '%' + Search + '%';
        string Result;

        singleCampaign =[SELECT Id, Name, IsActive FROM Campaign WHERE Name LIKE :searchCamp AND isActive = True 
        LIMIT 1];

        If (singleCampaign.size()==0){
            insert singleLead;
        }else {

            insert singleLead;
            singleCampaignMember.CampaignId = singleCampaign.get(0).Id;
            singleCampaignMember.LeadId = singleLead.Id;
            singleCampaignMember.Status = 'Received';

            insert singleCampaignMember;
        }

        Result = singleLead.Id;

        return Result;
    }
}
