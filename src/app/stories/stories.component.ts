import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { StoryService } from '../services/story.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent {

  constructor(private service: StoryService, private router: Router) { }

  ngOnInit(): void {
    localStorage.setItem('alldata', JSON.stringify(this.story));
    console.log(this.story)
  }

  storyCom: boolean = false
  story: any = [
    {
      id: 1,
      u_image: 'assets/images/12f.jpg',
      u_name: 'harris__00',
      story: [
        { image: 'assets/images/3f.jpg', type: 'image' },
        { image: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', type: 'video' },
        { image: 'assets/images/2f.jpg', type: 'image' },
      ]
    },
    {
      id: 2,
      u_image: 'assets/images/2f.jpg',
      u_name: 'noman-x',
      story: [
        { image: 'assets/images/4f.jpg', type: 'image' },
        { image: 'assets/images/5f.jpg', type: 'image' },
      ]
    },
    {
      id: 3,
      u_image: 'assets/images/3f.jpg', type: 'image',
      u_name: 'fool-army',
      story: [
        { image: 'assets/images/6f.jpg', type: 'image' },
        { image: 'assets/images/7f.jpg', type: 'image' },
      ]
    },
    {
      id: 4,
      u_image: 'assets/images/4f.jpg',
      u_name: 'dynamic',
      story: [
        { image: 'assets/images/8f.jpg', type: 'image' },
        { image: 'assets/images/9f.jpg', type: 'image' },
      ]
    },
    {
      id: 5,
      u_image: 'assets/images/5f.jpg',
      u_name: 'next-hop',
      story: [
        { image: 'assets/images/12f.jpg', type: 'image' },
        { image: 'assets/images/4f.jpg', type: 'image' },
      ]
    },
    {
      id: 6,
      u_image: 'assets/images/6f.jpg',
      u_name: 'journy',
      story: [
        { image: 'assets/images/11f.jpg', type: 'image' },

      ]
    },
    {
      id: 7,
      u_image: 'assets/images/7f.jpg',
      u_name: 'flipcart',
      story: [
        { image: 'assets/images/9f.jpg', type: 'image' },
        { image: 'assets/images/5f.jpg', type: 'image' },
        { image: 'assets/images/2f.jpg', type: 'image' },
        { image: 'assets/images/1f.jpg', type: 'image' },
      ]
    },
    {
      id: 8,
      u_image: 'assets/images/8f.jpg',
      u_name: 'faseee23',
      story: [
        { image: 'assets/images/10f.jpg', type: 'image' },
        { image: 'assets/images/2f.jpg', type: 'image' },
      ]
    },
    {
      id: 9,
      u_image: 'assets/images/9f.jpg',
      u_name: 'jaber__00',
      story: [
        { image: 'assets/images/11f.jpg', type: 'image' },
        { image: 'assets/images/12f.jpg', type: 'image' },
      ]
    },
    {
      id: 10,
      u_image: 'assets/images/10f.jpg',
      u_name: 'backand88',
      story: [
        { image: 'assets/images/1f.jpg', type: 'image' },
        { image: 'assets/images/4f.jpg', type: 'image' },
      ]
    },
    {
      id: 11,
      u_image: 'assets/images/11f.jpg',
      u_name: 'flippcat',
      story: [
        { image: 'assets/images/8f.jpg', type: 'image' },
        { image: 'assets/images/7f.jpg', type: 'image' },
      ]
    },
    {
      id: 12,
      u_image: 'assets/images/12f.jpg',
      u_name: 'DY22__mm',
      story: [
        { image: 'assets/images/7f.jpg', type: 'image' },
        { image: 'assets/images/5f.jpg', type: 'image' },
        { image: 'assets/images/6f.jpg', type: 'image' },
      ]
    },
    {
      id: 13,
      u_image: 'assets/images/1f.jpg',
      u_name: 'aesthetic',
      story: [
        { image: 'assets/images/3f.jpg', type: 'image' },
        { image: 'assets/images/4f.jpg', type: 'image' },
      ]
    },
  ]

  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  ngOninti(): void {
    console.log(this.story.image)
  }

  store(data:any) {
    localStorage.setItem('data', JSON.stringify(data));
    this.router.navigate(['/story']);
  }
}
