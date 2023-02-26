import { Expires } from "../../lib/types"
import CardWrapper from "./CardWrapper"

interface Props {
  censoredCardNumber: string[]
  name?: string
  expires?: Expires
  onClick: () => void
}

function CardFront({ censoredCardNumber, name, expires, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="card__face card__face__front h-full cursor-pointer"
    >
      <div>
        <img
          src="/visa.png"
          alt="Visa"
          className="absolute w-[15%] md:w-20 top-[8%] right-[3%]"
        />
        <img
          src="/chip.png"
          alt="Chip"
          className="absolute w-[10%] md:w-12 top-[3%] left-[3%] rotate-[-18deg] md:rotate-[-16.5deg]"
        />
      </div>
      <div className="absolute w-full text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-center items-center text-white sm:text-3xl font-semibold tracking-wider drop-shadow-lg">
          {censoredCardNumber.map((cardNumber, index) => (
            <p key={index}>&nbsp;{cardNumber}&nbsp;</p>
          ))}
        </div>
      </div>
      <div className="absolute text-white px-[5%] bottom-0 w-full h-[30%] flex items-center justify-between text-xs sm:text-base">
        <div>
          <p>Card Holder</p>
          <p className="uppercase font-bold sm:text-xl">
            {name ? name : "Full Name"}
          </p>
        </div>
        <div>
          <p>Expires</p>
          <p className="uppercase font-bold sm:text-xl">
            {expires ? expires.month / expires.year : "MM/YY"}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardFront
