<template>    
    <div class="col-span-3 row-span-2"
      data-aos="zoom-in"
      data-aos-duration="1500"
      data-aos-delay="500"
    >
        <div class="font-sans">
            <h1 class="text-lg lg:text-2xl">Hey there, I´m <span class="text-[rgba(106,0,255,.94)] underline">Vinicius Lee</span></h1>
            <h1
              class="text-3xl md:text-4xl lg:text-7xl my-3 movearea font-bold" 
              :style="{ color: `hsl(${x}, 80%, 50%)` }"
            >
              Full Stack Developer
            </h1>
        </div>
        <div class="font-semibold subtext text-base lg:text-xl">
            <p>I´v been studying web development since 2020 and have some good experience developing websites, e-commerces and CMSs also integrate things with REST APIs.</p>
            <p>You can take a look at my skills and work down below &#128640 Hope you enjoy it </p>
        </div>
    </div>
</template>

<script setup>
  import { onMounted, onBeforeUnmount, ref } from 'vue';

  let x = ref(200)

  function ramdomNumber() {
    x.value = (x.value <= 2000)
          ? x.value + 1
          : 200
          
  }

  onMounted(() => {
    setInterval(() => {
      ramdomNumber()
    }, 100)
  })

  onBeforeUnmount(() => {
    clearInterval(x)
  })

</script>

<style>
.movearea {
    transition: 0.3s color ease;
  }  
</style>