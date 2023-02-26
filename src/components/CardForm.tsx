import Card from "./Card"
import Form from "./Form"

function CardForm() {
  return (
    <div className="grid md:grid-rows-2 h-4/5 shadow-lg p-2 w-11/12 md:w-4/5 lg:w-3/5 xl:w-2/5 rounded-2xl">
      <Card cardNumber={"1234567890123456"} />
      <Form />
    </div>
  )
}

export default CardForm
