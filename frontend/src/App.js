import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Orders from './pages/Orders'
import Products from './pages/Products'

function App() {
  return (
    <>
    <Router>
    <div>
      <Header/>
      <Routes>
        <Route path = '/' element={<Dashboard/>} />
        <Route path = '/orders' element={<Orders/>} />
        <Route path = '/products' element={<Products/>} />
      </Routes>
    </div>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
