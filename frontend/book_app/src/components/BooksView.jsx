import axios from "axios";
import React, { useEffect, useState } from "react";
import BooksHeader from "./BooksHeader";

const BooksView = () => {
  const apiUrl = "http://localhost:3001/viewallbook";
  const [loadStatus,setLoadStatus] = useState(true)
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.post(apiUrl).then((response) => {
      console.log(response.data)
      setData(response.data)
      setLoadStatus(false)
    }
    )
  },[]
  )

  return (
    <div>
      <BooksHeader />

      <div className="container">
        <div className="row-g-3">
          <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
           
              {loadStatus ? (
                <p>loading</p>
              ):(
                <div className="row g-3 ">
                {data.map((item) => {
                  return (
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                      <div className="card mt-3">
                        <img
                          src={item.bookCoverImage}
                          className="card-img-top"
                          height="300px"
                          alt="Angels &Demons"
                        />
                        <div className="card-body">
                          <h5 className="card-title">{item.bookTitle}</h5>
                          <p className="card-text">Author: {item.bookAuthor}</p>
                          <a href="#" className="btn btn-primary">
                            Rs.{item.bookPrice}
                          </a>
                        </div>
                        <br/>
       <div className="button btn btn-success" >Edit</div>
       <br/>
       <div className="button btn btn-danger" >Delete</div>
                      </div>
                    </div>
                  );
                }
                )
                }
              </div>
              )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksView;
