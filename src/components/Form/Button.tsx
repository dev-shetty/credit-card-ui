interface Props {
  onClick?: () => void
}

export default function Button({ onClick }: Props) {
  return (
    <button
      type="submit"
      className="inline-flex items-center bg-primary w-full  h-12  text-white text-lg font-medium focus:outline-none hover:ring-2 hover:ring-offset-2  focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-sm justify-center shadow-lg hover:bg-primary-dark transition-all"
      title="Submit"
      onClick={onClick}
    >
      Submit
    </button>
  )
}
