import axios from 'axios'

export default {
  data() {
    return {
      baseUrl: 'http://localhost:3000',
    }
  },
  methods: {
    getAllProducts() {
      return axios.get(`${this.baseUrl}/products`)
    },
    getProductById(id) {
      return axios.get(`${this.baseUrl}/products/${id}`)
    },
    createProduct(product) {
      return axios.post(`${this.baseUrl}/products`, product)
    },
    updateProductById(id, product) {
      return axios.put(`${this.baseUrl}/products/${id}`, product)
    },
    deleteProductById(id) {
      return axios.delete(`${this.baseUrl}/products/${id}`)
    },
  },
}
