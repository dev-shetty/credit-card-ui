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
  censoredCardNumber = [
    cardNumber.slice(0, 4).padEnd(4, "X"),
    cardNumber.slice(4, 8).padEnd(4, "X"),
    cardNumber.slice(8, 12).padEnd(4, "X"),
    cardNumber.slice(12).padEnd(4, "X"),
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
