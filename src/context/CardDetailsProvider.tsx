import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react"

interface CardDetails {
  cardNumber: string
  setCardNumber: Dispatch<SetStateAction<string>>
  cardHolder: string
  setCardHolder: Dispatch<SetStateAction<string>>
  cardExpireDate: string
  setCardExpireDate: Dispatch<SetStateAction<string>>
}

export const CardDetailsContext = createContext<Partial<CardDetails>>({})

function CardDetailsProvider({ children }: PropsWithChildren) {
  const [cardNumber, setCardNumber] = useState("")
  const [cardHolder, setCardHolder] = useState("")
  const [cardExpireDate, setCardExpireDate] = useState("")

  return (
    <CardDetailsContext.Provider
      value={{
        cardNumber,
        setCardNumber,
        cardHolder,
        setCardHolder,
        cardExpireDate,
        setCardExpireDate,
      }}
    >
      {children}
    </CardDetailsContext.Provider>
  )
}

export default CardDetailsProvider
