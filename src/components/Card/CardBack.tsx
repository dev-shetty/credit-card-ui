import { forwardRef, RefObject, useContext } from "react"
import { CardDetailsContext } from "../../context/CardDetailsProvider"

interface Props {
  onClick: () => void
  cvv: number
  cardRef: RefObject<HTMLDivElement>
}

interface CVVProps {
  CVV: string
}

function CardBack({ onClick, cardRef, cvv }: Props) {
  const { CVV } = useContext(CardDetailsContext)
  return (
    <div
      onClick={onClick}
      className="card__face card__face__back h-full cursor-pointer"
    >
      <img
        src="/visa.png"
        alt="Visa"
        className="absolute w-[15%] md:w-20 bottom-[5%] left-[3%] grayscale"
      />
      <div className="flex absolute top-[15%] w-full h-[20%] bg-black"></div>
      <div className="white-strip flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[15%]">
        <div className="h-full w-[80%] bg-white"></div>
        <CVVComponent CVV={CVV!} ref={cardRef} />
      </div>
      <div className="absolute bottom-[20%] w-[30%] left-[10%] bg-white h-[10%]"></div>
      <div className="absolute bottom-[5%] right-[5%] text-white text-[0.5rem] md:text-sm">
        Built by Tejas and Deveesh
      </div>
    </div>
  )
}

const CVVComponent = forwardRef((props: CVVProps, ref: any) => {
  const { CVV } = props
  return (
    <div
      className="cvv h-full w-[20%] bg-gray-300 flex items-center justify-center text-[0.75rem] md:text-xl tracking-widest"
      ref={ref}
    >
      {CVV?.slice(0, 3)}
    </div>
  )
})

export default CardBack
