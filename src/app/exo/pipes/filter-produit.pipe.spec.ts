import { SortProduitPipe } from './filter-produit.pipe';

describe('FilterProduitPipe', () => {
  it('create an instance', () => {
    const pipe = new SortProduitPipe();
    expect(pipe).toBeTruthy();
  });
});
