import { styled } from "styled-components";

export const CoffeCardContainer = styled.section`
  width: 23rem;
  padding: 1.5rem 0;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme["gray-400"]};

  img {
    width: 4rem;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 3.125rem 0 1.25rem;
    gap: 0.5rem;

    & > div {
      display: flex;
      align-items: center;
      gap: inherit;
    }

    h2 {
      font-size: 1rem;
    }

    button {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.25rem;
      background: ${(props) => props.theme["gray-400"]};
      border-radius: 6px;
      padding: 0.5rem;
    }

    button:hover {
      background: ${(props) => props.theme["gray-500"]};
    }
  }

  & > span {
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: ${(props) => props.theme["gray-400"]};
  border-radius: 6px;
  padding: 0.5rem;

  span {
    user-select: none;
  }

  svg {
    cursor: pointer;

    &:hover {
      fill: ${(props) => props.theme["purple-800"]};
    }
  }
`;