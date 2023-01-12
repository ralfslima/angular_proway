import { Component } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component {

  // Variável contendo um texto
  texto = "Aprendendo Angular na Proway!";

  // Vetor de cores
  cores = ["Azul", "Verde", "Amarelo", "Vermelho", "Rosa"];

}
