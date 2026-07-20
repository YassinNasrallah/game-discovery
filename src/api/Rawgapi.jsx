  

const Rawgapi = () => {
   const Api_key = '6f4621614a594832a69b57d077b5cc7a'
  
   const _getGames = async(search)=>{
    const limit = 5
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

   return {
     _getGames,
     _getGamebyid
   }
   
}

export default Rawgapi
