import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade11Component } from './atividade11.component';

describe('Atividade11Component', () => {
  let component: Atividade11Component;
  let fixture: ComponentFixture<Atividade11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atividade11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atividade11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
