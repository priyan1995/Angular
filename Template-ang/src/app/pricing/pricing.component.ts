import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

pricing = {
  title:'PRICING TABLE',
  description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam',
  priceCard:[
    {pack:'STARTER PACK',price:'39',link:'',features:['1 DOMAIN','100GB DISK SPACE','UNLIMITED BANDWIDTH','SHARED SSL CERTIFICATE','10 EMAIL ADDRESS','24/7 SUPPORT']},
    {pack:'BUSINESS PACK',price:'65',link:'',features:['2 DOMAIN','200GB DISK SPACE','UNLIMITED BANDWIDTH','SHARED SSL CERTIFICATE','15 EMAIL ADDRESS','24/7 SUPPORT']},
    {pack:'PRO PACK',price:'99',link:'',features:['5 DOMAIN','500GB DISK SPACE','UNLIMITED BANDWIDTH','SHARED SSL CERTIFICATE','20 EMAIL ADDRESS','24/7 SUPPORT']}
  ]
}

  constructor() { }

  ngOnInit(): void {
  }

}
