import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TokenServicesService } from 'src/app/_services/token-services.service';

@Component({
  selector: 'app-cajas-desplegables',
  templateUrl: './cajas-desplegables.component.html',
  styleUrls: ['./cajas-desplegables.component.css']
})
export class CajasDesplegablesComponent implements OnInit{

  public servicio: any;
  constructor(private _artService: TokenServicesService, private router: Router){

  }


  ngOnInit(): void {
      
  }
}
