import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviserAddComponent } from './add.component';

describe('AddComponent', () => {
  let component: AdviserAddComponent;
  let fixture: ComponentFixture<AdviserAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdviserAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviserAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
