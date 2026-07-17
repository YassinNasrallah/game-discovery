

const Rawgapi = () => {
   const Api_key = 'your_own_key'
  
   const _getGames = async(search)=>{
    const limit = 5
      const result = await fetch(`https://api.rawg.io/api/games?key=${Api_key}&search=${search}&page_size=${limit}`)
      const data = await result.json()
     
      return data.results
      
   }

   return {
     _getGames
   }
   
}

export default Rawgapi
