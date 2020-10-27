import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { CanDeactivateGuard } from './other-servers/other-edit-server/can-deactivate-guard.service';
import { OtherEditServerComponent } from './other-servers/other-edit-server/other-edit-server.component';
import { OtherServerComponent } from './other-servers/other-server/other-server.component';
import { OtherServersComponent } from './other-servers/other-servers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent },
  ] },
  {
    path: 'other-servers',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: OtherServersComponent, children: [
      { path: ':id', component: OtherServerComponent },
      { path: ':id/edit', component: OtherEditServerComponent, canDeactivate: [CanDeactivateGuard]},
    ]
  },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }, //Keep it at last
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModue{

}