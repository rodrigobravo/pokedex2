import { TestBed } from '@angular/core/testing';

import { PokemonServiiceService } from './pokemon-serviice.service';

describe('PokemonServiiceService', () => {
  let service: PokemonServiiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonServiiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
