import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereIAmComponent } from './where-iam.component';

describe('WhereIAmComponent', () => {
  let component: WhereIAmComponent;
  let fixture: ComponentFixture<WhereIAmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhereIAmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhereIAmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
