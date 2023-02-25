interface SelectProps {
  options: string[] | number[]
  optionName: string
}

export default function Select({ options, optionName }: SelectProps) {
  return (
    <div className="grow">
      <select
        className="w-full rounded-lg focus:ring-1 focus:ring-offset-2 focus:ring-primary focus:outline-none  border border-gray-500 p-2 bg-white"
        id="cardMonth"
        title="Month"
        data-ref="cardDate"
      >
        <option defaultValue="" disabled selected>
          {optionName}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
