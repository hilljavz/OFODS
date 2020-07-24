<template>
    <div class="min-h-screen bg-indigo-100 relative py-10">


        <div class="mx-auto mycontainer">
            <div class="px-5 sm:px-10">
                <div class="grid md:grid-cols-2 lg:grid-cols-3">
                    <div class="lg:col-span-2 h-80 md:h-full" id="map"></div>
                    <div>
                        <div class="bg-white px-10 py-20">
                            <span class="block text-xs uppercase text-red-400">Contact Us</span>
                            <span class="block text-4xl uppercase text-black font-black">Send message</span>
                            <a href="#">hello</a>
                            <form v-on:submit.prevent="sendMessage">
                                <div class="">
                                    <input type="text" name="username" placeholder="username" class="focus:outline-none px-3 h-10 w-full text-xs font-light border border-gray-400 mt-10">
                                </div>

                                <div class="">
                                    <input type="text" name="email" placeholder="email" class="focus:outline-none px-3 h-10 w-full text-xs font-light border border-gray-400 mt-10">
                                </div>
                                <div>
                                    <textarea name="message" placeholder="messages" class="resize-none focus:outline-none px-3 py-5 w-full text-xs font-light border border-gray-400 mt-10"></textarea>
                                </div>
                                <div class="mt-10">
                                    <button type="submit" class="bg-rd-900 px-10 h-10 text-xs font-semibold text-red-100 rounded">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mapContact",
        data(){
            return {}
        },
        mounted(){
            this.loadMap()
        },
        methods:{
            loadMap(){
                const container=document.getElementById('map')
                if(container){

                    var map = L.map('map').setView([-17.8701, 31.1080], 14);
                    L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=g6z6yVnxX3WrZfZ6Lo0U',{
                        attribution:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                    }).addTo(map)


                    L.marker([-17.8701, 31.1080]).addTo(map)
                }

            }
        }
    }
</script>

<style scoped>

</style>
