import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {

  const onAdd =(quantity)=>{
    alert(`Tu compra en Bmw Mundo es de ${quantity} unidades`);
  }
  
  
    return ( 
    <div className = "App" >
      
      
    <NavBar/>
    <ItemListContainer texto={"Hola bienvenidos a Bmw Mundo"}/>
    <ItemCount initial={1} stock ={5} onAdd={onAdd}/>
    </div>
    );
}

export default App;
