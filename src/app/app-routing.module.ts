import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {OffreStageComponent} from "./offre-stage/offre-stage.component";
import {FormationComponent} from "./formation/formation.component"
import {AjouterstageComponent} from "./ajouterstage/ajouterstage.component";
import {Container} from "@angular/compiler/src/i18n/i18n_ast";
import {ContainerComponent} from "./home/container/container.component";
import {AjoutformationComponent} from "./ajoutformation/ajoutformation.component";
import {DemandestageComponent} from "./demandestage/demandestage.component";
import {ProfileCandidatComponent} from "./profile-candidat/profile-candidat.component";
import {ProfileCentreComponent} from "./profile-centre/profile-centre.component";
import {ProfilesociteeComponent} from "./profilesocitee/profilesocitee.component";
import {ListdemendestageComponent} from "./listdemendestage/listdemendestage.component";
import {DemandeformationComponent} from "./demandeformation/demandeformation.component";
import {ListdemandeformationComponent} from "./listdemandeformation/listdemandeformation.component";
import {DetailleformationComponent} from "./detailleformation/detailleformation.component";
import {DetaillestageComponent} from "./detaillestage/detaillestage.component";
import {EditformationComponent} from "./editformation/editformation.component";
import {EditstageComponent} from "./editstage/editstage.component";
import {ResumeComponent} from "./resume/resume.component";
import {StagebysocieteComponent} from "./stagebysociete/stagebysociete.component";
import {FormationbycentreComponent} from "./formationbycentre/formationbycentre.component";


const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
    {path: '', component: ContainerComponent},
    {path: 'offrestage', component: OffreStageComponent},
    {path: 'profileCandidat', component: ProfileCandidatComponent},
    {path: 'profileCentre', component: ProfileCentreComponent},
    {path: 'profileSocite', component: ProfilesociteeComponent},
    {path: 'formation', component: FormationComponent},
    {path: 'ajouterstage', component: AjouterstageComponent},
    {path: 'ajoutformation', component: AjoutformationComponent},
    {path: 'listdemandestage', component: ListdemendestageComponent},
    {path: 'listdemandeformation', component:ListdemandeformationComponent},
    {path: 'demandestage/:id', component: DemandestageComponent},
    {path: 'demandeformation/:id', component: DemandeformationComponent},
    {path: 'editformation/:id', component: EditformationComponent},
    {path: 'editstage/:id', component: EditstageComponent},
    {path: 'detailleformation/:id', component: DetailleformationComponent},
    {path: 'resume', component: ResumeComponent},

    {path: 'detaillestage/:id', component: DetaillestageComponent},

    {path: 'liststagebysociete', component: StagebysocieteComponent},

    {path: 'listformationbycent', component: FormationbycentreComponent},









  ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
