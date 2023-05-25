import { produce } from "immer";
import { ActionTypes } from "./action";

export interface Location {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export interface Place {
  postalCode: string;
  street: string;
  numberStreet: number;
  complement?: string;
}

interface LocationState {
  location: Location;
  currentCep: string;
  currentPlace: Place;
  payment: string;
}

interface LocationAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}

export function LocationReducer(state: LocationState, action: LocationAction) {
  switch (action.type) {
    case ActionTypes.getActualLocation: {
      return produce(state, (draft) => {
        draft.location = action.payload.data;
      });
    }

    case ActionTypes.setInputCepAction: {
      return produce(state, (draft) => {
        draft.currentCep = action.payload.cep
      })
    }

    case ActionTypes.addCurrentPlaceAction: {      
      return produce(state, (draft) => {
        draft.payment = action.payload.payment
        draft.currentPlace = action.payload.data
      })
    }

    default: {
      return state;
    }
  }
}
