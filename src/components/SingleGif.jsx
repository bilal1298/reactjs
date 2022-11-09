import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import MyContext from "../MyContext";
import "../App.css";
import { useNavigate } from "react-router-dom";

const SingleGif = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const { state } = useContext(MyContext);
  const image = state.data.find((item) => item.id === name);
  console.log(image);
  return (
    <div className="singleContainer">
      <button onClick={() => navigate(-1)} className="goBack">
        &lt; Go Back
      </button>
      <img src={image.images.original.url} alt="" />
    </div>
  );
};

export default SingleGif;
