<template>
    <main class="crud">
        <h3>Agregar Producto</h3>
        <a href="/create" class="btn btn-primary btn-lg mt-4">Agregar</a>
        <table class="table table-light table-striped mt-3">
            <thead>
                <tr>
                    <th scope="col">Codigo</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td>{{ product.code }}</td>
                    <td>{{ product.product }}</td>
                    <td>{{ product.quantity }}</td>
                    <td>{{ product.price }}</td>
                    <td>
                        <button
                            type="submit"
                            class="btn btn-danger"
                            @click="deleteProduct(product.id)"
                        >
                            eliminar
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </main>
</template>

<script>
import useProduct from "../../composables/useProduct.js";
import { onMounted } from "vue";

export default {
    name: "crud",
    setup() {
        const { getProducts, products, deleteProduct } = useProduct();

        onMounted(() => getProducts());

        return {
            products,
            deleteProduct,
        };
    },
};
</script>

<style></style>
