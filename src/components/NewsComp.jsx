import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";
import PropTypes from "prop-types"
import Navbar from "./Navbar";

const NewsComp = (props) => {

  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [results, setResults] = useState(0);

   const fetchAPiData = async()=>{
    setLoading(true);
      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=057151d7fb4d4cafa5f9c50b2a6965a7&page=${page}&pageSize=${props.pageSize}`
      await axios.get(url)
      .then((res) => {
        setNews(res.data.articles);
        setResults(res.data.totalResults);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };
  const handlePrevPage = async () => {
      setPage(page-1);
      fetchAPiData();
  };

  const handleNextPage = async () => {
      setPage(page+1);
      fetchAPiData()
  };
  useEffect(() => {
    fetchAPiData();
  },[]);

  return (
    <>

    <Navbar/>
    <div className="container my-3">
      <h1 className="text-center">NewsApp - Top Headlines </h1>
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="mt-4  spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div className="row">
        {!loading &&
          news.map((value, index) => {
            return (
              <div className="col-md-4" key={index}>
                <NewsItem
                  title={
                    value.title ? (
                      value.title.slice(0, 50)
                    ) : (
                      <b className="text-danger">Not Available</b>
                    )
                  }
                  description={
                    value.description ? (
                      value.description.slice(0, 100)
                    ) : (
                      <b className="text-danger">Not Available</b>
                    )
                  }
                  imageUrl={value.urlToImage}
                  newsUrl={value.url}
                  author={value.author}
                  date={value.publishedAt}
                />
              </div>
            );
          })}
      </div>
      <div className="container d-flex justify-content-between p-2">
        <button type="button" className="btn px-4 btn-dark" disabled= {page<=1}
        >
          <i
            className="fa-solid fa-arrow-left fa-fade"
            onClick={handlePrevPage}
            style={{ color: "#fff" }}
          ></i>
        </button>
        <button type="button" className="btn px-4 btn-dark" disabled= {page+1>Math.ceil(results/props.pageSize)}>
          <i
            className="fa-solid fa-arrow-right fa-fade"
            onClick={handleNextPage}
            style={{ color: "#fff" }}
          ></i>
        </button>
      </div>
    </div>
    </>
  );
}

NewsComp.prototype = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

NewsComp.defaultProps = {
  country: 'in',
  pageSize: 9,
  category: 'general'
}
export default NewsComp;
