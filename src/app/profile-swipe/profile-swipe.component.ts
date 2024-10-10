import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-swipe',
  templateUrl: './profile-swipe.component.html',
  styleUrls: ['./profile-swipe.component.scss']
})
export class ProfileSwipeComponent implements OnInit {
  profiles: any[] = [];
  currentProfileIndex: number = 0;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfiles().subscribe(data => {
      this.profiles = data;
    });
  }

  swipeRight() {
    alert('Interested');
    this.nextProfile();
  }

  swipeLeft() {
    alert('Not Interested');
    this.nextProfile();
  }

  nextProfile() {
    this.currentProfileIndex = (this.currentProfileIndex + 1) % this.profiles.length;
  }

  viewProfile() {
  }
}
