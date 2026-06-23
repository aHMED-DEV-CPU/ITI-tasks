import MainLayout from '../layouts/MainLayout.vue'
import Home from '../pages/Home.vue'
import Products from '../pages/Products.vue'
import ProductDetails from '../pages/ProductDetails.vue'
import ProductsDashboard from '../pages/ProductsDashboard.vue'
import NotFound from '../pages/NotFound.vue'

export default [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', name: 'home', component: Home },
      { path: 'products', name: 'products', component: Products },
      { path: 'products/:id', name: 'product-details', component: ProductDetails },
      { path: 'dashboard', name: 'dashboard', component: ProductsDashboard },
    ],
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
]
