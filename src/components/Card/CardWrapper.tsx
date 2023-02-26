import { ChildrenProps } from "../../lib/types"

function CardWrapper({ children }: ChildrenProps) {
  return (
    <div className="credit-card select-none w-5/6 md:w-4/5 2xl:w-3/4 aspect-video bg-red-500 rounded-2xl shadow-lg shadow-black z-20">
      {children}
    </div>
  )
}

export default CardWrapper
