import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/header";
import crud from "../../services/axios";
import './delete.css';
function Delete() {
    const [estado, setEstado] = useState(Boolean)
    const { id } = useParams();
    useEffect(() => {
        crud.delete(`/deleteuser/${id}`)
        .then((response) =>{
            setEstado(true)
            console.log(response)
        }) .catch ((err) => {
            setEstado(false)
            console.log(err)
        })
    })
    if(estado){
        return(
            <div>
                <Header/>
                <main>
                    <div className="cards">
                        <div className="card">
                            <p>Deletado com Sucesso</p>
                        </div>
                    </div>
                </main>
            </div>
        );
    } else if (!estado){
        return(
            <div>
                <Header/>
                <main>
                    <div className="cards">
                        <div className="card">
                            <p>Não deletado, tente novamente...</p>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
    
}

export default Delete