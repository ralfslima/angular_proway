import { Component } from '@angular/core';

@Component({
  selector: 'app-atividade3',
  templateUrl: './atividade3.component.html',
  styleUrls: ['./atividade3.component.css']
})
export class Atividade3Component {

  // Variáveis
  valor:number = 0;
  pagamento:string = '';
  total:number = 0;

  // Função
  calcular():void{
    if(this.valor >= 100 && this.pagamento == "A vista"){
      this.total = this.valor * 0.9;
    }else{
      this.total = this.valor;
    }
  }

  // Ao iniciar o componente
  ngOnInit(){
    this.pagamento = "A vista";
  }

}
