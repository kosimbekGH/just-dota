import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import {LoginComponent} from './components/login/login.component';
import {AdminRoutingModule} from './admin-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  exports: [RouterModule],
})

export class AdminModule{
}
