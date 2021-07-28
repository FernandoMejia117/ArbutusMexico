import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbutusComponent } from './arbutus.component';

describe('ArbutusComponent', () => {
  let component: ArbutusComponent;
  let fixture: ComponentFixture<ArbutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbutusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
