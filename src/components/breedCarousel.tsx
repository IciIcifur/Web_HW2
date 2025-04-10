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
        <div className="relative w-full max-w-3xl mx-auto">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {imageUrls.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 my-2 w-64 h-40 bg-cover bg-center rounded-xl bg-neutral-500"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
