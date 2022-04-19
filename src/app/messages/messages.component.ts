import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})

export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) {}

  public trigger(): void {
    let arrow = document.getElementById('messagesArrow');
    let messagesList = document.getElementById('messagesList');
    
    if (arrow?.classList.contains('active')) {
      arrow?.classList.remove('active');
      messagesList?.classList.remove('active');
    }
    else {
      arrow?.classList.add('active');
      messagesList?.classList.add('active');
    }
  }

  ngOnInit() {
  }

}