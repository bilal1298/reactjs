import React, { useState } from "react";
import logo from "../image.png";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (search.trim().length > 0) {
      return navigate(`/search/${search}`);
    }
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" width={"300px"} />
          </Link>
        </div>
        <div className="search">
          <form onSubmit={submitHandler}>
            <input type="search" name="" id="" onChange={(e) => setSearch(e.target.value)} />
            <button type="submit" className="searchSubmit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;
