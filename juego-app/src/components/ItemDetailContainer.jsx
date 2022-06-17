import React,{useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import images from './ItemListContainer';
import {useParams} from 'react-router-dom';


let productosMock=[ 
    {category:"motores", id:'0', title:'MOTOR S85',  description:'Bmw M5 E60 V10 2005',  price:3000,  image:(images.img1) },
    {category:"motores", id:'1', title:'MOTOR S50', description:'Bmw M3 E36 1991', price:2000,   image:(images.img2)},
    {category:"motores", id:'2', title:'MOTOR S65', description:'Motor M3 E92 2007', price:2000,    image:(images.img3) },
    {category:"transmisiones", id:'3', title:'TRANSMISION M54 Zf', description:'Transmision Bmw M5 E60', price:1500,image:(images.img4) },
    {category:"transmisiones", id:'4', title:'TRANSMISION 46k', description:'Transmision de E36', price:1000,image:(images.img5) },
    {category:"transmisiones", id:'5', title:'TRANSMISION N54', description:'Transmision para E92', price:1300, image:(images.img6)  },
    {category:"turbos", id:'6', title:'TURBO E46', description:'Turbo E46 para E46 E39', price:1500,image:(images.img7)},
    {category:"turbos", id:'7', title:'TURBO B58', description:'Turbo B58 para modelo Bmw 340i', price:1000,image:(images.img8) },
    {category:"turbos", id:'8', title:'TURBO F80', description:'Turbo de Bmw M4', price:1000,image:(images.img9) },
];

function ItemDetailContainer() {

    const{id}= useParams();
    const[loading,setLoanding]=useState(true);
    const[error,seterror]=useState(false);
    const[producto,setproducto]=useState([]);
    

    useEffect(() => {
        setproducto([]);
        setLoanding(true);
        seterror(false); 

     const proms = new Promise((res)=>{
            setTimeout(()=>{
                res(productosMock[id-1]); 
     },2000);
            
        });
       
       proms
        .then((result)=>{setproducto(result);})
        .catch((error)=>{seterror(error);})
        .finally(()=>{setLoanding(false);
});
    }, [id]);
    
   
 return ( 
        <>
    <div > {loading && 'loading..'}</div>
    <div > {error && 'loading error'}</div>
    <ItemDetail producto={producto} />
       </>
)
};
export default ItemDetailContainer;