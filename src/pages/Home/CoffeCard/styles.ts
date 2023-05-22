import { styled } from "styled-components";

export const Card = styled.div`
  background: ${(props) => props.theme["gray-200"]};
  border-radius: 6px 36px;
  width: 16rem;
  height: 17.375rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -20px;
`;

export const TagsContainer = styled.div`
  margin-top: 0.75rem;
  display: flex;
  gap: 0.25rem;

  span {
    font-size: 0.625rem;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-weight: bold;
    color: ${(props) => props.theme["yellow-800"]};
    background: ${(props) => props.theme["yellow-100"]};
  }
`;

export const InfoDiv = styled.div`
  padding: 1rem 0 2.0625rem 0;
  text-align: center;
  margin: 0 1rem;

  h1 {
    font-family: "Baloo 2", cursive;
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 130%;
  }

  span {
    color: ${(props) => props.theme["gray-600"]};
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
  }
`;

export const BuyContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  color: ${(props) => props.theme["gray-700"]};

  span {
    font-size: 0.875rem;
    margin-right: 2px;
  }

  p {
    font-family: "Baloo 2", cursive;
    font-size: 1.5rem;
    font-weight: bolder;
  }
`;

export const QuantityCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: ${(props) => props.theme["gray-400"]};
  border-radius: 6px;
  margin: 0 0.5rem 0 1.4375rem;
  padding: 0.5rem;

  svg {
    cursor: pointer;

    &:hover {
      fill: ${(props) => props.theme["purple-800"]};
    }
  }
`;

export const BagButton = styled.button`
  background: ${(props) => props.theme["purple-800"]};
  border-radius: 6px;
  width: 2.375rem;
  height: 2.375rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${(props) => props.theme["purple-400"]};
  }
`;
