<template>

    <div>
        <div class="w-full sm:w-1/2 mx-auto mt-10 px-5">
            <div class="pb-10">
                <div class="mb-10">
                    <span class="block font-black text-4xl">My Products</span>
                </div>
                <form enctype="multipart/form-data" v-on:submit.prevent="addProduct">
                    <div>
                        <label class="text-xs font-light block">
                            <span class="mb-3 block text-xxs font-semibold capitalize">Description</span>
                            <input type="text"
                                   v-model="product.description"
                                   :class="`${errors.description ? 'border border-red-500' : ''}`"
                                   placeholder="description"
                                   class="text-xs px-4 font-light shadow h-8 w-full focus:outline-none">
                        </label>
                    </div>

                    <div class="mt-10">
                        <label class="text-xs font-light block">
                            <span class="mb-3 block text-xxs font-semibold capitalize">Category</span>
                            <select
                                   v-model="product.category"
                                   :class="`${errors.category ? 'border border-red-500' : ''}`"
                                   class="text-xs px-4 font-light h-8 w-full shadow focus:outline-none">
                                <option value="">Select Category</option>
                                <option v-for="c in categories" :key="c.id" :value="c.id">{{c.title}}</option>
                            </select>
                        </label>
                    </div>
                    <div class="mt-10">
                        <label class="text-xs font-light flex bg-indigo-400 inline-flex px-3 py-1 rounded">
                            <span class="text-xxs font-semibold capitalize cursor-pointer inline-block">Choose Image</span>
                            <input type="file" v-on:change="selectedImage" hidden>
                        </label>
                    </div>

                    <div class="mt-6 flex items-center">
                        <button type="button" @click="product.isPublished=!product.isPublished"
                                :class="`${product.isPublished ? 'bg-white justify-end' : 'bg-gray-500 justify-start'}`"
                                class="w-12 h-6 p-1  rounded-full flex items-center focus:outline-none">
                            <div
                                    :class="`${product.isPublished ? 'bg-indigo-400 justify-end' : 'bg-white justify-start'}`"
                                    class="w-4 h-4 rounded-full"></div>
                        </button>
                        <div class="ml-3">
                            <span class="block text-xs font-bold">Published is {{product.isPublished ? 'on' : 'off'}}</span>
                        </div>
                    </div>

                    <div class="mt-12">

                        <button class="px-5 py-2 text-xs font-light shadow text-indigo-100 bg-indigo-700 rounded-full focus:outline-none">
                            <span v-if="isLoading">Submitting...</span>
                            <span v-else>Submit</span>
                        </button>

                    </div>
                </form>
            </div>

            <div class="py-10">
                <div class="py-10">
                    <div class="mb-10">
                        <span class="block font-black text-lg">Uploaded Work</span>
                    </div>

                    <div>


                        <div class="flex-1 grid sm:grid-cols-2 gap-4 mt-20">
                            <div v-for="p in products" class="bg-red-400 h-40 md:h-56 rounded overflow-hidden relative">
                                <div class="absolute inset-0 bg-trans"></div>
                                <img :src="p.image" alt="" class="w-full h-full object-cover">
                                <div class="absolute bottom-0 text-white px-10 py-10">
                                    <span class="block font-semibold text-sm">{{p.description}}</span>
                                    <span class="block font-light text-xs text-gray-500">{{p.category.title}}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import PortfolioAdmin from "./portfolioAdmin";
    import CategoryAdmin from "./categoryAdmin";
    import http from "../../http";
    export default {
        name: "index",
        components: {CategoryAdmin, PortfolioAdmin},
        data(){
            return {
                product:{
                    description:'',
                    category:'',
                    isPublished:true,
                    image:null
                },
                formData:FormData,
                errors:{},
                isLoading:false,
                categories:[],
                products:[],
                files:[],
                fileName:'',
                form:new FormData
            }
        },
        created(){
            this.getCategory()
            this.getProducts()
        },
        methods:{

            selectedImage(e){
                this.files=e.target.files[0]

                const filereader=new FileReader()
                filereader.readAsDataURL(this.files)
                filereader.onload=(e)=>{
                    this.product.image=e.target.result
                }

                console.log(this.product)
            },

            getProducts(){
                http().get('/products').then(res=>{
                    this.products=res.data
                })
            },

            getCategory(){
                http().get('/categories').then(res=>{
                    this.categories=res.data
                })
            },
            addProduct(){


                this.isLoading=true
                this.form.append('description',this.product.description)
                this.form.append('category',this.product.category)
                this.form.append('isPublished',this.product.isPublished)
                this.form.append('image',this.files)
                http().post('/products',this.form)
                .then(res=>{
                    this.isLoading=false
                    this.errors={}
                    this.getProducts()
                    this.product={
                        description:'',
                        category:'',
                        isPublished:true,
                        image:null
                    }
                    this.$toaster.success('product is successfully created')
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
