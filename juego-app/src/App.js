import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes, Rutas} from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {

  const onAdd =(quantity)=>{
    alert(`Tu compra en mi tienda es de ${quantity} unidade s`);
  }
  
  
    return ( 
    <div className = "App" >
      
      
    <NavBar/>
    <ItemListContainer texto={"Hola bienvenidos a mi tienda"}/>
    <ItemCount initial={1} stock ={5} onAdd={onAdd}/>
    </div>
    
    );
}

export default App;
