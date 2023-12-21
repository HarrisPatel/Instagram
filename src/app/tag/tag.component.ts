import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoryService } from '../services/story.service';


@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit{
  search:boolean = false
  selectedImage:any;
  tag_people:any = ['e']
  public searchTerm : string = '';
  find_tags:boolean = false


  constructor(private router:Router, private service: StoryService){}
  ngOnInit(): void {
    this.selectedImage = localStorage.getItem('image')
  }
  cancel(){
    this.router.navigate(['/create'])
  }
  done(){
    this.router.navigate(['/upload'])
  }
  cancelIcon(){
    this.find_tags = false
    this.searchTerm = ''
  }

  Search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm)
    this.service.search.next(this.searchTerm)
    this.find_tags = true
  }
  tapImage(){
    if(this.search == false){
      this.search = true
    }
    else{
      this.search = false
    }
  }
}
