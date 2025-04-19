import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRealityNameComponent } from './new-reality-name.component';

describe('NewRealityNameComponent', () => {
  let component: NewRealityNameComponent;
  let fixture: ComponentFixture<NewRealityNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewRealityNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRealityNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
