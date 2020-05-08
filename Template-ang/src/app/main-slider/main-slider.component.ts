import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css']
})
export class MainSliderComponent implements OnInit {

banner1 = {
  heading: 'Welcome to Angular Template',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
  buttonTxt: 'Find Out More',
  BannerImage: '../assets/images/bg1.jpg',
  buttonLink: '/'
};

banner2 = {
  heading: 'Welcome to Angular Template',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
  buttonTxt: 'Find Out More',
  BannerImage: '../assets/images/bg2.jpg',
  buttonLink: '/'
};

  constructor() { }

  ngOnInit(): void {
  }

}
