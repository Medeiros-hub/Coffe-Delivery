import { createContext, ReactNode, useReducer, useEffect } from "react";
import { Drink, DrinksReducer } from "../reducers/drinks/reducer";
import {
  addDrinkToCartAction,
  decreaseQuantityAction,
  increaseQuantityAction,
  removeDrinkFromCartAction,
} from "../reducers/drinks/actions";

interface DrinkContextType {
  drinksCart: Drink[];
  currentDrinkId: number | null;
  removeDrinkCart: (id: number) => void;
  addDrinkToCart: (data: Drink) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}

export const DrinkContext = createContext({} as DrinkContextType);

interface DrinkContextProviderProps {
  children: ReactNode;
}

export function DrinkContextProvider({ children }: DrinkContextProviderProps) {
  const [drinksState, dispatch] = useReducer(
    DrinksReducer,
    {
      drinksCart: [],
      currentDrinkId: null,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@coffe-delivery:drinks-state-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }
      
      return initialState;
    }
  );

  const { drinksCart, currentDrinkId } = drinksState;  

  useEffect(() => {
    const stateJSON = JSON.stringify(drinksState);

    localStorage.setItem("@coffe-delivery:drinks-state-1.0.0", stateJSON);
  }, [drinksState]);

  function addDrinkToCart(data: Drink) {
    const newDrink: Drink = {
      id: data.id,
      image: data.image,
      name: data.name,
      quantity: data.quantity,
      price: data.price,
    };

    dispatch(addDrinkToCartAction(newDrink));
  }

  function removeDrinkCart(id: number) {
    dispatch(removeDrinkFromCartAction(id));
  }

  function increaseQuantity(id: number) {
    dispatch(increaseQuantityAction(id));
  }

  function decreaseQuantity(id: number) {
    dispatch(decreaseQuantityAction(id));
  }

  return (
    <DrinkContext.Provider
      value={{
        drinksCart,
        currentDrinkId,
        addDrinkToCart,
        removeDrinkCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </DrinkContext.Provider>
  );
}
