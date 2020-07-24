<template>

    <div class="min-h-screen">
        <header-component/>
        <header-about/>
        <footer-component/>
    </div>
    
</template>

<script>

    import FooterComponent from "../../components/footerComponent";
    import HeaderComponent from "../../components/headerComponent";
    import HeaderAbout from "./headerAbout";
    export default {
        name: "index",
        components: {HeaderAbout, HeaderComponent, FooterComponent}
    }
</script>

<style scoped>

</style>