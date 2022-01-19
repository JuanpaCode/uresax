//import Dashboard from './views/dashboard';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar';
import BillView from './views/billings';
import CartsView from './views/carts';
import Dashboard from './views/dashboard';
import ProductsView from './views/products';
import ProvidersView from './views/providers';
//import ExpensesView from './views/expenses';
//import ProductsView from './views/products';


function App() {
  return (
    <div className="App">
       <Sidebar/>
      <div className="sheet">
          <Routes>
              <Route path="/"  element={ <Dashboard/>}/>
              <Route path="/products" element={<ProductsView/>}/>
              <Route path="/billings" element={<BillView/>}/>
              <Route path="/carts" element={<CartsView/>}/>
              <Route path="/providers" element={<ProvidersView/>}/>
          </Routes>
      </div>
    </div>
  );
}

export default App;
