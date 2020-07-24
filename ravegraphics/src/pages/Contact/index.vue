<template>
    <div class="min-h-screen font-xy">
        <header-component/>
        <header-contact/>
        <info-contacts/>
        <map-contact/>
        <footer-component/>
    </div>
</template>

<script>
    import HeaderComponent from "../../components/headerComponent";
    import FooterComponent from "../../components/footerComponent";
    import HeaderContact from "./headerContact";
    import InfoContacts from "./infoContacts";
    import MapContact from "./mapContact";
    export default {
        name: "index",
        components: {
            MapContact,
            InfoContacts,
            HeaderContact,
            FooterComponent,
            HeaderComponent
        }
    }
</script>

<style scoped>

</style>