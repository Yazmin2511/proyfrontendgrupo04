import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
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
import { EstadisticaMenuComponent } from './components/estadistica/estadistica-menu/estadistica-menu.component';
import { EstadisticaReunionTiempoComponent } from './components/estadistica/estadistica-reunion-tiempo/estadistica-reunion-tiempo.component';
import { EstadisticaReunionOficinaComponent } from './components/estadistica/estadistica-reunion-oficina/estadistica-reunion-oficina.component';
import { EstadisticaReunionParticipanteComponent } from './components/estadistica/estadistica-reunion-participante/estadistica-reunion-participante.component';
import { EstadisticaFormOficinaComponent } from './components/estadistica/estadistica-form-oficina/estadistica-form-oficina.component';
import { EstadisticaFormTiempoComponent } from './components/estadistica/estadistica-form-tiempo/estadistica-form-tiempo.component';
import { EstadisticaFormParticipanteComponent } from './components/estadistica/estadistica-form-participante/estadistica-form-participante.component';
import { NgChartsModule } from 'ng2-charts';
import { AltaEmpleadoComponent } from './components/form/alta-empleado/alta-empleado.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';




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
    EstadisticaMenuComponent,
    EstadisticaReunionTiempoComponent,
    EstadisticaReunionOficinaComponent,
    EstadisticaReunionParticipanteComponent,
    EstadisticaFormOficinaComponent,
    EstadisticaFormTiempoComponent,
    EstadisticaFormParticipanteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // cliente
    FormsModule, //para los formularios
    NgChartsModule, //graficos
    NgxQRCodeModule //para el QR
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
