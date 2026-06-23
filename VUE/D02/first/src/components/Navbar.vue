<template>
  <header
    class="fixed top-0 right-0 left-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur"
  >
    <div
      class="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-5 lg:px-10"
    >
      <router-link
        to="/"
        class="text-2xl font-bold tracking-tight text-slate-900"
      >
        Vue Store
      </router-link>

      <nav class="flex items-center gap-4 text-sm font-medium">
        <router-link
          to="/"
          class="rounded-full px-4 py-2 transition-all duration-200"
          :class="linkClass('/')"
        >
          Home
        </router-link>

        <router-link
          to="/products"
          class="rounded-full px-4 py-2 transition-all duration-200"
          :class="linkClass('/products')"
        >
          Products
        </router-link>

        <router-link
          to="/dashboard"
          class="rounded-full px-4 py-2 transition-all duration-200"
          :class="linkClass('/dashboard')"
        >
          Dashboard
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",

  methods: {
    linkClass(path) {
      const isActive =
        path === "/"
          ? this.$route.path === "/"
          : this.$route.path === path ||
            this.$route.path.startsWith(`${path}/`);

      return isActive
        ? "!bg-slate-900 !text-white shadow-sm"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900";
    },
  },
};
</script>