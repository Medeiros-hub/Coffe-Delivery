import { useContext, useEffect, useState } from "react";
import {
  BagButton,
  BuyContainer,
  Card,
  CardContainer,
  InfoDiv,
  Price,
  CounterContainer,
  TagsContainer,
} from "./styles";
import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import { DrinkContext } from "../../../contexts/DrinkContext";
import { Drink } from "../../../reducers/drinks/reducer";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

interface CoffeCardProps {
  id: number;
  image: string;
  name: string;
  tags: string[];
  quantity: number;
  description: string;
  price: number;
}

export function CoffeCard({
  id,
  image,
  name,
  tags,
  quantity,
  description,
  price,
}: CoffeCardProps) {
  function numberToString(number: number) {
    return number.toFixed(1).replace(".", ",") + "0";
  }

  const { drinksCart, addDrinkToCart, increaseQuantity, decreaseQuantity } = useContext(DrinkContext);

  const [cardQuantity, setCardQuantity] = useState(quantity);

  // constante para integrar a biblioteca ao react
  const MySwal = withReactContent(Swal);

  function handleAddToCart(data: Drink) {
    /*
      Configuração do alerta de "adcionar ao carrinho"
    */
    MySwal.fire({
      width: 400,
      icon: "success",
      text: "Item adicionado ao carrinho com sucesso",
      timer: 800,
      timerProgressBar: true,
      showConfirmButton: false,
    });

    addDrinkToCart(data);
  }

  function handlenIcreaseQuantity() {
    increaseQuantity(id);
    setCardQuantity((state) => state + 1);
  }

  function handleDecreaseQuantity() {
    decreaseQuantity(id);
    if (cardQuantity <= 1) {
      return;
    }
    setCardQuantity(state => state - 1);
  }

  const drinksId = drinksCart.findIndex((drink) => drink.id === id);
  
  useEffect(() => {
    if (drinksId !== -1) {
      const drinksQuantity = drinksCart[drinksId].quantity
      setCardQuantity(drinksQuantity)
    }
  }, [drinksId, drinksCart]);
  

  return (
    <Card>
      <CardContainer>
        <img src={image} alt="" />

        <TagsContainer>
          {tags.map((tag) => (
            <span key={tag}>{`${tag}`.toUpperCase()}</span>
          ))}
        </TagsContainer>

        <InfoDiv>
          <h1>{name}</h1>
          <span>{description}</span>
        </InfoDiv>

        <BuyContainer>
          <Price>
            <span>R$</span>
            <p>{numberToString(price)}</p>
          </Price>

          <CounterContainer>
            <Minus size={14} color="#8047f8" onClick={handleDecreaseQuantity} />
            <span>{cardQuantity}</span>
            <Plus size={14} color="#8047f8" onClick={handlenIcreaseQuantity} />
          </CounterContainer>

          <BagButton
            onClick={() =>
              handleAddToCart({
                id,
                image,
                name,
                price,
                quantity: cardQuantity,
              })
            }
          >
            <ShoppingCartSimple size={19} weight="fill" color="#ffffff" />
          </BagButton>
        </BuyContainer>
      </CardContainer>
    </Card>
  );
}
