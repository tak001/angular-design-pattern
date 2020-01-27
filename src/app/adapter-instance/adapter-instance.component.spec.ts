import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdapterInstanceComponent } from './adapter-instance.component';

describe('AdapterInstanceComponent', () => {
  let component: AdapterInstanceComponent;
  let fixture: ComponentFixture<AdapterInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdapterInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdapterInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
