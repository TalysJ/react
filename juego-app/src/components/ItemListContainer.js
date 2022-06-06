import React from "react"
// const ItemListContainer = () => {
//     return (
//         <h1>
//             Bienvenidos a Bmw Mundo!
//         </h1>
//     )
// }
function ItemListContainer({texto}) {
    return ( 
    <div >
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