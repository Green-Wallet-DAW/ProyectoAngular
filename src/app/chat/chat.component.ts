import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{

  switch = false;

  constructor(){}

  ngOnInit(): void {
    
  }

  switchFunction(){
    this.switch = !this.switch;
    console.log(this.switch);
  }

}
