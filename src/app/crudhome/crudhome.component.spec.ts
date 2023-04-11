import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudhomeComponent } from './crudhome.component';

describe('CrudhomeComponent', () => {
  let component: CrudhomeComponent;
  let fixture: ComponentFixture<CrudhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
