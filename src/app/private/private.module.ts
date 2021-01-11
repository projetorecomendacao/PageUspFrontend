import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ParticipantComponent } from './participant/participant.component';
import { SidebarComponent } from './participant/sidebar/sidebar.component';
import { ParticipantInfoComponent } from './participant/participant-info/participant-info.component';
import { PageComponent } from './participant/page/page.component';
import { CognitiveDeficitComponent } from './participant/page/psychological-aspects/cognitive-deficit/cognitive-deficit.component';
import { DepressionComponent } from './participant/page/psychological-aspects/depression/depression.component';
import { PsychologicalAspectsComponent } from './participant/page/psychological-aspects/psychological-aspects.component';
import { ParticipantFormComponent } from './participant/page/participant-form/participant-form.component';
import { BiologicalAspectsComponent } from './participant/page/biological-aspects/biological-aspects.component';
import { SensoryDeficitComponent } from './participant/page/biological-aspects/sensory-deficit/sensory-deficit.component';
import { FunctionalDisabilityComponent } from './participant/page/biological-aspects/functional-disability/functional-disability.component';
import { MalnutritionComponent } from './participant/page/biological-aspects/malnutrition/malnutrition.component';
import { MisuseMedicationsComponent } from './participant/page/biological-aspects/misuse-medications/misuse-medications.component';
import { SocialAspectsComponent } from './participant/page/social-aspects/social-aspects.component';
import { LowSocialSupportComponent } from './participant/page/social-aspects/low-social-support/low-social-support.component';
import { EnvironmentalProblemsComponent } from './participant/page/social-aspects/environmental-problems/environmental-problems.component';
import { ViolenceComponent } from './participant/page/social-aspects/violence/violence.component';
import { ObservationsSocialComponent } from './participant/page/social-aspects/observations-social/observations-social.component';
import { MultidimensionalAspectComponent } from './participant/page/multidimensional-aspect/multidimensional-aspect.component';
import { FallsComponent } from './participant/page/multidimensional-aspect/falls/falls.component';
import {
  CardiovascularFactorsComponent
} from './participant/page/biological-aspects/cardiovascular-factors/cardiovascular-factors.component';
import {
  NegativeAttitudesAgingComponent
} from './participant/page/psychological-aspects/negative-attitudes-aging/negative-attitudes-aging.component';
import {
  ObservationsPsychologicalComponent
} from './participant/page/psychological-aspects/observations-psychological/observations-psychological.component';
import {
  ObservationsBiologicalComponent
} from './participant/page/biological-aspects/observations-biological/observations-biological.component';
import {
  ObservationsMultidimensionalComponent
} from './participant/page/multidimensional-aspect/observations-multidimensional/observations-multidimensional.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesListComponent } from './participant/pages-list/pages-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CabecaPageComponent } from './participant/page/cabeca-page/cabeca-page.component';
import {ProgressBarModule} from "angular-progress-bar";
import { PageForm } from '../shared/forms/page.form';
import { PsychologicalAspectsForm } from '../shared/forms/psychological-aspects.form';
import { BiologicalAspectsForm } from '../shared/forms/biological.aspects.form';
import { SocialAspectsForm } from '../shared/forms/social-aspects.form';
import { MultidimensionalAspectForm } from '../shared/forms/multidimensional-aspect.form';
import { CognitiveDeficitForm } from '../shared/forms/cognitive-deficit.form';
import { DepressionForm } from '../shared/forms/depression.form';
import { NegativeAttitudesAgingForm } from '../shared/forms/negative-attitudes-aging.form';
import { ObservationsMultidimensionalForm } from '../shared/forms/observations-multidimensional.form';
import { ParticipantFormForm } from '../shared/forms/participant-form.form';
import { CardiovascularFactorsForm } from '../shared/forms/cardiovascular-factors.form';
import { FunctionalDisabilityForm } from '../shared/forms/functional-disability.form';
import { MalnutritionForm } from '../shared/forms/malnutrition.form';
import { MisuseMedicationsForm } from '../shared/forms/misuse-medications.form';
import { ObservationsBiologicalForm } from '../shared/forms/observations-biological.form';
import { SensoryDeficitForm } from '../shared/forms/sensory-deficit.form';
import { FallsForm } from '../shared/forms/falls.form';
import { EnvironmentalProblemsForm } from '../shared/forms/environmental-problems.form';
import { LowSocialSupportForm } from '../shared/forms/low-social-support.form';
import { ViolenceForm } from '../shared/forms/violence.form';
import { ObservationsSocialForm } from '../shared/forms/observations-social.form';
import { ObservationsPsychologicalForm } from '../shared/forms/observations-psychological.form';
import { MatStepperModule} from '@angular/material/stepper'
import { CabecaPageForm } from '../shared/forms/cabeca-page.form';
import { FinalAnaliseComponent } from './participant/page/final-analise/final-analise.component';
import { DemandMapForm } from '../shared/forms/demand-map.form';
import { EscoresComponent } from './participant/page/final-analise/escores/escores.component';
import { GraficoDominiosComponent } from './participant/page/final-analise/grafico-dominios/grafico-dominios.component';
import { GraficoDimesoesComponent } from './participant/page/final-analise/grafico-dimesoes/grafico-dimesoes.component';
import { ChartsModule } from 'ng2-charts';
import { ChecaCampo } from '../shared/services/checa-campo';
import {PageGerador} from '../shared/services/page.gerador';
import { ParticipantEditComponent } from './participant/participant-edit/participant-edit.component'
import { InputComponent } from '../shared/visual/input/input.component';
import { BaseComponent } from '../shared/visual/base/base.component';
import { AppBaseLisaComponent } from '../shared/visual/app-base-lisa/app-base-lisa.component';
import { BotoesComponent } from '../shared/visual/botoes/botoes.component';
import { InstrucoesComponent } from '../shared/visual/instrucoes/instrucoes.component';
import { StatusComponent } from '../shared/visual/status/status.component';
import { DoencasComponent } from '../shared/visual/doencas/doencas.component';
import { QuestoesComponent } from '../shared/visual/questoes/questoes.component';
import { CommentsComponent } from '../shared/visual/comments/comments.component';
import { RelogioComponent } from '../shared/visual/relogio/relogio.component';
import { InvestigarComponent } from '../shared/visual/investigar/investigar.component';
import { DominioComponent } from '../shared/visual/dominio/dominio.component';
import { EstruturaPage } from '../shared/constantes/estruturaPage';
import { EstruturaQuestao } from '../shared/constantes/estruturaQuestao';
import { LerNumeroComponent } from '../shared/visual/ler-numero/ler-numero.component';
import { LerTextoComponent } from '../shared/visual/ler-texto/ler-texto.component';
import { LerTextareaComponent } from '../shared/visual/ler-textarea/ler-textarea.component';
import { LerSelectComponent } from '../shared/visual/ler-select/ler-select.component';
import { DoencaOutroComponent } from '../shared/visual/doenca-outro/doenca-outro.component';
import { CommentsDimensaoComponent } from '../shared/visual/comments-dimensao/comments-dimensao.component';
import { RecomendacaoComponent } from './participant/page/final-analise/recomendacao/recomendacao.component';
import { AtividadesRecomendadasComponent } from './participant/page/final-analise/recomendacao/atividades-recomendadas/atividades-recomendadas.component';
import { AtividadesRec } from '../shared/services/atividades-service';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { OrientadorUspComponent } from './orientador-usp/orientador-usp.component'
import { ParticipantForm } from '../shared/forms/participant.form';
import { OrientadorEditComponent } from './orientador-usp/orientador-edit/orientador-edit.component';
import { OrientadorForm } from '../shared/forms/orientador.form';
import { OrientadorListPageComponent } from './orientador-usp/orientador-list-page/orientador-list-page.component';
import { PageViewComponent } from './orientador-usp/page-view/page-view.component';
import { LerPesoAlturaComponent } from '../shared/visual/ler-peso-altura/ler-peso-altura.component';
import { PrivateIndexComponent } from './private-index/private-index.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { AvaliacaoForm } from '../shared/forms/avaliacao.form';


export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;


@NgModule({
  declarations: [
    PrivateComponent,
    HomeComponent,
    ParticipantComponent,
    SidebarComponent,
    ParticipantInfoComponent,
    PageComponent,
    CognitiveDeficitComponent,
    NegativeAttitudesAgingComponent,
    DepressionComponent,
    PsychologicalAspectsComponent,
    ParticipantFormComponent,
    ObservationsPsychologicalComponent,
    BiologicalAspectsComponent,
    SensoryDeficitComponent,
    FunctionalDisabilityComponent,
    MalnutritionComponent,
    CardiovascularFactorsComponent,
    MisuseMedicationsComponent,
    ObservationsBiologicalComponent,
    SocialAspectsComponent,
    LowSocialSupportComponent,
    EnvironmentalProblemsComponent,
    ViolenceComponent,
    ObservationsSocialComponent,
    MultidimensionalAspectComponent,
    FallsComponent,
    ObservationsMultidimensionalComponent,
    PagesListComponent,
    NavbarComponent,
    CabecaPageComponent,
    FinalAnaliseComponent,
    EscoresComponent,
    GraficoDominiosComponent,
    GraficoDimesoesComponent,
    BaseComponent,
    AppBaseLisaComponent,
    InstrucoesComponent,
    BotoesComponent,
    StatusComponent,
    DoencasComponent,
    ParticipantEditComponent,
    InputComponent,
    QuestoesComponent,
    CommentsComponent,
    RelogioComponent,
    InvestigarComponent,
    DominioComponent,
    LerNumeroComponent,
    LerTextoComponent,
    LerTextareaComponent,
    LerSelectComponent,
    DoencaOutroComponent,
    CommentsDimensaoComponent,
    AtividadesRecomendadasComponent,
    RecomendacaoComponent,
    OrientadorUspComponent,
    OrientadorEditComponent,
    OrientadorListPageComponent,
    PageViewComponent,
    LerPesoAlturaComponent,
    PrivateIndexComponent,
    AvaliacaoComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    MatTabsModule,
    ProgressBarModule,
    MatStepperModule,
    ChartsModule,
    NgxMaskModule.forRoot({
      showMaskTyped : true,
    }) 
  ],
  providers: [
    PageForm,
    PsychologicalAspectsForm,
    BiologicalAspectsForm,
    SocialAspectsForm,
    MultidimensionalAspectForm,
    CognitiveDeficitForm,
    DepressionForm,
    NegativeAttitudesAgingForm,
    ObservationsMultidimensionalForm,
    ParticipantFormForm,
    CardiovascularFactorsForm,
    FunctionalDisabilityForm,
    MalnutritionForm,
    MisuseMedicationsForm,
    ObservationsBiologicalForm,
    SensoryDeficitForm,
    FallsForm,
    ObservationsMultidimensionalForm,
    EnvironmentalProblemsForm,
    LowSocialSupportForm,
    ViolenceForm,
    ObservationsSocialForm,
    ObservationsPsychologicalForm,
    CabecaPageForm,
    DemandMapForm,
    ChecaCampo,
    PageGerador,
    EstruturaPage,
    EstruturaQuestao,
    AtividadesRec,
    DemandMapForm,
    ParticipantForm,
    OrientadorForm,
    AvaliacaoForm
  ]
})
export class PrivateModule { }
