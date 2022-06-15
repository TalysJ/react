import './App.css';
import { BrowserRouter as Router, Route, Routes, Rutas} from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemCount from './components/ItemCount';

function App() {

  return ( 
    <Router>
    <NavBar/>
    <Routes>

    <Route path='/' element={<ItemListContainer/>} ></Route>

    <Route path='/category/:id' element={<ItemListContainer/>} ></Route>

    <Route path='/item/:id' element={<ItemDetailContainer/>}>  </Route> 
    
    </Routes>
    </Router>
  
  );
    
}

export default App;

// const onAdd =(quantity)=>{
//   alert(`Tu compra en mi tienda es de ${quantity} unidade s`);
// }


//   return ( 
//   <div className = "App" >
    
    
//   <NavBar/>
//   <ItemListContainer texto={"Hola bienvenidos a mi tienda"}/>
//   <ItemCount initial={1} stock ={5} onAdd={onAdd}/>
  
//   </div>

