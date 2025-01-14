import {  Component, AfterViewInit, ViewChild, QueryList, ViewChildren  } from '@angular/core';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements AfterViewInit {
  @ViewChildren('circle') circles!: QueryList<SVGElement>;

  // Dados para cada segmento (em porcentagem)
  public data = [30, 25, 20, 25];

  ngAfterViewInit(): void {
    // Esperar os elementos serem renderizados
    this.updateChart();
  }

  updateChart(): void {
    let offset = 0;

    // Acessa os elementos <circle> renderizados
    this.circles.toArray().forEach((circle, index) => {
      const dashArray = (this.data[index] / 100) * 100; // Calcula o comprimento do dash
      const dashOffset = -offset; // Ajusta o offset para a posição correta

      // Aplica os valores de dashArray e dashOffset
      circle.style.strokeDasharray = `${dashArray} 100`;
      circle.style.strokeDashoffset = `${dashOffset}`;

      offset += dashArray; // Atualiza o offset para o próximo segmento
    });
  }

}
