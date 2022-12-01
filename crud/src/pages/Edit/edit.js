import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/header";
import "./edit.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import crud from "../../services/axios";


const validationPost = yup
  .object()
  .shape({
    nome: yup
      .string()
      .required("Insira um Nome, por favor!")
      .max(50, "O campo precisa ter no máximo 50 caracteres!"),
    ra: yup
      .string()
      .required("Insira uma RA, por favor!")
      .max(150, "O campo precisa ter no máximo 150 caracteres!"),
    tel: yup
      .string()
      .required("Insira um Telefone, por favor!")
      .max(500, "O campo precisa ter no máximo 500 caracteres!"),
  })
  .required();

function Edit() {
  useEffect(() => {
    crud.get(`/getuser/${id}`)
    .then((response) => {
      reset(response.data)
    })
    .catch((err) => {
      console.error(err)
    })
  }, [])

  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(validationPost),
  });
  const addpost = (data) => {
    try {
      crud.put(`/updateuser/${id}`, {
          nome: data.nome,
          ra: data.ra,
          tel: data.tel,
        })
        .then((resp) => {
          if (resp) {
            navigate("/");
          }
        });
        console.log(data)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Header />

      <main>
        <div className="card-post">
          <h1> Criar Postagem</h1>
          <div className="line-post"> </div>
          <div className="card-body-post"> </div>

          <form onSubmit={handleSubmit(addpost)}>
            <div className="fields">
              <label>Nome: </label>
              <input type="text" name="nome" {...register("nome")} />
              <p className="error-message">{errors.nome?.message}</p>
            </div>

            <div className="fields">
              <label>RA: </label>
              <input type="text" name="ra" {...register("ra")} />
              <p className="error-message">{errors.ra?.message}</p>
            </div>

            <div className="fields">
              <label>Telefone: </label>
              <textarea type="text" name="tel" {...register("tel")} />
              <p className="error-message">{errors.tel?.message}</p>
            </div>

            <div className="btn-post">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Edit;
