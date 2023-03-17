import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseCatagoryComponent } from './choose-catagory.component';

describe('ChooseCatagoryComponent', () => {
  let component: ChooseCatagoryComponent;
  let fixture: ComponentFixture<ChooseCatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChooseCatagoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
