interface InputProps {
  label: string
  text?: string
  onChange?: () => void
  className?: string
}

export default function Input({
  label,
  text,
  className,
  onChange,
}: InputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="text-gray-500 text-sm">
        {label}
        <input
          type="text"
          onChange={onChange}
          className={`w-full focus:outline-none rounded-sm border border-gray-500 p-3 ${className}`}
        />
      </label>
    </div>
  )
}
