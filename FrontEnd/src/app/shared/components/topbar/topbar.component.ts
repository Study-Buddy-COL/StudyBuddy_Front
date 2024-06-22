import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {

  @Input() title: string = '';

  onSearchClick() {
    alert('Botón de búsqueda clickeado');
  }

  onProfileClick() {
    alert('Botón de perfil clickeado');
  }

}