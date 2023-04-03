import { ChangeEvent, MutableRefObject, RefObject } from "react"

type Date = {
  date: string
}

interface SelectProps {
  options: string[] | number[]
  optionName: string
  ref: RefObject<HTMLSelectElement | Date>
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

export default function Select({
  options,
  optionName,
  ref,
  onChange,
}: SelectProps) {
  return (
    <div className="grow">
      <select
        className="w-full rounded-sm focus:outline-none text-xs md:text-base border border-gray-500 px-1 py-3 md:p-3 bg-white"
        id="cardMonth"
        title="Month"
        name={optionName}
        ref={ref as RefObject<HTMLSelectElement>}
        onChange={onChange}
      >
        <option defaultValue="" disabled selected>
          {/* IDK why but I liked this way XD */}
          {optionName.replace(optionName[0], optionName[0].toUpperCase())}
        </option>
        {options.map((option, index) => (
          <option key={index} defaultValue={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
