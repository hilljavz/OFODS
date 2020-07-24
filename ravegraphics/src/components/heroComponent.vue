<template>
    <div class="pb-10 bg-bl-900">
        <div class="mycontainer mx-auto">
            <div class="px-10 lg:px-5">
                <div class="grid lg:grid-cols-3 lg:gap-4 text-indigo-100">
                    <div class="">
                        <div data-aos="fade" data-aos-delay="500">
                            <span class="block mt-20 font-semibold">Personal Portfolio</span>
                            <span class="block text-3xl sm:text-5xl font-black mt-5 leading-none">Design & Development</span>
                            <span class="block text-sm font-light mt-5">
                            Design and Development is at the core of Rave Graphics. We sketch and illustrate our initial
                            thoughts to deliver digital art, bespoke typography and image making. We believe in giving quality
                            designs to our customers by drawing inspiration from cultures and surroundings. We pride
                            ourselves in providing original commercial work with heart, soul, integrity and most importantly
                            originality
                            </span>
                        </div>
                        <div data-aos="fade" data-aos-delay="1500"  class="mt-5 flex flex-col sm:flex-row items-center">
                            <a href="#about" class="w-full sm:w-40 bg-rd-900 px-10 py-2 text-xxs font-medium flex items-center justify-center">About</a>
                            <router-link to="/portfolio" class="w-full sm:w-40 mt-2 sm:mt-0 border border-indigo-300 px-10 py-2 text-xxs font-medium sm:ml-3 flex items-center justify-center">Learn More</router-link>
                        </div>
                    </div>
                    <div class="col-span-2 mt-10 lg:mt-0" >
                        <img src="../assets/img/final-01.png" data-aos="fade" data-aos-delay="1000" class="object-cover" alt="">
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "heroComponent"
    }
</script>

<style scoped>

</style>