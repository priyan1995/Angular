import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent  {
  title = 'Template-ang';
  activetab = 'home';
  
  // testimonials: any[]
  


  // constructor(db: AngularFireDatabase){
  //   db.list('/testimonials').valueChanges()
  //   .subscribe(testimonials =>{
  //     this.testimonials = testimonials;
  //     console.log(this.testimonials);
  //   });
  // }


  // ngOnInit(){

  // }

  getActiveTab(tabname:string) {
    this.activetab = tabname;
  }

}
