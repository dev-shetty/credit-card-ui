import React from 'react'
interface InputProps {
  label: string;
  text?: string;
  className?: string;
}

export default function Input({
  label,
  text,
  className,
}: InputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={label}
        className=" text-gray-500 text-sm
      ">
        {label}
        <input
          type="text"
          placeholder=""
          className={`w-full  focus:outline-none rounded-sm  py-1 px-4
          border border-gray-500 p-3 md:p-3 ${className}`}
        />
      </label>
    </div>
  )
}
