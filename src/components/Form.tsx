import Button from "./Button"
import Input from "./Input"
import Select from "./Select"

function Form() {
  const months = Array.from({ length: 12 }, (_, i) => i + 1)
  const years = Array.from({ length: 12 }, (_, i) => i + 2021)
  return <div className="relative shadow-2xl rounded-xl p-8 md:p-12 lg:p-16 xl:p-20 2xl:p-24 bg-white w-full h-inherit
  ">
    <div className="transform -translate-y-1/2 absolute  w-full  left-0 px-12  top-[40%]
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

      <div className="grid grid-cols-2 gap-4  md:gap-8 md:grid-cols-3
    ">
        
        <Select
          options={months}
          optionName="Month"
        />
        <Select
          options={years}
          optionName="Year"
        />
        <div>
          <Input
            label="CVV"
            className="md:w-2/4 ml-4 mt-7 text-right p-4"
          />
        </div>
      </div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-8
    ">
        <Button />
      </div>
    </div>
  </div>
}

export default Form
