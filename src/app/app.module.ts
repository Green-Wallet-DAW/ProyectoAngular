import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilidadesModule } from './utilidades/utilidades.module';
<<<<<<< HEAD
import { FacilityModule } from './facility/facility.module';
import { TablasModule } from "./tablas/tablas.module";
import { TiendaTokensModule } from './tienda-tokens/tienda-tokens.module';
import { RouterModule } from '@angular/router';

=======
import { FacilityModule } from './facility/facility.module';import { TablasModule } from "./tablas/tablas.module";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
>>>>>>> borja

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
        UtilidadesModule,
        TablasModule,
        FacilityModule,
<<<<<<< HEAD
        TiendaTokensModule
=======
        FormsModule,
        HttpClientModule,
>>>>>>> borja
    ]
})
export class AppModule { }
