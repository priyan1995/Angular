import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

servicesMain ={
  mainHeading: 'Our Services',
  mainDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam',
  servicesCards:[
    {icon:'../assets/images/icon1.png',title:'Responsive Design', description:'Lorem ipsum dolor sit amet, consectetur ing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipis ing elit, sed do eiusmod.'},
    {icon:'../assets/images/icon2.png', title:'UX Design' ,description:'Lorem ipsum dolor sit amet, consectetur ing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipis ing elit, sed do eiusmod.'},
    {icon:'../assets/images/icon3.png ', title:'UI Design' ,description:'Lorem ipsum dolor sit amet, consectetur ing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipis ing elit, sed do eiusmod.'},
    {icon:'../assets/images/icon4.png', title:'SEO Services' ,description:'Lorem ipsum dolor sit amet, consectetur ing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipis ing elit, sed do eiusmod.'},
    {icon:'../assets/images/icon5.png ', title:'iOS Development' ,description:'Lorem ipsum dolor sit amet, consectetur ing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipis ing elit, sed do eiusmod.'},
    {icon:'../assets/images/icon6.png', title:'Andriod Development' ,description:'Lorem ipsum dolor sit amet, consectetur ing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipis ing elit, sed do eiusmod.'},
  ]
}
  
services: any
  
constructor(db: AngularFireDatabase){
  db.list('/services').valueChanges()
  .subscribe(services =>{
    this.services = services;
    console.log(this.services);
  });
}

  ngOnInit(): void {
  }

}
