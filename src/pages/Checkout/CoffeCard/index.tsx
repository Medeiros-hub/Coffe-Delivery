import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { CoffeCardContainer, QuantityCounter } from "./styles";
import Image01 from "../../../assets/Coffe/Americano.svg";

export function CoffeCardCheckout() {
  return (
    <CoffeCardContainer>
      <img src={Image01} alt="" />
      <section>
        <span>Expresso Tradicional</span>
        <div>
          <QuantityCounter>
            <Minus size={14} color="#8047f8" />
            <span>1</span>
            <Plus size={14} color="#8047f8" />
          </QuantityCounter>
          <button>
            <Trash size={16} color="#8047f8" />
            <span>Remover</span>
          </button>
        </div>
      </section>
      <span>R$ 9,90</span>
    </CoffeCardContainer>
  );
}
