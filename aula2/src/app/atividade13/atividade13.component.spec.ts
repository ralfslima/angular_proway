import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade13Component } from './atividade13.component';

describe('Atividade13Component', () => {
  let component: Atividade13Component;
  let fixture: ComponentFixture<Atividade13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atividade13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atividade13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
