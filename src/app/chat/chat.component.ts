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
    tipo: new FormControl('general', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });

  switch = false;
  isLoggedIn = false;
  messages = [];
  errorMessage = '';
  currentUser: any;
  p = false;


  constructor(private tokenStorageService: TokenStorageService, private chatService: ChatService){}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.currentUser = this.tokenStorageService.getUser();
    this.getMessages();
    //this.scrollToBottom();
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
    if(this.form.valid){
      this.chatService.createMessage("general", this.form.value.message!).subscribe(
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
        this.messages = data;
      }
    );
  }

  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
  }

}
