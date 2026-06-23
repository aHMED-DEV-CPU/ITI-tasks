<template>
  <div class="min-h-screen bg-slate-100 text-slate-900 pt-13">
    <div class="mx-auto">
      <div
        class="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
      >
        <Navbar />
        <main class="p-4 sm:p-6 lg:p-8">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "MainLayout",
  components: {
    Navbar,
  },
};
</script>
