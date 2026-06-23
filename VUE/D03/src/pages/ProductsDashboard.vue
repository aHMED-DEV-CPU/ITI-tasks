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

<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const editingId = ref(null)
const message = ref('')
const errors = ref({})

const form = reactive(createEmptyForm())

const products = computed(() => store.getters.products)
const loading = computed(() => store.state.loading)
const apiError = computed(() => store.state.apiError)
const isEditing = computed(() => editingId.value !== null)

onMounted(() => {
  fetchProducts()
})

function createEmptyForm() {
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
}

function setForm(values) {
  Object.assign(form, values)
}

function fetchProducts() {
  store.dispatch('fetchProducts').catch(() => {})
}

function validateForm() {
  const validationErrors = {}

  if (!form.title.trim()) {
    validationErrors.title = 'Title is required.'
  }
  if (!form.category.trim()) {
    validationErrors.category = 'Category is required.'
  }
  if (!form.description.trim()) {
    validationErrors.description = 'Description is required.'
  }
  if (Number(form.price) <= 0 || form.price === '') {
    validationErrors.price = 'Price must be positive.'
  }
  if (Number(form.stock) < 0 || form.stock === '') {
    validationErrors.stock = 'Stock must not be negative.'
  }

  errors.value = validationErrors
  return Object.keys(validationErrors).length === 0
}

function buildPayload() {
  const tags = form.tagsText
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean)

  const thumbnail = form.thumbnail.trim()

  return {
    title: form.title.trim(),
    category: form.category.trim(),
    description: form.description.trim(),
    price: Number(form.price),
    stock: Number(form.stock),
    brand: form.brand.trim(),
    thumbnail,
    images: thumbnail ? [thumbnail] : [],
    discountPercentage: Number(form.discountPercentage) || 0,
    rating: Number(form.rating) || 0,
    tags,
  }
}

function submitForm() {
  message.value = ''

  if (!validateForm()) {
    return
  }

  const payload = buildPayload()

  if (isEditing.value) {
    store
      .dispatch('updateProduct', {
        id: editingId.value,
        product: payload,
      })
      .then(() => {
        message.value = 'Product updated successfully.'
        cancelEdit(false)
      })
      .catch(() => {})
    return
  }

  store
    .dispatch('createProduct', payload)
    .then(() => {
      message.value = 'Product created successfully.'
      resetForm()
    })
    .catch(() => {})
}

function startEdit(product) {
  editingId.value = product.id
  setForm({
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
  })
  errors.value = {}
  message.value = ''
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function cancelEdit(clearMessage = true) {
  editingId.value = null
  resetForm()
  errors.value = {}

  if (clearMessage) {
    message.value = ''
  }
}

function resetForm() {
  setForm(createEmptyForm())
}

function removeProduct(id) {
  if (!window.confirm('Delete this product?')) {
    return
  }

  store
    .dispatch('deleteProduct', id)
    .then(() => {
      if (editingId.value === id) {
        cancelEdit()
      }

      message.value = 'Product deleted successfully.'
    })
    .catch(() => {})
}

function formatPrice(value) {
  return Number(value || 0).toFixed(2)
}
</script>
