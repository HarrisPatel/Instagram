import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-search-peoples',
  templateUrl: './search-peoples.component.html',
  styleUrls: ['./search-peoples.component.css']
})
export class SearchPeoplesComponent implements OnInit {

  @Output('parentFun') parentFun: EventEmitter<any> = new EventEmitter();

  constructor(private service: StoryService) { }
  searchKey: string = "";
  allaccounts: any = []

  ngOnInit(): void {
    this.allaccounts = this.service.friends
    this.service.search.subscribe((val: any) => {
      this.searchKey = val
    })
  }

  select_account(name:any){
    this.parentFun.emit(name);
  }
}
