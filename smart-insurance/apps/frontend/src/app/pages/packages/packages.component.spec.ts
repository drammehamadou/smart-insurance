import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PackagesComponent } from './packages.component';
import { CartService } from '@smart-insurance/orders';

describe('PackagesComponent', () => {
  let component: PackagesComponent;
  let fixture: ComponentFixture<PackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagesComponent ],
      imports: [HttpClientTestingModule],
      providers: [CartService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
