import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cajas-desplegables',
  templateUrl: './cajas-desplegables.component.html',
  styleUrls: ['./cajas-desplegables.component.css']
})
export class CajasDesplegablesComponent{
  
  // ngAfterViewInit(): void {
  //   let prueba:boolean  = true;
  //   const elemento:HTMLElement = document.getElementById("flechaCaja")!;
  //   // @ViewChild("flechaCaja") flechaCaja!: ElementRef;
  //   function rotar(event: Event): void{
  //     console.log("Entra en evento");
  //     if (prueba == true) {
  //       elemento.style.transform="rotate(90deg)";
  //       prueba = false;
  //       console.log("Entra");
  //     } else if(prueba == false){
  //       elemento.style.transform="rotate(none)";
  //       prueba = true;
  //       console.log("Sale");
  //     }
  //   }
  // }

}
