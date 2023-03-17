import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsNComponent } from './authors-n.component';

describe('AuthorsNComponent', () => {
  let component: AuthorsNComponent;
  let fixture: ComponentFixture<AuthorsNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorsNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorsNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
