import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'] // Corregido de styleUrl a styleUrls
})
export class HijoComponent {

  @Input () hijo:string = "soy listo eh primuki";
  @Output () Hijo = new EventEmitter <string> ();
  


  dale(){
    this.Hijo.emit(this.hijo)
  }



}
