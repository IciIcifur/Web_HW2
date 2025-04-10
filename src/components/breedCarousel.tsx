import { useEffect, useState } from "react";
import { getBreedPhotos } from "../services/requests.ts";

export default function BreedCarousel({ breed }: { breed: string }) {
  const [error, setError] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    getBreedPhotos(breed.toLowerCase())
      .then((data) => {
        setImageUrls(data.message);
        setError(null);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  }, [breed]);

  return (
    <>
      {error ? (
        <p className="text-neutral-500">
          <span className="font-bold text-red-500">An error occurred: </span>
          {error}
        </p>
      ) : (
        <div>{imageUrls[0]}</div>
      )}
    </>
  );
}
