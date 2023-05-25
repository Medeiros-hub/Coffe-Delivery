import { useContext, useEffect, useState } from "react";
import { FormContainer, FormInputs } from "./styles";
import { LocationContext } from "../../../contexts/LocationContext";
import { useFormContext } from "react-hook-form";

export function LocationForm() {
  const { location, cepBlur } = useContext(LocationContext);
  const [cep, setCep] = useState("");
  const [formatedCep, setFormatedCep] = useState("");
  const { register } = useFormContext();

  function handleCepBlur(e: any) {
    setCep(e.target.value);
  }

  useEffect(() => {
    setFormatedCep(
      cep
        .replace(/\D/g, "")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{3})\d+?$/, "$1")
    );
    cepBlur(cep);
  }, [cep]);

  return (
    <FormContainer>
      <FormInputs>
        <div>
          <input
            type="text"
            id="CEP"
            placeholder="CEP"
            autoComplete="off"
            value={formatedCep}
            onChangeCapture={handleCepBlur}
            onBlurCapture={handleCepBlur}
            {...register("postalCode")}
          />
        </div>
        <div>
          <input
            type="text"
            id="Rua"
            placeholder={"Rua"}
            value={location.logradouro || ""}
            disabled
            {...register("street")}
          />
        </div>
        <div>
          <input
            type="number"
            id="Número"
            placeholder="Número"
            {...register("numberStreet", { valueAsNumber: true, value: "" })}
          />

          <label htmlFor="Complemento">Opcional</label>
          <input
            type="text"
            id="Complemento"
            placeholder="Complemento"
            {...register("complement")}
          />
        </div>
        <div>
          <input
            type="text"
            name="Bairro"
            id="Bairro"
            placeholder="Bairro"
            value={location.bairro || ""}
            disabled
          />
          <input
            type="text"
            name="Cidade"
            id="Cidade"
            placeholder="Cidade"
            value={location.localidade || ""}
            disabled
          />
          <input
            type="text"
            name="UF"
            id="UF"
            placeholder="UF"
            value={location.uf || ""}
            disabled
          />
        </div>
      </FormInputs>
    </FormContainer>
  );
}
