import { useState, ChangeEvent, useEffect } from "react";
import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { PaymentContainer, PaymentHeader } from "./styles";

interface PaymentOption {
  id: string;
  icon: JSX.Element;
  label: string;
}

interface PaymentProps {
  selectedPayment: (pay: string) => void;
}

export default function Payment({ selectedPayment }: PaymentProps) {
  const [selectedOption, setSelectedOption] = useState<string>("creditCard");

  function handleOptionChange(event: ChangeEvent<HTMLInputElement>) {
    setSelectedOption(event.target.value);
  }
  
  useEffect(() => {
    selectedPayment(selectedOption);
  }, [selectedOption, selectedPayment]);

  const paymentOptions: PaymentOption[] = [
    {
      id: "creditCard",
      icon: <CreditCard size={16} color="#8047f8" />,
      label: "CARTÃO DE CRÉDITO",
    },
    {
      id: "debitCard",
      icon: <Bank size={16} color="#8047f8" />,
      label: "CARTÃO DE DÉBITO",
    },
    {
      id: "cash",
      icon: <Money size={16} color="#8047f8" />,
      label: "DINHEIRO",
    },
  ];

  return (
    <PaymentContainer>
      <PaymentHeader>
        <CurrencyDollar size={22} color="#8047f8" />
        <aside>
          <span>Pagamento</span>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </aside>
      </PaymentHeader>
      <div>
        {paymentOptions.map((option) => (
          <label
            htmlFor={option.id}
            key={option.id}
            className={selectedOption === option.id ? "selected" : ""}
          >
            {option.icon}
            <span>{option.label}</span>
            <input
              type="radio"
              name="paymentMethod"
              id={option.id}
              value={option.id}
              checked={selectedOption === option.id}
              onChange={handleOptionChange}
            />
          </label>
        ))}
      </div>
    </PaymentContainer>
  );
}
