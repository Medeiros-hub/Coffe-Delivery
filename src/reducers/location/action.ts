import { Location, Place } from "./reducer";

export enum ActionTypes {
  getActualLocation = "getActualLocation",
  setInputCepAction = "setInputCepAction",
  addCurrentPlaceAction = "addCurrentPlaceAction",
}

export function getActualLocationAction(data: Location) {
  return {
    type: ActionTypes.getActualLocation,
    payload: {
      data
    }
  }
}

export function setInputCepAction(cep: string) {
  return {
    type: ActionTypes.setInputCepAction,
    payload: {
      cep
    }
  }
}

export function addCurrentPlaceAction(data: Place, payment: string) {
  return {
    type: ActionTypes.addCurrentPlaceAction,
    payload: {
      data,
      payment
    }
  }
}
