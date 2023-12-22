import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swiper from 'swiper';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  story: any;
  user: any;
  storyarr: any = []
  constructor(private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.story = JSON.parse(localStorage.getItem('data') as any);
    this.storyarr = this.story.story
    this.user = this.story.u_image
    console.log(this.storyarr)
  }

  slideChanged(event:any) {
    console.log(event)
  }

  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  goNext() {
    this.swiperRef?.nativeElement.swiper.slideNext();
  }

  goPrev() {
    this.swiperRef?.nativeElement.swiper.slidePrev();
  }

}
