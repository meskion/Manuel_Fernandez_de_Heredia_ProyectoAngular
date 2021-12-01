import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CanalesComponent } from "./vistas2/canales/canales.component";
import { PaginaErrorComponent } from "./vistas2/pagina-error/pagina-error.component";
import { AboutUsComponent } from "./vistas2/about-us/about-us.component";
import { LoginComponent } from './vistas2/login/login.component';
import { BuscarComponent } from './vistas2/buscar/buscar.component';


const routes: Routes = [
  { path: 'canales', component: CanalesComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'login', component: LoginComponent},
  { path: 'search', component: BuscarComponent},
  { path: '', redirectTo: '/canales', pathMatch: 'full' },
  { path: '**', component: PaginaErrorComponent }
]
@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
