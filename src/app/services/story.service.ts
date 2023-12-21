import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor() { }

  public search = new BehaviorSubject<string>("");


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

  friends:any = [
    { image:'assets/images/Image_20231220_165247_397.jpeg', user_name:'harris', name:'Harris Patel'},
    { image:'assets/post/car1.jpeg', user_name:'usman', name:'Usman Ghani'},
    { image:'assets/post/car2.jpeg', user_name:'kashan ', name:'Kashan Ul Haq'},
    { image:'assets/post/iphone1.jpeg', user_name:'najam', name:'Najam Bhai'},
    { image:'assets/post/iphone2.jpeg', user_name:'haseeb', name:'Haseeb Bhai'},
    { image:'assets/post/start1.jpeg', user_name:'amjad', name:'Amjad Raza'},
    { image:'assets/post/start2.jpeg', user_name:'nehal', name:'Nehal shehzad'},
    { image:'assets/post/start3.jpeg', user_name:'fahad', name:'Fadad Aslam'},
    { image:'assets/post/start4.jpeg', user_name:'hasnain', name:'Hasnian Ali'},
    { image:'assets/post/WhatsApp Image 2023-10-27 at 11.31.03 AM.jpeg', name:'nimra', surname:'Nimra Imran'},
    { image:'assets/post/car1.jpeg', user_name:'zubair', name:'Zubair Kalam'},
    { image:'assets/post/car2.jpeg', user_name:'fakhir', name:'Car Lover'},
    { image:'assets/post/iphone1.jpeg', user_name:'nabeel', name:'Nabeel Khan'},
    { image:'assets/post/iphone2.jpeg', user_name:'mohammad', name:'Shiekh Mohammad'},
    { image:'assets/post/start1.jpeg', user_name:'mahadev', name:'Mahadev Bhai'},
    { image:'assets/post/start2.jpeg', user_name:'chandar', name:'Chandar Parkash'},
    { image:'assets/post/start3.jpeg', user_name:'hadi', name:'Hadi PATEL'},
    { image:'assets/post/start4.jpeg', user_name:'junaid', name:'Junaid Akram'},
    { image:'assets/post/WhatsApp Image 2023-10-27 at 11.31.03 AM.jpeg', user_name:'suneel', name:'Suneel munj'},
  ]
}
