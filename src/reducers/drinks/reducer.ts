import { produce } from "immer";
import { ActionTypes } from "./actions";

export interface Drink {
  id: number;
  image: string;
  name: string;
  quantity: number;
  price: number;
}

interface DrinksState {
  drinksCart: Drink[];
  currentDrinkId: number | null;
}

interface DrinkAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}

export function DrinksReducer(state: DrinksState, action: DrinkAction) {
  switch (action.type) {
    case ActionTypes.addDrinkToCart: {
      const existingDrinkIndex = state.drinksCart.findIndex((drink) => {
        return drink.id === action.payload.newDrink.id;
      });

      if (existingDrinkIndex !== -1) {
        const existingDrink = state.drinksCart[existingDrinkIndex];

        return produce(state, (draft) => {
          draft.drinksCart[existingDrinkIndex].quantity =
            existingDrink.quantity + 1;
          draft.currentDrinkId = action.payload.newDrink.id;
        });
      }

      return produce(state, (draft) => {
        draft.drinksCart.push(action.payload.newDrink);
        draft.currentDrinkId = action.payload.newDrink.id;
      });
    }

    case ActionTypes.removeDrinkCart: {
      const drinkIndex = state.drinksCart.findIndex(
        (drink) => drink.id === action.payload.id
      );
      return produce(state, (draft) => {
        if (drinkIndex !== -1) {
          draft.drinksCart.splice(drinkIndex, 1);
        }
        return draft;
      });
    }

    case ActionTypes.increaseQuantity: {
      const currentQuantity = state.drinksCart.findIndex((drink) => {
        return drink.id === action.payload.id;
      });

      return produce(state, (draft) => {
        if (currentQuantity !== -1) {
          draft.drinksCart[currentQuantity].quantity =
            state.drinksCart[currentQuantity].quantity + 1;
        }
        return draft;
      });
    }

    case ActionTypes.decreaseQuantity: {
      const currentQuantity = state.drinksCart.findIndex((drink) => {
        return drink.id === action.payload.id;
      });
      return produce(state, (draft) => {
        const minQuantity = state.drinksCart[currentQuantity];

        if (currentQuantity !== -1 && minQuantity.quantity > 1) {
          draft.drinksCart[currentQuantity].quantity = minQuantity.quantity - 1;
        }
        return draft;
      });
    }

    default:
      return state;
  }
}
