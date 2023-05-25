import { useContext, useState, useEffect } from "react";
import { MapPinLine } from "@phosphor-icons/react";
import {
  CheckoutContainer,
  CompletedOrder,
  ListOrder,
  LocationHeader,
  LocationOrder,
  SelectedCoffe,
  ValueArea,
} from "./styles";
import { LocationForm } from "./LocationForm";
import Payment from "./Payment";
import { CoffeCardCheckout } from "./CoffeCard";
import { useNavigate } from "react-router-dom";
import { DrinkContext } from "../../contexts/DrinkContext";
import * as z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LocationContext } from "../../contexts/LocationContext";

const LocationFormValidationSchema = z.object({
  postalCode: z.string().min(1, "Informe seu CEP"),
  street: z.string(),
  numberStreet: z.number().min(1, "O número inválido"),
  complement: z.string().optional(),
});

type LocationFormData = z.infer<typeof LocationFormValidationSchema>;

export function Checkout() {
  const [price, setPrice] = useState<number>(0);
  const [payment, setPayment] = useState("creditCard");

  const { drinksCart } = useContext(DrinkContext);
  const { addCurrentPlace } = useContext(LocationContext);

  const newLocationForm = useForm<LocationFormData>({
    resolver: zodResolver(LocationFormValidationSchema),
    defaultValues: {
      postalCode: "",
      street: "",
      numberStreet: 0,
      complement: "",
    },
  });
  const {
    handleSubmit,
    reset,
  } = newLocationForm;

  useEffect(() => {
    calculateTotal();
    if (drinksCart.length === 0) navigate('/')
    console.log(payment);
  }, [drinksCart]);

  const delivery = 3.5;
  const totalItens = price;
  const totalPrice = delivery + totalItens;

  function selectedPayment(paymentData: string) {
    setPayment(paymentData);
  }

  function numberToString(number: number) {
    return number.toFixed(1).replace(".", ",") + "0";
  }

  function calculateTotal() {
    let totalPrice = 0;

    drinksCart.forEach((drink) => {
      totalPrice += drink.price * drink.quantity;
    });

    setPrice(totalPrice);
  }

  const navigate = useNavigate();
  function handleAddCurrentPlace(data: LocationFormData) {
    navigate("/sucess");
    addCurrentPlace(data, payment);
    reset()
  }  
  
  return (
    <>
      <CheckoutContainer>
        <form onSubmit={handleSubmit(handleAddCurrentPlace)}>
          <CompletedOrder>
            <h1>Complete seu pedido</h1>

            <LocationOrder>
              <LocationHeader>
                <MapPinLine size={22} color="#c47f17" />
                <aside>
                  <span>Endereço de Entrega</span>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </aside>
              </LocationHeader>

              <FormProvider {...newLocationForm}>
                <LocationForm />
              </FormProvider> 
            </LocationOrder>

            <Payment selectedPayment={selectedPayment} />
          </CompletedOrder>

          <SelectedCoffe>
            <h1>Cafés selecionados</h1>
            <div>
              <ListOrder>
                {drinksCart.map((drink) => {
                  return (
                    <CoffeCardCheckout
                      key={drink.id}
                      id={drink.id}
                      image={drink.image}
                      name={drink.name}
                      quantity={drink.quantity}
                      price={drink.price}
                    />
                  );
                })}

                <ValueArea>
                  <div>
                    <span>Total de itens</span>
                    <span>R$ {numberToString(totalItens)}</span>
                  </div>
                  <div>
                    <span>Entrega</span>
                    <span>R$ {numberToString(delivery)}</span>
                  </div>
                  <div>
                    <span>Total</span>
                    <span>R$ {numberToString(totalPrice)}</span>
                  </div>
                </ValueArea>
                <button type="submit">CONFIRMAR PEDIDO</button>
              </ListOrder>
            </div>
          </SelectedCoffe>
        </form>
      </CheckoutContainer>
    </>
  );
}
