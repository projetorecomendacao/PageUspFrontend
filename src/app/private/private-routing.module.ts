import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParticipantComponent } from './participant/participant.component';
import { PrivateComponent } from './private.component';
import {PagesListComponent} from './participant/pages-list/pages-list.component';
import {PageComponent} from './participant/page/page.component';



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
          { path: 'page',component: PageComponent}
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
