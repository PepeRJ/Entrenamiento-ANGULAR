import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-permision',
  templateUrl: './permision.component.html',
  styleUrl: './permision.component.css'
})
export class PermisionComponent {

  router = inject(Router)


  goToChildren(): void {
    this.router.navigate(['/permisos/rutaHija']);
  }

  backToFather(): void {
    this.router.navigate(['/permisos'])
  }
}
