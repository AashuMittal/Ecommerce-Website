import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Add from './Components/AddProduct';
import Login from "./Components/Login";
import Navbar from './Components/Navbar';
import Payment from "./Components/Payment";
import PrivateComponent from "./Components/PrivateComponent";
import Product from "./Components/Product";
import Profile from "./Components/Profile";
import Signup from "./Components/Signup";
function App() {
  return (
    <div className="App">
     
    
      <Router>
      <Navbar />
      <Routes>

        <Route element={<PrivateComponent/>}/>
        <Route path="/add" element={<Add />} />
        <Route path="/product" element={<Product />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
    
    </div>
  );
}


export default App;
