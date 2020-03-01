import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from './components/client/list/list.component';
import { AddComponent } from './components/client/add/add.component';
import { EditComponent } from './components/client/edit/edit.component';
import { MenuComponent } from './components/menu/menu.component';
import {ServiceService} from './service/service.service';
import { AdviserService } from './service/adviser.service';
import { CreditCardService } from './service/credit-card.service';

import { AdviserListComponent } from './components/adviser/list/list.component';
import { AdviserAddComponent } from './components/adviser/add/add.component';
import { AdviserEditComponent } from './components/adviser/edit/edit.component';

import { CreditCardListComponent } from './components/credit-card/list/list.component';
import { CreditCardAddComponent } from './components/credit-card/add/add.component';
import { CreditCardEditComponent } from './components/credit-card/edit/edit.component';

import { AuditListComponent } from './components/audit/list/list.component';
import { AuditAddComponent } from './components/audit/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    MenuComponent,
    AdviserListComponent,
    AdviserAddComponent,
    AdviserEditComponent,
    CreditCardListComponent,
    CreditCardAddComponent,
    CreditCardEditComponent,
    AuditListComponent,
    AuditAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    HttpClientModule,
    RouterModule
  ],
  providers: [ServiceService, AdviserService, CreditCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
