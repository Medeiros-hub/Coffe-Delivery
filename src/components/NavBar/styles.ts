import { styled } from "styled-components";

export const NavbarContainer = styled.nav`
  min-width: 100%;
  max-width: 90rem;
  height: 6.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: calc(100% - 100rem);
  margin-bottom: 2.5rem;

  aside {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;

export const defaultButton = styled.div`
  font-family: "Roboto", sans-serif;
  padding: 0.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LocationDescription = styled(defaultButton)`
  font-size: 0.875rem;
  background: ${(props) => props.theme["purple-100"]};
  color: ${(props) => props.theme["purple-800"]};
  gap: 0.25rem;
`;

export const CartButton = styled(defaultButton)`
  background: ${(props) => props.theme["yellow-100"]};
  color: ${(props) => props.theme["yellow-800"]};
  position: relative;

  span {
    position: absolute;
    top: -8px;
    right: -8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: bold;
    color: ${(props) => props.theme.white};
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 999px;
    background-color: ${(props) => props.theme["yellow-800"]};
  }
`;
