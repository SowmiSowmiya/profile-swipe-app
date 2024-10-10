import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileSwipeComponent } from './profile-swipe/profile-swipe.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

const routes = [
  { path: '', component: ProfileSwipeComponent },
  { path: 'view-profile', component: ViewProfileComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileSwipeComponent,
    ViewProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule, // Required for Angular Material animations
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot(routes)  // Ensure you have this line with `forRoot`
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
