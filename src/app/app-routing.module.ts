import { NgModule } from '@angular/core';
import { ExtraOptions, Routes, RouterModule } from '@angular/router';
import { ClassSearchComponent } from './pages/class-search/class-search.component';
import { ClassTableComponent } from './pages/class-table/class-table.component';

const routes: Routes = [
  {
    path: 'class-search',
    component: ClassSearchComponent,
  },
  {
    path: 'class/:stdNo',
    component: ClassTableComponent,
  },

  {path: '', pathMatch: 'full', redirectTo: 'class-search'},
  {path: '**', redirectTo: 'class-search'},
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
