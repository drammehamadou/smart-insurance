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
    expect(fixture.nativeElement.querySelector('[class="logo"]')).toBeTruthy();
  });
  
});
