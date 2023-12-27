import { Component, OnInit } from '@angular/core';
import { StoryService } from '../services/story.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{




  seeMore: boolean = false;
  post:any = []

  constructor(private service:StoryService){}
  ngOnInit(): void {
    let items = localStorage.getItem('all-items')
    if(items){
      this.post = localStorage.setItem('all-items', JSON.stringify(this.post))
    }else{
      this.post = this.service.post
    }
    
  }

  
}
