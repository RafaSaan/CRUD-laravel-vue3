<template>
    <section>
        <h2>Editar tarea</h2>
        <form @submit.prevent="onEdit(productsById)">
            <div class="mb-3">
                <label for="code" class="form-label">Código</label>
                <input
                    type="text"
                    class="form-control"
                    id="code"
                    name="code"
                    placeholder="Código"
                    required
                    v-model="productsById.code"
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
                    v-model="productsById.product"
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
                    v-model="productsById.quantity"
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
                    v-model="productsById.price"
                />
            </div>

            <a href="/crud" class="btn btn-secondary">Cancelar</a>
            <button class="btn btn-primary">Guardar</button>
        </form>
    </section>
</template>

<script>
import useProduct from "../../composables/useProduct.js";
import { useRouter } from "vue-router";

export default {
    name: "edit",
    setup() {
        const { getProductById, productsById, editProduct } = useProduct();

        const router = useRouter();

        const id = router.currentRoute._value.params.id;

        getProductById(id);
        return {
            productsById,
            onEdit: (data) => {
                editProduct(id, data);
                router.push({ name: "crud" });
            },
        };
    },
};
</script>

<style></style>
