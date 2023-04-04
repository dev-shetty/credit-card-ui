import CardFront from "./Card/CardFront"
import CardBack from "./Card/CardBack"
import CardWrapper from "./Card/CardWrapper"

interface Props {
  cardNumber: string
}

function Card({ cardNumber }: Props) {
  let censoredCardNumber: string[] = []
  censoredCardNumber = [
    cardNumber.slice(0, 4).padEnd(4, "X"),
    cardNumber.slice(4, 8).padEnd(4, "X"),
    cardNumber.slice(8, 12).padEnd(4, "X"),
    cardNumber.slice(12).padEnd(4, "X"),
  ]

  return (
    <div className="card rounded-t-2xl flex items-center justify-center">
      <CardWrapper>
        <>
          <CardFront censoredCardNumber={censoredCardNumber} />
          <CardBack />
        </>
      </CardWrapper>
    </div>
  )
}

export default Card
