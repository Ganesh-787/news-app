import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Context = createContext();

import React from "react";

const ContextProvider = (props) => {
  const [response, setResponse] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const url = category
        ? `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`
        : "https://saurav.tech/NewsAPI/everything/cnn.json";
        setLoading(true);

        try {
            const result = await axios.get(url);
            setResponse(result.data.articles);
            
        } catch (error) {
           console.error("Error fetching news:",error);
            
        } finally{
            setTimeout(() => {
                setLoading(false)
                
            }, 1000);
        }
    }

    fetchData();
  }, [category]);

  const navClick = async (e, item) => {
    e.stopPropagation();
    setCategory(item.toString().toLowerCase());
  };

  const contextValue = {
    response,
    navClick,
    loading
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
