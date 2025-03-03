import { create } from "zustand";
import { ArticleInStore } from "./type";

interface IStore {
  panier: ArticleInStore[];
  addToPanier: (article: ArticleInStore) => void;
}

// Convertir une chaine de caractère en tableau d'object
const convertirChaineTableau = <T>(str: string): T[] => {
  if (!str) return [];

  const newTab: T[] = JSON.parse(str);

  return newTab;
};

// Convertir un tableau d'objet en chaine de caractère
const convertirTableauChaine = <T>(arr: T[]): string => {
  const newTab: string[] = [];

  arr.forEach((el) => {
    console.log(el);
    newTab.push(JSON.stringify(el));
  });

  return `[${newTab.toString()}]`;
};

export const useStore = create<IStore>((set) => ({
  panier:
    convertirChaineTableau<ArticleInStore>(
      localStorage.getItem("panier") ?? ""
    ) ?? [],
  addToPanier: (value) => {
    set((state) => {
      const artcileExistant = state.panier.find(
        (article) => article.id == value.id
      );

      //   Mise à jour
      if (artcileExistant) {
        const panierSansExcistant = state.panier.filter(
          (article) => article.id != artcileExistant.id
        );
        artcileExistant.count += value.count;
        artcileExistant.total += value.total;

        const newValues = [...panierSansExcistant, artcileExistant];

        // Persister les données dans la ménoire du nagivateur pour ne pas les perdre
        localStorage.setItem(
          "panier",
          convertirTableauChaine<ArticleInStore>(newValues)
        );
        return {
          panier: newValues,
        };
      }

      //Ajout
      const newValues = [...state.panier, value];
      // Persister les données dans la ménoire du nagivateur pour ne pas les perdre
      localStorage.setItem(
        "panier",
        convertirTableauChaine<ArticleInStore>(newValues)
      );
      return {
        panier: newValues,
      };
    });
  },
  //   deleteToPanier :(value)
}));

/* 
Magasin ou Store
{
    prop1:value
    setProp1: ()=>void
}
const [prop1,setProp1] = usState(value)

const oranges1 = [1,2,3,4...]

const oranges2 = [...oranges1]


*/

// JSON.parse // json (string) => objet
// JSON.stringify // objet => json (string)
