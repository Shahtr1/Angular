import { ServerComponent } from './server/server.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountsService } from './account.service';
import { LoggingService } from './logging.service';
import { HomeComponent } from './home/home.component';
import { OtherServersComponent } from './other-servers/other-servers.component';
import { OtherServersService } from './other-servers/other-servers.service';
import { OtherEditServerComponent } from './other-servers/other-edit-server/other-edit-server.component';
import { OtherServerComponent } from './other-servers/other-server/other-server.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModue } from './app-routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './other-servers/other-edit-server/can-deactivate-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    CockpitComponent,
    ServerElementComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent,
    HomeComponent,
    OtherServersComponent,
    OtherEditServerComponent,
    OtherServerComponent,
    UsersComponent,
    UserComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModue
  ],
  providers: [AccountsService, LoggingService,
    OtherServersService, AuthService,
    AuthGuard, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
