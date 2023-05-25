import { styled } from "styled-components";

export const FormContainer = styled.div`
  padding: 0 2.5rem 2.5rem;
  display: flex;
  justify-content: center;
`;

export const FormInputs = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  div {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
  }

  input {
    border-radius: 4px;
    font-size: 0.875rem;
    border: 1px solid ${(props) => props.theme["gray-400"]};
    background: ${(props) => props.theme["gray-300"]};
    padding: 0.75rem;
    color: ${(props) => props.theme["gray-700"]};
    width: calc(10.5rem - 0.75rem);
  }

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type="number"] {
    appearance: textfield;
  }

  input:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme["yellow-800"]};
  }

  input:disabled {
    background: ${(props) => props.theme["gray-500"]};
    cursor: not-allowed;
  }

  #Rua,
  #Complemento,
  #Bairro {
    flex: 1;
  }

  label {
    color: ${(props) => props.theme["gray-600"]};
    user-select: none;
    position: absolute;
    right: 0.75rem;
    font-style: italic;
    font-size: 0.75rem;
  }

  #Cidade {
    max-width: 17.25rem;
  }

  #UF {
    max-width: 3.75rem;
  }
`;
