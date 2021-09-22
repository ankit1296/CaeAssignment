import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './service/api-service/api.service';
import { DataService } from './service/data-service/data.service';
import { LoginComponent } from './components/login/login.component';
import { ShowRosterComponent } from './components/show-roster/show-roster.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { ViewRosterComponent } from './components/view-roster/view-roster.component';
import { SeeFlightDetailComponent } from './components/see-flight-detail/see-flight-detail.component';
import { ToastrModule } from 'ngx-toastr';
import { RosterViewComponent } from './components/roster-view/roster-view.component';
import { DateStringPipe } from './pipes/dateString/date-string.pipe';
import { AuthGuard } from './gaurds/auth.guard';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShowRosterComponent,
    ViewRosterComponent,
    SeeFlightDetailComponent,
    RosterViewComponent,
    DateStringPipe,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    ToastrModule.forRoot(),
  ],
  providers: [ApiService, DataService, AuthGuard],
  bootstrap: [AppComponent],
  exports: [SeeFlightDetailComponent],
})
export class AppModule {}
