import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade15Component } from './atividade15.component';

describe('Atividade15Component', () => {
  let component: Atividade15Component;
  let fixture: ComponentFixture<Atividade15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atividade15Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atividade15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
