import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideboxComponent } from './slidebox.component';

describe('SlideboxComponent', () => {
  let component: SlideboxComponent;
  let fixture: ComponentFixture<SlideboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
