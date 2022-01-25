import Navbar from './FCC/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './FCC/Home';
import Footer from './FCC/Footer';
import Product from './FCC/Product';
import Users from './FCC/Users';
import React,{useState} from 'react';



function App() {
const [id, setid] = useState([]);
  
  return (
    <div style={{backgroundColor:'#242424'}} >
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />}></Route>
        <Route path="/Login" element={<Users setid={setid} id={id} />}></Route> {/*setid = Get from server and render*/}
      </Routes>
      <Footer />
      

    </div>
  );
}

export default App;
