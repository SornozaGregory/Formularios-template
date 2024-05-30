import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent } from './components/precios/precios.component';
import { AuthModule } from '@auth0/auth0-angular';
import { TemplateFormsComponent } from './components/template-forms/template-forms.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtegidaComponent,
    PreciosComponent,
    TemplateFormsComponent
  ],
  imports: [
    AuthModule.forRoot({
      domain: 'dev-w7wivfmb1blwty6n.us.auth0.com',
      clientId: 'sKsxZcYNSvE0bT8GijBIcqoiVeAmRjTp',
      authorizationParams: {
        redirect_uri:window.location.origin
      }
    }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
