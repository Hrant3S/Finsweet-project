import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryNComponent } from './category-n.component';

describe('CategoryNComponent', () => {
  let component: CategoryNComponent;
  let fixture: ComponentFixture<CategoryNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
