import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoriesComponent } from './stories/stories.component';
import { HomeComponent } from './home/home.component';
import { EndnavComponent } from './endnav/endnav.component';
import { TimePipe } from './pipes/time.pipe';
import { ProfileComponent } from './profile/profile.component';
import { StoryComponent } from './stories/story/story.component';
import { HighlightsComponent } from './profile/highlights/highlights.component';
import { AccountPostComponent } from './account-post/account-post.component';
import { ReelsComponent } from './reels/reels.component';
import { CreateComponent } from './create/create.component';
import { TagComponent } from './tag/tag.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPeoplesComponent } from './tag/search-peoples/search-peoples.component';
import { SearchPipe } from './pipes/search.pipe';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    HomeComponent,
    EndnavComponent,
    TimePipe,
    ProfileComponent,
    StoryComponent,
    HighlightsComponent,
    AccountPostComponent,
    ReelsComponent,
    CreateComponent,
    TagComponent,
    SearchPeoplesComponent,
    SearchPipe,
    UploadComponent,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
