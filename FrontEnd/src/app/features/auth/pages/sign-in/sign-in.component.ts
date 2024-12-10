import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {SignInInputComponent} from "../../components/sign-in-input/sign-in-input.component";  // Importa RouterModule

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterModule, SignInInputComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

}
