import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cajas-desplegables',
  templateUrl: './cajas-desplegables.component.html',
  styleUrls: ['./cajas-desplegables.component.css']
})
export class CajasDesplegablesComponent{
  prueba:boolean = true;
  elemento:HTMLElement = document.getElementById("flechaCaja")!;
  // @ViewChild("flechaCaja") flechaCaja!: ElementRef;
  rotar(event: Event){
    console.log("Entra en evento");
    if (this.prueba == true) {
      this.elemento.style.transform="rotate(90deg)";
      this.prueba = false;
      console.log("Entra");
    } else if(this.prueba == false){
      this.elemento.style.transform="rotate(none)";
      this.prueba = true;
      console.log("Sale");
    }
  }
}
