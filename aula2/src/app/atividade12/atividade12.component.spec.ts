import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade12Component } from './atividade12.component';

describe('Atividade12Component', () => {
  let component: Atividade12Component;
  let fixture: ComponentFixture<Atividade12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atividade12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atividade12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
