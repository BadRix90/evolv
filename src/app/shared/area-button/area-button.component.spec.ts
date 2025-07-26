import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaButtonComponent } from './area-button.component';

describe('AreaButtonComponent', () => {
  let component: AreaButtonComponent;
  let fixture: ComponentFixture<AreaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
