<template>
  <section class="space-y-6">
    <router-link
      to="/products"
      class="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
    >
      ← Back To Products
    </router-link>

    <div v-if="loading" class="py-12 text-center text-slate-600">Loading product...</div>

    <div v-else-if="error" class="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
      {{ error }}
    </div>

    <div v-else-if="product" class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <div class="space-y-4">
        <div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div class="flex h-[420px] items-center justify-center rounded-lg bg-slate-50">
            <img
              :src="selectedImage"
              :alt="product.title"
              class="max-h-full max-w-full object-contain"
            >
          </div>
        </div>

        <div class="grid grid-cols-4 gap-3">
          <button
            v-for="(image, index) in product.images"
            :key="`${image}-${index}`"
            type="button"
            class="rounded-lg border bg-white p-2 shadow-sm"
            :class="selectedImage === image ? 'border-slate-900' : 'border-slate-200'"
            @click="selectedImage = image"
          >
            <img :src="image" :alt="`${product.title} thumbnail ${index + 1}`" class="h-20 w-full object-contain">
          </button>
        </div>
      </div>

      <div class="space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <span class="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {{ product.category }}
        </span>

        <div>
          <h1 class="text-3xl font-bold tracking-tight text-slate-900">{{ product.title }}</h1>
          <p class="mt-4 text-sm leading-7 text-slate-600">{{ product.description }}</p>
        </div>

        <dl class="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
          <div class="rounded-lg bg-slate-50 p-4">
            <dt class="text-slate-500">Brand</dt>
            <dd class="mt-1 font-medium text-slate-900">{{ product.brand || '-' }}</dd>
          </div>
          <div class="rounded-lg bg-slate-50 p-4">
            <dt class="text-slate-500">Price</dt>
            <dd class="mt-1 font-medium text-slate-900">${{ formatPrice(product.price) }}</dd>
          </div>
          <div class="rounded-lg bg-slate-50 p-4">
            <dt class="text-slate-500">Discount</dt>
            <dd class="mt-1 font-medium text-slate-900">{{ product.discountPercentage }}%</dd>
          </div>
          <div class="rounded-lg bg-slate-50 p-4">
            <dt class="text-slate-500">Rating</dt>
            <dd class="mt-1 font-medium text-slate-900">{{ product.rating }}</dd>
          </div>
          <div class="rounded-lg bg-slate-50 p-4">
            <dt class="text-slate-500">Stock</dt>
            <dd class="mt-1 font-medium text-slate-900">{{ product.stock }}</dd>
          </div>
          <div class="rounded-lg bg-slate-50 p-4">
            <dt class="text-slate-500">ID</dt>
            <dd class="mt-1 font-medium text-slate-900">{{ product.id }}</dd>
          </div>
        </dl>

        <div>
          <h2 class="text-sm font-semibold text-slate-900">Tags</h2>
          <div class="mt-3 flex flex-wrap gap-2">
            <span
              v-for="tag in product.tags"
              :key="tag"
              class="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductDetails',
  data() {
    return {
      selectedImage: '',
    }
  },
  computed: {
    product() {
      return this.$store.getters.currentProduct
    },
    loading() {
      return this.$store.state.loading
    },
    error() {
      return this.$store.state.error
    },
  },
  mounted() {
    this.fetchProduct()
  },
  watch: {
    '$route.params.id'() {
      this.fetchProduct()
    },
  },
  methods: {
    fetchProduct() {
      this.selectedImage = ''

      this.$store
        .dispatch('fetchProductById', this.$route.params.id)
        .then((product) => {
          this.selectedImage = product.images?.[0] || product.thumbnail || ''
        })
        .catch(() => {})
    },
    formatPrice(value) {
      return Number(value || 0).toFixed(2)
    },
  },
}
</script>
