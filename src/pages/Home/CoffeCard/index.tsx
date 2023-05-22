import {
  BagButton,
  BuyContainer,
  Card,
  CardContainer,
  InfoDiv,
  Price,
  QuantityCounter,
  TagsContainer,
} from "./styles";
import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";

interface CoffeCardProps {
  image: string;
  name: string;
  tags: string[];
  description: string;
  price: number;
}

export function CoffeCard({
  image,
  name,
  tags,
  description,
  price,
}: CoffeCardProps) {
  const myPrice = JSON.parse(JSON.stringify(price));
  const myPriceString = (myPrice.toFixed(1)).replace(".", ",") + "0";

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
            <p>{myPriceString}</p>
          </Price>
          <QuantityCounter>
            <Minus size={14} color="#8047f8" />
            <span>1</span>
            <Plus size={14} color="#8047f8" />
          </QuantityCounter>
          <BagButton>
            <ShoppingCartSimple size={19} weight="fill" color="#ffffff" />
          </BagButton>
        </BuyContainer>
      </CardContainer>
    </Card>
  );
}
