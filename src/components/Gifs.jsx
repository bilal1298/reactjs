import React, { useState } from "react";
import Paginate from "./Paginate";
import { Link } from "react-router-dom";

const Gifs = ({ data, isLoading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (number) => setCurrentPage(number);

  return (
    <>
      <div className="container">
        {isLoading ? (
          <div className="loader">
            <img src="https://flevix.com/wp-content/uploads/2019/07/Comp-2.gif" alt="" />
          </div>
        ) : (
          currentPosts.map((item) => (
            <Link key={item.id} to={`/gif/${item.id}`}>
              <div className="item">
                <img src={item.images.original.url} alt="" className="gifImage" />
              </div>
            </Link>
          ))
        )}
      </div>
      <Paginate postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate} currentPage={currentPage} />
    </>
  );
};

export default Gifs;
