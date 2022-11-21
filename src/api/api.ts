import axios from "axios";

const apiRoutes = axios.create({
  baseURL: "http://localhost:3000/api",
});

export default apiRoutes;
