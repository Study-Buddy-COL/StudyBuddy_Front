import {AfterViewInit, Component, OnInit} from '@angular/core';
import {SidebarComponent} from "../../../../shared/components/sidebar/sidebar.component";
import {EventsComponent} from "../../components/events/events.component";
import {NgIf} from "@angular/common";
import {TopbarComponent} from "../../components/topbar/topbar.component";
import {ClassesComponent} from "../../components/classes/classes.component";
import Chart from 'chart.js/auto';
import {ResumeComponent} from "../../components/resume/resume.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SidebarComponent,
    EventsComponent,
    NgIf,
    TopbarComponent,
    ClassesComponent,
    ResumeComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {



}
