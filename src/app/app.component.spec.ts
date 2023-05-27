import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('soma de 2 números', () => {
    const result = component.soma(2, 3);
    expect(result).toEqual(5);
  });

  it('subtração de 2 número', () => {
    const result = component.subtracao(5, 3);
    expect(result).toEqual(2);
  });

  it('divisão por zero', () => {
    expect(() => component.divisao(10, 0)).toThrowError('Divisão por zero não é permitida.');
  })

  it('soma enviando string', () => {
    expect(() => component.soma('5',3)).toThrowError('Tipo de variável não permitida.');
  })
});