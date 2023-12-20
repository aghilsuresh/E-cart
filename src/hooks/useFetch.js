//custom hooks-function

import { useEffect , useState } from "react"

const useFetch = (url)=>{
                                                                         

                                                                          
   const [data, setData] = useState(null)

   //call the fetch when the page load
   useEffect(() => {
//fetch return promises
     fetch(url).then(response=>{
      //.json to remove unnessecery data
      response.json().then(result=>{
         setData(result.products)
      })
    })
   
    
   }, [])
   return data
}
export default useFetch