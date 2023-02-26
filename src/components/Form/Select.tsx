interface SelectProps {
  options: string[] | number[]
  optionName: string
}

export default function Select({ options, optionName }: SelectProps) {
  return (
    <div className="grow">
      <select
        className="w-full rounded-sm focus:outline-none text-xs md:text-base border border-gray-500 px-1 py-3 md:p-3 bg-white"
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
