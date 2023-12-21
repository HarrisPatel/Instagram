import { Component, OnInit } from '@angular/core';
import { StoryService } from '../services/story.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

  selectedImage:any;
  gallery:any = []

  constructor(private service:StoryService, private router:Router){
  }
  ngOnInit(): void {
    this.gallery = this.service.gallery
    this.selectedImage = this.gallery[0].image
    localStorage.setItem('image',this.selectedImage)
    console.log(localStorage.getItem('image'))
  }

  cancel(){
    this.router.navigate(['/'])
  }
  done(){
    this.router.navigate(['/upload'])
  }
  selectImage(index){
    console.log(index)
    this.selectedImage = index.image
    localStorage.setItem('image',this.selectedImage)
  }
}
