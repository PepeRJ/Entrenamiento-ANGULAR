import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrl: './formulario-reactivo.component.css'
})
export class FormularioReactivoComponent implements OnInit {

  constructor (private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute
  ) {}

contactForm!: FormGroup
id!:string
nombre!:string
  

  ngOnInit(): void {

    this.contactForm = this.initForm()

     // **Con snapshot.queryparams**
     
    this.id = this.route.snapshot.queryParams['id']
    this.nombre = this.route.snapshot.queryParams['nombre']

    //**Con snpasjot.queryParams y utilizando ('!') al final,estás seguro de que el valor no será null.**
    //**Hay que ponerle el operador de aserción no nula (!), porque paraMap, puede devolver null si 'id' no está en la URL */

    this.id = this.route.snapshot.queryParamMap.get('id')!
    this.nombre = this.route.snapshot.queryParamMap.get('nombre')!
  


    // **Suscribiendome al observable**

    this.route.queryParams.subscribe((params: Params) =>{
    this.id = params['id']
    this.nombre= params['nombre']
    }
    ) 

    
  }

  onSubmit(): void {
    console.log(this.contactForm.value)
  }

  initForm(): FormGroup {

    return this.fb.group({

      nombre: ['', [Validators.required, Validators.minLength(3)]],
      checkAdult: ['', [Validators.required]], 
      trabajo: ['', [Validators.required]],
      comentario: ['', []],

    })
  }
  }


