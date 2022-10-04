import React from "react";
import { Link } from "react-router-dom";



function Post() {
    return(
        <div>
            <h1>Page Post</h1>
            
            <Link to="/">
                <button> Voltar para o Feed</button>
            </Link>

        </div>
    )
}

export default Post