export default defineEventHandler(async () =>{
    try {
        const event = await $fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=9adcf8df7f71cc55f1801c34255991f3").then(response => response.json());
         return event 
    }
    catch(error){
       console.error(error)
       return null; 
    }
})