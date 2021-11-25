import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //testing home
  it('should show home', () => {
    expect(fixture.nativeElement.querySelector('[data-test="home"]')).toBeTruthy();
  });
  //testing sub-heading
  it('should show sub-heading', () => {
    expect(fixture.nativeElement.querySelector('[data-test="sub-heading"]')).toBeTruthy();
  });
  //testing customer
  it('should show customer', () => {
    expect(fixture.nativeElement.querySelector('[data-test="customer"]')).toBeTruthy();
  });
});
