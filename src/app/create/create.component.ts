import { Component, OnInit } from '@angular/core';
import { StoryService } from '../services/story.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

  selectedImage:any = '../../assets/post/car1.jpeg'
  gallery:any = []

  constructor(private service:StoryService){
  }
  ngOnInit(): void {
    this.gallery = this.service.gallery
    console.log(this.gallery)
  }

}
