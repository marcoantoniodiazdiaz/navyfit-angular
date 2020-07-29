import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { LoginComponent } from './pages/login/login.component';
import { PoliticasComponent } from './pages/politicas/politicas.component';
import { AceptacionComponent } from './pages/aceptacion/aceptacion.component';
import { CrearcuentaComponent } from './pages/crearcuenta/crearcuenta.component';
import { ContranuevaComponent } from './pages/contranueva/contranueva.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'detalle', component: DetalleComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'politicas', component: PoliticasComponent },
  { path: 'aceptacion', component: AceptacionComponent },
  { path: 'crearcuenta', component: CrearcuentaComponent },
  { path: 'contranueva', component: ContranuevaComponent },
  { path: '*', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
