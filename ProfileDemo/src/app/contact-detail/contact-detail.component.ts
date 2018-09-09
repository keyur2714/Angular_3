import { Component, OnInit } from '@angular/core';
import { ContactInfo } from './contact.model';
@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contactInfo : ContactInfo = new ContactInfo();

  constructor() { }

  ngOnInit() {
    this.contactInfo.email = "keyurjava27@gmail.com";
    this.contactInfo.mobileNo = "7387029671";
  }

}
