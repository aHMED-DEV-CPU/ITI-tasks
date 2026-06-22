<script >
export default {
  name: "UserList",

  props: {
    users: {
      type: Array,
      default: () => [],
    },
  },

  emits: ["delete"],

  methods: {
    deleteUser(id) {
      this.$emit("delete", id);
    },
  },
};
</script>

<template>
  <div>
    <div class="mb-6">
      <h2 class="text-xl font-semibold text-slate-900">Users</h2>
      <p class="mt-1 text-sm text-slate-600">
        These entries came from the form with the user role.
      </p>
    </div>

    <div v-if="users.length" class="grid gap-4">
      <article
        v-for="user in users"
        :key="user.id"
        class="flex flex-col gap-4 rounded-2xl border border-slate-200 p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <p class="text-base font-semibold text-slate-900">{{ user.name }}</p>
          <p class="mt-1 text-sm text-slate-600">Age: {{ user.age }}</p>
        </div>

        <button
          type="button"
          class="rounded-xl px-4 py-2 text-sm font-medium text-white transition hover:opacity-95"
          :style="{ backgroundColor: 'var(--theme-color)' }"
          @click="deleteUser(user.id)"
        >
          Delete
        </button>
      </article>
    </div>

    <div
      v-else
      class="rounded-2xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500"
    >
      No users added yet.
    </div>
  </div>
</template>
