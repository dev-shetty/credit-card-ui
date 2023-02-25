import Card from "./Card"
import Form from "./Form"

function CardForm() {
  return (
    <div className="grid grid-rows-2 h-4/5 border border-gray-500 p-2 w-11/12 md:w-3/5 lg:w-2/5 rounded-lg">
      <Card />
      <Form />
    </div>
  )
}

export default CardForm
