import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade8Component } from './atividade8.component';

describe('Atividade8Component', () => {
  let component: Atividade8Component;
  let fixture: ComponentFixture<Atividade8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atividade8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atividade8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
