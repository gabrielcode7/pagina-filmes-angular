import { Component, VERSION } from '@angular/core';
import { Filme } from './model/filme';
import { FilmeService } from './model/filme.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  filmeSelecionado: Filme;

  filmes: Filme[];

  constructor(private filmeService: FilmeService) {}

  ngOnInit() {
    this.filmes = this.filmeService.getFilmes();
  }

  clicouNoFilme(filme: Filme) {
    this.filmeSelecionado = filme;
  }
}
