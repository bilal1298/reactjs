import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import MyContext from "../MyContext";
import "../App.css";
import { Link } from "react-router-dom";

const SingleGif = () => {
  const { name } = useParams();
  const { state } = useContext(MyContext);
  const image = state.data.find((item) => item.id === name);
  console.log(image);
  return (
    <div className="singleContainer">
      <Link to="/" className="goBack">
        &lt; Go Back
      </Link>
      <img src={image.images.original.url} alt="" />
    </div>
  );
};

export default SingleGif;
