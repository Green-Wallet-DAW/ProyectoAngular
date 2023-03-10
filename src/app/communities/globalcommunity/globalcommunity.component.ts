import { Component,OnInit } from '@angular/core';
import { GlobalcomunitiesService } from './globalcomunities.service';

@Component({
  selector: 'app-globalcommunity',
  templateUrl: './globalcommunity.component.html',
  styleUrls: ['./globalcommunity.component.css']
})
export class GlobalcommunityComponent implements OnInit{
  members: any;

  constructor(private globalService: GlobalcomunitiesService) {}

  ngOnInit() {
    this.globalService.ganadores()
      .subscribe( result =>{
          this.members = result}
          )
  }
}
