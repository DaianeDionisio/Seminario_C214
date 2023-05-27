import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  soma(num1: any, num2: any) {
    this.verificarTipo(num1);
    this.verificarTipo(num2);
    return num1+num2;
  }

  subtracao(num1: any, num2: any) {
    this.verificarTipo(num1);
    this.verificarTipo(num2);
    return num1-num2;
  }

  divisao(num1: any, num2: any) {
    this.verificarTipo(num1);
    this.verificarTipo(num2);
    if (num2 === 0) {
      throw new Error('Divisão por zero não é permitida.');
    }
    
    return num1/num2;
  }

  verificarTipo(variavel: any) {
    if (typeof variavel !== "number") {
      throw new Error('Tipo de variável não permitida.');
    }
  }
}
