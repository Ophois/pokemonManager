//Modèle pour l'API Pokémons
export class PokemonsAPI {
  count!: number;
  next!: string;
  previous!: string;
  results!: [
    {name: string, url: string }
  ];
}
