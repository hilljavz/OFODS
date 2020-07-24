<template>
  <div class="flex-1">
    <div>
      <loading :active.sync="isLoading" :can-cancel="false" color="#81e6d9" :is-full-page="true"></loading>
    </div>

    <div class="flex items-center justify-between py-10 px-5">
      <div>
        <router-link to="/" class="block text-4xl font-black md:hidden">RG</router-link>
      </div>
      <div>
        <span
          class="text-xs text-gray-700"
          data-aos="fade"
          data-aos-delay="700"
        >Don't have an account?</span>
        <router-link
          to="/register"
          class="text-xs border border-gray-200 px-3 py-2 rounded-full ml-3"
        >Get started</router-link>
      </div>
    </div>
    <div class="flex-1 flex flex-col">
      <div class="mt-24 px-8 lg:px-32">
        <div class="mb-5">
          <span
            class="text-2xl font-semibold"
            data-aos="fade"
            data-aos-delay="1000"
          >Sign in to Rave Graphics</span>

          <span
            class="block text-xs mt-3 font-light tracking-wider"
            data-aos="fade"
            data-aos-delay="1200"
          >Enter your details below</span>
        </div>
        <form v-on:submit.prevent="login">
          <div class="mb-3" data-aos="fade" data-aos-delay="1400">
            <label for="email" class="block text-xs font-semibold mb-1">Email address</label>
            <input
              type="email"
              id="email"
              v-model="email"
              :class="`${errors.email ? 'border-2 border-red-300' : ''}`"
              class="w-full h-10 border px-3 border-gray-300 rounded text-xs focus:outline-none"
            />

            <span
              class="text-xxs text-red-400 font-light mt-2 block"
              v-if="errors.email"
            >{{errors.email[0]}}</span>
            <div data-aos="fade" data-aos-delay="1500">
              <a href="#" class="text-xs text-indigo-400">Know your team domain?</a>
            </div>
          </div>

          <div class="mb-3" data-aos="fade" data-aos-delay="1600">
            <div class="flex items-center justify-between mb-1">
              <label
                for="password"
                class="block text-xs font-semibold"
                data-aos-duration="100"
              >Password</label>
            </div>
            <input
              type="password"
              id="password"
              :class="`${errors.password ? 'border-2 border-red-300' : ''}`"
              v-model="password"
              class="w-full h-10 border px-3 border-gray-300 text-xs rounded focus:outline-none"
            />
            <span
              class="text-xxs text-red-400 font-light mt-2 block"
              v-if="errors.password"
            >{{errors.password[0]}}</span>
          </div>

          <div class="text-left md:text-center">
            <button data-aos="flip-up" data-aos-delay="2000"
              class="bg-indigo-700 text-xs text-indigo-100 px-10 py-3 rounded-full focus:outline-none"
            >Sign in</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import http from "../../http";

import { mapMutations } from "vuex";
import Loading from "vue-loading-overlay";
export default {
  name: "index",
  components: {
    Loading
  },
  data() {
    return {
      email: "",
      password: "",
      errors: {},
      isLoading: false
    };
  },
  methods: {
    ...mapMutations(["SET_TOKEN"]),
    login() {
      this.isLoading = true;
      http()
        .post("/login", {
          email: this.email,
          password: this.password
        })
        .then(res => {
          console.log(res.data);
          const token = res.data.token;
          localStorage.setItem("access_token", token);
          this.SET_TOKEN(token);
          this.$router.push("/admin");
          this.isLoading = false;
          this.errors = {};
        })
        .catch(error => {
          this.isLoading = false;
          this.errors = error.response.data.errors || {};
        });
    }
  }
};
</script>

<style scoped>
</style>
