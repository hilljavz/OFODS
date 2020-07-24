<template>
    <div class="pb-10">
        <div class="pb-10">
            <div class="mb-10">
                <span class="block font-black text-4xl">Categories</span>
                <span class="block font-hairline text-xxs">Create Categories below</span>
            </div>

            <div>


                <div class="mt-10">
                    <form v-on:submit.prevent="addCategory">
                        <div>
                            <label class="text-xs font-light block">
                                <span class="mb-3 block text-xxs font-semibold capitalize">Category Name</span>
                                <input type="text"
                                       v-model="category.title"
                                       placeholder="title"
                                       :class="`${errors.title ? 'border-2 border-red-600' : ''}`"
                                       class="text-xs px-4 font-light h-8 w-full shadow focus:outline-none">
                            </label>
                            <span class="text-xs font-light text-red-500 mt-2" v-if="errors.title">{{errors.title[0]}}</span>
                        </div>
                        <div class="mt-6 flex items-center">
                            <button type="button" @click="category.status=!category.status"
                                    :class="`${category.status ? 'bg-white justify-end' : 'bg-gray-300 justify-start'}`"
                                    class="w-12 h-6 p-1  rounded-full flex items-center focus:outline-none">
                                <div
                                        :class="`${category.status ? 'bg-indigo-400 justify-end' : 'bg-white justify-start'}`"
                                        class="w-4 h-4 rounded-full shadow-lg"></div>
                            </button>
                            <div class="ml-3">
                                <span class="block text-xs font-bold">Status is {{category.status ? 'on' : 'off'}}</span>
                            </div>
                        </div>
                        <div class="mt-6">

                            <button type="submit" class="px-5 py-2 text-xs shadow font-light focus:outline-none text-indigo-100 bg-indigo-700 rounded-full">
                                <span v-if="isLoading">Submitting</span>
                                <span v-else>Submit</span>
                            </button>

                        </div>
                    </form>
                </div>

                <div class="mt-10">
                    <div class="flex items-center justify-between">
                        <span class="span block text-lg font-black">Available Categories</span>
                        <span class="span block text-xs font-light" v-if="isUpdating">Updating...</span>
                    </div>
                    <div class="mt-5">
                        <table class="w-full">
                            <tr>
                                <th class="text-xs font-semibold text-left py-2" width="20">Title</th>
                                <th class="text-xs font-semibold text-left" width="20">Status</th>
                                <th class="text-xs font-semibold text-left" width="60"></th>
                            </tr>
                            <tr v-for="c in categories" :key="c.id">
                                <td class="text-xs font-light py-3">{{c.title}}</td>
                                <td class="text-xs font-light" :class="`${c.status ? 'text-green-400' :'font-bold text-red-600'}`">{{c.status ? 'On' : 'Off'}}</td>
                                <td class="text-xs font-light text-right">
                                    <button @click.prevent="updateStatus(c.id)" class="text-xs font-light bg-indigo-700 focus:outline-none text-white px-5 py-2 rounded-full">
                                        <span>Update</span>
                                    </button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import http from "../../http";

    export default {
        name: "categoryAdmin",
        data(){
            return {

                category:{
                    title:'',
                    status:false,
                },

                isLoading:false,
                isUpdating:false,
                errors:{},
                categories:[]


            }
        },
        created() {
            this.getCategories()
        },
        methods:{
            getCategories(){
                http().get('/categories').then(res=>{
                    this.categories=res.data
                })
            },
            addCategory(){
                this.isLoading=true
                http().post('/categories',this.category)
                .then(res=>{
                    this.isLoading=false
                    this.category={
                        title:'',
                        status:false
                    }
                    this.getCategories()
                    this.$toaster.success('category has been created successfully')
                })
                .catch(error=>{
                    this.isLoading=false
                    this.errors=error.response.data.errors
                })
            },
            updateStatus(id){
                this.isUpdating=true
                http().post(`/category/status/${id}`).then(res=>{
                    this.getCategories()
                    this.isUpdating=false
                    this.$toaster.success('category has been updated successfully')
                }).catch(error=>{
                    this.isUpdating=false
                    this.$toaster.warning('Error : '+error.message)
                })
            }
        }
    }
</script>

<style scoped>

</style>