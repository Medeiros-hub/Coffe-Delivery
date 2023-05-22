import { InfoWrapper, SucessContainer, SucessHeader } from "./styles";
import deliveryMan from "../../assets/Illustration.svg";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";

export function Sucess() {
  return (
    <SucessContainer>
      <section>
        <SucessHeader>
          <h1>Uhu! Pedido confirmado</h1>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </SucessHeader>
        <InfoWrapper>
          <div>
            <aside>
              <div>
                <MapPin size={16} weight="fill" fill="#ffffff" />
              </div>
              <article>
                <p>
                  Entrega em <span>Rua João Daniel Martinelli, 102</span>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </article>
            </aside>
            <aside>
              <div>
                <Timer size={16} weight="fill" fill="#ffffff" />
              </div>
              <article>
                <p>Previsão de entrega</p>
                <span>20 min - 30 min</span>
              </article>
            </aside>
            <aside>
              <div>
                <CurrencyDollar size={16} weight="fill" fill="#ffffff" />
              </div>
              <article>
                <p>Pagamento na entrega</p>
                <span>Cartão de Crédito</span>
              </article>
            </aside>
          </div>

          <img src={deliveryMan} />
        </InfoWrapper>
      </section>
    </SucessContainer>
  );
}
