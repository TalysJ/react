import React from "react"
import Item from "./Item"

const ItemList = ({Personajes}) => {
    return  (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {Personajes?.map(personaje => <Item key={personaje.id} personaje={personaje}/>)}
        </div>
    )
}

export default ItemList