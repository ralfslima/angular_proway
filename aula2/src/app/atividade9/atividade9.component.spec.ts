import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade9Component } from './atividade9.component';

describe('Atividade9Component', () => {
  let component: Atividade9Component;
  let fixture: ComponentFixture<Atividade9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atividade9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atividade9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
