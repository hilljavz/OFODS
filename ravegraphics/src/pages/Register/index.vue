<template>
    <div class="flex-1">

        <div>
            <loading :active.sync="isLoading"
                     :can-cancel="false"
                     color="#81e6d9"
                     :is-full-page="true"></loading>
        </div>

        <div class="flex items-center justify-between py-10 px-5">
        <div>
            <router-link to="/" class="block text-4xl font-black md:hidden">RG</router-link>
        </div>
            <div>
                <span class="text-xs text-gray-700" data-aos="fade" data-aos-delay="700">Already have an account?</span>
                <router-link data-aos="fade" data-aos-delay="1000" to="/login" class="text-xs border border-gray-200 px-3 py-2 rounded-full ml-3">Sign in</router-link>
            </div>
        </div>
        <div class="flex-1">
            <div class="mt-24 px-8 md:px-32">
                <div class="mb-5">
                    <span class="text-2xl font-semibold" data-aos="fade" data-aos-delay="900">Get started absolutely free</span>

                    <span data-aos="fade" data-aos-delay="1100" class="block text-xs mt-3 font-light tracking-wider">See how the world's greatest user experiences are created</span>
                </div>
                <form v-on:submit.prevent="register">
                    <div class="mb-5" data-aos="fade" data-aos-delay="1300">
                        <label for="email" class="block text-xs font-semibold mb-1">Email address</label>
                        <input type="email"
                               id="email"
                               v-model="email"
                               :class="`${errors.email ? 'border-2 border-red-300' : ''}`"
                               class="w-full h-10 border px-3 border-gray-300 rounded text-xs focus:outline-none">

                        <span class="text-xxs text-red-400 font-light mt-2 block" v-if="errors.email">{{errors.email[0]}}</span>

                    </div>

                    <div class="mb-5" data-aos="fade" data-aos-delay="1500">
                        <label for="username" class="block text-xs font-semibold mb-1">Username</label>
                        <input type="text"
                               id="username"
                               v-model="name"
                               :class="`${errors.name ? 'border-2 border-red-300' : ''}`"
                               class="w-full h-10 border px-3 border-gray-300 rounded text-xs focus:outline-none">
                        <span class="text-xxs text-red-400 font-light mt-2 block" v-if="errors.name">{{errors.name[0]}}</span>
                    </div>

                    <div class="mb-5" data-aos="fade" data-aos-delay="1700">
                        <label for="password" class="block text-xs font-semibold mb-1">Password</label>
                        <input type="password"
                               id="password"
                               :class="`${errors.password ? 'border-2 border-red-300' : ''}`"
                               v-model="password"
                               class="w-full h-10 border px-3 border-gray-300 text-xs rounded focus:outline-none">
                        <span class="text-xxs text-red-400 font-light mt-2 block" v-if="errors.password">{{errors.password[0]}}</span>
                    </div>

                    <div class="text-left md:text-center" data-aos="flip-up" data-aos-delay="2000">
                        <button class="bg-indigo-700 text-xs text-indigo-100 px-10 py-3 rounded-full focus:outline-none">Sign up</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="py-10">
            <span class="text-xs font-light text-gray-700 text-center block">By sign up i agree to iguard terms of service and privacy policy</span>
        </div>
    </div>
</template>

<script>
    import HTTP from '../../http'
    import Loading from "vue-loading-overlay";
    export default {
        name: "index",
        components:{
            Loading
        },
        data(){
            return {
                email:'',
                password:'',
                name:'',
                isLoading:false,
                errors:{}
            }
        },
        methods:{

            register(){
                this.isLoading=true

                const {name,email,password}=this
                HTTP().post('/register',{
                    name,
                    email,
                    password
                })
                .then(res=>{
                    this.isLoading=false
                    this.errors={}
                    this.$router.push('/login')
                })
                .catch(error=>{
                    this.isLoading=false
                    this.errors=error.response.data.errors
                })

            }
        }

    }
</script>

<style scoped>

</style>
