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
}
