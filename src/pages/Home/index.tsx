import { HomeContainer, HomeCover, IntroItems, TitleCover } from "./styles";
import CoffeCoverImage from "../../assets/Cover-Coffe.svg";
import {
  Coffee,
  IconContext,
  Package,
  ShoppingCart,
  Timer,
} from "@phosphor-icons/react";
import { CoffeCard } from "./CoffeCard";
import { useState, useEffect } from "react";

export interface CardType {
  id: number;
  image: string;
  name: string;
  tags: string[];
  quantity: number;
  description: string;
  price: number;
}

export function Home() {
  const [data, setData] = useState<CardType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/produceCoffe")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <HomeCover>
        <section>
          <TitleCover>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
              hora
            </p>
          </TitleCover>

          <IntroItems>
            <IconContext.Provider
              value={{
                size: 16,
                weight: "fill",
                color: "white",
              }}
            >
              <div>
                <span>
                  <ShoppingCart />
                </span>
                <p>Compra simples e segura</p>
              </div>
              <div>
                <span>
                  <Package />
                </span>
                <p>Embalagem mantém o café intacto</p>
              </div>
              <div>
                <span>
                  <Timer />
                </span>
                <p>Entrega rápida e rastreada</p>
              </div>
              <div>
                <span>
                  <Coffee />
                </span>
                <p>O café chega fresquinho até você</p>
              </div>
            </IconContext.Provider>
          </IntroItems>
        </section>

        <img
          src={CoffeCoverImage}
          alt="Como de café branco com listra preta em um fundo amarelo"
        />
      </HomeCover>
      <HomeContainer>
        <div>
        <h1>Nossos Cafés</h1>
          <section>
            {data.map((coffe) => {
              return (
                <CoffeCard
                  key={coffe.id}
                  id={coffe.id}
                  name={coffe.name}
                  image={coffe.image}
                  tags={coffe.tags}
                  description={coffe.description}
                  quantity={coffe.quantity}
                  price={coffe.price}
                />
              );
            })}
          </section>
        </div>
      </HomeContainer>
    </>
  );
}
