<template>

</template>

<script>
    import http from "../../http";

    export default {
        name: "portfolioAdmin",
        data(){
            return {
                products:[]
            }
        },
        created(){
            http().get('/products').then(res=>{
                console.log(res.data)
                this.products=res.data
            })
        }
    }
</script>

<style scoped>

</style>