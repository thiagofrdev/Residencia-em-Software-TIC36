import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FristComponentComponent } from './frist-component.component';

describe('FristComponentComponent', () => {
  let component: FristComponentComponent;
  let fixture: ComponentFixture<FristComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FristComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FristComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
