import { FormContainer, FormInputs } from "./styles";

export function LocationoForm() {
  return (
    <FormContainer>
      <FormInputs>
        <div>
          <input type="text" name="CEP" id="CEP" placeholder="CEP" />
        </div>
        <div>
          <input type="text" name="Rua" id="Rua" placeholder="Rua" />
        </div>
        <div>
          <input type="text" name="Número" id="Número" placeholder="Número" />

          <label htmlFor="Complemento">Opcional</label>
          <input
            type="text"
            name="Complemento"
            id="Complemento"
            placeholder="Complemento"
          />
        </div>
        <div>
          <input type="text" name="Bairro" id="Bairro" placeholder="Bairro" />
          <input type="text" name="Cidade" id="Cidade" placeholder="Cidade" />
          <input type="text" name="UF" id="UF" placeholder="UF" />
        </div>
      </FormInputs>
    </FormContainer>
  );
}
