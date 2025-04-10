import { useState } from "react";
import BreedCarousel from "./breedCarousel.tsx";

export default function BreedCard({ breed }: { breed: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      onBlur={() => setIsOpen(false)}
      className="flex flex-col gap-2 p-4 w-full max-w-[640px] h-fit border-[1.5px] border-neutral-500 rounded-xl
      hover:border-amber-500 transition-all duration-300 hover:text-amber-500 focus:outline-none focus:border-amber-500
      focus:text-amber-500"
    >
      <p>{breed}</p>
      {isOpen && <BreedCarousel breed={breed} />}
    </button>
  );
}
