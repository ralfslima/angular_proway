import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade7Component } from './atividade7.component';

describe('Atividade7Component', () => {
  let component: Atividade7Component;
  let fixture: ComponentFixture<Atividade7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atividade7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atividade7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
