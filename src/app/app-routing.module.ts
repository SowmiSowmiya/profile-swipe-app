import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileSwipeComponent } from './profile-swipe/profile-swipe.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [
  { path: '', component: ProfileSwipeComponent },
  { path: 'view-profile', component: ViewProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
