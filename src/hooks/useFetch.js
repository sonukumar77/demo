import { useState } from "react";
import { useEffect } from "react";

const useFetch = (url, params) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url, params);
      const data = await response.json();
      setData(data);
    } catch (err) {
      console.error("er:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data };
};

export default useFetch;
