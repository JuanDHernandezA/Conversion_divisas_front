import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConversorComponent } from './components/conversor/conversor.component';
import { DivisasComponent } from './components/divisas/divisas.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversorComponent,
    DivisasComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
