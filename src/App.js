import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart"
import store from "./store/store";
function App() {
  return (
   <Provider store={store}>
     <Router>
    <Navbar/>
    <Routes>
     <Route path ={"/cart"} element={<Cart/>}/>
     <Route path='/' element={<Home/>}/>
    </Routes>
    <ToastContainer />
    </Router>
   </Provider>
  );
}

export default App;
