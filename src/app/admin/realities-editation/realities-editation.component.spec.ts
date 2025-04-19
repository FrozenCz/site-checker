import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealitiesEditationComponent } from './realities-editation.component';

describe('RealitiesEditationComponent', () => {
  let component: RealitiesEditationComponent;
  let fixture: ComponentFixture<RealitiesEditationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealitiesEditationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealitiesEditationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
