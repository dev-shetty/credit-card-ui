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
          className={`w-full rounded-lg focus:ring-1 focus:ring-offset-2 focus:ring-primary focus:outline-none border border-gray-500 p-2 ${className}`}
        />
      </label>
    </div>
  )
}
