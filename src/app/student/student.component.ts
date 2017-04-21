import { Component,OnInit } from '@angular/core';
import {DbService} from '../db.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers:[DbService]
})
export class StudentComponent implements OnInit {
  studentData:[{id:string,name:string,email:string}];
  constructor(private db:DbService) {
    //this.studentData = this.db.getData();
  }

  ngOnInit(){
  this.studentData = this.db.getData();
  }
}
