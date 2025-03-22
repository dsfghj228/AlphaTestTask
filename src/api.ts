import axios from "axios"

const API = "https://fakestoreapi.com/products"

export const getProducts = async (page: number) => {
    try {
      const response = await axios.get(`${API}?limit=10&page=${page}`);
      return response.data;
    } catch (err) {
      console.log(err);
      return null;
    }
  };