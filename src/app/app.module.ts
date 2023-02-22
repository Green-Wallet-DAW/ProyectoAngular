import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilidadesModule } from './utilidades/utilidades.module';

import { FacilityModule } from './facility/facility.module';import { TablasModule } from "./tablas/tablas.module";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { EditComponent } from './edit/edit.component';
import { DataTablesModule } from 'angular-datatables';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ErrorComponent } from './error/error.component';

import { TiendaTokensModule } from './tienda-tokens/tienda-tokens.module';
import { RouterModule } from '@angular/router';
import { AuthInterceptorService } from './_services/auth-interceptor.service';
import { User } from './edit/user';

import { CommunitiesModule } from './communities/communities.module';
import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        ProfileComponent,
        EditComponent,
        ErrorComponent,
    ],
    // providers: [authInterceptorProviders,{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
    providers: [authInterceptorProviders,  {provide:NgChartsConfiguration, useValue:{generateColors: false}}],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        UtilidadesModule,
        TablasModule,
        FacilityModule,
        TiendaTokensModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        DataTablesModule,
        HttpClientModule,
        CommunitiesModule,
        DashboardModule,
        NgChartsModule.forRoot(),
    ]
})
export class AppModule { }
