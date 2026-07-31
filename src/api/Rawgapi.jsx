  

const Rawgapi = () => {
   const Api_key = 'your-own-code'
  const limit = 10
   const _getGames = async(search)=>{
   
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

   const _getNewReleased = async()=>{
      const result = await fetch(`https://api.rawg.io/api/games?key=${Api_key}&page_size=${limit}&dates=2026-07-31,2026-12-31`)
      const data = await result.json()
      return data.results
   }

   const _getPlaystationGames = async()=>{
      const result = await fetch(`https://api.rawg.io/api/games?key=${Api_key}&page_size=${limit}&platforms=187`)
      const data = await result.json()
      return data.results

      
   }

   return {
     _getGames,
     _getGamebyid,
     _getNewReleased,
     _getPlaystationGames,
     _getGameScreenshot
   }
   
}

export default Rawgapi
