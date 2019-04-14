import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeasaddComponent } from './ideasadd.component';

describe('IdeasaddComponent', () => {
  let component: IdeasaddComponent;
  let fixture: ComponentFixture<IdeasaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeasaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeasaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
