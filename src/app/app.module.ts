import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { CanalesComponent } from './vistas2/canales/canales.component';
import { CanalComponent } from './vistas2/canales/canal/canal.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginaErrorComponent } from './vistas2/pagina-error/pagina-error.component';
import { AboutUsComponent } from './vistas2/about-us/about-us.component';
import { HttpClientModule } from '@angular/common/http';
import { NumberService } from './shared2/servicios2/number.service';
import { FormsModule } from "@angular/forms";
import { LoginComponent } from './vistas2/login/login.component';
import { LoginService } from './shared2/servicios2/login.service';
import { BuscarComponent } from './vistas2/buscar/buscar.component';
@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    CanalesComponent,
    CanalComponent,
    PaginaErrorComponent,
    AboutUsComponent,
    LoginComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NumberService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
