import { useContext } from "react"
import { CardDetailsContext } from "../context/CardDetailsProvider"

function SubmissionUI() {
  const {
    setIsCardSubmitted,
    setCardNumber,
    setCardHolder,
    setCardExpireDate,
    setCVV,
  } = useContext(CardDetailsContext)

  function goBack() {
    setIsCardSubmitted!(false)
    setCardNumber!("")
    setCardHolder!("")
    setCardExpireDate!("")
    setCVV!("")
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center text-xl">
        <iframe
          src="https://giphy.com/embed/YlSR3n9yZrxfgVzagm"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
        <p className="text-2xl uppercase text-center my-4">
          Your Card has been saved
        </p>
        <button
          onClick={goBack}
          className="mt-2 bg-indigo-400 py-1 rounded-lg hover:bg-indigo-500"
        >
          Go back
        </button>
      </div>
    </div>
  )
}

export default SubmissionUI
