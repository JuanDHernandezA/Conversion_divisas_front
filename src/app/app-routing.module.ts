import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversorComponent } from './components/conversor/conversor.component';
import { DivisasComponent } from './components/divisas/divisas.component';

const routes: Routes = [
  { path: '', component: ConversorComponent },
  { path: 'divisas', component: DivisasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
