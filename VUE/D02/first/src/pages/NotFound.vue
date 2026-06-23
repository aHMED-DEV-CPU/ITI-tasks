<template>
  <div class="min-h-screen bg-slate-100 px-4 py-8 text-slate-900">
    <div
      class="mx-auto max-w-5xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
    >
      <div class="border-b border-slate-200 px-4 py-4 sm:px-6 lg:px-8">
        <span class="text-xl font-bold tracking-tight">Vue Store</span>
      </div>

      <div
        class="flex flex-col items-center justify-center px-6 py-20 text-center"
      >
        <div
          class="text-8xl font-bold tracking-tight text-slate-700 sm:text-9xl"
        >
          404
        </div>
        <h1 class="mt-4 text-2xl font-semibold text-slate-900">
          Page Not Found
        </h1>
        <p class="mt-3 max-w-md text-sm leading-6 text-slate-600">
          Sorry, the page you are looking for does not exist.
        </p>

        <router-link
          to="/"
          class="mt-6 inline-flex items-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
        >
          <span class="text-white">Back Home</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>
