import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { CoffeCardContainer, CounterContainer } from "./styles";
import { Drink } from "../../../reducers/drinks/reducer";
import { useContext } from "react";
import { DrinkContext } from "../../../contexts/DrinkContext";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

export function CoffeCardCheckout({ id, image, name, price, quantity }: Drink) {
  function numberToString(number: number) {
    return number.toFixed(1).replace(".", ",") + "0";
  }

  const { removeDrinkCart, increaseQuantity, decreaseQuantity } =
    useContext(DrinkContext);

  const MySwal = withReactContent(Swal);
  function handleRemoveDrinkCart() {
    MySwal.fire({
      title: "Tem certeza?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#218838",
      confirmButtonText: "Sim, deletar!",
      cancelButtonColor: "#c62e2e",
      cancelButtonText: "Não, cancelar!",
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire("Item removido!", "Pode continuar comprando", "success");
        // Remove Item from Cart
        removeDrinkCart(id);
      }
    });
  }

  function handleIncreaseQuantity() {
    increaseQuantity(id);
  }

  function handleDecreaseQuantity() {
    decreaseQuantity(id);
  }

  return (
    <CoffeCardContainer>
      <img src={image} />
      <section>
        <span>{name}</span>
        <div>
          <CounterContainer>
            <Minus size={14} color="#8047f8" onClick={handleDecreaseQuantity} />
            <span>{quantity}</span>
            <Plus size={14} color="#8047f8" onClick={handleIncreaseQuantity} />
          </CounterContainer>
          <button type="button" onClick={handleRemoveDrinkCart}>
            <Trash size={16} color="#8047f8" />
            <span>Remover</span>
          </button>
        </div>
      </section>
      <span>R$ {numberToString(price * quantity)}</span>
    </CoffeCardContainer>
  );
}
