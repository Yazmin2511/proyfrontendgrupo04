import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { Reunion } from 'src/app/models/reunion';
import { Empleado } from 'src/app/models/empleado';
import { ReunionService } from 'src/app/services/reunion.service';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { addWeeks } from 'date-fns';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css'],
})
export class GraficaBarraComponent implements OnInit {
  minimo = 0;
  maximo = 10;
  reuniones: Array<Reunion>;
  resultados: Array<Reunion>;
  reunion: Reunion;
  cantidadTotal: number;
  reunionesPorParticipante: Array<any>;
  participantes!: Array<Empleado>;
  participante!: Empleado;
  participanteId!: string
  rango!: true; //true=eneroa juni, false=julio diciembre
  rango1 = [1, 2, 3, 4, 5, 6]
  rango2 = [7, 8, 9, 10, 11, 12]
  meses1 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']
  meses2 = ['Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  anio!: string;
  mes!: string;
  etiquetas = [];
  dataB = [];
  constructor(private reunionService: ReunionService, private empleadoService: EmpleadoService) {

  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  ngOnInit(): void {
    this.resultados = new Array<Reunion>();
    this.participantes = new Array<Empleado>();
    this.getParticipantes();

  }
  ///////////************************************************///////////////

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0,
        max: 20
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: this.etiquetas,
    datasets: [
      { data: [], label: 'Reuniones por P.' }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }



  ///////////************************************************///////////////
  //sin uso por el momento
  getReuniones() {

    this.reunionService.getReuniones().subscribe(
      (result) => {
        console.log(result);
        this.reuniones = new Array<any>();
        result.forEach((element: any) => {
          this.reunion = new Reunion();
          Object.assign(this.reunion, element);
          this.reuniones.push(this.reunion);
          this.cantidadTotal = this.reuniones.length
        })
      },
    )
  }
  //obtener lista de empleados
  getParticipantes() {

    this.empleadoService.getEmpleados().subscribe(
      (result) => {
        console.log(result);
        this.participantes = new Array<Empleado>();
        result.forEach((element: any) => {
          this.participante = new Empleado();
          Object.assign(this.participante, element);
          this.participantes.push(this.participante);
        })
      },
    )
  }
  //determina por cual rango har?? la busqueda
  buscarReunionesDeParticipantes() {
    if (this.rango == true) {
      this.contarReunionesOficina(this.rango1);
      this.barChartData.labels = this.meses1;
      this.etiquetas = this.meses1;
      this.chart?.update();
    } else {

      this.contarReunionesOficina(this.rango2);
      this.barChartData.labels = this.meses2;
      this.etiquetas = this.meses2;
      this.chart?.update();//supuestamente actualiza la gr??fica
    }

  }

  //cuenta las reuniones encontradas por cada mes del rango
  async contarReunionesOficina(r: Array<any>) {
    this.reunionesPorParticipante = new Array<any>();
    console.log("r: " + r);
    for (var _i = 0; _i < r.length; _i++) {
      await this.recuperarReuniones(r[_i]);
      console.log("eti: " + this.etiquetas)
    }
  }
  //recuperamoslasreuniones de un participante en un mes y a??o dado
  async recuperarReuniones(mes: string) {
    this.reunionService.getReunionFiltroPersona(this.participanteId, mes, this.anio).subscribe(
      (result) => {
        this.resultados = new Array<Reunion>();
        Object.assign(this.resultados, result);
        this.reunionesPorParticipante.push(this.resultados.length);
        this.barChartData.datasets[0].data = this.reunionesPorParticipante;//paso a dataB los datos para la grafica
        console.log("resultado: " + this.dataB);
        console.log("ReunionesPmA: " + this.reunionesPorParticipante);
        console.log(this.barChartData.datasets[0].data)
        this.chart?.update();
      },
    )
  }



}
