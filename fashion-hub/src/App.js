import './App.css';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout  from './customer/components/Checkout/Checkout';
import OrderSummary from './customer/components/Checkout/OrderSummary';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRouts from './Routers/CustomerRouts';
function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRouts/>}></Route>
      </Routes>


    </div>
  );
}

export default App;
