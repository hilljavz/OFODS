<template>
  <div class="my-20">
    <div class="mx-auto mycontainer">
      <div class="grid lg:grid-cols-3 lg:gap-4 px-10">
        <div>
          <span class="block text-red-400 font-semibold text-xs uppercase">Portfolio</span>
          <span class="block font-black text-4xl uppercase mt-5">Some of my work</span>
          <span class="block text-black font-semibold text-sm mt-3">
            The heart and soul of Rave Graphics lies within our creative capabilities. We are a team of creative
            minds that thrives on design and innovation so that creativity sits at the core of everything we do
          </span>
        </div>
        <div class="col-span-2 flex lg:items-end justify-start lg:justify-end mt-10 lg:mt-0">
          <div>
            <router-link
              to="/portfolio"
              class="focus:outline-none border-2 border-red-500 text-red-500 text-xs font-bold px-10 py-2 rounded"
            >Portfolio</router-link>
          </div>
        </div>
      </div>

      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-20 px-10">
        <div class="bg-red-400 rounded overflow-hidden relative">
          <div class="absolute inset-0 bg-trans"></div>
          <img src="../assets/IMG-20200429-WA0011.jpg" alt class="object-cover" />
          <div class="absolute bottom-0 text-white px-10 py-10">
            <span class="block font-semibold text-sm">Business</span>
            <span class="block font-light text-xs text-gray-500">Marketing</span>
          </div>
        </div>

        <div class="bg-red-400 rounded overflow-hidden relative">
          <div class="absolute inset-0 bg-trans"></div>
          <img src="../assets/IMG-20200428-WA0007.jpg" alt class="object-cover" />
          <div class="absolute bottom-0 text-white px-10 py-10">
            <span class="block font-semibold text-sm">Clothing and Apps</span>
            <span class="block font-light text-xs text-gray-500">Design</span>
          </div>
        </div>

        <div class="bg-red-400 rounded overflow-hidden relative">
          <div class="absolute inset-0 bg-trans"></div>
          <img src="../assets/IMG-20200428-WA0004.jpg" alt class="object-cover" />
          <div class="absolute bottom-0 text-white px-10 py-10">
            <span class="block font-semibold text-sm">Web and Mobile</span>
            <span class="block font-light text-xs text-gray-500">Development</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "portfolioComponent"
};
</script>

<style scoped>
</style>