
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


const App = () => {
  return (
    
    <div className="App">

        <NavBar/>
        <ItemListContainer texto={"Hola bienvenidos"}/>
        <x/>

        

    </div>
  );
}

export default App;
