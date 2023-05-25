import { Drink } from "./reducer";

export enum ActionTypes {
  addDrinkToCart = "addDrinkToCart",
  removeDrinkCart = "removeDrinkCart",
  increaseQuantity = "increaseQuantity",
  decreaseQuantity = "decreaseQuantity"
}

export function addDrinkToCartAction(newDrink: Drink) {
  return {
    type: ActionTypes.addDrinkToCart,
    payload: {
      newDrink
    }
  }
}

export function removeDrinkFromCartAction(id: number) {
  return {
    type: ActionTypes.removeDrinkCart,
    payload: {
      id
    }
  }
}

export function increaseQuantityAction(id: number) {
  return {
    type: ActionTypes.increaseQuantity,
    payload: {
      id
    }
  }
}

export function decreaseQuantityAction(id: number) {
  return {
    type: ActionTypes.decreaseQuantity,
    payload: {
      id
    }
  }
}