import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrtianComponent } from './srtian.component';

describe('SrtianComponent', () => {
  let component: SrtianComponent;
  let fixture: ComponentFixture<SrtianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrtianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrtianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
