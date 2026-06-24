<script>
export default {
  name: "FormSection",

  props: {
    // Props stay simple: the parent owns the form state and validation errors.
    form: {
      type: Object,
      required: true,
    },
    errors: {
      type: Object,
      required: true,
    },
    themeStyle: {
      type: Object,
      default: () => ({}),
    },
  },

  // Emits let the parent decide what happens after submit.
  emits: ["submit-form"],

  methods: {
    submitForm() {
      this.$emit("submit-form");
    },
  },
};
</script>

<template>
  <div :style="themeStyle">
    <div class="mb-6">
      <h2 class="text-xl font-semibold text-slate-900">Add a person</h2>
      <p class="mt-1 text-sm text-slate-600">
        Fill in the form and choose whether the person belongs in users or
        admins.
      </p>
    </div>

    <form class="grid gap-5" @submit.prevent="submitForm">
      <div class="grid gap-5 md:grid-cols-2">
        <div>
          <label
            for="name"
            class="mb-2 block text-sm font-medium text-slate-700"
          >
            Name
          </label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            class="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-transparent focus:ring-2"
            :style="{ '--tw-ring-color': 'var(--theme-color)' }"
            placeholder="Enter name"
          />
          <!-- Validation messages live directly under the matching field. -->
          <p v-if="errors.name" class="mt-2 text-sm text-red-500">
            {{ errors.name }}
          </p>
        </div>

        <div>
          <label
            for="age"
            class="mb-2 block text-sm font-medium text-slate-700"
          >
            Age
          </label>
          <input
            id="age"
            v-model="form.age"
            type="number"
            min="1"
            class="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-transparent focus:ring-2"
            :style="{ '--tw-ring-color': 'var(--theme-color)' }"
            placeholder="Enter age"
          />
          <!-- Validation messages live directly under the matching field. -->
          <p v-if="errors.age" class="mt-2 text-sm text-red-500">
            {{ errors.age }}
          </p>
        </div>
      </div>

      <div>
        <label class="mb-2 block text-sm font-medium text-slate-700">Role</label>
        <div class="flex flex-wrap gap-3">
          <label
            class="flex cursor-pointer items-center gap-2 rounded-2xl border px-4 py-3 text-sm transition"
            :class="
              form.role === 'user'
                ? 'border-transparent text-white shadow-sm'
                : 'border-slate-200 text-slate-700'
            "
            :style="
              form.role === 'user'
                ? { backgroundColor: 'var(--theme-color)' }
                : {}
            "
          >
            <input
              v-model="form.role"
              type="radio"
              value="user"
              class="sr-only"
            />
            <span>User</span>
          </label>

          <label
            class="flex cursor-pointer items-center gap-2 rounded-2xl border px-4 py-3 text-sm transition"
            :class="
              form.role === 'admin'
                ? 'border-transparent text-white shadow-sm'
                : 'border-slate-200 text-slate-700'
            "
            :style="
              form.role === 'admin'
                ? { backgroundColor: 'var(--theme-color)' }
                : {}
            "
          >
            <input
              v-model="form.role"
              type="radio"
              value="admin"
              class="sr-only"
            />
            <span>Admin</span>
          </label>
        </div>
      </div>

      <div class="flex items-center justify-end">
        <button
          type="submit"
          class="rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
          :style="{ backgroundColor: 'var(--theme-color)' }"
        >
          Add Person
        </button>
      </div>
    </form>
  </div>
</template>
