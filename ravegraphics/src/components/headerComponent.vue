<template>
    <div class="py-10 bg-bl-900">
        <div class="mycontainer mx-auto">
            <div class="px-5 lg:px-5">
                 <div class="flex items-center justify-between text-indigo-100">
                <div data-aos="fade">
                    <router-link to="/" class="block text-xl font-black">Rave Graphics</router-link>
                </div>
                <div data-aos="fade-up" data-aos-delay="300" class="hidden md:flex items-center">
                    <router-link to="/" class="block text-sm font-light ml-5">Home</router-link>
                    <router-link to="/portfolio" class="block text-sm font-light ml-5">Portfolio</router-link>
                    <router-link to="/contact" class="block text-sm font-light ml-5">Contact</router-link>
                    <router-link to="/login" class="block text-sm font-light ml-5">Login</router-link>
                </div>
                <button @click.prevent="isOpen=!isOpen" class="py-2 md:hidden focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="24"
                         height="24"
                         viewBox="0 0 24 24"
                         fill="none"
                         stroke="currentColor"
                         stroke-width="2"
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         class="feather feather-menu">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>
                <div>

                    <div data-aos="fade-down" v-if="isOpen" data-aos-delay="300" class="md:hidden text-indigo-100">
                        <router-link to="/" class="block text-sm font-light mt-3">Home</router-link>
                        <router-link to="/portfolio" class="block text-sm font-light mt-3">Portfolio</router-link>
                        <router-link to="/contact" class="block text-sm font-light mt-3">Contact</router-link>
                        <router-link to="/admin" class="block text-sm font-light mt-3" v-if="token">Dashboard</router-link>
                        <router-link to="/login" class="block text-sm font-light mt-3" v-else>Login</router-link>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "headerComponent",
        data(){
            return {
                isOpen:false
            }
        },
        computed:{
            ...mapState([
                'token'
            ])
        }
    }
</script>

<style scoped>

</style>
