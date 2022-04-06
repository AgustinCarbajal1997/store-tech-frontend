import { useEffect, useState, useCallback } from "react";

const useFetchFilters = (url, search) => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetch(`${url}${search}`);
        const result = await response.json();
        setData(result);
        setFilteredData(result);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const filterHandler = useCallback(
    async(newSearch) => {
      try {
        setLoading(true);
        const response = await fetch(`${url}${newSearch}`);
        const result = await response.json();
        setFilteredData(result);
        
      } catch (error) {
        console.log(error);
      }
      finally{
        setLoading(false);
      }
    },
    [url],
  )

  

  return {
    data,
    loading,
    error,
    filterHandler,
    filteredData
  };
};

export default useFetchFilters;
