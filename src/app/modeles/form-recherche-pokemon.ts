/* formulaire de recherche (template-driven) */
export class FormRecherchePokemon {
  nom: string;

  constructor(nom: string) {
    this.nom = nom;
  }

  setNom(nom: string) {
    this.nom = nom;
  }
}
