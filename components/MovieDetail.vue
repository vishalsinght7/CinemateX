<script setup>
const props= defineProps(["title", "date" , "poster" ,"revenue","overviwe"])
</script>
<template>
   
      <!-- Column 1 : Image -->
      <!-- "grid sm:grid-cols-3 gap-7 justify-items-center m-10"> -->
      
    <div class="grid sm:grid-cols-3 gap-7 justify-items-center m-10">
         <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img class="h-400 w-full object-cover" 
            :src="`https://image.tmdb.org/t/p/w400${poster}`"
               alt="Placeholder Image"/>
         </div>
         <!-- --------Column 2 : Title , Overview,revenue,Buy button---------- -->
          <div class="sm:col-span-2 mx-6">
            <h1 class="font-bold text-2x1 mb-5"> {{ title }}</h1>
            <h3 class="font-semibold text-lg mb-5"> Release Date: {{ date }}</h3>
            <p class="text-gray-500 text-md mb-8"> {{ overviwe }} </p>
            <p class="text-gray-500 text-md"> Revenue: {{ revenue }}</p>
            <div class="mt-6"> 
                <NuxtLink to="https://www.youtube.com/watch?v=mqqft2x_Aa4" target="_blank" class="bg-indigo-500 hover:bg-indigo-800 text-white font-medium py-2 px-4 rounded"> Watch trailer</NuxtLink>
                <button class="bg-rose-500 hover:bg-rose-700 text-white font-medium py-2 px-4 rounded m-5"> Buy Now</button>
            </div>
          </div>
    </div>
</template>
