import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdapterClassComponent } from './adapter-class.component';

describe('AdapterClassComponent', () => {
  let component: AdapterClassComponent;
  let fixture: ComponentFixture<AdapterClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdapterClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdapterClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
