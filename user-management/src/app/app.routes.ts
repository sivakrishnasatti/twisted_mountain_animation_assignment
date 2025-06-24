import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTable } from './components/user-table/user-table';
import { UserDetails } from './components/user-details/user-details';

export const routes: Routes = [
  { path: '', component: UserTable },
  { path: 'details/:id', component: UserDetails }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
