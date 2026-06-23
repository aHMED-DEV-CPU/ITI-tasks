import { createStore } from 'vuex'
import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export default createStore({
  state: {
    products: [],
    currentProduct: null,
    loading: false,
    error: '',
    apiError: '',
  },
  getters: {
    products(state) {
      return state.products
    },
    currentProduct(state) {
      return state.currentProduct
    },
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_CURRENT_PRODUCT(state, product) {
      state.currentProduct = product
    },
    SET_LOADING(state, loading) {
      state.loading = loading
    },
    SET_ERROR(state, error) {
      state.error = error
    },
    SET_API_ERROR(state, apiError) {
      state.apiError = apiError
    },
    ADD_PRODUCT(state, product) {
      state.products.push(product)
    },
    UPDATE_PRODUCT(state, updatedProduct) {
      const index = state.products.findIndex((product) => product.id === updatedProduct.id)

      if (index !== -1) {
        state.products.splice(index, 1, updatedProduct)
      }
    },
    DELETE_PRODUCT(state, id) {
      state.products = state.products.filter((product) => product.id !== id)
    },
  },
  actions: {
    fetchProducts({ commit }) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', '')
      commit('SET_API_ERROR', '')

      return axios
        .get(`${baseUrl}/products`)
        .then((response) => {
          commit('SET_PRODUCTS', response.data)
          return response.data
        })
        .catch((error) => {
          commit('SET_ERROR', 'unable to load products from the server.')
          commit('SET_API_ERROR', 'unable to load products.')
          throw error
        })
        .finally(() => {
          commit('SET_LOADING', false)
        })
    },
    fetchProductById({ commit }, id) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', '')
      commit('SET_CURRENT_PRODUCT', null)

      return axios
        .get(`${baseUrl}/products/${id}`)
        .then((response) => {
          commit('SET_CURRENT_PRODUCT', response.data)
          return response.data
        })
        .catch((error) => {
          commit('SET_ERROR', 'Product not found or could not be loaded.')
          throw error
        })
        .finally(() => {
          commit('SET_LOADING', false)
        })
    },
    createProduct({ commit }, product) {
      commit('SET_API_ERROR', '')

      return axios
        .post(`${baseUrl}/products`, product)
        .then((response) => {
          commit('ADD_PRODUCT', response.data)
          return response.data
        })
        .catch((error) => {
          commit('SET_API_ERROR', 'unable to create product.')
          throw error
        })
    },
    updateProduct({ commit }, { id, product }) {
      commit('SET_API_ERROR', '')

      return axios
        .put(`${baseUrl}/products/${id}`, product)
        .then((response) => {
          commit('UPDATE_PRODUCT', response.data)
          return response.data
        })
        .catch((error) => {
          commit('SET_API_ERROR', 'unable to update product.')
          throw error
        })
    },
    deleteProduct({ commit }, id) {
      commit('SET_API_ERROR', '')

      return axios
        .delete(`${baseUrl}/products/${id}`)
        .then(() => {
          commit('DELETE_PRODUCT', id)
        })
        .catch((error) => {
          commit('SET_API_ERROR', 'unable to delete product.')
          throw error
        })
    },
  },
})
