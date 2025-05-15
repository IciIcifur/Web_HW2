import x from "../assets/x.png";
import { useContext } from "react";
import { BreedSearchContext } from "./allBreeds.tsx";

export default function BreedSearch() {
  const { searchValue, setSearchValue } = useContext(BreedSearchContext);

  return (
    <div className="flex w-full lg:justify-end justify-start">
      <div className=" flex flex-col gap-1 w-96">
        <p className="text-neutral-500 ml-1">Search for a breed</p>
        <div className="flex items-center">
          <input
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            className="p-2 bg-neutral-800 border-[1.5px] transition-all duration-300 border-orange-500 rounded-xl w-full
        focus:outline-none focus:border-yellow-500"
            placeholder="Start typing a breed name..."
            type="text"
          />
          {searchValue && (
            <button
              className="-ml-12 p-1 rounded-xl border-none hover:bg-neutral-500 hover:bg-opacity-20
              transition-all duration-300 h-fit w-fit"
              onClick={() => setSearchValue("")}
            >
              <img src={x} alt="clear" className="h-6" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
