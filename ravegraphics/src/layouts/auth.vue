<template>
    <div class="min-h-screen flex justify-between font-xy">
        <div class="hidden md:block w-1/3 bg-bl-900">
            <div class="py-10 px-10" data-aos="fade-down" data-aos-delay="1000">
                <router-link to="/" class="bloc text-indigo-100 text-5xl font-black">RG</router-link>
            </div>
        </div>
        <div class="flex-1 bg-white flex flex-col">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "auth"
    }
</script>

<style scoped>

</style>