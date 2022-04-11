import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './componets/About/About';
import Header from './componets/Header/Header';
import Inventory from './componets/Inventory/Inventory';
import Login from './componets/Login/Login';
import Orders from './componets/Orders/Orders';
import RequireAuth from './componets/RequireAuth/RequireAuth';
import Shipment from './componets/Shipment/Shipment';
import Shop from './componets/Shop/Shop';
import SignUp from './componets/SignUp/SignUp';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }>
        </Route>
        <Route path='/shipment' element={
          <RequireAuth>
            <Shipment></Shipment>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
