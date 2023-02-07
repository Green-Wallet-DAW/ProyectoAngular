import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilidadesModule } from './utilidades/utilidades.module';

import { FacilityModule } from './facility/facility.module';import { TablasModule } from "./tablas/tablas.module";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { RouterModule } from '@angular/router';
import { TiendaTokensModule } from './tienda-tokens/tienda-tokens.module';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        ProfileComponent,
        HomeComponent,
    ],
    providers: [authInterceptorProviders],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        UtilidadesModule,
        TablasModule,
        FacilityModule,
        FormsModule,
        TiendaTokensModule,
    ]
})
export class AppModule { }
