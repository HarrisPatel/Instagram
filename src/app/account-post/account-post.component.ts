import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-account-post',
  templateUrl: './account-post.component.html',
  styleUrls: ['./account-post.component.css']
})
export class AccountPostComponent {

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;
  image: any = true
  @ViewChild('videoPlayer') videoplayer: ElementRef;

  constructor(elementRef: ElementRef){
    this.videoplayer = elementRef.nativeElement; 
  }



  images = [
    { media: "assets/post/car1.jpeg", type: 'image' },
    { media: "assets/post/car2.jpeg", type: 'image' },
    { media: "assets/post/iphone1.jpeg", type: 'image' },
    { media: "assets/post/iphone2.jpeg", type: 'image' },
    { media: "assets/post/start1.jpeg", type: 'image' },
    { media: "assets/post/start2.jpeg", type: 'image' },
    { media: "assets/post/start3.jpeg", type: 'image' },
    { media: "assets/post/start4.jpeg", type: 'image' },
    { media: "assets/images/1f.jpg", type: 'image' },
  ]
  videos = [
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



  slideChanged(event:any) {
    console.log(event)
  }

  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  goNext() {
    this.image = false
  }

  goPrev() {
    this.image = true
  }


  playVideo(i:any) {
    let videoPlayer: any = document.getElementById('video' + i);

    if (videoPlayer.paused) {
      videoPlayer.play();
    }
    else {
      videoPlayer.pause();
    }
  }
}
