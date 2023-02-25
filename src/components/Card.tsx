interface Props {
  cardNumber: string
}

function Card({ cardNumber }: Props) {
  let censoredCard: string[] = []
  const cardStart = cardNumber.slice(0, 4)
  const cardEnd = cardNumber.slice(12)
  if (cardNumber.length < 16) {
    censoredCard = ["####", "####", "####", "####"]
  } else {
    censoredCard = [cardStart, "####", "####", cardEnd]
  }
  // Deveesh Part
  return (
    <div className="card rounded-t-2xl flex items-center justify-center">
      <div className="credit-card w-5/6 md:w-4/5 2xl:w-3/4 aspect-video bg-red-500 rounded-2xl shadow-lg shadow-black z-20">
        <div>
          <img
            src="/visa.png"
            alt="Visa"
            className="absolute w-[15%] md:w-20 top-[8%] right-[3%]"
          />
          <img
            src="/chip.png"
            alt="Chip"
            className="absolute w-[10%] md:w-12 top-[3%] left-[3%] rotate-[-16deg]"
          />
        </div>
        <div className="absolute w-full text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-center text-white text-3xl font-semibold tracking-wider drop-shadow-lg">
            {censoredCard.map((cardNumber) => (
              <p>&nbsp; {cardNumber} &nbsp;</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
