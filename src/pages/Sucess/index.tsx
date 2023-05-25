import { useContext, useEffect, useState } from "react";
import { InfoWrapper, SucessContainer, SucessHeader } from "./styles";
import deliveryMan from "../../assets/Illustration.svg";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { LocationContext } from "../../contexts/LocationContext";

export function Sucess() {
  const [selectedOption, setSelectedOption] = useState<string>("");  
  const { currentPlace, location, payment } = useContext(LocationContext);


  useEffect(() => {
    switch (payment) {
      case "cash": return setSelectedOption("Dinheiro")
      case "creditCard": return setSelectedOption("Cartão de Crédito")
      case "debitCard": return setSelectedOption("Cartão de Débito")
      default: return setSelectedOption("Unknown")
    }
  }, [payment])
  
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
                  Entrega em{" "}
                  <span>
                    {location.logradouro}, {currentPlace.street}
                  </span>
                </p>
                <p>
                  {location.bairro} - {location.localidade}, {location.uf}
                </p>
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
                <span>{selectedOption}</span>
              </article>
            </aside>
          </div>

          <img src={deliveryMan} />
        </InfoWrapper>
      </section>
    </SucessContainer>
  );
}
