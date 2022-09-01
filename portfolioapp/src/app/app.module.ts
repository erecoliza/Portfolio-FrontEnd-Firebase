import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { GlosarioComponent } from './componentes/glosario/glosario.component';
import { PieComponent } from './componentes/pie/pie.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    PieComponent,
    EncabezadoComponent,
    BannerComponent,
    AcercaDeComponent,
    GlosarioComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
