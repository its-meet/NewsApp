import React from 'react'
import notAvailable from '../assets/not available.jpeg'

const SavedNewsItem = ({ title, description, imageUrl, newsUrl, author, date }) => {

  return (
    <>
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

          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
            Read more
          </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SavedNewsItem
