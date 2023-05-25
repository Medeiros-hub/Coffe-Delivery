import { ReactNode, createContext, useEffect, useReducer } from "react";
import { Location, LocationReducer, Place } from "../reducers/location/reducer";
import axios from "axios";
import {
  addCurrentPlaceAction,
  getActualLocationAction,
  setInputCepAction,
} from "../reducers/location/action";

interface LocationContextType {
  location: Location;
  currentCep: string;
  currentPlace: Place;
  payment: string;
  cepBlur: (cep: string) => void;
  addCurrentPlace: (data: Place, payment: string) => void;
}

export const LocationContext = createContext({} as LocationContextType);

interface LocationContextProvider {
  children: ReactNode;
}

export function LocationContextProvider({ children }: LocationContextProvider) {
  const [locationState, dispatch] = useReducer(LocationReducer, {
    location: {} as Location,
    currentCep: "",
    currentPlace: {} as Place,
    payment: "creditCard",
  });

  const { location, currentCep, currentPlace, payment } = locationState;

  useEffect(() => {
    if (currentCep.length <= 8) return;
    axios.get(`https://viacep.com.br/ws/${currentCep}/json/`).then((res) => {
      const { data } = res;
      dispatch(getActualLocationAction(data));
    });
  }, [currentCep]);

  function cepBlur(cep: string) {
    dispatch(setInputCepAction(cep));
  }

  function addCurrentPlace(data: Place, payment: string) {
    console.log(payment);
    dispatch(addCurrentPlaceAction(data, payment));
  }

  return (
    <LocationContext.Provider
      value={{
        location,
        currentCep,
        currentPlace,
        payment,
        cepBlur,
        addCurrentPlace,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}
