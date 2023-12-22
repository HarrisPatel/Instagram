import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoryService } from '../services/story.service';


@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  search: boolean = false
  selectedImage: any;
  tag_people: any = [
  ]
  public searchTerm: string = '';
  find_tags: boolean = false
  allaccounts: any = []
  tagBox: any = []
  tagDiv = false
  username: any = ''
  name: any = ''
  image: any = ''


  constructor(private router: Router, private service: StoryService) { }
  ngOnInit(): void {
    this.selectedImage = localStorage.getItem('image')
    this.allaccounts = this.service.friends
  }
  cancel() {
    this.router.navigate(['/create'])
  }
  done() {
    this.router.navigate(['/upload'])
    localStorage.setItem('tags', JSON.stringify(this.tagBox))

  }
  cancelIcon() {
    this.find_tags = false
    this.searchTerm = ''
  }

  Search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.service.search.next(this.searchTerm)
    this.find_tags = true
  }
  tapImage(e: any) {
    let x: number = e.clientX
    let y: number = e.clientY
    if (this.search == false) {
      this.search = true
    }
    else {
      this.search = false
    }
    if (this.tagDiv == false) {
      this.tagBox.push({
        x: x,
        y: y,
        user_name: this.username,
        name: this.name,
        img: this.image
      })
      this.tagDiv = true
    } else {
      return
    }
    console.log(this.tagBox)
  }
  parentFun(event: any) {
    let l = this.tagBox.length - 1
    let tag = this.allaccounts.filter((t: any) => t.name == event);
    this.tagBox[l].user_name = tag[0].user_name
    this.tagBox[l].name = tag[0].name
    this.tagBox[l].img = tag[0].image
    console.log(this.tagBox)
    this.tag_people.push(tag[0])
    this.searchTerm = ''
    this.search = false
    this.find_tags = false
    this.tagDiv = false

  }
  remove(i: number) {
    console.log(i)
    this.tag_people.splice(i, 1)
    this.tagBox.splice(i, 1)
  }
}
