import { create } from "zustand";
import { ArticleInStore } from "./type";

interface IStore {
  panier: ArticleInStore[];
  addToPanier: (article: ArticleInStore) => void;
}

export const useStore = create<IStore>((set) => ({
  panier: [],
  addToPanier: (value) => {
    set((state) => {
      //   Mise à jour

      const artcileExistant = state.panier.find(
        (article) => article.id == value.id
      );

      if (artcileExistant) {
        const panierSansExcistant = state.panier.filter(
          (article) => article.id != artcileExistant.id
        );
        artcileExistant.count += value.count;
        artcileExistant.total += value.total;

        const newValues = [...panierSansExcistant, artcileExistant];

        return {
          panier: newValues,
        };
      }

      //Ajout
      const newValues = [...state.panier, value];
      return {
        panier: newValues,
      };
    });
  },
  //   deleteToPanier :(value)
}));
