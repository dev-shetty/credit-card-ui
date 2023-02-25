import Button from "./Form/Button"
import Input from "./Form/Input"
import Select from "./Form/Select"

function Form() {
  const months = Array.from({ length: 12 }, (_, i) => i + 1)
  const years = Array.from({ length: 12 }, (_, i) => i + 2021)
  return (
    <div className="  shadow-2xl rounded-xl px-[10%] bg-white w-full">
      <div className="flex flex-col gap-2 md:gap-4">
        <Input label="Card Name" />
        <Input label="Card Holders" />
        <div className="grid grid-cols-[70%_30%]  ">
          <div className="flex flex-col gap-1">
            <label htmlFor="cardName" className=" text-gray-500 text-sm">
              Expiration Date
            </label>
            <div className="flex w-full gap-4 pr-4">
              <Select options={months} optionName="Month" />
              <Select options={years} optionName="Year" />
            </div>
          </div>
          <Input label="CVV" className="text-right" />
        </div>
        <div className="mx-auto w-full bg-white shadow-md rounded-lg md:mt-2">
          <Button />
        </div>
      </div>
    </div>
  )
}

export default Form
