<template>
<header class="max-w-4xl lg:max-w-6xl mx-auto">
    <Navbar />
</header>

<section id="about" class="max-w-md md:max-w-3xl lg:max-w-5xl mx-auto mt-16 grid grid-rows-3 grid-cols-3 content-center p-6 h-[100%] font-sans">
    <About />
</section>

<section id="skills" class="">
    <Skills />
</section>

<section >
    <Footer />
</section>
</template>

<script setup>
    import { onMounted } from 'vue';
    import { Icon } from '@iconify/vue'
    import AOS from 'aos'
    import 'aos/dist/aos.css'

    onMounted(() => {
        AOS.init()
    })
</script>
