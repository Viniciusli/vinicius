<template>
<header class="max-w-4xl lg:max-w-6xl mx-auto">
    <!-- <div class="flex flex-row justify-between w-full md:flex-none md:w-40">
        <h1 class="font-semibold text-3xl">
            Vinicius Lee
        </h1>


        <div class="dropdown dropdown-end md:hidden">
            <label tabindex="0" class="btn btn-ghost rounded-btn"> <Icon icon="ic:outline-menu" width="7,5em"  /></label>
            <ul tabindex="0" class="menu dropdown-content p-2 shadow rounded-box w-52 mt-4">
              <li><a>Item 1</a></li> 
              <li><a>Item 2</a></li>
            </ul>
          </div>
    </div> -->

    

    <Navbar />

    <!-- <div class="flex-none w-40">
        Resume
    </div> -->
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

<script>
    import { Icon } from '@iconify/vue'
    import AOS from 'aos'
    import 'aos/dist/aos.css'

    export default {
        mounted () {
            AOS.init()
        },
        components: {
		    Icon,
	    },
    }
</script>
