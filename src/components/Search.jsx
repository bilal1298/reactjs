import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Gifs from "./Gifs";
import { useContext } from "react";
import MyContext from "../MyContext";

const Search = () => {
  const { query } = useParams();
  const { state, dispatch } = useContext(MyContext);
  const data = state.data;
  const isLoading = state.isLoading;
  useEffect(() => {
    const fetchFn = async () => {
      dispatch({ type: "setLoader", value: true });
      const results = await axios("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "tAEFUgagRjRNkU24orQdFB8EHMcNTUSe",
          limit: 1000,
          q: query,
        },
      });

      dispatch({ type: "updateData", value: results.data.data });

      dispatch({ type: "setLoader", value: false });
    };
    fetchFn();
  }, [query, dispatch]);

  return <Gifs data={data} isLoading={isLoading} />;
};

export default Search;
