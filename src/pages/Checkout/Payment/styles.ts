import { styled } from "styled-components";

export const PaymentContainer = styled.div`
  border-radius: 6px;
  background: ${(props) => props.theme["gray-200"]};
  margin-top: 0.75rem;
  
  & > div {
    padding: 0 2.5rem 2.5rem 2.5rem;
    display: flex;
    gap: 0.75rem;
    
    button {
      background: ${(props) => props.theme["gray-400"]};
      display: flex;
      border-radius: 6px;
      gap: 0.75rem;
      padding: 1rem;
      flex: 1;
      cursor: pointer;
      transition: all 0.2s;
    }

    button:hover {
      background: ${(props) => props.theme["gray-500"]};
    }

    span {
      line-height: 1.6;
      font-size: 0.75rem;
      color: ${(props) => props.theme["gray-800"]};
    }
  }
`;

export const PaymentHeader = styled.header`
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
