<template>
  <section class="p-6 font-sans">
    <header class="flex justify-between max-w-5xl mx-auto">
        <div class="flex-none items-center w-40">
            <h1 class="font-semibold text-3xl">
                Vinicius Lee
            </h1>
        </div>

        <Navbar />
        <div class="flex-none w-40">
            Resume
        </div>
    </header>
</section>

<section class="max-w-5xl mx-auto mt-16 grid grid-rows-3 grid-cols-3 content-center p-6 h-[500px] font-sans">
    <About />
</section>

<section>
  teste 
</section>
</template>

<script>
    import AOS from 'aos'
    import 'aos/dist/aos.css'

    export default {
        mounted () {
            AOS.init()
        }
    }
</script>
