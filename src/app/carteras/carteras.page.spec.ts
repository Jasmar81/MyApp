import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarterasPage } from './carteras.page';

describe('CarterasPage', () => {
  let component: CarterasPage;
  let fixture: ComponentFixture<CarterasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CarterasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
