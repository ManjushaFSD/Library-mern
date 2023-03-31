import axios from "axios";
import React, { useState } from "react";
import BooksHeader from "./BooksHeader";

const BooksEntry = () => {
  const apiUrl = "http://localhost:3001/bookentry";

  const [input, setInput] = useState({});
  const changeMyData = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const buttonClickEvent = () => {
    console.log(input);
    axios.post(apiUrl, input).then((response) => {
      console.log(response.data);

      if (response.data.status === "success") {
        alert("Books added successfully");
      } else {
        alert("Oops!!Books not added!");
      }
    })
  }

  return (
    <div>
      <BooksHeader />

      <div className="container">
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">
              Book Title
            </label>
            <input
              name="bookTitle"
              type="text"
              className="form-control"
              onChange={changeMyData}
            />
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">
              Author
            </label>
            <input
              name="bookAuthor"
              type="text"
              className="form-control"
              onChange={changeMyData}
            />
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">
              Price
            </label>
            <input
              name="bookPrice"
              type="text"
              className="form-control"
              onChange={changeMyData}
            />
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">
              Cover Image Link
            </label>
            <input
              name="bookCoverImage"
              type="text"
              className="form-control"
              onChange={changeMyData}
            />
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <button onClick={buttonClickEvent} className="btn btn-warning">
              Add Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksEntry;
