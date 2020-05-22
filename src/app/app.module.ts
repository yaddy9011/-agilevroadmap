import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
import { MatCardModule } from '@angular/material';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AppGlobals } from './app.global';
import { TasksService } from './services/tasks.service';
import { MatTableModule } from '@angular/material';
import { SortablejsModule } from 'angular-sortablejs'
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GestionObjetivosComponent } from './gestion-objetivos/gestion-objetivos.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DevExtremeModule } from 'devextreme-angular';
import { MatDividerModule } from '@angular/material/divider';
import { DxDataGridModule,DxDataGridComponent} from 'devextreme-angular';
import { GestionPracticasComponent } from './gestion-practicas/gestion-practicas.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RelacionOpComponent } from './relacion-op/relacion-op.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ResponseResetComponent } from './response-reset/response-reset.component';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DiagnosticoObjetivosComponent } from './diagnostico-objetivos/diagnostico-objetivos.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { EquipoAgileComponent } from './equipo-agile/equipo-agile.component';
import { ValidEmailComponent } from './valid-email/valid-email.component';
import { InfoAcercaDeComponent } from './info-acerca-de/info-acerca-de.component';
import { InfoPasosRoadmapComponent } from './info-pasos-roadmap/info-pasos-roadmap.component';
import { InfoPracticasComponent } from './info-practicas/info-practicas.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {Diamessage} from './Dialogs/Diamessage';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent,
    MainComponent,
    EvaluacionComponent,
    RegisterComponent,
    FooterComponent,
    GestionObjetivosComponent,
    GestionPracticasComponent,
    ForgotPasswordComponent,
    RelacionOpComponent,
    ResponseResetComponent,
    DiagnosticoObjetivosComponent,
    EquipoAgileComponent,
    ValidEmailComponent,
    InfoAcercaDeComponent,
    InfoPasosRoadmapComponent,
    InfoPracticasComponent,
    Diamessage
  ],
  entryComponents: [Diamessage],
  imports: [
    NgbModule,
    BrowserModule,
    DxDataGridModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    HttpClientModule,
    DragDropModule,
    MatInputModule,
    MatExpansionModule,
    MatSelectModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTabsModule,
    DevExtremeModule,
    SortablejsModule.forRoot({}),
    ShowHidePasswordModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatTooltipModule,
    GridModule,
    MatGridListModule,
    MatPaginatorModule,
    NgxPaginationModule
  ],
  providers: [AuthService, TasksService, AppGlobals],
  bootstrap: [AppComponent]
})

export class AppModule { }
