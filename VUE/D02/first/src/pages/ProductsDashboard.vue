<template>
  <section class="space-y-6">
    <div class="space-y-2">
      <h1 class="text-3xl font-bold tracking-tight text-slate-900">Products Dashboard</h1>
      <p class="text-sm text-slate-600">Add new products or update existing ones.</p>
    </div>

    <div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 class="text-lg font-semibold text-slate-900">
        {{ isEditing ? 'Update Product' : 'Add Product' }}
      </h2>

      <form class="mt-5 space-y-4" @submit.prevent="submitForm">
        <div class="grid gap-4 md:grid-cols-3">
          <div>
            <label class="mb-2 block text-sm font-medium text-slate-700">Title *</label>
            <input
              v-model.trim="form.title"
              type="text"
              class="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-slate-400"
              placeholder="Enter title"
            >
            <p v-if="errors.title" class="mt-1 text-sm text-red-600">{{ errors.title }}</p>
          </div>

          <div>
            <label class="mb-2 block text-sm font-medium text-slate-700">Category *</label>
            <input
              v-model.trim="form.category"
              type="text"
              class="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-slate-400"
              placeholder="Enter category"
            >
            <p v-if="errors.category" class="mt-1 text-sm text-red-600">{{ errors.category }}</p>
          </div>

          <div>
            <label class="mb-2 block text-sm font-medium text-slate-700">Brand</label>
            <input
              v-model.trim="form.brand"
              type="text"
              class="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-slate-400"
              placeholder="Enter brand"
            >
          </div>

          <div>
            <label class="mb-2 block text-sm font-medium text-slate-700">Price *</label>
            <input
              v-model.number="form.price"
              type="number"
              step="0.01"
              min="0"
              class="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-slate-400"
              placeholder="Enter price"
            >
            <p v-if="errors.price" class="mt-1 text-sm text-red-600">{{ errors.price }}</p>
          </div>

          <div>
            <label class="mb-2 block text-sm font-medium text-slate-700">Stock *</label>
            <input
              v-model.number="form.stock"
              type="number"
              min="0"
              class="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-slate-400"
              placeholder="Enter stock"
            >
            <p v-if="errors.stock" class="mt-1 text-sm text-red-600">{{ errors.stock }}</p>
          </div>

          <div>
            <label class="mb-2 block text-sm font-medium text-slate-700">Discount %</label>
            <input
              v-model.number="form.discountPercentage"
              type="number"
              step="0.01"
              min="0"
              class="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-slate-400"
              placeholder="Enter discount"
            >
          </div>

          <div>
            <label class="mb-2 block text-sm font-medium text-slate-700">Rating</label>
            <input
              v-model.number="form.rating"
              type="number"
              step="0.01"
              min="0"
              class="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-slate-400"
              placeholder="Enter rating"
            >
          </div>

          <div>
            <label class="mb-2 block text-sm font-medium text-slate-700">Thumbnail URL</label>
            <input
              v-model.trim="form.thumbnail"
              type="text"
              class="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-slate-400"
              placeholder="Enter image url"
            >
          </div>
        </div>

        <div>
          <label class="mb-2 block text-sm font-medium text-slate-700">Description *</label>
          <textarea
            v-model.trim="form.description"
            rows="3"
            class="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-slate-400"
            placeholder="Enter description"
          ></textarea>
          <p v-if="errors.description" class="mt-1 text-sm text-red-600">{{ errors.description }}</p>
        </div>

        <div>
          <label class="mb-2 block text-sm font-medium text-slate-700">Tags</label>
          <input
            v-model.trim="form.tagsText"
            type="text"
            class="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-slate-400"
            placeholder="Comma separated tags"
          >
        </div>

        <div class="flex flex-wrap gap-3">
          <button
            type="submit"
            class="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
          >
            {{ isEditing ? 'Update Product' : 'Add Product' }}
          </button>
          <button
            v-if="isEditing"
            type="button"
            class="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            @click="cancelEdit"
          >
            Cancel Edit
          </button>
        </div>

        <p v-if="message" class="text-sm text-emerald-700">{{ message }}</p>
        <p v-if="apiError" class="text-sm text-red-600">{{ apiError }}</p>
      </form>
    </div>

    <div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div class="flex items-center justify-between gap-3">
        <h2 class="text-lg font-semibold text-slate-900">All Products</h2>
        <span class="text-sm text-slate-600">{{ products.length }} items</span>
      </div>

      <div v-if="loading" class="py-8 text-center text-slate-600">Loading products...</div>

      <div v-else class="mt-4 overflow-hidden rounded-lg border border-slate-200">
        <table class="min-w-full divide-y divide-slate-200 text-sm">
          <thead class="bg-slate-50 text-left text-slate-600">
            <tr>
              <th class="px-4 py-3 font-medium">Image</th>
              <th class="px-4 py-3 font-medium">Title</th>
              <th class="px-4 py-3 font-medium">Category</th>
              <th class="px-4 py-3 font-medium">Price</th>
              <th class="px-4 py-3 font-medium">Stock</th>
              <th class="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 bg-white">
            <tr v-for="product in products" :key="product.id">
              <td class="px-4 py-3">
                <img
                  :src="product.thumbnail"
                  :alt="product.title"
                  class="h-12 w-12 rounded-md border border-slate-200 object-contain"
                >
              </td>
              <td class="px-4 py-3 font-medium text-slate-900">{{ product.title }}</td>
              <td class="px-4 py-3 text-slate-600">{{ product.category }}</td>
              <td class="px-4 py-3 text-slate-600">${{ formatPrice(product.price) }}</td>
              <td class="px-4 py-3 text-slate-600">{{ product.stock }}</td>
              <td class="px-4 py-3">
                <div class="flex flex-wrap gap-2">
                  <button
                    type="button"
                    class="rounded-md border border-blue-300 px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-50"
                    @click="startEdit(product)"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="rounded-md border border-red-300 px-3 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-50"
                    @click="removeProduct(product.id)"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-if="!loading && products.length === 0" class="py-8 text-center text-slate-600">
        No products available.
      </div>
    </div>
  </section>
</template>

<script>
import productMixin from '../mixins/productMixin'

export default {
  name: 'ProductsDashboard',
  mixins: [productMixin],
  data() {
      return {
        products: [],
        loading: false,
        apiError: '',
        message: '',
        editingId: null,
        form: {
          title: '',
          category: '',
          description: '',
          price: '',
          stock: '',
          brand: '',
          thumbnail: '',
          discountPercentage: 0,
          rating: 0,
          tagsText: '',
        },
        errors: {},
      }
    },
  computed: {
    isEditing() {
      return this.editingId !== null
    },
  },
  mounted() {
    this.fetchProducts()
  },
  methods: {
    createEmptyForm() {
      return {
        title: '',
        category: '',
        description: '',
        price: '',
        stock: '',
        brand: '',
        thumbnail: '',
        discountPercentage: 0,
        rating: 0,
        tagsText: '',
      }
    },
    fetchProducts() {
      this.loading = true
      this.apiError = ''

      this.getAllProducts()
        .then((response) => {
          this.products = response.data
        })
        .catch(() => {
          this.apiError = 'Unable to load products.'
        })
        .finally(() => {
          this.loading = false
        })
    },
    validateForm() {
      const errors = {}

      if (!this.form.title.trim()) {
        errors.title = 'Title is required.'
      }
      if (!this.form.category.trim()) {
        errors.category = 'Category is required.'
      }
      if (!this.form.description.trim()) {
        errors.description = 'Description is required.'
      }
      if (Number(this.form.price) <= 0 || this.form.price === '') {
        errors.price = 'Price must be positive.'
      }
      if (Number(this.form.stock) < 0 || this.form.stock === '') {
        errors.stock = 'Stock must not be negative.'
      }

      this.errors = errors
      return Object.keys(errors).length === 0
    },
    buildPayload() {
      const tags = this.form.tagsText
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean)

      const thumbnail = this.form.thumbnail.trim()

      return {
        title: this.form.title.trim(),
        category: this.form.category.trim(),
        description: this.form.description.trim(),
        price: Number(this.form.price),
        stock: Number(this.form.stock),
        brand: this.form.brand.trim(),
        thumbnail,
        images: thumbnail ? [thumbnail] : [],
        discountPercentage: Number(this.form.discountPercentage) || 0,
        rating: Number(this.form.rating) || 0,
        tags,
      }
    },
    submitForm() {
      this.message = ''
      this.apiError = ''

      if (!this.validateForm()) {
        return
      }

      const payload = this.buildPayload()

      if (this.isEditing) {
        this.updateProductById(this.editingId, payload)
          .then(() => {
            this.message = 'Product updated successfully.'
            this.cancelEdit(false)
            this.fetchProducts()
          })
          .catch(() => {
            this.apiError = 'Unable to update product.'
          })
        return
      }

      this.createProduct(payload)
        .then(() => {
          this.message = 'Product created successfully.'
          this.resetForm()
          this.fetchProducts()
        })
        .catch(() => {
          this.apiError = 'Unable to create product.'
        })
    },
    startEdit(product) {
      this.editingId = product.id
      this.form = {
        title: product.title || '',
        category: product.category || '',
        description: product.description || '',
        price: product.price ?? '',
        stock: product.stock ?? '',
        brand: product.brand || '',
        thumbnail: product.thumbnail || '',
        discountPercentage: product.discountPercentage ?? 0,
        rating: product.rating ?? 0,
        tagsText: Array.isArray(product.tags) ? product.tags.join(', ') : '',
      }
      this.errors = {}
      this.message = ''
      this.apiError = ''
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    cancelEdit(clearMessage = true) {
      this.editingId = null
      this.resetForm()
      this.errors = {}
      if (clearMessage) {
        this.message = ''
      }
    },
    resetForm() {
      this.form = this.createEmptyForm()
    },
    removeProduct(id) {
      if (!window.confirm('Delete this product?')) {
        return
      }

      this.deleteProductById(id)
        .then(() => {
          if (this.editingId === id) {
            this.cancelEdit()
          }
          this.fetchProducts()
          this.message = 'Product deleted successfully.'
        })
        .catch(() => {
          this.apiError = 'Unable to delete product.'
        })
    },
    formatPrice(value) {
      return Number(value || 0).toFixed(2)
    },
  },
}
</script>
