import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContranuevaComponent } from './contranueva.component';

describe('ContranuevaComponent', () => {
  let component: ContranuevaComponent;
  let fixture: ComponentFixture<ContranuevaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContranuevaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContranuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
