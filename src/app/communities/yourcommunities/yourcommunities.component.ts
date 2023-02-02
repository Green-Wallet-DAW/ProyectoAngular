import { Component, OnInit } from '@angular/core';
import { YourcomunitiesService } from './yourcomunities.service';

@Component({
  selector: 'app-yourcommunities',
  templateUrl: './yourcommunities.component.html',
  styleUrls: ['./yourcommunities.component.css']
})
export class YourcommunitiesComponent implements OnInit{
  comunidades: any;

  constructor(private comunidadesService: YourcomunitiesService) {}

  ngOnInit() {
    this.comunidadesService.retornar()
      .subscribe( result =>  this.comunidades = result)
  }
  
}
