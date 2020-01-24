import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdapterTransferComponent } from './adapter-transfer.component';

describe('AdapterTransferComponent', () => {
  let component: AdapterTransferComponent;
  let fixture: ComponentFixture<AdapterTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdapterTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdapterTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
