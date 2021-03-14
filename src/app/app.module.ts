import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShowFormComponent } from './components/show-form/show-form.component';
import { CardSerieDetailComponent } from './components/card-serie-detail/card-serie-detail.component';
import { TbodyTrComponent } from './components/show-list/tbody-tr/tbody-tr.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowListComponent,
    NavbarComponent,
    ShowFormComponent,
    CardSerieDetailComponent,
    TbodyTrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
