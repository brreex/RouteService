import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DbService} from '../db.service';
import {Subscription} from 'rxjs/Rx';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[DbService]
})
export class ProfileComponent implements OnInit {
  private id:string;
  private student:{id:string,name:string,email:string};
  private subscription:Subscription;

  constructor(private route:ActivatedRoute, private db:DbService) {
  }
  ngOnInit() {
    this.route.params.subscribe(param=>this.id=param['id']);
    this.student = this.db.getProfile(this.id);
  }
}
