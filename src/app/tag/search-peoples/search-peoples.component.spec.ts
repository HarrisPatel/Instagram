import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPeoplesComponent } from './search-peoples.component';

describe('SearchPeoplesComponent', () => {
  let component: SearchPeoplesComponent;
  let fixture: ComponentFixture<SearchPeoplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchPeoplesComponent]
    });
    fixture = TestBed.createComponent(SearchPeoplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
