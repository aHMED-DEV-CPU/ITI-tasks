<script>
export default {
  name: "AdminList",

  props: {
    // Props are read-only here; the parent owns the admins array.
    admins: {
      type: Array,
      default: () => [],
    },
    themeStyle: {
      type: Object,
      default: () => ({}),
    },
  },

  // Emits let the parent delete the item from its own state.
  emits: ["delete-admin"],

  methods: {
    deleteAdmin(id) {
      this.$emit("delete-admin", id);
    },
  },
};
</script>

<template>
  <div :style="themeStyle">
    <div class="mb-6">
      <h2 class="text-xl font-semibold text-slate-900">Admins</h2>
      <p class="mt-1 text-sm text-slate-600">
        These entries came from the form with the admin role.
      </p>
    </div>

    <div v-if="admins.length" class="grid gap-4">
      <article
        v-for="admin in admins"
        :key="admin.id"
        class="flex flex-col gap-4 rounded-2xl border border-slate-200 p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <p class="text-base font-semibold text-slate-900">{{ admin.name }}</p>
          <p class="mt-1 text-sm text-slate-600">Age: {{ admin.age }}</p>
        </div>

        <button
          type="button"
          class="rounded-xl px-4 py-2 text-sm font-medium text-white transition hover:opacity-95"
          :style="{ backgroundColor: 'var(--theme-color)' }"
          @click="deleteAdmin(admin.id)"
        >
          Delete
        </button>
      </article>
    </div>

    <div
      v-else
      class="rounded-2xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500"
    >
      No admins added yet.
    </div>
  </div>
</template>
