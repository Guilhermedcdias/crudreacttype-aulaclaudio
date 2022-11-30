// import { link } from "fs";
import React from "react";
import { Link } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import More from "../../images/more.svg";
import "./create.css";
function Create() {
  return (
    <div>
      <HeaderMain />

      <main>
        <div className="cards">
          <div className="card">
            <header>
              <h2>Guilherme Duarte Cenzi Dias</h2>
              <img src={More} />
            </header>
            <div className="line"></div>
            <p>RA: 122236564</p>
            <div className="btns">
              <div className="btn-edit">
                <Link to="/edit">
                  <button>Edit</button>
                </Link>
              </div>
              <div className="btn-delete">
                <Link to="/delete">
                  <button>Delete</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Create;
