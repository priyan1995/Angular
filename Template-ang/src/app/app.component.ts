import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Template-ang';
  activetab = 'home';
  contructor(){

  }

  ngOnInit(){

  }

  getActiveTab(tabname:string) {
    this.activetab = tabname;
  }

}
