<script  setup lang="js">
const searchError =ref(false) 
 const movies =ref([]);
const searchMovie = async (searchInput)=>{
    // console.log("Thisis sharch move", searchInput)
    if(searchInput===""){
        searchError.value = true;
    }
    if(searchInput !== "")
    {
       searchError.value = false;
       let headersList =   {
                             "Accept": "*/*",
                             "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                             "Authorization": "bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YWRjZjhkZjdmNzFjYzU1ZjE4MDFjMzQyNTU5OTFmMyIsInN1YiI6IjY0ZTQ1NGNmYzYxM2NlMDBlYWE2ZmVkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XhiltaaOsD2CKB0ZLC3FfY_o4Lf1zDMKrlikocoeWOU"
                           }
 
                              let response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&language=en-US&page=1`, { 
                              method: "GET",
                              headers: headersList
                           });

                                let data =  JSON.parse(await response.text());
                            }
                        }
               const poster = ref("https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_FMjpg_UX1000_.jpg")
               const resData = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=9adcf8df7f71cc55f1801c34255991f3').then(res =>
               res.json())  
//  console.log(resData)  
</script>
<template> 
    <div>
            <SearchBar @search-movie="searchMovie" 
           :searchUerror="searchError"/>

       <div 
           class="grid md:grid-cols-4 sm:grid-cols-1
           justify-item-center bg-cyan-50"
           > 
         <template v-for="movie in resData.results"> 
            <MovieCard :movieid="movie.id"
                       :title="movie.original_title" 
                       :date="movie.release_date" 
                       :poster="movie.poster_path" />
         </template>
        </div>
    </div>
</template>
