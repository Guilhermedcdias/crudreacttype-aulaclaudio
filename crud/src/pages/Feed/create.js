// import { link } from "fs";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import More from "../../images/more.svg";
import crud from "../../services/axios";
import "./create.css";
function Create() {
  const [Info, setInfo] = useState([]);
  useEffect(() => {
    crud
      .get("/getusers")
      .then((response) => {
        if (response.data) {
          setInfo(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <HeaderMain />

      <main>
        <div className="cards">
          {Info.map((info, key) => {
            return (
              <div className="card" key={key}>
                <header>
                  <h2>{info.nome}</h2>
                  <img src={More} />
                </header>
                <div className="line"></div>
                <p>RA: {info.ra}</p>
                <p>Tel: {info.tel}</p>
                <div className="btns">
                  <div className="btn-edit">
                    <Link to={{ pathname: `/edit/${info.id}`}}>
                      <button>Edit</button>
                    </Link>
                  </div>
                  <div className="btn-delete">
                    <Link to={{pathname: `/delete/${info.id}`}}>
                      <button>Delete</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default Create;
