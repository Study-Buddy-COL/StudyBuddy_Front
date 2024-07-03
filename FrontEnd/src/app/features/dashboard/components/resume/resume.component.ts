import {AfterViewInit, Component, OnInit} from '@angular/core';
import Chart from "chart.js/auto";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.createLineChart();
  }

  createLineChart() {
    if (typeof document !== 'undefined') {
      const ctx: any = document.getElementById('line-chart') as HTMLCanvasElement;
      if (ctx) {
        new Chart(ctx.getContext('2d'), {
          type: 'line',
          data: {
            labels: ['S', 'M', 'W', 'T', 'F', 'S'],
            datasets: [{
              label: '',
              backgroundColor: '#795CC2',
              borderColor: '#795CC2',
              data: [2, 3, 2, 4, 3, 5],
              fill: false,
              tension: 0.5,
              pointRadius: 1,
              pointHoverRadius: 7,
              pointStyle: 'circle',
              pointBackgroundColor: '#795CC2',
              pointBorderWidth: 2,
              pointHoverBackgroundColor: 'rgb(255,255,255)',
              pointHoverBorderColor: '#F25842',
              pointHoverBorderWidth: 5,
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                backgroundColor: '#795CC2',
                displayColors: false,
                intersect: false,
                mode: 'index',

                callbacks: {
                  label: function(tooltipItem) {
                    if (tooltipItem && typeof tooltipItem.raw === 'number') {
                      let value = Math.round(tooltipItem.raw);
                      return value + ' Task';
                    }
                    return '';
                  },
                  title: function() {
                    return '';
                  },
                }
              }
            },
            hover: {
              mode: 'index',
              intersect: false,
            },
            scales: {
              x: {
                display: true,
                grid: {
                  color: '#FFEBCE',
                  lineWidth: 2
                },
                ticks: {
                  color: '#795CC2',
                },

              },
              y: {
                display: true,
                suggestedMin: 0,

                ticks: {
                  color: '#795CC2',
                  stepSize: 1,
                },
                grid: {
                  display: false,
                }
              },

            }
          }
        });
      }
    }
  }
}
