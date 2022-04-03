import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './componets/About/About';
import Header from './componets/Header/Header';
import Inventory from './componets/Inventory/Inventory';
import Orders from './componets/Orders/Orders';
import Shop from './componets/Shop/Shop';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
