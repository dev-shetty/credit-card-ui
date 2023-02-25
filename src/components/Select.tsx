import React from 'react'

interface SelectProps {
    options: string[]|number[];
    optionName: string;
}

export default function Select({
    options,
    optionName,

}: SelectProps) {

    
  return (
      <div className='mt-4'>
          <select className="w-full h-10 rounded-lg  focus:ring-1 focus:ring-offset-2 focus:ring-primary focus:outline-none mt-3 border border-gray-500 p-2
          " id="cardMonth" 
            title='Month'
              data-ref="cardDate">
              <option value="" disabled selected>{optionName}</option>
              {options.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
              ))}
              
                  
          </select>
    </div>
  )
}
