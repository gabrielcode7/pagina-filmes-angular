import { Inject, Injectable } from '@angular/core';
import { DuracaoFilmeService } from './duracao-filme.service';
import { Filme } from './filme';

@Injectable({
  providedIn: 'root',
})
export class FilmeService {
  private filmes: Filme[] = [
    {
      nome: 'Imperdoável',
      imagem:
        'https://static.stealthelook.com.br/wp-content/uploads/2022/01/o-ranking-dos-filmes-mais-assistidos-da-netflix-imperdoavel-20220113201454.jpg',
      genero: 'Drama/Suspense',
      classificacao: 14,
      ano: 2021,
      hora: 1,
      minuto: 52,
      sinopse:
        'Após cumprir pena por um crime violento, Ruth volta ao convívio na sociedade, que se recusa a perdoar seu passado. Discriminada no lugar que já chamou de lar, sua única esperança é encontrar a irmã, que ela havia sido forçada a deixar para trás.',
    },
    {
      nome: 'Esquadrão 6',
      imagem:
        'https://static.stealthelook.com.br/wp-content/uploads/2022/01/o-ranking-dos-filmes-mais-assistidos-da-netflix-esquadrao-6-20220113201418.jpg',
      genero: 'Ação/Suspense',
      classificacao: 18,
      ano: 2019,
      hora: 2,
      minuto: 8,
      sinopse:
        'Após forjar a própria morte, um bilionário monta uma equipe de profissionais internacionais para a ousada e sanguinária missão de derrubar um ditador cruel.',
    },
    {
      nome: 'A Barraca do Beijo 2',
      imagem:
        'https://static.stealthelook.com.br/wp-content/uploads/2022/01/o-ranking-dos-filmes-mais-assistidos-da-netflix-a-barraca-do-beijo-2-20220113201135.jpg',
      genero: 'Adolescente',
      classificacao: 12,
      ano: 2020,
      hora: 2,
      minuto: 11,
      sinopse:
        'Em seu último ano na escola, Elle precisa que lidar com o namoro à distância com Noah, mudanças na amizade com Lee e uma paixão inesperada.',
    },
    {
      nome: 'Bird Box',
      imagem:
        'https://static.stealthelook.com.br/wp-content/uploads/2022/01/o-ranking-dos-filmes-mais-assistidos-da-netflix-bird-box-20220113201327.jpg',
      genero: 'Terror/Ficção Científica',
      classificacao: 16,
      ano: 2018,
      hora: 2,
      minuto: 4,
      sinopse:
        'Bird Box é um filme estadunidense de 2018, dos gêneros drama, ficção científica e suspense, dirigido por Susanne Bier, com roteiro de Eric Heisserer baseado no livro homônimo de Josh Malerman.',
    },
    {
      nome: 'Alerta Vermelho',
      imagem:
        'https://static.stealthelook.com.br/wp-content/uploads/2022/01/o-ranking-dos-filmes-mais-assistidos-da-netflix-alerta-vermelho-20220113201304.jpg',
      genero: 'Ação/Comédia',
      classificacao: 12,
      ano: 2021,
      hora: 1,
      minuto: 58,
      sinopse:
        'Um alerta vermelho da Interpol é emitido e o agente do FBI John Hartley assume o caso. Durante sua busca, ele se vê diante de um assalto ousado e é forçado a se aliar ao maior ladrão de arte da história, Nolan Booth, para capturar a ladra de arte mais procurada do mundo atualmente, Sarah Black.',
    },
    {
      nome: 'Resgate',
      imagem:
        'https://static.stealthelook.com.br/wp-content/uploads/2022/01/o-ranking-dos-filmes-mais-assistidos-da-netflix-resgate-20220113201625.jpg',
      genero: 'Ação/Thriller',
      classificacao: 16,
      ano: 2020,
      hora: 1,
      minuto: 56,
      sinopse:
        'Em Bangladesh, o mercenário do mercado negro Tyler Rake luta para sobreviver durante a missão para resgatar o filho sequestrado de um chefe do crime internacional.',
    },
  ];

  constructor(private duracaoFilmeService: DuracaoFilmeService) {}
  getFilmes(): Filme[] {
    this.filmes = this.filmes.map((filme) => {
      filme.duracao = this.duracaoFilmeService.ADuracaoDoFilmeEh(filme);
      return filme;
    });
    return this.filmes;
  }
}
