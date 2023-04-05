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
  CVV: string
  setCVV: Dispatch<SetStateAction<string>>
  isCardSubmitted: boolean
  setIsCardSubmitted: Dispatch<SetStateAction<boolean>>
}

export const CardDetailsContext = createContext<Partial<CardDetails>>({})

function CardDetailsProvider({ children }: PropsWithChildren) {
  const [cardNumber, setCardNumber] = useState("")
  const [cardHolder, setCardHolder] = useState("")
  const [cardExpireDate, setCardExpireDate] = useState("")
  const [CVV, setCVV] = useState("")
  const [isCardSubmitted, setIsCardSubmitted] = useState(true)

  return (
    <CardDetailsContext.Provider
      value={{
        cardNumber,
        setCardNumber,
        cardHolder,
        setCardHolder,
        cardExpireDate,
        setCardExpireDate,
        CVV,
        setCVV,
        isCardSubmitted,
        setIsCardSubmitted,
      }}
    >
      {children}
    </CardDetailsContext.Provider>
  )
}

export default CardDetailsProvider
