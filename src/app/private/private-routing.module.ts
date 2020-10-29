import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParticipantComponent } from './participant/participant.component';
import { PrivateComponent } from './private.component';
import {PagesListComponent} from './participant/pages-list/pages-list.component';
import {PageComponent} from './participant/page/page.component';
import { OrientadorUspComponent } from './orientador-usp/orientador-usp.component';
import { ParticipantEditComponent } from './participant/participant-edit/participant-edit.component';
import { OrientadorEditComponent } from './orientador-usp/orientador-edit/orientador-edit.component';



const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'participant',
        component: ParticipantComponent,
        children: [
          { path: '', component: PagesListComponent },
          { path: 'page',component: PageComponent},
        ]
      },
      { path: 'orientador', component : OrientadorUspComponent},
      { path: 'participantEdit/:id', component : ParticipantEditComponent},
      { path: 'orientadorEdit/:id', component : OrientadorEditComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
