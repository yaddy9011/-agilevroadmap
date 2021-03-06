import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { GestionObjetivosComponent } from './gestion-objetivos/gestion-objetivos.component';
import { GestionPracticasComponent } from './gestion-practicas/gestion-practicas.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RelacionOpComponent } from './relacion-op/relacion-op.component';
import { ResponseResetComponent } from './response-reset/response-reset.component';
import {DiagnosticoObjetivosComponent} from './diagnostico-objetivos/diagnostico-objetivos.component';
import {EquipoAgileComponent} from './equipo-agile/equipo-agile.component';
import {ValidEmailComponent} from './valid-email/valid-email.component';
import {InfoAcercaDeComponent} from './info-acerca-de/info-acerca-de.component';
import {InfoPasosRoadmapComponent} from './info-pasos-roadmap/info-pasos-roadmap.component';
import {InfoPracticasComponent} from './info-practicas/info-practicas.component';

const routes: Routes = [
  { path: '',  component: HomeComponent, pathMatch: 'full'},
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'eval',
    component: EvaluacionComponent
  },
  {
    path: 'registro',
    component: RegisterComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'Gobjetivos',
    component: GestionObjetivosComponent
  },
  {
    path: 'Gpracticas',
    component: GestionPracticasComponent
  },
  {
    path: 'ForgotPassword',
    component: ForgotPasswordComponent
  },
  {
    path: 'RelacionOP',
    component: RelacionOpComponent
  },
  {
    path: 'response-reset-password/:token',
    component: ResponseResetComponent
  },
  {
    path: 'Diagnostico_objetivos/:id_eval',
    component: DiagnosticoObjetivosComponent
  },
  {
    path: 'EquipoAgile',
    component: EquipoAgileComponent
  },
  {
    path: 'ValidEmail/:idusr',
    component: ValidEmailComponent
  }
  ,
  {
    path: 'InfoAcercaDe',
    component: InfoAcercaDeComponent
  }
  ,
  {
    path: 'InfoPasosRoadmap',
    component: InfoPasosRoadmapComponent
  }
  ,
  {
    path: 'InfoPracticas',
    component: InfoPracticasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
