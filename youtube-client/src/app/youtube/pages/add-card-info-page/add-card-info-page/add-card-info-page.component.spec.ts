import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCardInfoPageComponent } from './add-card-info-page.component';

describe('AddCardInfoPageComponent', () => {
  let component: AddCardInfoPageComponent;
  let fixture: ComponentFixture<AddCardInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCardInfoPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCardInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
