import React, { useEffect } from "react";
import axios from "axios";
import Gifs from "./Gifs";
import { useContext } from "react";
import MyContext from "../MyContext";

const Giphy = () => {
  const { state, dispatch } = useContext(MyContext);

  const data = state.data;
  const isLoading = state.isLoading;
  useEffect(() => {
    const fetchFn = async () => {
      dispatch({ type: "setLoader", value: true });
      const results = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "tAEFUgagRjRNkU24orQdFB8EHMcNTUSe",
          limit: 1000,
        },
      });

      dispatch({ type: "updateData", value: results.data.data });

      dispatch({ type: "setLoader", value: false });
    };
    fetchFn();
  }, [dispatch]);

  return <Gifs data={data} isLoading={isLoading} />;
};

export default Giphy;
