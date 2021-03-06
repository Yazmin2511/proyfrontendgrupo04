import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { ReunionComponent } from './components/reunion/reunion.component';
import { AltaReunionComponent } from './components/alta-reunion/alta-reunion.component';
import { FormRecursosComponent } from './components/form/form-recursos/form-recursos.component';
import { FormParticipantesComponent } from './components/form/form-participantes/form-participantes.component';
import { EstadisticaComponent } from './components/estadistica/estadistica.component';
import { GraficaBarraComponent } from './components/grafica/grafica-barra/grafica-barra.component';
import { GraficaTortaComponent } from './components/grafica/grafica-torta/grafica-torta.component';
import { GraficaTortaTipoComponent } from './components/grafica/grafica-torta-tipo/grafica-torta-tipo.component';
import { GraficaBarraOficinaComponent } from './components/grafica/grafica-barra-oficina/grafica-barra-oficina.component';
import { GraficaBarraTiporeunionComponent } from './components/grafica/grafica-barra-tiporeunion/grafica-barra-tiporeunion.component';
import { EstadisticaReunionTiempoComponent } from './components/estadistica/estadistica-reunion-tiempo/estadistica-reunion-tiempo.component';
import { EstadisticaReunionOficinaComponent } from './components/estadistica/estadistica-reunion-oficina/estadistica-reunion-oficina.component';
import { EstadisticaReunionParticipanteComponent } from './components/estadistica/estadistica-reunion-participante/estadistica-reunion-participante.component';



import { NgChartsModule } from 'ng2-charts';
import { AltaEmpleadoComponent } from './components/form/alta-empleado/alta-empleado.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { EmpleadoFormComponent } from './components/empleado-form/empleado-form.component';
import { HomeComponent } from './components/home/home.component';

import { ReunionPdfComponent } from './components/reunion-pdf/reunion-pdf.component';
import { AltaRecursoComponent } from './components/alta-recurso/alta-recurso.component';
import { ListarRecursoComponent } from './components/listar-recurso/listar-recurso.component';

import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';


import { CalendarioComponent } from './components/calendario/calendario.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AgendaParticipanteComponent } from './components/agenda-participante/agenda-participante.component';
import { HistorialParticipanteComponent } from './components/historial-participante/historial-participante.component';
import { NoParticipanteComponent } from './components/no-participante/no-participante.component';
import { CommonModule } from '@angular/common';
import { SendemailComponent } from './components/sendemail/sendemail.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    EmpleadoComponent,

    ReunionComponent,
    AltaReunionComponent,
    AltaEmpleadoComponent,
    FormRecursosComponent,
    FormParticipantesComponent,
    EstadisticaComponent,
    GraficaBarraComponent,
    GraficaTortaComponent,

    EstadisticaReunionTiempoComponent,
    EstadisticaReunionOficinaComponent,
    EstadisticaReunionParticipanteComponent,

    EmpleadoFormComponent,
    HomeComponent,
    ReunionPdfComponent,
    AltaRecursoComponent,
    ListarRecursoComponent,
    UsuarioFormComponent,
    CalendarioComponent,
    AgendaParticipanteComponent,
    HistorialParticipanteComponent,
    NoParticipanteComponent,
    SendemailComponent,
    GraficaTortaTipoComponent,
    GraficaBarraOficinaComponent,
    GraficaBarraTiporeunionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // cliente
    FormsModule, //para los formularios
    NgChartsModule, //graficos
    NgxQRCodeModule, //para el QR
    ReactiveFormsModule,
    CommonModule,
    FullCalendarModule,ModalModule.forRoot(),//fullcalendar
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })

  ],
  providers: [LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent],
})
export class AppModule { }
