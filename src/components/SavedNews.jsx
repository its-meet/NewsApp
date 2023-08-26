import React ,{useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from './Navbar';
import SavedNewsItem from './SavedNewsItem';
const SaveNews = () => {
    
    const [saveArticles, setSaveArticles] = useState([]);    
    const showArticles = async () => {
      let res = await axios.get("/api/articles");
      setSaveArticles(res.data);
    };

    useEffect(()=>{
      showArticles();
    },[])
  return (
    <>

    <Navbar/>
    <div className="container my-3">
      <h1 className="text-center">Saved Articles</h1>
      <div className="row">

      {saveArticles.map((value, index)=>{
            return (
              <div className="col-md-4" key={index}>
                <SavedNewsItem
                  title={
                    value.title ? (
                      value.title.slice(0, 50)
                    ) : (
                      <b className="text-danger">Not Available</b>
                    )
                  }
                  description={
                    value.desc ? (
                      value.desc.slice(0, 100)
                    ) : (
                      <b className="text-danger">Not Available</b>
                    )
                  }
                  imageUrl={value.imageUrl}
                  newsUrl={value.url}
                  author={value.author}
                  date={value.date}
                />
              </div>
            );
          })}
          </div>
          </div>
          </>
  )
}

export default SaveNews
