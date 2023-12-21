import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor() { }

  story:any = [
    {
      image : 'assets/images/1pic.jpg',
      video : ''
    },
    {
      image : 'assets/images/2f.jpg',
      video : ''
    },
    {
      image : 'assets/images/3f.jpg',
      video : ''
    },
    {
      image : 'assets/images/4f.jpg',
      video : ''
    },
    {
      image : 'assets/images/5f.jpg',
      video : ''
    }
  ]

  gallery:any =[
    { image:'assets/images/Image_20231220_165247_397.jpeg'},
    { image:'assets/post/car1.jpeg'},
    { image:'assets/post/car2.jpeg'},
    { image:'assets/post/iphone1.jpeg'},
    { image:'assets/post/iphone2.jpeg'},
    { image:'assets/post/start1.jpeg'},
    { image:'assets/post/start2.jpeg'},
    { image:'assets/post/start3.jpeg'},
    { image:'assets/post/start4.jpeg'},
    { image:'assets/post/WhatsApp Image 2023-10-27 at 11.31.03 AM.jpeg'},
    { image:'assets/post/car1.jpeg'},
    { image:'assets/post/car2.jpeg'},
    { image:'assets/post/iphone1.jpeg'},
    { image:'assets/post/iphone2.jpeg'},
    { image:'assets/post/start1.jpeg'},
    { image:'assets/post/start2.jpeg'},
    { image:'assets/post/start3.jpeg'},
    { image:'assets/post/start4.jpeg'},
    { image:'assets/post/WhatsApp Image 2023-10-27 at 11.31.03 AM.jpeg'},
  ]
}
