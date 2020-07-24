<template>

   <div class="min-h-screen bg-indigo-100 font-xy text-indigo-900 relative">


<!--       <div class="absolute h-screen w-full bg-bl-900 cliper"></div>-->

       <div class="mx-auto mycontainer py-10 relative">
           <div class="py-5 flex flex-col sm:flex-row sm:items-center justify-between px-5">

               <router-link to="/" class="block font-black text-xl text-indigo-300">Rave <span class="text-red-600">graphics</span></router-link>

               <div class="flex flex-col sm:flex-row sm:items-center">
                   <router-link to="/admin" class="text-xs font-light mt-3 sm:mt-0 sm:ml-3">Home</router-link>
                   <router-link to="/categories" class="text-xs font-light mt-3 sm:mt-0 sm:ml-3">Categories</router-link>
                   <router-link to="/subscriptions" class="self-start text-xs font-light mt-3 sm:mt-0 sm:ml-3 relative">
                       <span>Subscriptions</span>
                       <span v-if="subs.length" class="bg-red-500 absolute text-xxs text-red-100 w-5 h-5 right-0 top-0 -mt-2 -mr-3 flex items-center justify-center rounded-full">
                           {{subs.length}}
                       </span>
                   </router-link>
                   <button class="text-xs font-light text-left focus:outline-none mt-3 sm:mt-0 sm:ml-5" @click.prevent="goLogin()">
                       Logout
                   </button>
               </div>

           </div>

           <router-view></router-view>

       </div>

   </div>

</template>

<script>
    import http from "../http";

    import {mapMutations} from 'vuex'

    export default {

        data(){
            return {
                subs:[]
            }
        },

        created() {
            this.getSubs()

        },
        methods:{
            ...mapMutations([
                'REMOVE_TOKEN'
            ]),
            goLogin(){

                this.REMOVE_TOKEN()
                this.$router.push('/login')
            },

            getSubs(){
                http().get('subscriptions')
                .then(res=>{
                    this.subs=res.data.filter(sub=>sub.isRead==false)
                })
            }
        }

    }
</script>
