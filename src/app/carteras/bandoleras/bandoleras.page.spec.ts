import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BandolerasPage } from './bandoleras.page';

describe('BandolerasPage', () => {
  let component: BandolerasPage;
  let fixture: ComponentFixture<BandolerasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BandolerasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
