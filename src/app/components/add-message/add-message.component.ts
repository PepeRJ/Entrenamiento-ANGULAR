import { Component } from '@angular/core';
import { MessageServiceService } from '../../services/message-service.service';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrl: './add-message.component.css'
})
export class AddMessageComponent {
  constructor(public messageService: MessageServiceService){}

city!: string;
numeroTransformado!:number

addCity(city:string){
  this.messageService.add(city)
  this.city=''
}

onClear(){
  this.messageService.onClear()
  
 

}

}
