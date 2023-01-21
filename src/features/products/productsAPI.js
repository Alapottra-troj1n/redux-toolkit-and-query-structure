import { productAPI } from "../utils/axios.config";

export const fetchProducts = async () => {
    const res = await productAPI.get("/products");
    return res.data.data;
    
}

export const postProduct = async (data) => {
    await productAPI.post('/product', data);
}