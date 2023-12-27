import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit{

  image:any;

  constructor(private router:Router){}
  ngOnInit(): void {
    this.image = localStorage.getItem('image')
  }

  


  cancel() {
    this.router.navigate(['/tag'])
  }
  done() {
    this.router.navigate([''])
  }
}
