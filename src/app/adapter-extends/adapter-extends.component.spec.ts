import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdapterExtendsComponent } from './adapter-extends.component';

describe('AdapterExtendsComponent', () => {
  let component: AdapterExtendsComponent;
  let fixture: ComponentFixture<AdapterExtendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdapterExtendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdapterExtendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
