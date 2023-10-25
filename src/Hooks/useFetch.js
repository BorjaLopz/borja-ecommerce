import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    } catch (e) {
      console.log(`Error: ${e}`);
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [url]);

  return { data, error, loading };
}
