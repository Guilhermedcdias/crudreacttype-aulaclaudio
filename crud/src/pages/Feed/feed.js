// import { link } from "fs";
import React from "react";
import { Link } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import More from '../../images/more.svg'
import './feed.css'
function Feed() {
  return (
    <div>
        <HeaderMain/>

        <main>

          <div className="cards">
            <div className="card">
              <header>
                <h2>Curso Consumindo API</h2>
                <img src={More}/>
              </header>
              <div className="line"></div>
              <p>Neste Curso eu ensino vocês a consumirem uma API</p>
              <div className="btns">
                <div className="btn-edit">
                  <Link to="/edit">
                  <button>Edit</button>
                  </Link>
                </div>
                <div className="btn-readmore">
                  <Link to="/lermais">
                  <button>Ler Mais</button>
                  </Link>
                </div>
                <div className="btn-delete">
                  <Link>
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

export default Feed;
