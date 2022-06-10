import React, { useEffect, useState } from "react"
import ItemList from "./ItemList"

// const [Personajes, setPersonajes] = useState([])
function ItemListContainer({texto}) {

  const [Personajes, setPersonajes] = useState([])

    useEffect(() => {
      fetch("https://pokeapi.co/api/v2/")
        .then(res => res.json())
        .catch(error => console.error("Error:", error))
        .then(res => setPersonajes(res.results))

    }, [])

    console.log(Personajes)

    return ( 
    <div >
      <ItemList Personajes={Personajes}/>
        {texto}
    </div>
        
    );
}

  export default ItemListContainer


//   let = stock [
//     {
//         id: 
//     }
// ]

// const ItemListContainer = () => {

// }

// ]
//   const getFetch= () => {
//     return new Promise ((resolve, reject) => {
//       setTimeout (()=>{
//         resolve(data)
//       },3000)
//     }
//     )
//   }
  
//   const ItemListContainer = () => {
//     getFetch()
//     .then((resp)=>{
//       console.log(resp)
//     })
//     .catch (err => console.log(err))
//     .finally (()=> console.log())
//   }