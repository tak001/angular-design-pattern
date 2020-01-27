import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdapterImplementsComponent } from './adapter-implements.component';

describe('AdapterImplementsComponent', () => {
  let component: AdapterImplementsComponent;
  let fixture: ComponentFixture<AdapterImplementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdapterImplementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdapterImplementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
