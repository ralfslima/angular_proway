import { Component } from '@angular/core';

@Component({
  selector: 'app-atividade4',
  templateUrl: './atividade4.component.html',
  styleUrls: ['./atividade4.component.css']
})
export class Atividade4Component {

  // Variáveis
  valor:number = 0;
  moeda:string = 'Dólar';
  total:number = 0;

  // Cálculo
  calculo():void{

    if(this.moeda == 'Dólar'){
      this.total = this.valor / 5.10;
    }else if(this.moeda == 'Euro'){
      this.total = this.valor / 6;
    }else if(this.moeda == 'Libra'){
      this.total = this.valor / 7;
    }else{
      this.total = this.valor * 35.57;
    }

  }

}
