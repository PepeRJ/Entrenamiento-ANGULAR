import { Component } from '@angular/core';
import { Ciudad } from '../../interfaces/ciudad';
import { ServiceCiudadesService } from '../../services/service-ciudades.service';
import { OnInit } from '@angular/core';



@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrl: './ciudades.component.css'
})
export class CiudadesComponent implements OnInit{

  ciudades!: Ciudad[]
  ciudad!: string
  ciudadSeleccionada!: Ciudad;
  mostrarDetalles = false

  
  

  constructor(private serviceCiudades: ServiceCiudadesService){}

  ngOnInit(): void {
this.getCiudades()
  }

  getCiudades(): void {
    this.serviceCiudades.getCiudades().subscribe(
    (res: Ciudad[])=> {
      this.ciudades = res
    })
    }

    getCiudad(name: Ciudad): void{
      this.serviceCiudades.getCiudad(name).subscribe(
        (res: Ciudad)=>{
          this.ciudadSeleccionada=res
          this.mostrarDetalles=true
        
          

        }
      )
    }

  addCiudad(name: string): void {
    this.serviceCiudades.addCiudad(name).subscribe(
      (res: Ciudad)=> {
        this.ciudades.push(res)
      }
    )
  }

  updateCiudad(ciudad: Ciudad) : void{

    
    this.ciudadSeleccionada.name = this.ciudad; // Actualiza el nombre de la ciudad seleccionada
    this.serviceCiudades.updateCiudad(this.ciudadSeleccionada).subscribe(
      (res: Ciudad) => {
        this.ciudadSeleccionada = { _id: '', name: '' }; // Desselecciona la ciudad después de actualizar
        this.ciudad = ''; // Limpia el campo de texto
      },
      (error) => {
        console.error('Error al actualizar ciudad:', error);
      }
    );
  }


  seleccionarCiudad(ciudadSeleccionada: Ciudad): void {
    
    if(!this.mostrarDetalles){
    this.ciudadSeleccionada = ciudadSeleccionada;
    this.ciudad = ciudadSeleccionada.name;
    
    console.log(this.ciudad)
  }
  }


  deleteCiudad(id: string): void{
    if(confirm('Etsás seguri primuki?'))
    this.serviceCiudades.deleteCiudad(id).subscribe(
      (res: void)=>{
       this.ciudades = this.ciudades.filter(ciudad=> ciudad._id !== id)
      }
    )
  }
  }






  







