import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent} from './components/client/list/list.component';
import { AddComponent} from './components/client/add/add.component';
import { EditComponent} from './components/client/edit/edit.component';
import { AdviserListComponent} from './components/adviser/list/list.component';
import { AdviserAddComponent} from './components/adviser/add/add.component';
import { AdviserEditComponent} from './components/adviser/edit/edit.component';

import { CreditCardListComponent } from './components/credit-card/list/list.component';
import { CreditCardAddComponent } from './components/credit-card/add/add.component';
import { CreditCardEditComponent } from './components/credit-card/edit/edit.component';

import { AuditListComponent } from './components/audit/list/list.component';
import { AuditAddComponent } from './components/audit/add/add.component';

const routes: Routes = [
  {path: 'client-list', component: ListComponent},
  {path: 'client-add', component: AddComponent},
  {path: 'client-edit', component: EditComponent},
  {path: 'adviser-list', component: AdviserListComponent},
  {path: 'adviser-add', component: AdviserAddComponent},
  {path: 'adviser-edit', component: AdviserEditComponent},
  {path: 'credit-card-list', component: CreditCardListComponent},
  {path: 'credit-card-add', component: CreditCardAddComponent},
  {path: 'credit-card-edit', component: CreditCardEditComponent},
  {path: 'audit-list', component: AuditListComponent},
  {path: 'audit-add', component: AuditAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
