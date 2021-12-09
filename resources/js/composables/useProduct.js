import axios from "axios";
import { ref } from "vue";

const useProduct = () => {
    const products = ref([]);

    const getProducts = async () => {
        const { data } = await axios.get("/api/crud");

        if (!data) products.value = [];

        products.value = data;
    };

    const createProduct = async (productInfo) => {
        await axios.post("/api/crud", productInfo);
    };

    const deleteProduct = (id) => {
        axios.delete(`/api/crud/${id}`);

        getProducts();
    };
    return {
        getProducts,
        products,
        createProduct,
        deleteProduct,
    };
};

export default useProduct;
