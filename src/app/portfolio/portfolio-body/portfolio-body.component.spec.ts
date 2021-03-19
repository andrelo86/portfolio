import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioBodyComponent } from './portfolio-body.component';

describe('PortfolioBodyComponent', () => {
  let component: PortfolioBodyComponent;
  let fixture: ComponentFixture<PortfolioBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioBodyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
