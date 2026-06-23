<template>
  <section class="space-y-6">
    <div class="space-y-2">
      <h1 class="text-3xl font-bold tracking-tight text-slate-900">
        All Products
      </h1>
    </div>

    <div class="max-w-sm">
      <label class="mb-2 block text-sm font-medium text-slate-700"
        >Search products</label
      >
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search by title or category"
        class="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-slate-400"
      />
    </div>

    <div v-if="loading" class="py-12 text-center text-slate-600">
      Loading products...
    </div>

    <div
      v-else-if="error"
      class="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700"
    >
      {{ error }}
    </div>

    <div v-else class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>

    <div
      v-if="!loading && !error && filteredProducts.length === 0"
      class="rounded-lg border border-slate-200 bg-white p-8 text-center text-slate-600"
    >
      No products found.
    </div>
  </section>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";

export default {
  name: "Products",
  components: {
    ProductCard,
  },
  data() {
    return {
      searchQuery: "",
    };
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
    loading() {
      return this.$store.state.loading;
    },
    error() {
      return this.$store.state.error;
    },
    filteredProducts() {
      const query = this.searchQuery.trim().toLowerCase();

      if (!query) {
        return this.products;
      }

      return this.products.filter((product) => {
        return (
          product.title.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          String(product.brand || "")
            .toLowerCase()
            .includes(query)
        );
      });
    },
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      this.$store.dispatch("fetchProducts").catch(() => {});
    },
  },
};
</script>
