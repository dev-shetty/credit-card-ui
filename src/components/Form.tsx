import Button from "./Button"
import Input from "./Input"
import Select from "./Select"

function Form() {
  const months = Array.from({ length: 12 }, (_, i) => i + 1)
  const years = Array.from({ length: 12 }, (_, i) => i + 2021)
  return <div className="relative shadow-2xl rounded-xl p-8 md:p-12 lg:p-16 xl:p-20 2xl:p-24 bg-white w-full h-full
  ">
    <div className="transform -translate-y-1/2 absolute top-[30%] w-full  left-0 px-12
    ">
    <Input
      label="Card Name"
    />
    <Input
      label="Card Holders"
      />
      <label htmlFor="cardName" className=" text-gray-500 text-sm
      ">
        Expiration Date
      </label>

      <div className="flex gap-4 justify-between debug
    ">
        <Select
          options={months}
          optionName="Month"
        />
        <Select
          options={years}
          optionName="Year"
        />
        <Input
          label="CVV"
          className="w-1/3 ml-4 mt-7"
        />
    </div>
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-12
    ">
    <Button/>
      </div>
    </div>
  </div>
}

export default Form
