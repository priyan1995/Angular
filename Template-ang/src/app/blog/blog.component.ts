import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

blogpage = {
  mainHeading: 'LATEST BLOGS',
  Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam',
  blogCards: [
    {image:'../assets/images/blog1.jpg', title:'Lorem ipsum dolor sit amet',Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', buttonLink:'', Date:'25 November 2014'},
    {image:'../assets/images/blog2.jpg', title:'Lorem ipsum dolor sit amet',Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', buttonLink:'', Date:'28 Augest 2014'},
    {image:'../assets/images/blog3.jpg', title:'Lorem ipsum dolor sit amet',Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', buttonLink:'', Date:'5 April 2014'},
    {image:'../assets/images/blog1.jpg', title:'Lorem ipsum dolor sit amet',Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', buttonLink:'', Date:'15 November 2014'},
    {image:'../assets/images/blog2.jpg', title:'Lorem ipsum dolor sit amet',Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', buttonLink:'', Date:'25 June 2014'},
    {image:'../assets/images/blog3.jpg', title:'Lorem ipsum dolor sit amet',Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', buttonLink:'', Date:'25 May 2014'},
    {image:'../assets/images/blog1.jpg', title:'Lorem ipsum dolor sit amet',Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', buttonLink:'', Date:'25 November 2014'},
    {image:'../assets/images/blog2.jpg', title:'Lorem ipsum dolor sit amet',Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', buttonLink:'', Date:'25 October 2014'},
    {image:'../assets/images/blog3.jpg', title:'Lorem ipsum dolor sit amet',Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', buttonLink:'', Date:'25 December 2014'},
  ]
}


 
blog: any
  
constructor(db: AngularFireDatabase){
  db.list('/blog').valueChanges()
  .subscribe(blog =>{
    this.blog = blog;
    console.log(this.blog);
  });
}


  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }
  

}
