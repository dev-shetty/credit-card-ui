import CardFront from "./Card/CardFront"
import { Expires, Sides } from "../lib/types"
import CardBack from "./Card/CardBack"
import { useState } from "react"

interface Props {
  cardNumber: string
  name?: string
  expires?: Expires
}

function Card({ cardNumber, name, expires }: Props) {
  // Front = 1, Back = 2
  const [side, setSide] = useState<Sides>(1)

  let censoredCardNumber: string[] = []
  const cardStart = cardNumber.slice(0, 4)
  const cardEnd = cardNumber.slice(12)
  if (cardNumber.length < 16) {
    censoredCardNumber = ["####", "####", "####", "####"]
  } else {
    censoredCardNumber = [cardStart, "####", "####", cardEnd]
  }

  function toggleSide() {
    if (side === 1) setSide(2)
    else setSide(1)
  }

  // Deveesh Part
  return (
    <div className="card rounded-t-2xl flex items-center justify-center">
      {side === 1 ? (
        <CardFront
          onClick={toggleSide}
          censoredCardNumber={censoredCardNumber}
          name={name}
          expires={expires}
        />
      ) : (
        <CardBack onClick={toggleSide} />
      )}
    </div>
  )
}

export default Card
