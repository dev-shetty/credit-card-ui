import Button from "./Button"
import Input from "./Input"

function Form() {
  // Tejas Part (Your side is black because yout life is B&W :))
  return <div className="relative shadow-2xl rounded-xl p-8 md:p-12 lg:p-16 xl:p-20 2xl:p-24 bg-white w-full h-full
  ">
    <Input
      label="Card Name"
      placeholder=""
    />
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-12
    ">
    <Button/>
    </div>
  </div>
}

export default Form
