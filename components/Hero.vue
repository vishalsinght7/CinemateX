<!-- <script setup>
 const imageUrl = ref("https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGhlJTIwYmF0bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60")
</script>

<template>
    <section class="hero-section bg-cover bg-center"
      style="background-image: url('/desktop-1920x1080.jpg')">
      <div class="container sm:mx-auto sm:p-32 p-8">
        <h1 class="text-6xl font-bold text-rose-600 mb-4">Movilix</h1>
        <h3 class="text-lg font-bold text-black">Unlimited movies, TV shows and more.</h3>
        <div class="mt-6">
          <NuxtLink to="/registration" 
            class="bg-indigo-400 hover:bg-indigo-600 text-white rounded-full font-medium py-2 px-4"
          >Get Started</NuxtLink>
        </div>
      </div>
    </section>
  </template>  -->

  <script setup>

const imageUrl = ref(" https://media.istockphoto.com/id/1266933789/photo/modern-sniper-scope-on-a-dark-background-optical-device-for-aiming-and-shooting-at-long.jpg?s=612x612&w=0&k=20&c=L00PHfmQYlZHrViksf-V_m6GIsnvrf_lzh5JXYsLrDo= ");
</script>
<template>
  <section class="hero-section bg-cover bg-center"
    :style="{ backgroundImage: `url('${imageUrl}')` }">
    <div class="container sm:mx-auto sm:p-32 p-8">
      <h1 class="text-6xl font-bold text-rose-600 mb-4">Movilix</h1>
      <h3 class="text-lg font-bold text-white">Unlimited movies, TV shows and more.</h3>
      <div class="mt-6">
        <NuxtLink to="/registration" 
          class="bg-indigo-400 hover:bg-indigo-600 text-white rounded-full font-medium py-2 px-4"
        >Get Started</NuxtLink>
      </div>
    </div>
  </section>
</template>
