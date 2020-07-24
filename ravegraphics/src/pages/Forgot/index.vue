<template>
    <div class="h-screen flex flex-col font-shelz">
        <div class="py-10 px-10" data-aos="fade-down" data-aos-delay="1000">
         <router-link to="/" class="bloc text-indigo-900 text-5xl font-black">RG</router-link>
        </div>
        <div class="flex-1 flex flex-col mt-20 items-center">
            <div class="w-full px-8 md:px-0 md:w-2/5">
                <div>
                    <span class="block text-2xl font-semibold tracking-tighter" data-aos="fade" data-aos-delay="900">Forgot your password?</span>
                    <span class="block text-sm tracking-wide font-light mt-4" data-aos="fade-down" data-aos-delay="2500">We'll help you reset it and get back on track </span>
                </div>
                <div class="mt-10">
                    <form action="">
                        <div class="mb-10" data-aos="fade" data-aos-delay="1300">
                            <label for="email" class="block text-xs font-semibold mb-1">Email address</label>
                            <input type="email" id="email" class="w-full h-10 border px-3 border-gray-300 rounded text-xs focus:outline-none">
                        </div>
                        <div class="text-center" data-aos="fade-up" data-aos-delay="1600">
                            <button class="bg-indigo-700 text-xs text-indigo-100 px-10 py-3 rounded-full focus:outline-none">Reset Password</button>
                        </div>
                        <div class="text-center mt-3" data-aos="fade-up" data-aos-delay="1800">
                            <router-link to="/login" class="text-xs text-gray-700">Back</router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>