import { styled } from "styled-components";

export const SucessContainer = styled.main`
  padding: 0 1rem;
  width: 100%;
  display: flex;
  justify-content: center;

  & > section {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    @media screen and (max-width: 768px) {
      align-items: center;
    }
  }
`;

export const SucessHeader = styled.header`
  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    line-height: 1.6;
    color: ${props => props.theme["yellow-800"]};
  }
  
  span {
    font-size: 1.25rem;
  }
  `;

export const InfoWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6.375rem;

  & > div {
    background: linear-gradient(white, white) padding-box,
      linear-gradient(to right, 
        ${(props) => props.theme["yellow-800"]}, 
        ${(props) => props.theme["purple-800"]}
      ) border-box;
    border-radius: 6px 36px;
    border: 1px solid transparent;
    color: ${props => props.theme["gray-700"]};

    width: 32.875rem;
    height: 16.875rem;
    gap: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  aside {
    padding: 0 2.5rem;
    display: flex;
    gap: 0.75rem;

    & > div {
      padding: 0.5rem 0.6875rem;
      border-radius: 999px;
      display: flex;
      align-items: center;
    }

    &:nth-child(1) div {
      background-color: ${props => props.theme["purple-800"]};
    }

    &:nth-child(2) div {
      background-color: ${props => props.theme["yellow-400"]};
    }

    &:nth-child(3) div {
      background-color: ${props => props.theme["yellow-800"]};
    }

    span {
      font-weight: bold;
    }

    svg {
      width: fit-content;
    }
  }
`;
