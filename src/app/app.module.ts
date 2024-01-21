import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './home/navbar/navbar.component';
import {ContainerComponent} from './home/container/container.component';
import {FooterComponent} from './home/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ModalModule} from 'ngx-bootstrap/modal';
import {OffreStageComponent} from './offre-stage/offre-stage.component';
import {FormationComponent} from './formation/formation.component';
import {AjouterstageComponent} from './ajouterstage/ajouterstage.component';
import {AjoutformationComponent} from './ajoutformation/ajoutformation.component';
import {DemandestageComponent} from './demandestage/demandestage.component';
import {DemandeformationComponent} from './demandeformation/demandeformation.component';

import {ProfileCandidatComponent} from './profile-candidat/profile-candidat.component';
import {ProfileCentreComponent} from './profile-centre/profile-centre.component';
import {ProfilesociteeComponent} from './profilesocitee/profilesocitee.component';
import { ListdemendestageComponent } from './listdemendestage/listdemendestage.component';
import { DetailleformationComponent } from './detailleformation/detailleformation.component';
import { ListdemandeformationComponent } from './listdemandeformation/listdemandeformation.component';


import { DetaillestageComponent } from './detaillestage/detaillestage.component';
import { EditformationComponent } from './editformation/editformation.component';
import { EditstageComponent } from './editstage/editstage.component';
import { ResumeComponent } from './resume/resume.component';
import { NomsocietePipe } from './recherche/nomsociete.pipe';
import { StagebysocieteComponent } from './stagebysociete/stagebysociete.component';
import { FormationbycentreComponent } from './formationbycentre/formationbycentre.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContainerComponent,
    FooterComponent,
    OffreStageComponent,
    FormationComponent,
    AjouterstageComponent,
    AjoutformationComponent,
    DemandestageComponent,
    DemandeformationComponent,
    ProfileCandidatComponent,
    ProfileCentreComponent,
    ProfilesociteeComponent,
    ListdemendestageComponent,
    ListdemandeformationComponent,
    EditformationComponent,
    EditstageComponent,
    DetailleformationComponent,
    DetaillestageComponent,
    ResumeComponent,
    NomsocietePipe,
    StagebysocieteComponent,
    FormationbycentreComponent,


  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule, ModalModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
