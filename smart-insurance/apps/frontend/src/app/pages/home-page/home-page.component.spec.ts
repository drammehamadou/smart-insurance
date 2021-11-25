import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageComponent ],
      imports: [HttpClientModule]
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
  //testing heading
  it('should show heading', () => {
    expect(fixture.nativeElement.querySelector('[data-test="heading"]')).toBeTruthy();
  });
  //testing sub-heading
  it('should show sub-heading', () => {
    expect(fixture.nativeElement.querySelector('[data-test="sub-heading"]')).toBeTruthy();
  });
  //testing rated-message
  it('should show rated-message', () => {
    expect(fixture.nativeElement.querySelector('[data-test="rated-message"]')).toBeTruthy();
  });

  //testing list of packages
  it('should show packages', () => {
    expect(fixture.nativeElement.querySelectorAll('[data-test="package"]')).toBeTruthy();
  });
});
