import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {




  
TestiPage = {
 testiTitle: 'TESTIMONIALS',
 testiDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam',

 testiCards:[
   {image:'../assets/images/testimonail_1.jpg', name:'Jonathon Andrew', position:'Lorem ipsum dolor sit amet', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur.'},
   {image:'../assets/images/testimonail_2.jpg', name:'Jonathon Andrew', position:'Lorem ipsum dolor sit amet', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur.'},
   {image:'../assets/images/testimonail_3.jpg', name:'Jonathon Andrew', position:'Lorem ipsum dolor sit amet', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur.'},
   {image:'../assets/images/testimonail_4.jpg', name:'Jonathon Andrew', position:'Lorem ipsum dolor sit amet', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur.'}
 ]


}

testimonials: any
  


constructor(db: AngularFireDatabase){
  db.list('/testimonials').valueChanges()
  .subscribe(testimonials =>{
    this.testimonials = testimonials;
    console.log(this.testimonials);
  });
}


  ngOnInit(): void {
  }

}
