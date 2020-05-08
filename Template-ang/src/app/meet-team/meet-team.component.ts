import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-meet-team',
  templateUrl: './meet-team.component.html',
  styleUrls: ['./meet-team.component.css']
})
export class MeetTeamComponent implements OnInit {

teamSec = {
  title:'MEET THE TEAM',
  desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam',
  cards:[
    {image:'../assets/images/team_1.jpg', name:'Bin Burhan', position:'Co-Founder'},
    {image:'../assets/images/team_2.jpg', name:'Jane Man', position:'Project Manager'},
    {image:'../assets/images/team_3.jpg', name:'Pahlwan', position:'Designer'},
    {image:'../assets/images/team_4.jpg', name:'Nasir uddin', position:'UI/UX'}
  ]
}

team: any
  
constructor(db: AngularFireDatabase){
  db.list('/team').valueChanges()
  .subscribe(team =>{
    this.team = team;
    console.log(this.team);
  });
}



  ngOnInit(): void {
  }

}
