import { styled } from "styled-components";

export const FormContainer = styled.form`
  padding: 0 2.5rem 2.5rem;
  display: flex;
`;

export const FormInputs = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  input {
    font-size: 0.875rem;
    border: 1px solid ${(props) => props.theme["gray-400"]};
    background: ${(props) => props.theme["gray-300"]};
    padding: 0.75rem;
    width: 12.5rem;
    color: ${props => props.theme["gray-700"]};
  }

  input:focus {
    box-shadow: 0 0 0 2px ${props => props.theme["yellow-800"]};
  }

  #Rua,
  #Complemento {
    flex: 1;
  }

  label {
    color: ${props => props.theme["gray-600"]};
    user-select: none;
    position: absolute;
    right: 0.75rem;
    font-style: italic;
    font-size: 0.75rem;
  }

  #Cidade {
    width: 17.25rem;
  }

  #UF {
    width: 3.75rem;
  }
`;
