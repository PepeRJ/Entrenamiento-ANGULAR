import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private readonly router: Router, 
              private authService: AuthService){}

 autenticado = this.authService.isLogged()

  goToTemplate():void{

  this.router.navigate(['formulario-template', '420'])
  }

  goToReactive(): void{
    this.router.navigate(['formulario-reactive'] , {queryParams: {id: '520', nombre: 'Pepiki'}})
  }

}
