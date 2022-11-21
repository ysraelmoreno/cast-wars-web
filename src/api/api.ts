import axios from "axios";

console.log(process.env.CAST_WARS_URL_API);
const apiRoutes = axios.create({
  baseURL: process.env.CAST_WARS_URL_API,
});

export default apiRoutes;
