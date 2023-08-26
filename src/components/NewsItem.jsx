import React, { useState } from "react";
import notAvailable from "../assets/not available.jpeg";
import axios from "axios";

const NewsItem = ({ title, description, imageUrl, newsUrl, author, date }) => {

  const [disabled, setDisabled] = useState(false)
    const handleSaveArticle = async(e)=>{
      e.preventDefault()
      setDisabled(true)
      try{
        await axios.post('/api/articles', {
          author:author,
          title:title,
          desc:description,
          url:newsUrl,
          imageUrl:imageUrl,
          date:date
        })
      }
      catch(error){
        console.log(error);
      }
    }
      return (
    <div className="my-3">
      <div className="card">
        <img
          src={
            imageUrl
            ? imageUrl
             :
            (<img src={notAvailable} alt="not-available"/>)
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title} ...</h5>
          <p className="card-text">{description} ...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : <b className="text-danger">Unknown</b>} on 
              {new Date(date).toString()}
            </small>
          </p>
          <div className="d-flex justify-content-between">

          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
            Read more
          </a>
          <button className="btn btn-sm btn-dark" onClick={handleSaveArticle} disabled={disabled}>
            Read later
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
