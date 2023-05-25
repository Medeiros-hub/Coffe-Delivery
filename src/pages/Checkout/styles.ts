import { styled } from "styled-components";

export const CheckoutContainer = styled.main`
  & > form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    padding: 1rem;
  }

  section > h1 {
    font-family: "Baloo 2", cursive;
    color: ${(props) => props.theme["gray-800"]};
    font-size: 1.125rem;
    margin-bottom: 0.9375rem;
  }
`;

export const CompletedOrder = styled.section`
  width: 40rem;
  border-radius: 6px;
`;

export const LocationOrder = styled.div`
  width: 100%;
  border-radius: 6px;
  background: ${(props) => props.theme["gray-200"]};
`;

export const LocationHeader = styled.header`
  padding: 2.5rem;
  display: flex;

  aside {
    margin-left: 0.5rem;
    line-height: 130%;

    span {
      font-size: 1rem;
      color: ${(props) => props.theme["gray-800"]};
    }

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme["gray-700"]};
    }
  }
`;

export const SelectedCoffe = styled.section`
  width: 28rem;
  border-radius: 6px 44px;
  @media screen and (max-width: 1120px) {
    width: 40rem;
  }

  & > div {
    display: flex;
    justify-content: center;
    width: 100%;
    background: ${(props) => props.theme["gray-200"]};
  }
`;

export const ListOrder = styled.div`
  padding: calc(2.5rem - 1.5rem) 2.5rem 2.5rem;
  width: fit-content;

  button[type="submit"] {
    cursor: pointer;
    width: 23rem;
    font-size: 0.875rem;
    line-height: 1.6;
    padding: 0.75rem 0;
    border-radius: 6px;
    margin-top: 1.5rem;
    background: ${(props) => props.theme["yellow-400"]};
    color: ${(props) => props.theme.white};
    transition: all 0.2s;
  }

  button[type="submit"]:hover {
    background: ${(props) => props.theme["yellow-800"]};
  }
`;

export const ValueArea = styled.section`
  width: 23rem;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;

    span {
      color: ${(props) => props.theme["gray-700"]};
      font-size: 1rem;
    }
  }

  div:last-child {
    span {
      font-weight: bold;
      font-size: 1.25rem;
      color: ${(props) => props.theme["gray-800"]};
    }
  }
`;
