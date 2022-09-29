import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
// Import tooltips
import { TooltipModule } from 'ng2-tooltip-directive';

import { AppRoutingModuleTsModule } from './app-routing.module.ts/app-routing.module.ts.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { LoginComponent } from './componentes/login/login.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { AcercaDeModalComponent } from './componentes/acerca-de-modal/acerca-de-modal.component';
import { AcercaDeDatosModalComponent } from './componentes/acerca-de-datos-modal/acerca-de-datos-modal.component';
import { GlosarioComponent } from './componentes/glosario/glosario.component';
import { PieComponent } from './componentes/pie/pie.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HttpClientModule } from "@angular/common/http";
import { ErrorComponent } from './componentes/error/error.component';
import { IndexComponent } from './componentes/index/index.component';
import { EducacionModalComponent } from './componentes/educacion-modal/educacion-modal.component';
import { ExperienciaModalComponent } from './componentes/experiencia-modal/experiencia-modal.component';
import { ProyectoModalComponent } from './componentes/proyecto-modal/proyecto-modal.component';
import { HabilidadModalComponent } from './componentes/habilidad-modal/habilidad-modal.component';


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
    ProyectosComponent,
    ErrorComponent,
    IndexComponent,
    AcercaDeModalComponent,
    AcercaDeDatosModalComponent,
    LoginComponent,
    EducacionModalComponent,
    ExperienciaModalComponent,
    ProyectoModalComponent,
    HabilidadModalComponent
  ],
  imports: [
    AppRoutingModuleTsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TooltipModule,
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
