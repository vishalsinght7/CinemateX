<script setup>
     definePageMeta({
        layout:'custom'
     })
        

        const route = useRoute()
        const a = route.params.id
      
        const response = await $fetch(
          `https://api.themoviedb.org/3/movie/${a}?api_key=9adcf8df7f71cc55f1801c34255991f3`
        );  
      //  const title = ref("Batmab Brown City")
      //  const date = ref("20-10-2023")
      //  const revenue = ref(45458585)
      //  const overviwe = ref("Directed by Matt Reeves and starring Robert Pattinson as Batman, this film is set to provide a new take on the character focusing on his detective skills and a darker tone. This is a concise overview of the Batman film series covering the major movies and different eras of the character's portrayal. Each film brings its own style and interpretation to the Batman mythology making it a rich and diverse cinematic journey for fans of the character.")
</script>

<template>
  <div>
    <div>
      <MovieDetail  :title="response.title"
                    :date="response.release_date"
                    :poster="poster_path"
                    :revenue="response.revenue"
                    :overviwe="response.overview"/>
    </div>
  
  </div>
</template>
