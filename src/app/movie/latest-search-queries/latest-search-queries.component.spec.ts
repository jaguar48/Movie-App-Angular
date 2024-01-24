import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestSearchQueriesComponent } from './latest-search-queries.component';

describe('LatestSearchQueriesComponent', () => {
  let component: LatestSearchQueriesComponent;
  let fixture: ComponentFixture<LatestSearchQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestSearchQueriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LatestSearchQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
