<template>
  <div class="my-20">
    <div class="mx-auto mycontainer">
      <div class="px-10">
        <CoolLightBox :items="products.map(img=>img.image)" :index="index" @close="index = null"></CoolLightBox>

        <div v-if="!isLoading" class="flex-1 grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-20" data-aos="fade" data-aos-delay="1800">
          <div
            v-for="(p,i) in products"
            :key="i"
            class="bg-red-400 rounded overflow-hidden sm:h-100 relative"
            @click="index=i"
          >
            <div class="absolute inset-0 bg-trans"></div>
            <img :src="p.image" alt class="w-full h-full object-cover" />
            <div class="absolute bottom-0 text-white px-10 py-10">
              <span class="block font-semibold text-sm">{{p.description.substring(0,13)}}</span>
              <span class="block font-light text-xs text-gray-500">{{p.category.title.substring(0,20)}}</span>
            </div>
          </div>
        </div>

        <div v-else>
          <span class="text-center text-xs font-light">Loading...</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import http from "../../http";

export default {
  name: "productPortfolio",
  data() {
    return {
      products: [],
      index: null,
      isLoading:true
    };
  },
  created() {
    this.getProducts()
  },
  methods:{
    getProducts(){
      http().get('/products').then(res=>{
        this.products=res.data
        this.isLoading=false
      })
    }
  }
};
</script>

<style scoped>
</style>
