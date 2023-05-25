import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { CartButton, LocationDescription, NavbarContainer } from "./styles";
import CoffeDeliveryLogo from "../../assets/CoffeDelivery-logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { DrinkContext } from "../../contexts/DrinkContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export function Navbar() {
  const { drinksCart } = useContext(DrinkContext);

  const quantityOfItensInCart = drinksCart.length;

  const MySwal = withReactContent(Swal);

  function noItemsInCart() {
    MySwal.fire({
      width: 400,
      icon: "warning",
      title: "Não há itens no carrinho",
      text: "Por favor, adicione itens para comprar",
      timer: 1500,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  }

  return (
    <>
      <NavbarContainer>
        <NavLink to="/">
          <img src={CoffeDeliveryLogo} />
        </NavLink>

        <aside>
          <LocationDescription>
            <MapPin size={22} weight="fill" />
            Juazeiro do Norte, CE
          </LocationDescription>
          {quantityOfItensInCart != 0 ? (
            <NavLink to="/checkout" title="Carrinho">
              <CartButton>
                <ShoppingCart size={22} weight="fill" />
                <span>{quantityOfItensInCart}</span>
              </CartButton>
            </NavLink>
          ) : (
            <CartButton onClick={noItemsInCart}>
              <ShoppingCart size={22} weight="fill" />
              <span>{quantityOfItensInCart}</span>
            </CartButton>
          )}
        </aside>
      </NavbarContainer>
      <Outlet />
    </>
  );
}
