<template>
  <article class="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
    <div class="flex h-52 items-center justify-center rounded-lg bg-slate-50 p-4">
      <img
        :src="product.thumbnail || fallbackImage"
        :alt="product.title"
        class="max-h-full max-w-full object-contain"
      >
    </div>

    <div class="mt-4 flex flex-1 flex-col">
      <span class="inline-flex w-fit rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
        {{ product.category }}
      </span>

      <h3 class="mt-3 text-base font-semibold leading-6 text-slate-900">
        {{ product.title }}
      </h3>

      <div class="mt-2 flex items-center justify-between text-sm text-slate-600">
        <span class="font-semibold text-slate-900">${{ formatPrice(product.price) }}</span>
        <span>Rating: {{ product.rating }}</span>
      </div>

      <div class="mt-1 text-sm text-slate-600">Stock: {{ product.stock }}</div>

      <router-link
        :to="`/products/${product.id}`"
        class="mt-4 inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
      >
        View Details
      </router-link>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      fallbackImage:
        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23f8fafc"/><rect x="110" y="55" width="180" height="190" rx="18" fill="%23e2e8f0"/><path d="M145 190l40-50 35 40 25-30 40 40v35H145z" fill="%23cbd5e1"/></svg>',
    }
  },
  methods: {
    formatPrice(value) {
      return Number(value || 0).toFixed(2)
    },
  },
}
</script>
