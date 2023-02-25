function Card() {
  // Deveesh Part
  return (
    <div className="card rounded-t-2xl flex items-center justify-center">
      <div className="credit-card w-5/6 md:w-4/5 2xl:w-3/4 aspect-video bg-red-500 rounded-2xl shadow-lg shadow-black">
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
    </div>
  )
}

export default Card
