import { styled } from "styled-components";

export const HomeCover = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 34rem;
  min-width: 100%;
  max-width: 90rem;
  gap: 3.5rem;
  
  section {
    max-width: 43.75rem;
  }

  img {
    width: 29.75rem;
  }

  @media screen and (max-width: 1268px) {
    margin-top: 47px;
    height: fit-content;
  }

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const TitleCover = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    color: ${(props) => props.theme["gray-900"]};
    line-height: 1.2;
    font-family: "Baloo 2", cursive;
    font-size: 3rem;
    font-weight: bolder;
  }

  p {
    color: ${(props) => props.theme["gray-800"]};
    font-size: 1.25rem;
  }
`;

export const IntroItems = styled.aside`
  width: fit-content;
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.25rem 2.5rem;

  @media screen and (max-width: 768px) {
    & {
      grid-template-columns: 1fr;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    & span {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 999px;
    }

    &:nth-child(1) span {
      background: ${(props) => props.theme["yellow-800"]};
    }

    &:nth-child(2) span {
      background: ${(props) => props.theme["gray-700"]};
    }

    &:nth-child(3) span {
      background: ${(props) => props.theme["yellow-400"]};
    }

    &:nth-child(4) span {
      background: ${(props) => props.theme["purple-400"]};
    }
    span {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const HomeContainer = styled.main`
  min-width: 100%;
  max-width: 70rem;
  display: flex;
  justify-content: center;
  padding: 0 8rem;

  & > div {
    width: 76rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    padding-top: 3rem;
  }

  & > h1 {
    color: ${(props) => props.theme["gray-900"]};
    line-height: 1.2;
    font-family: "Baloo 2", cursive;
    font-size: 2rem;
    line-height: 130%;
    font-weight: bold;
  }

  section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 4fr));
    justify-items: center;
    grid-row-gap: 2.5rem;
    grid-column-gap: 2rem;
    margin-top: 3.375rem;
  }
`;
