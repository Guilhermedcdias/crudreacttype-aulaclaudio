import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/header";
import './post.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
const validationPost = yup.object().shape({
    title: yup.string().required("Insira um título, por favor!").max(50, "O campo precisa ter no máximo 50 caracteres!"),
    description: yup.string().required("Insira uma descrição, por favor!").max(150, "O campo precisa ter no máximo 150 caracteres!"),
    cont: yup.string().required("Insira um conteúdo, por favor!").max(500, "O campo precisa ter no máximo 500 caracteres!"),
}).required();

function Post() {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validationPost)
    });
    const addpost =  data => console.log(data)



    return(
        <div>
            <Header/>

            <main>

                <div className="card-post">

                    <h1> Criar Postagem</h1>
                    <div className="line-post" > </div>
                    <div className="card-body-post" > </div>

                        <form onSubmit={handleSubmit(addpost)}>

                            <div className="fields">
                                <label>Titulo</label>
                                <input type="text" name="title" {...register("title")}/>
                                <p className="error-message">{errors.title?.message}</p>
                            </div>

                            <div className="fields">
                                <label>Descrição</label>
                                <input type="text" name="description" {...register("description")}/>
                                <p className="error-message">{errors.description?.message}</p>
                            </div>

                            <div className="fields">
                                <label>Conteúdo</label>
                                <textarea type="text" name="cont" {...register("cont")}/>
                                <p className="error-message">{errors.cont?.message}</p>
                            </div>
                            
                            <div className="btn-post">
                                <button type="submit">Enviar</button>
                            </div>
                        </form>

                </div>

            </main>


        </div>
    )
}

export default Post