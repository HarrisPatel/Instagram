import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EndnavComponent } from './endnav/endnav.component';
import { HomeComponent } from './home/home.component';
import { StoriesComponent } from './stories/stories.component';
import { ProfileComponent } from './profile/profile.component';
import { StoryComponent } from './stories/story/story.component';
import { HighlightsComponent } from './profile/highlights/highlights.component';
import { ReelsComponent } from './reels/reels.component';

const routes: Routes = [
  {
    component: EndnavComponent,
    path: 'endnav'
  },
  {
    component: StoriesComponent,
    path: ''
  },
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: ProfileComponent,
    path: 'profile'
  },
  {
    component: StoryComponent,
    path: 'story'
  },
  {
    component: HighlightsComponent,
    path: 'high'
  },
  {
    component: ReelsComponent,
    path: 'reels'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
