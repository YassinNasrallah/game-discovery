  

const Rawgapi = () => {
   const Api_key = 'your_key'
  
   const _getGames = async(search)=>{
    const limit = 10
      const result = await fetch(`https://api.rawg.io/api/games?key=${Api_key}&search=${search}&page_size=${limit}`)
      const data = await result.json()
     console.log(data)
      return data.results
   }

   const _getGamebyid = async(id)=>{
      const result = await fetch(`https://api.rawg.io/api/games/${id}?key=${Api_key}`)
      const data = await result.json()
       console.log(data)
      return data
   }  

   const _getGameScreenshot = async(id)=>{
      const result = await fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=${Api_key}`)
      const data = await result.json()
      return data.results
   }

   return {
     _getGames,
     _getGamebyid,
     _getGameScreenshot
   }
   
}

export default Rawgapi
