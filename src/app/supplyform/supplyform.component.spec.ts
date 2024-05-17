import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyformComponent } from './supplyform.component';

describe('SupplyformComponent', () => {
  let component: SupplyformComponent;
  let fixture: ComponentFixture<SupplyformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplyformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupplyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
