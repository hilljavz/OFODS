<template>
    <div class="py-10 w-full px-5 sm:px-1 sm:w-1/2 mx-auto">
        <span class="block text-4xl font-black">Subscriptions</span>

        <div class="mt-10">
            <div v-for="s in subs" class="bg-white px-4 py-2 flex items-center justify-between mb-3">
                <span class="text-xs font-light">{{s.email}}</span>
                <button v-if="!s.isRead" @click.prevent="updateSubs(s.id)" class="bg-red-400 focus:outline-none text-red-100 text-xs font-light px-3 py-1 rounded-full">mark as seen</button>
            </div>
        </div>
    </div>
</template>

<script>
    import http from "../../http";

    export default {

        data(){
            return {
                subs:[],
                isLoading:true
            }
        },

        created() {
            this.getSubs()
        },
        methods:{
            goLogin(){

                localStorage.removeItem('access_token')
                this.$router.push('/login')
            },
            updateSubs(id){
                http().get(`subscription/${id}`)
                    .then(res=>{
                        this.$toaster.warning('successfully marked as read')
                        this.getSubs()
                    })
            },
            getSubs(){

                http().get('subscriptions')
                    .then(res=>{
                        this.isLoading=false
                        this.subs=res.data
                    })
            }
        }

    }
</script>

<style scoped>

</style>