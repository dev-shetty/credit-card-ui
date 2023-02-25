import CardWrapper from "./CardWrapper"

interface Props {
  onClick: () => void
}

function CardBack({ onClick }: Props) {
  return (
    <CardWrapper>
      <div onClick={onClick} className="h-full cursor-pointer">
        <></>
      </div>
    </CardWrapper>
  )
}

export default CardBack
