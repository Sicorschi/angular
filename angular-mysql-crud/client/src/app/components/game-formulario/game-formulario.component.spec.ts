import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFormularioComponent } from './game-formulario.component';

describe('GameFormularioComponent', () => {
  let component: GameFormularioComponent;
  let fixture: ComponentFixture<GameFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
