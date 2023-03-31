import React, { useState } from "react";
import axios from 'axios'
import BooksHeader from "./BooksHeader";

const BookSearch = () => {
  const apiUrl = "http://localhost:3001/searchbook"

  const [input, setInput] = useState({});
  const changeMyData = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const [result, setResult] = useState([])

  const searchButtonClick = () => {
    console.log(input)
    axios.post(apiUrl,input).then(
      (response)=>{
      setResult(response.data)
    })
  };

  return (
    <div>
      <BooksHeader />

      <div className="container">
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
            <label htmlFor="" className="form-label">
              Enter Book Title
            </label>
            <input
              name="bookTitle"
              type="text"
              className="form-control"
              onChange={changeMyData}
            />
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
            <button onClick={searchButtonClick} className="btn btn-success">
              Search
            </button>
          </div>
        </div>
     

      {result.map(
        (item)=>{
            return <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
              <label htmlFor="" className="form-label">
                Book Title
              </label>
              <input
                
                type="text"
                className="form-control"
               value={item.bookTitle}
               readOnly
              />
            </div>
            
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
              <label htmlFor="" className="form-label">
               Book Author
              </label>
              <input
               
                type="text"
                className="form-control"
                value={item.bookAuthor}
                readOnly
              />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
              <label htmlFor="" className="form-label">
                Book Price
              </label>
              <input
                
                type="text"
                className="form-control"
                value= {item.bookPrice}
                readOnly
              />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
              <label htmlFor="" className="form-label">
               Book Cover Image
              </label>
              <br/>
             <img src={item.bookCoverImage} height="300px"alt=""  />
            </div>
            
            </div>
        }
      )}
    </div>
    </div>
  );
};

export default BookSearch;
