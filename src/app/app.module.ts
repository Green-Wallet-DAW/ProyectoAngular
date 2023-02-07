import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> borja
=======
import { EditComponent } from './edit/edit.component';
import { DataTablesModule } from 'angular-datatables';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ErrorComponent } from './error/error.component';
>>>>>>> borja
=======

import { TiendaTokensModule } from './tienda-tokens/tienda-tokens.module';
import { RouterModule } from '@angular/router';
>>>>>>> refs/remotes/origin/main

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        ProfileComponent,
        HomeComponent,
        EditComponent,
        ErrorComponent,
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
<<<<<<< HEAD
<<<<<<< HEAD
        TiendaTokensModule
=======
        FormsModule,
        HttpClientModule,
<<<<<<< HEAD
>>>>>>> borja
=======
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        DataTablesModule,
>>>>>>> borja
=======
>>>>>>> refs/remotes/origin/main
    ]
})
export class AppModule { }
