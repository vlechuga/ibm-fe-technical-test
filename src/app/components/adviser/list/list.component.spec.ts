import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviserListComponent } from './list.component';

describe('ListComponent', () => {
  let component: AdviserListComponent;
  let fixture: ComponentFixture<AdviserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdviserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
