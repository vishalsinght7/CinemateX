<template>
  <section class="search-section bg-cyan-50 py4">
    <div class="container mx-auto md:px40 px-5"> 
        <div class="flex pt-5"> 
            <input class="border border-cyan-400 py-3 px-4 w-full rounded-l-full focus:ring-cyan-400" 
               type="text" placeholder="Search Movies..." v-model ="searchInput" />
             <button class="bg-cyan-400 hover:bg-cyan-600 text-white py-3 px-4 
               rounded-r-full" type="submit" @click="$emit('searchMovie',searchInput)"> 
                Search 
            </button>
        </div>
          <span v-if="searchUerror" class="text-red-700 px-4 py-3" role="alert"> This fild is rquired </span>
    </div>
  </section>
</template>
     
<script setup>

const searchInput = ref("")
defineProps(["searchUerror"])  

</script>