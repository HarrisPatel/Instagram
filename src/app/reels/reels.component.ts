import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-reels',
  templateUrl: './reels.component.html',
  styleUrls: ['./reels.component.css']
})
export class ReelsComponent {
  @ViewChild('swiper') swiperRef: ElementRef | undefined;

  activeIndex: number = 0;


  mediaArea: any = [
    { id: 1, media: 'assets/post/motivation(9).mp4', type: 'video', },
    { id: 2, media: 'assets/post/motivation(10).mp4', type: 'video' },
    { id: 3, media: 'assets/post/motivation(11).mp4', type: 'video' },
    { id: 4, media: 'assets/post/motivation(12).mp4', type: 'video' },
    { id: 5, media: 'assets/post/motivation(13).mp4', type: 'video' },
    { id: 6, media: 'assets/post/motivation(14).mp4', type: 'video' },
    { id: 7, media: 'assets/post/motivation(15).mp4', type: 'video' },
    { id: 8, media: 'assets/post/motivation(16).mp4', type: 'video' },
    { id: 9, media: 'assets/post/motivation(17).mp4', type: 'video' },
  ]

  change(event: any) {
    this.activeIndex = this.swiperRef?.nativeElement.swiper.activeIndex;
  }

  swiperReady(e: any) {
    // this.swiper = this.swiperRef?.nativeElement.swiper;
    console.log(this.swiperRef?.nativeElement.swiper)
  }
}
