import { useEffect, useState } from "react";

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((responseJson) => {
        setData(responseJson);
      })
      .catch((err) => {
        if (err && err.message) {
          setError(err.message);
        } else {
          setError("Unexpected Error: Please try again later");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  return {
    data,
    error,
    isLoading,
  };
};
