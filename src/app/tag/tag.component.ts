import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit{
  search:boolean = false
  selectedImage:any;

  constructor(private router:Router){}
  ngOnInit(): void {
    this.selectedImage = localStorage.getItem('image')
  }
  cancel(){
    this.router.navigate(['/create'])
  }
  done(){
    this.router.navigate(['/upload'])
  }
}
