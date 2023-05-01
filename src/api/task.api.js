import axios from 'axios'

export const getProductsRequest = async () => 
    await axios.get("http://localhost:4000/products")