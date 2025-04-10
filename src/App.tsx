import "./App.css";
import useFetch from "./hooks/useFetch.ts";
import { getBreeds } from "./services/requests.ts";
import ErrorCard from "./components/errorCard.tsx";
import AllBreeds from "./components/allBreeds.tsx";
import DoggyHeader from "./components/doggyHeader.tsx";
import DoggyFooter from "./components/doggyFooter.tsx";

function App() {
  const { data, loading, error } = useFetch(getBreeds);

  return (
    <div className="absolute left-0 top-0 w-full h-fit p-16 gap-8 flex flex-col">
      <DoggyHeader />
      {error ? (
        <ErrorCard error={error} />
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <AllBreeds data={data} />
      )}
      <DoggyFooter />
    </div>
  );
}

export default App;
