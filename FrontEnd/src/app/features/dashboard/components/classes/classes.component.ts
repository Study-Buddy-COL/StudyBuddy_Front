import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-classes',
  standalone: true,
    imports: [
        NgIf
    ],
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css'
})
export class ClassesComponent {

  expanded = false;

  toggleExpand() {
    this.expanded = !this.expanded;
  }

}
