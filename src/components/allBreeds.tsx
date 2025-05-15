import { createContext, useEffect, useState } from "react";
import BreedCard from "./breedCard.tsx";
import BreedSearch from "./breedSearch.tsx";

interface BreedSearchContextType {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export const BreedSearchContext = createContext<BreedSearchContextType>({
  searchValue: "",
  setSearchValue: null,
});

export default function AllBreeds({ data }: { data: any }) {
  const [searchValue, setSearchValue] = useState("");
  const [filteredBreedList, setFilteredBreedList] = useState([] as string[]);
  const [breedList, setBreedList] = useState([] as string[]);

  useEffect(() => {
    if (data.message) {
      const upperCasedBreeds = Object.keys(data.message).map((breed) =>
        breed.toUpperCase(),
      );
      setBreedList(upperCasedBreeds);
    }
  }, [data]);

  useEffect(() => {
    if (searchValue.length) {
      setFilteredBreedList(
        breedList.filter((breed) => {
          return breed.toLowerCase().startsWith(searchValue.toLowerCase());
        }),
      );
    } else {
      setFilteredBreedList(breedList);
    }
  }, [searchValue, breedList]);

  return (
    <BreedSearchContext.Provider value={{ searchValue, setSearchValue }}>
      <BreedSearch />
      {searchValue && filteredBreedList.length === 0 && <p>Nothing found...</p>}
      <div className="flex gap-2 flex-wrap justify-between">
        {filteredBreedList.map((breed) => (
          <BreedCard key={breed} breed={breed} />
        ))}
      </div>
    </BreedSearchContext.Provider>
  );
}
