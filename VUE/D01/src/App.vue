<script>
import UserList from "./components/UserList.vue";
import AdminList from "./components/AdminList.vue";

export default {
  name: "App",

  components: {
    UserList,
    AdminList,
  },

  data() {
    return {
      activeView: "form",
      themeColor: "#2563eb",

      users: [],
      admins: [],

      form: {
        name: "",
        age: "",
        role: "user",
      },

      errors: {
        name: "",
        age: "",
      },
    };
  },

  computed: {
    themeStyle() {
      return {
        "--theme-color": this.themeColor,
      };
    },
  },

  methods: {
    clearErrors() {
      this.errors.name = "";
      this.errors.age = "";
    },

    validateForm() {
      this.clearErrors();

      let isValid = true;
      const trimmedName = this.form.name.trim();
      const ageValue = Number(this.form.age);

      const nameRegex = /^[A-Za-z\s]+$/;

      if (!trimmedName) {
        this.errors.name = "Name is required.";
        isValid = false;
      } else if (!nameRegex.test(trimmedName)) {
        this.errors.name = "Name must contain letters only.";
        isValid = false;
      }

      if (this.form.age === "") {
        this.errors.age = "Age is required.";
        isValid = false;
      } else if (Number.isNaN(ageValue) || ageValue <= 0) {
        this.errors.age = "Age must be a positive number.";
        isValid = false;
      }

      return isValid;
    },

    resetForm() {
      this.form.name = "";
      this.form.age = "";
      this.form.role = "user";
      this.clearErrors();
    },

    createPerson() {
      return {
        id: Date.now() + Math.floor(Math.random() * 1000),
        name: this.form.name.trim(),
        age: Number(this.form.age),
        role: this.form.role,
      };
    },

    submitForm() {
      if (!this.validateForm()) {
        return;
      }

      const person = this.createPerson();

      if (person.role === "admin") {
        this.admins.push(person);
      } else {
        this.users.push(person);
      }

      this.resetForm();
      this.activeView = person.role === "admin" ? "admins" : "users";
    },

    deleteUser(id) {
      this.users = this.users.filter((user) => user.id !== id);
    },

    deleteAdmin(id) {
      this.admins = this.admins.filter((admin) => admin.id !== id);
    },
  },
};
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-800" :style="themeStyle">
    <main
      class="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8"
    >
      <section class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <div
          class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <p
              class="text-sm font-medium uppercase tracking-[0.2em] text-slate-500"
            >
              Form task
            </p>
            <h1 class="mt-2 text-3xl font-bold text-slate-900">
              People manager
            </h1>
            <p class="mt-2 text-sm text-slate-600">
              Add people, move between users and admins, and delete items
              through events.
            </p>
          </div>

          <div class="flex items-center gap-3">
            <div
              class="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2"
            >
              <span class="text-xs font-medium text-slate-600">Theme</span>
              <input
                v-model="themeColor"
                type="color"
                aria-label="Theme color"
                class="h-8 w-8 cursor-pointer rounded-full border-0 bg-transparent p-0"
              />
            </div>
          </div>
        </div>

        <div class="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            class="rounded-full px-4 py-2 text-sm font-medium transition"
            :class="
              activeView === 'form'
                ? 'text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            "
            :style="
              activeView === 'form'
                ? { backgroundColor: 'var(--theme-color)' }
                : {}
            "
            @click="activeView = 'form'"
          >
            Form
          </button>
          <button
            type="button"
            class="rounded-full px-4 py-2 text-sm font-medium transition"
            :class="
              activeView === 'users'
                ? 'text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            "
            :style="
              activeView === 'users'
                ? { backgroundColor: 'var(--theme-color)' }
                : {}
            "
            @click="activeView = 'users'"
          >
            Users
          </button>
          <button
            type="button"
            class="rounded-full px-4 py-2 text-sm font-medium transition"
            :class="
              activeView === 'admins'
                ? 'text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            "
            :style="
              activeView === 'admins'
                ? { backgroundColor: 'var(--theme-color)' }
                : {}
            "
            @click="activeView = 'admins'"
          >
            Admins
          </button>
        </div>
      </section>

      <section
        v-if="activeView === 'form'"
        class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
      >
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
                >Name</label
              >
              <input
                id="name"
                v-model="form.name"
                type="text"
                class="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-transparent focus:ring-2"
                :style="{ '--tw-ring-color': 'var(--theme-color)' }"
                placeholder="Enter name"
              />
              <p v-if="errors.name" class="mt-2 text-sm text-red-500">
                {{ errors.name }}
              </p>
            </div>

            <div>
              <label
                for="age"
                class="mb-2 block text-sm font-medium text-slate-700"
                >Age</label
              >
              <input
                id="age"
                v-model="form.age"
                type="number"
                min="1"
                class="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-transparent focus:ring-2"
                :style="{ '--tw-ring-color': 'var(--theme-color)' }"
                placeholder="Enter age"
              />
              <p v-if="errors.age" class="mt-2 text-sm text-red-500">
                {{ errors.age }}
              </p>
            </div>
          </div>

          <div>
            <label class="mb-2 block text-sm font-medium text-slate-700"
              >Role</label
            >
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
      </section>

      <section
        v-else-if="activeView === 'users'"
        class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
      >
        <UserList :users="users" @delete="deleteUser" />
      </section>

      <section
        v-else
        class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
      >
        <AdminList :admins="admins" @delete="deleteAdmin" />
      </section>
    </main>
  </div>
</template>
