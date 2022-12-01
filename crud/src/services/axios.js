import axios from "axios";

const crud = axios.create({
  baseURL: "http://localhost:8030",
});

export default crud;