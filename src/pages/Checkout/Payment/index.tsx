import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { PaymentContainer, PaymentHeader } from "./styles";

export default function Payment() {
  return (
    <PaymentContainer>
      <PaymentHeader>
        <CurrencyDollar size={22} color="#8047f8" />
        <aside>
          <span>Endereço de Entrega</span>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </aside>
      </PaymentHeader>
      <div>
        <button>
          <CreditCard size={16} color="#8047f8" />
          <span>CARTÃO DE CRÉDITO</span>
        </button>
        <button>
          <Bank size={16} color="#8047f8" />
          <span>CARTÃO DE DÉDITO</span>
        </button>
        <button>
          <Money size={16} color="#8047f8" />
          <span>DINHEIRO</span>
        </button>
      </div>
    </PaymentContainer>
  );
}
