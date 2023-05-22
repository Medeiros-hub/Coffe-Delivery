import { MapPinLine } from "@phosphor-icons/react";
import {
  CheckoutContainer,
  CompletedOrder,
  ListOrder,
  LocationHeader,
  LocationOrder,
  SelectedCoffe,
  ValueArea,
} from "./styles";
import { LocationoForm } from "./LocationForm";
import Payment from "./Payment";
import { CoffeCardCheckout } from "./CoffeCard";
import { NavLink } from "react-router-dom";

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompletedOrder>
        <h1>Complete seu pedido</h1>
        <LocationOrder>
          <LocationHeader>
            <MapPinLine size={22} color="#c47f17" />
            <aside>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </aside>
          </LocationHeader>

          <LocationoForm />
        </LocationOrder>

        <Payment />
      </CompletedOrder>

      <SelectedCoffe>
        <h1>Cafés selecionados</h1>
        <div>
          <ListOrder>
            <CoffeCardCheckout />
            <CoffeCardCheckout />

            <ValueArea>
              <div>
                <span>Total de itens</span>
                <span>R$ 29,70</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </div>
              <div>
                <span>Total</span>
                <span>R$ 33,20</span>
              </div>
            </ValueArea>
            <NavLink to="/sucess">
              <button>CONFIRMAR PEDIDO</button>
            </NavLink>
          </ListOrder>
        </div>
      </SelectedCoffe>
    </CheckoutContainer>
  );
}
