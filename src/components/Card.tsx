import CardFront from "./Card/CardFront"
import { Expires, Sides } from "../lib/types"
import CardBack from "./Card/CardBack"
import { useState } from "react"
import CardWrapper from "./Card/CardWrapper"

interface Props {
  cardNumber: string
  name?: string
  expires?: Expires
}

function Card({ cardNumber, name, expires }: Props) {
  // Front = 1, Back = 2
  const [side, setSide] = useState<Sides>(1)

  let censoredCardNumber: string[] = []
  if (cardNumber.length === 0)
    censoredCardNumber = ["XXXX", "XXXX", "XXXX", "XXXX"]
  else
    censoredCardNumber = [
      cardNumber.slice(0, 4),
      cardNumber.slice(4, 8).replace(/[0-9]/g, "#"),
      cardNumber.slice(8, 12).replace(/[0-9]/g, "#"),
      cardNumber.slice(12),
    ]

  function toggleSide() {
    setSide(side === 1 ? 2 : 1)
  }

  // Deveesh Part
  return (
    <div className="card rounded-t-2xl flex items-center justify-center">
      <CardWrapper>
        <>
          <CardFront
            onClick={toggleSide}
            censoredCardNumber={censoredCardNumber}
            name={name}
            expires={expires}
          />
          <CardBack onClick={toggleSide} cvv={123} />
        </>
      </CardWrapper>
    </div>
  )
}

export default Card
