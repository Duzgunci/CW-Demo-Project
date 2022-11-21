import { LightningElement, api } from 'lwc';
import CreateAd from '@salesforce/apex/LeadUI.CreateAd';
import CreateLead from '@salesforce/apex/LeadUI.CreateLead';
import {ShowToastEvent} from 'Lightning/platformShowToastEvent';
import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import Email from '@salesforce/schema/Contact.Email';
import Phone from '@salesforce/schema/Account.Phone';
import Street from '@salesforce/schema/Lead.Street';
import City from '@salesforce/schema/Lead.City';
import Country from '@salesforce/schema/Lead.Country';

export default class LandingPageForm extends LightningElement {

    isRegistered = false;
    firstName;
    lastName;
    email;
    phone;
    street;
    city;
    state;
    zipCode;
    country;
    infoDate;
    course;

    leadRecord = {

        FirstName:'',
        LastName:'',
        Street:'',
        City:'',
        State:'',
        PostalCode:'',
        Email:'',
        Phone:''

    }
AdRecord = {

    UTM_Campaign__c:'',
    UTM_Content__c:'',
    UTM_Medium__c:'',
    UTM_Referer__c:'',
    UTM_Source__c:'',
    UTM_Term__c:'',
    UTM_Id__c:''

}
    @api UTM_Campaign__c;
    @api UTM_Content__c;
    @api UTM_Medium__c;
    @api TM_Referer__c;
    @api UTM_Source__c;
    @api UTM_Term__c;
    @api UTM_Id__c;

}