<template>
  <Container>
    <div class="py-20">
      <h1 class="text-3xl font-semibold mb-3">Join Aniditt</h1>

      <form @submit.prevent="submitHandler">
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Username</label
          >
          <input
            id="email"
            v-model.trim="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="username@gmail.com"
            :class="{
              invalid: v$.email.$errors.length >= 1,
              correct: v$.email.$dirty && v$.email.$errors.length == 0,
            }"
          />
          <div
            class="input-errors"
            v-for="error of v$.email.$errors"
            :key="error.$uid"
          >
            <small class="error-msg">{{ error.$message }}</small>
          </div>
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Password</label
          >
          <input
            id="password"
            type="password"
            v-model.trim="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            :class="{
              invalid: v$.password.$errors.length >= 1,
              correct: v$.password.$dirty && v$.password.$errors.length == 0,
            }"
          />
          <div
            class="input-errors"
            v-for="error of v$.password.$errors"
            :key="error.$uid"
          >
            <small class="error-msg">{{ error.$message }}</small>
          </div>
        </div>
        <!-- <div class="flex items-start mb-6">
          <div class="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              v-model="agree"
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required="true"
            />
          </div>
          <label
            for="remember"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Remember me</label
          >
        </div> -->
        <button type="submit" class="btn px-5 py-2.5">Login</button>
      </form>
    </div>
  </Container>
</template>

<style lang="postcss" scoped>
.invalid {
  @apply focus:ring-red-300 border-red-300 border-2 focus:border-red-100;
}
.correct {
  @apply focus:ring-green-300 border-green-300 border-2 focus:border-green-100;
}
.disabled {
  @apply bg-gray-700 hover:bg-gray-800;
}
.error-msg {
  @apply text-red-500;
}
</style>

<script>
import Container from '@/components/app/Container.vue';
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

export default {
  setup: () => ({
    v$: useVuelidate(),
  }),
  data() {
    return {
      email: '',
      password: '',
      agree: false,
    };
  },
  validations() {
    return {
      email: { required, email },
      password: { required },
    };
  },
  methods: {
    submitHandler() {
      // console.log(this.v$.email.email.$message);
      // console.log(this.v$.email.required.$message);
      this.v$.$touch();
      console.log(this.v$.$errors);
      console.log(this.v$.email);
      // console.log(this.v$)
      // if (this.v$.$invalid) {
      //   this.v$.$touch()
      //   return
      // }
    },
  },
  components: {
    Container,
  },
};
</script>
