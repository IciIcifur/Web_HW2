import './App.css'
import useFetch from "./hooks/useFetch.ts";
import {getBreeds} from "./services/requests.ts";

function App() {
    const { data, loading, error } = useFetch(getBreeds);

      return (
        <>
            {data?.message?  Object.keys(data.message).map((breed) => {return <p>{breed}</p>}) : null}
            <a href='https://www.flaticon.com/free-icons/pet-grooming' title="pet grooming icons">Logo credit</a>
        </>
      )
}

export default App
