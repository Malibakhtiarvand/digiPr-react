import Axios from "axios";

var baseUrl = "https://fakestoreapi.com/products/";

export const GetHttpMethod = (id) => Axios.get(baseUrl + id);
