import axios from "axios";
import { ref } from "vue";

const useProduct = () => {
    const products = ref([]);
    const productsById = ref({});

    const getProducts = async () => {
        const { data } = await axios.get("/api/crud");

        if (!data) products.value = [];

        products.value = data;
    };

    const createProduct = async (productInfo) => {
        await axios.post("/api/crud", productInfo);
    };

    const getProductById = async (id) => {
        const { data } = await axios.get("/api/crud");

        if (!data) productsById.value = {};

        const { code, product, quantity, price } = data.find(
            (product) => product.id == id
        );

        productsById.value = { code, product, quantity, price };
    };

    const editProduct = (id, productData) => {
        axios.put(`/api/crud/${id}`, productData);
    };

    const deleteProduct = (id) => {
        axios.delete(`/api/crud/${id}`);

        getProducts();
    };
    return {
        getProducts,
        products,
        editProduct,
        createProduct,
        deleteProduct,
        getProductById,
        productsById,
    };
};

export default useProduct;
