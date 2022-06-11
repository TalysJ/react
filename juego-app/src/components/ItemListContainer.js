import React, { useEffect, useState } from "react"
import ItemList from "./ItemList"
import images from "../assets/images";

function ItemListContainer() {


  const[loading,setLoanding]=useState(true);
  const[error,seterror]=useState(false);
  const[producto,setproducto]=useState([]);
  useEffect(() => {
      setproducto([]);
      setLoanding(true);
      seterror(error); 
  const articulos = new Promise((res,)=>{
          setTimeout(()=>{

            res([{category:"Motores", id:'1', title:'bmw',  description:'modelos',  price:60000,  image:(images.img1) },])

          },2000);
        });
          articulos
          .then((result)=>{
              setproducto(result);
            
            })
            .catch((error)=>{
              seterror(error);
              
            })
            .finally(()=>{
                setLoanding(false);
            });
      }, []);

      return ( 
        <>
    <div > {loading && 'loding..'}</div>
    <div > {error && 'hubo error en el pago'}</div>

    <div>
 <ItemList producto={producto} />
 </div>
    
    </>
);
    
        
};
export default ItemListContainer;