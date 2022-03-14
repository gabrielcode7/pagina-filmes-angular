import { Inject, Injectable } from '@angular/core';
import { Filme } from './filme';

@Injectable({
  providedIn: 'root',
})
export class DuracaoFilmeService {
  ADuracaoDoFilmeEh(filme: Filme): string {
    if (filme.hora >= 1.9) return 'medio';
    else return 'pequeno';
  }
}
