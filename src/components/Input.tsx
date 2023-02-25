import React from 'react'
interface InputProps {
  label: string;
  placeholder?: string;
  text?: string;
}

export default function Input({
  label,
  placeholder,
  text,

}: InputProps) {
  return (
    <div>
      <label htmlFor="cardName" className=" text-gray-500 text-sm
      ">
        {label}
      </label>
      <input type="text" placeholder={placeholder} className="w-full h-10 rounded-lg border focus:ring-1 focus:ring-offset-2
       focus:ring-primary focus:outline-none mt-3
         p-2" />
    </div>
  )
}
