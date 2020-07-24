<template>
    <div class="pt-10 pb-5 bg-bl-900 text-indigo-300" id="footer">
        <div class="mx-auto mycontainer">
            <div class="px-10">
                <div class="grid lg:grid-cols-3 pb-10">
                    <div data-aos="fade" data-aos-delay="1000">
                        <span class="block text-3xl font-black">Rave Graphics</span>
                        <span class="block text-sm font-light">+263783287154</span>
                        <span class="block text-xs font-hairline">kundai@ravegraphics.co.zw</span>
                    </div>
                    <div class="mt-10 lg:mt-0">

                        <span class="block text-rd-900">Menu</span>

                        <div class="grid grid-cols-2 mt-5" data-aos="fade" data-aos-delay="1200">
                            <div>
                                <router-link to="/login" class="block text-xs font-light">Login</router-link>
                                <router-link to="portfolio" class="block text-xs font-light mt-3">Portfolio</router-link>
                            </div>
                            <div>
                                <router-link to="/contact" class="block text-xs font-light">Contacts</router-link>
                            </div>
                        </div>

                    </div>
                    <div class="mt-10 lg:mt-0" data-aos="fade" data-aos-delay="1500">
                        <span class="block text-sm font-medium text-rd-900 uppercase">subscribe</span>
                        <form v-on:submit.prevent="subscribe" class="mt-4">
                            <div class="flex items-center">
                                <input placeholder="Your email"
                                       type="email"
                                       v-model="email"
                                       class="w-full text-xs text-black font-light px-4 h-10 focus:outline-none">
                                <button type="submit" class="bg-rd-900 text-xs font-semibold h-10 px-5 text-red-100 focus:outline-none">Subscribe</button>
                            </div>
                            <div>
                                <span class="block text-red-600 text-xs mt-3 font-bold" v-if="errors.email">{{errors.email[0]}}</span>
                            </div>
                        </form>
                    </div>
                </div>

                <div data-aos="fade" data-aos-delay="2000" class="flex items-center justify-between text-indigo-300 py-5 border-t border-indigo-300">
                    <div class="hidden sm:flex items-center text-red-600">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full border-2 border-indigo-400 mr-5">
                            <i class="ti-facebook"></i>
                        </div>
                        <div class="flex items-center justify-center h-10 w-10 rounded-full border-2 border-indigo-400 mr-5">
                            <i class="ti-twitter-alt"></i>
                        </div>
                        <div class="flex items-center justify-center h-10 w-10 rounded-full border-2 border-indigo-400 mr-5">
                            <i class="ti-instagram"></i>
                        </div>
                    </div>
                    <div>
                    <span class="block text-xs font-light">
                        &copy; 2020.All right reserved.
                    </span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import http from "../http";

    export default {
        data(){
            return {
                email:'',
                errors:{}
            }
        },
        methods:{
            subscribe(){
                http().post('/subscriptions',{
                    email:this.email
                }).then(res=>{
                    this.email=''
                    this.errors={}
                })
                .catch(error=>{
                    this.$toaster.warning('something went wrong when you were trying to subscribe to this channel')
                    this.errors=error.response.data.errors
                })
            }
        }
    }
</script>

<style scoped>

</style>