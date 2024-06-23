import { Component } from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {ContentComponent} from "../../components/content/content.component";
import {FooterComponent} from "../../components/footer/footer.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    NavbarComponent,
    ContentComponent,
    FooterComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
