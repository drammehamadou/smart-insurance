import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  //testing components
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //testing logo on header
  it('should show logo', () => {
    expect(fixture.nativeElement.querySelector('[data-test="logo"]')).toBeTruthy();
  });
  //testing navigation
  it('should show navigation', () => {
    expect(fixture.nativeElement.querySelector('[data-test="navigation"]')).toBeTruthy();
  });
  //testing tools
  it('should show tools', () => {
    expect(fixture.nativeElement.querySelector('[data-test="tools"]')).toBeTruthy();
  });
  
});
