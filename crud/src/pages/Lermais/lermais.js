import React from "react";
import Header from "../../components/Header/header";
import './lermais.css';
function Lermais() {
    return(
        <div>
            <Header/>
            <main>
                <div className="cards">
                    <div className="card">
                        <header>
                            <h2>Curso Consumindo API</h2>
                        </header>
                        <div className="line"></div>
                        <p>Neste Curso eu ensino vocês a consumirem uma API</p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Lermais