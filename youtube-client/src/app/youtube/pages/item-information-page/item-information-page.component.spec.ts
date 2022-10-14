import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInformationPageComponent } from './item-information-page.component';

describe('ItemInformationPageComponent', () => {
  let component: ItemInformationPageComponent;
  let fixture: ComponentFixture<ItemInformationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemInformationPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemInformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
