import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdvanceOptionsComponent } from './components/advance-options/advance-options.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'advance', component: AdvanceOptionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
