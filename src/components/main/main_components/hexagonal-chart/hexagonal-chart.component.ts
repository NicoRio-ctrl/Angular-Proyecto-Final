import { Component, OnInit, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-hexagonal-chart',
  template: '<canvas id="hexChart"></canvas>',
  styles: ['canvas { width: 100%; height: 100%; }'],
  standalone: true,
})
export class HexagonalChartComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() stats: { name: string, value: number }[] = [];

  chart: Chart | undefined;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['stats'] && !changes['stats'].isFirstChange()) {
      this.updateChart();
    }
  }

  createChart(): void {
    const canvas = document.getElementById('hexChart') as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        this.chart = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: this.stats.map(stat => this.getStatIcon(stat.name)), // Usar iconos en lugar de nombres
            datasets: [{
              label: '',
              data: this.stats.map(stat => stat.value),
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
              pointBackgroundColor: 'rgba(54, 162, 235, 1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
              fill: true
            }]
          },
          options: {
            responsive: true,
            scales: {
              r: {
                angleLines: {
                  display: true
                },
                min: 0,
                suggestedMax: 100,
                ticks: {
                  display: false, // Ocultar los ticks
                },
                pointLabels: {
                  font: {
                    size: 14
                  }
                }
              }
            },
            plugins: {
              legend: {
                display: false,
              }
            }
          }
        });
      }
    }
  }

  updateChart(): void {
    if (this.chart) {
      this.chart.data.labels = this.stats.map(stat => this.getStatIcon(stat.name)); // Actualizar con iconos en lugar de nombres
      this.chart.data.datasets[0].data = this.stats.map(stat => stat.value);
      this.chart.update();
    }
  }

  getStatIcon(statName: string): string {
    switch (statName) {
      case 'hp':
        return '❤️';
      case 'attack':
        return '⚔️';
      case 'defense':
        return '🛡️';
      case 'special-attack':
        return '⚡';
      case 'special-defense':
        return '🔰';
      case 'speed':
        return '👟';
      default:
        return '';
    }
  }
}
