import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade14Component } from './atividade14.component';

describe('Atividade14Component', () => {
  let component: Atividade14Component;
  let fixture: ComponentFixture<Atividade14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atividade14Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atividade14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
