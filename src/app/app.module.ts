import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { LoginComponent } from './pages/login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoliticasComponent } from './pages/politicas/politicas.component';
import { AceptacionComponent } from './pages/aceptacion/aceptacion.component';
import { CrearcuentaComponent } from './pages/crearcuenta/crearcuenta.component';
import { ContranuevaComponent } from './pages/contranueva/contranueva.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    ProductosComponent,
    DetalleComponent,
    NosotrosComponent,
    AdministradorComponent,
    LoginComponent,
    PoliticasComponent,
    AceptacionComponent,
    CrearcuentaComponent,
    ContranuevaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
