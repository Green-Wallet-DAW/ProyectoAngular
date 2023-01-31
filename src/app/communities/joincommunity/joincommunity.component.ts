import { Component, OnInit } from '@angular/core';
import { JoincomunitiesService } from './joincomunities.service';

@Component({
  selector: 'app-joincommunity',
  templateUrl: './joincommunity.component.html',
  styleUrls: ['./joincommunity.component.css']
})
export class JoincommunityComponent {
  comunidades: any;

  constructor(private comunidadesService: JoincomunitiesService) {}

  ngOnInit() {
    this.comunidadesService.devolver()
      .subscribe( result =>  this.comunidades = result)
  }
}
