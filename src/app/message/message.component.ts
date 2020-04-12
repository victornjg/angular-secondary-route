import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  messages: string[] = [];

  // get messsages() {
  //   return this.messageService.messages;
  // }

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.fetchMessages();
    this.messages = this.messageService.messages;
  }

}