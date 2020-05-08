import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.css']
})
export class GetInTouchComponent implements OnInit {

git = {
  heading:'CONTACT US',
  description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam',
  address:'Lorem ipsum dolor sit amet, ETX consectetur adipiscing elit,<br> sed do ETX eiusmod tempor incididunt ut labore et',
  phone:'123-456-7890',
  email:'info@companyname.com',
  facebookLink:'',
  twitterLink:'',
  GplusLink:''

}

  constructor() { }

  ngOnInit(): void {
  }

}
