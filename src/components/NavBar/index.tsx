import { NavLink, Outlet } from "react-router-dom";
import { CartButton, LocationDescription, NavbarContainer } from "./styles";
import CoffeDeliveryLogo from "../../assets/CoffeDelivery-logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export function Navbar() {
  return (
    <>
      <NavbarContainer>
        <img src={CoffeDeliveryLogo} />

        <aside>
          <LocationDescription>
            <MapPin size={22} weight="fill" />
            Juazeiro do Norte, CE
          </LocationDescription>
          <NavLink to="/checkout" title="Carrinho">
            <CartButton>
              <ShoppingCart size={22} weight="fill" />
              <span>4</span>
            </CartButton>
          </NavLink>
        </aside>
      </NavbarContainer>
      <Outlet />
    </>
  );
}
