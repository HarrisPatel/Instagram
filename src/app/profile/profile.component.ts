import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  prostoryarr: any = []
  prostory: any;
  accountbio: any = [
  ]
  seeMore:boolean = false;

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.prostoryarr = JSON.parse(localStorage.getItem('alldata')as any);
    this.prostory = this.prostoryarr[0]
    this.accountbio = {
      name: 'Mohammad Harris',
      type : 'Video Creator',
      des: 'Hello Its Me Harris Wellcome To My Account I hope You Enjoy if You are Interested in marketing contact->03236787464 Thanks For Visiting'
    }
  }

  storyopen() {
    this.router.navigate(['story'])
  }

}
