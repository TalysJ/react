import React,{useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';


let productosMock=[ 
    {category:"motores", id:'0', title:'MOTOR S85',  description:'Bmw M5 E60 V10 2005',  price:3000, image:'/assets/img/motor-s85-bmw-v10.jpg'},
    {category:"motores", id:'1', title:'MOTOR S50', description:'Bmw M3 E36 1991', price:2000, image:'/assets/img/motor-S50B32-E36.jpg'},
    {category:"motores", id:'2', title:'MOTOR S65', description:'Motor M3 E92 2007', price:2000, image:'/assets/img/Motor-S65-E92.jpg' },
    {category:"transmisiones", id:'3', title:'TRANSMISION M54 Zf', description:'Transmision Bmw M5 E60', price:1500, image:'/assets/img/Transmision-M54-Zf.jpg' },
    {category:"transmisiones", id:'4', title:'TRANSMISION 46k', description:'Transmision de E36', price:1000, image:'/assets/img/Transmision-46k.jpg' },
    {category:"transmisiones", id:'5', title:'TRANSMISION N54', description:'Transmision para E92', price:1300, image:'/assets/img/Transmision-N54.jpg'  },
    {category:"turbos", id:'6', title:'TURBO E46', description:'Turbo E46 para E46 E39', price:1500, image:'/assets/img/turbo-e46.jpg'},
    {category:"turbos", id:'7', title:'TURBO B58', description:'Turbo B58 para modelo Bmw 340i', price:1000, image:'/assets/img/turbo-bmw-b58.jpg' },
    {category:"turbos", id:'8', title:'TURBO F80', description:'Turbo de Bmw M4', price:1000, image:'/assets/img/turbo-f80.jpg' },
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
                res(productosMock[id]); 
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