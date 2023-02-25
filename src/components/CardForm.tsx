import Card from "./Card"
import Form from "./Form"

function CardForm() {
  return (
    <div className="grid grid-rows-2 h-4/5 border bg-white p-2 w-11/12 md:w-3/5 lg:w-2/5 rounded-2xl">
      <Card />
      <Form />
    </div>
  )
}

export default CardForm
