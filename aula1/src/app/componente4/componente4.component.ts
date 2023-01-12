import { Component } from '@angular/core';

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css']
})
export class Componente4Component {

    /*
      string  -> textos
      number  -> números
      boolean -> lógico (true-false)
      any     -> flexível
    */
    titulo:string = "Componente 4";

    mensagem():void{
      alert("Hello World");
    }

    soma(n1:number, n2:number):number{
      return n1+n2;
    }

    // FORMULÁRIO
    nome:string = "";
    idade:number = 0;

    vetorNome:string[] = [];
    vetorIdade:number[] = [];

    cadastrar():void{
      
      this.vetorNome.push(this.nome);
      this.vetorIdade.push(this.idade);

      this.nome = "";
      this.idade = 0;

    }

}
