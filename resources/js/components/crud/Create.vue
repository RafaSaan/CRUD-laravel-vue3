<template>
    <section>
        <h2>Crear tarea</h2>
        <form @submit.prevent="createProduct">
            <div class="mb-3">
                <label for="code" class="form-label">Código</label>
                <input
                    type="text"
                    class="form-control"
                    id="code"
                    name="code"
                    placeholder="Código"
                    required
                    v-model="productData.code"
                />
            </div>
            <div class="mb-3">
                <label for="product" class="form-label">Producto</label>
                <input
                    type="text"
                    class="form-control"
                    id="product"
                    name="product"
                    placeholder="Producto"
                    required
                    v-model="productData.product"
                />
            </div>
            <div class="mb-3">
                <label for="quantity" class="form-label">Cantidad</label>
                <input
                    type="number"
                    class="form-control"
                    id="quantity"
                    name="quantity"
                    placeholder="Cantidad"
                    required
                    v-model="productData.quantity"
                />
            </div>
            <div class="mb-3">
                <label for="price" class="form-label">Precio</label>
                <input
                    type="text"
                    class="form-control"
                    id="price"
                    name="price"
                    placeholder="Precio"
                    required
                    v-model="productData.price"
                />
            </div>

            <a href="/crud" class="btn btn-secondary">Cancelar</a>
            <button class="btn btn-primary">Agregar</button>
        </form>
    </section>
</template>

<script>
import { ref } from "@vue/reactivity";
import useProduct from "../../composables/useProduct.js";
import { useRouter } from "vue-router";

export default {
    name: "create",
    setup() {
        const { createProduct } = useProduct();

        const productData = ref({
            code: "",
            product: "",
            quantity: "",
            price: "",
        });

        const router = useRouter();

        return {
            productData,
            createProduct: () => {
                createProduct(productData.value);
                router.push({ name: "crud" });
            },
        };
    },
};
</script>

<style></style>
