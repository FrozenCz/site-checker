import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToIframeComponent } from './how-to-iframe.component';

describe('HowToIframeComponent', () => {
  let component: HowToIframeComponent;
  let fixture: ComponentFixture<HowToIframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToIframeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowToIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
