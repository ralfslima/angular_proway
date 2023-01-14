import { Component } from '@angular/core';

@Component({
  selector: 'app-atividade2',
  templateUrl: './atividade2.component.html',
  styleUrls: ['./atividade2.component.css']
})
export class Atividade2Component {

  // Variáveis
  numero:number = 0;
  tabuada:string[] = [];

  // Função
  gerarTabuada():void{

    // Limpar tabuada
    this.tabuada = [];

    // Laço de repetição
    for(let i=0; i<11; i++){
      this.tabuada.push(this.numero + " X " + i + " = " + (this.numero*i));
    }

  }

}
