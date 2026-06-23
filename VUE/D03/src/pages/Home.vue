<template>
  <section class="flex items-center px-8" :style="{ minHeight: homeMinHeight }">
    <div class="mx-auto w-full max-w-screen-2xl py-10">
      <!-- Hero -->
      <div class="grid items-center gap-10 lg:grid-cols-[1.45fr_0.85fr]">
        <!-- Left Content -->
        <div class="space-y-7">
          <span
            class="inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-medium text-slate-600 ring-1 ring-slate-200"
          >
            Gaber Product Store
          </span>

          <div class="space-y-4">
            <h1
              class="max-w-3xl text-5xl font-bold tracking-tight text-slate-950 lg:text-6xl"
            >
              Simple Vue Product Store
            </h1>

            <p class="max-w-2xl text-lg leading-8 text-slate-600">
              Browse real products, view clean details, and manage your catalog
              with a simple JSON Server CRUD dashboard.
            </p>
          </div>

          <div class="flex flex-wrap gap-4">
            <router-link
              to="/products"
              class="rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              <span class="text-white">Browse Products</span>
            </router-link>

            <router-link
              to="/dashboard"
              class="rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
            >
              Manage Products
            </router-link>
          </div>
        </div>

        <!-- Product Preview -->
        <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div class="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 class="text-xl font-semibold text-slate-950">
                Featured Products
              </h2>
              <p class="mt-1 text-sm text-slate-500">
                A quick preview from the catalog.
              </p>
            </div>

            <span
              class="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100"
            >
              Live data
            </span>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div
              v-for="item in previewProducts"
              :key="item.title"
              class="rounded-2xl border border-slate-200 bg-slate-50 p-4"
            >
              <div
                class="flex h-32 items-center justify-center rounded-xl bg-white"
              >
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="max-h-28 max-w-full object-contain"
                />
              </div>

              <p class="mt-4 truncate text-sm font-semibold text-slate-800">
                {{ item.title }}
              </p>

              <p class="mt-1 text-xs text-slate-500">
                {{ item.category }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Product Cards -->
      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <article
          v-for="card in cards"
          :key="card.title"
          class="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <div class="flex items-start gap-4">
            <div>
              <h2 class="text-xl font-semibold text-slate-950">
                {{ card.title }}
              </h2>

              <p class="mt-2 text-base leading-7 text-slate-600">
                {{ card.description }}
              </p>
            </div>
          </div>

          <div class="mt-7 grid grid-cols-3 gap-4">
            <div
              v-for="image in card.images"
              :key="image"
              class="flex h-28 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-3"
            >
              <img
                :src="image"
                :alt="card.title"
                class="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      homeMinHeight: "calc(100vh - 118px)",

      previewProducts: [
        {
          title: "Essence Mascara",
          category: "Beauty",
          image:
            "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
        },
        {
          title: "Calvin Klein CK One",
          category: "Fragrances",
          image:
            "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp",
        },
        {
          title: "Annibale Sofa",
          category: "Furniture",
          image:
            "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp",
        },
      ],

      cards: [
        {
          iconBg: "bg-amber-50",
          title: "New Arrivals",
          description:
            "Discover the latest products recently added to the store.",
          images: [
            "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
            "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp",
            "https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp",
          ],
        },
        {
          iconBg: "bg-indigo-50",
          title: "Wide Variety",
          description:
            "Browse different categories like beauty, fragrances, furniture, and groceries.",
          images: [
            "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
            "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp",
            "https://cdn.dummyjson.com/product-images/groceries/beef-steak/thumbnail.webp",
          ],
        },
        {
          iconBg: "bg-emerald-50",
          title: "Smart Shopping",
          description:
            "Compare prices, ratings, stock, and discounts before viewing details.",
          images: [
            "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp",
            "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
            "https://cdn.dummyjson.com/product-images/groceries/cat-food/thumbnail.webp",
          ],
        },
      ],
    };
  },
};
</script>