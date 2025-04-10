import { useEffect, useState } from "react";

const useFetch = (apiCallback: any) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await apiCallback();
        setData(result);
      } catch (error) {
        setError(error as any);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiCallback]);

  return { data, loading, error };
};

export default useFetch;
