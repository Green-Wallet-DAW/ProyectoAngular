import { Component , OnInit} from '@angular/core';
import { MydevicesService } from './mydevices.service';

@Component({
  selector: 'app-mydevices',
  templateUrl: './mydevices.component.html',
  styleUrls: ['./mydevices.component.css']
})
export class MydevicesComponent implements OnInit {
  caja: any;

  constructor(private _mvc: MydevicesService) {}


  mostrarGeneral(){
    this._mvc.generalView()
    .subscribe(
      result => {
        this.caja = result
      },
      err => {
        this.caja = JSON.parse(err.error).message;
      }
      );
  }
  ngOnInit(): void {
    this.mostrarGeneral();
  }

}
