import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  form = new FormGroup({
    message: new FormControl('', [Validators.required]),
  });

  switch = false;
  isLoggedIn = false;
  messages = [];
  messagesG = [];
  messagesS = [];
  errorMessage = '';
  currentUser: any;
  p = false;
  toggleC = true;


  constructor(private tokenStorageService: TokenStorageService, private chatService: ChatService){}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.currentUser = this.tokenStorageService.getUser();
    this.getMessages();
    this.scrollToBottom();

    // Actualizamos mensajes de vez en cuando
    setInterval(() => {
      this.getMessages(); 
      this.p = true;
    }, 5000);
  }

  ngAfterViewChecked() {        
    if(!this.p){
      this.scrollToBottom(); 
    }       
  }

  switchFunction(){
    this.switch = !this.switch;
    console.log(this.switch);
  }

  onSubmit(): void {
    let tipo: string;
    if(this.toggleC){
      tipo = 'general';
    }else{
      tipo = 'soporte';
    }
    if(this.form.valid){
      this.chatService.createMessage(tipo, this.form.value.message!).subscribe(
        (data) => {
          this.getMessages();
          this.form.reset();
          this.p = false;
        },
        (error) => {
          if(error instanceof ErrorEvent){
            this.errorMessage = error.error.message;
          }else{
            this.errorMessage = "Error status: " + error.status;
          }
          console.log(this.errorMessage);
        }
      );
      this.scrollToBottom();
    }
  }

  getMessages(){
    this.chatService.getMessages().subscribe(
      (data) => {
        this.messages = [];
        this.messagesG = [];
        this.messagesS= [];
        this.messages = data;
        for(let i = 0; i < this.messages.length; i++){
          if(this.messages[i].tipo == "general"){
            this.messagesG.push(this.messages[i]);
          }else if(this.messages[i].tipo == "soporte"){
            this.messagesS.push(this.messages[i]);
          }
        }
      }
    );
  }

  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
  }

  toggle(){
    this.toggleC = !this.toggleC;
  }

}
