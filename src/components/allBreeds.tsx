import { useEffect, useState } from "react";
import BreedCard from "./breedCard.tsx";

export default function AllBreeds({ data }: { data: any }) {
  const [breedList, setBreedList] = useState([] as string[]);

  useEffect(() => {
    if (data.message) {
      const upperCasedBreeds = Object.keys(data.message).map((breed) =>
        breed.toUpperCase(),
      );
      setBreedList(upperCasedBreeds);
    }
  }, [data]);

  return (
    <div className="flex gap-2 flex-wrap">
      {breedList.map((breed) => (
        <BreedCard key={breed} breed={breed} />
      ))}
    </div>
  );
}
