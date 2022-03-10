export interface Plat{
    id?: number, // a rajouter
    nom: string,
    type: 'plat' | 'entree' | 'dessert',
    prix: number
}