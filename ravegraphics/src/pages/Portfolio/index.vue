<template>

    <div class="min-h-screen font-xy">
        <header-component/>
        <header-portifolio/>
        <product-portfolio/>
        <footer-component/>
    </div>
    
</template>

<script>
    import headerPortifolio from "./headerPortifolio";
    import HeaderComponent from "../../components/headerComponent";
    import FooterComponent from "../../components/footerComponent";
    import ProductPortfolio from "./productPortfolio";
    import DummyComponent from "../../components/dummyComponent";
    export default {
        name: "index",
        components: {
            DummyComponent,
            ProductPortfolio,
            FooterComponent,
            HeaderComponent,
            headerPortifolio
        }
    }
</script>

<style scoped>

</style>