import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIofferComponent } from './what-ioffer.component';

describe('WhatIofferComponent', () => {
  let component: WhatIofferComponent;
  let fixture: ComponentFixture<WhatIofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatIofferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
