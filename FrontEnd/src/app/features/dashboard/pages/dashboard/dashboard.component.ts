import { Component } from '@angular/core';
import {SidebarComponent} from "../../../../shared/components/sidebar/sidebar.component";
import {EventsComponent} from "../../components/events/events.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SidebarComponent,
    EventsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
