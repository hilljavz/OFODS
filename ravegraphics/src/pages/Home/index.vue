<template>
  <div class="min-h-screen font-xy">
    <header-component />
    <hero-component />
    <about-component />
    <services-component />
    <features-component />
    <portfolio-component />
    <numbers-component />
    <client-component />
    <footer-component />
  </div>
</template>

<script>
import clientComponent from "../../components/clientComponent";
import footerComponent from "../../components/footerComponent";
import headerComponent from "../../components/headerComponent";
import aboutComponent from "../../components/aboutComponent";
import servicesComponent from "../../components/servicesComponent";
import featuresComponent from "../../components/featuresComponent";
import portfolioComponent from "../../components/portfolioComponent";
import numbersComponent from "../../components/numbersComponent";
import heroComponent from "../../components/heroComponent";
export default {
  name: "index",
  components: {
    heroComponent,
    footerComponent,
    headerComponent,
    aboutComponent,
    servicesComponent,
    featuresComponent,
    portfolioComponent,
    numbersComponent,
    clientComponent
  }
};
</script>

<style scoped>
</style>