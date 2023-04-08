
import Personal from './Personal';
import Homepage from './Homepage';
import Navbar from './Navbar';
import Details from './Details';
import Services from './Services';
import Banking from './Banking';
import './App.css';
import Footer from './Footer';
import Aboutus from './Aboutus';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      
        <Routes>
          <Route path='/personal' element={<Personal />}></Route>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/Homepage' element={<Homepage />}></Route>
          <Route path='/Details' element={<Details/>}></Route>
          <Route path='/Services' element={<Services/>}></Route>
          <Route path='/aboutus' element={<Aboutus/>}></Route>
          <Route path='/banking' element={<Banking/>}></Route>

        </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
