import { useContext } from "react"
import { CardDetailsContext } from "../context/CardDetailsProvider"
import Card from "./Card"
import Form from "./Form"

function CardForm() {
  const { cardNumber } = useContext(CardDetailsContext)
  return (
    <div className="grid md:grid-rows-2 h-[90%] shadow-lg p-2 w-11/12 md:w-4/5 lg:w-3/5 xl:w-2/5 rounded-2xl">
      {/* Only 16 digits will appear */}
      <Card cardNumber={cardNumber!.slice(0, 16)} />
      <Form />
    </div>
  )
}

export default CardForm
