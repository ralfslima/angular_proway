import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade6Component } from './atividade6.component';

describe('Atividade6Component', () => {
  let component: Atividade6Component;
  let fixture: ComponentFixture<Atividade6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atividade6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atividade6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
