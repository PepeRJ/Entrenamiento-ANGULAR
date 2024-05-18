import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OnInit } from '@angular/core';



@Component({
  selector: 'app-formulario-template',
  templateUrl: './formulario-template.component.html',
  styleUrl: './formulario-template.component.css'
})
export class FormularioTemplateComponent implements OnInit{


 id!: string;

    model = {
   nombre: '',
   checkAdult: '',
   trabajoo:'',
   comentario:''

  }

  constructor(private readonly route: ActivatedRoute){}

  ngOnInit(): void {

     // **Con snapshot.params**

   this.id = this.route.snapshot.params['id']

     // **Con snapshot.paramsMap y utilizando ('!') al final,estás seguro de que el valor no será null.**
     //**Hay que ponerle el operador de aserción no nula (!), porque paraMap, puede devolver null si 'id' no está en la URL */

   this.id = this.route.snapshot.paramMap.get('id')!

   // // **Suscribiendome al observable**

    this.route.params.subscribe((params: Params) => {
    this.id = params['id'];
    });
  }




  onSubmit(valores: string){
    console.log('Aqui tienes los valores', valores)
  }


}
