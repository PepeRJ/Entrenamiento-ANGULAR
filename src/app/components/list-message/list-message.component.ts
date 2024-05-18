import { Component } from '@angular/core';
import { MessageServiceService } from '../../services/message-service.service';

@Component({
  selector: 'app-list-message',
  templateUrl: './list-message.component.html',
  styleUrl: './list-message.component.css'
})
export class ListMessageComponent {

  constructor(public messageService: MessageServiceService){}


}
