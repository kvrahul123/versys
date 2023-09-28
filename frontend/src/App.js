import logo from './logo.svg';
import './App.css';
import Index from './Pages/Index';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import AboutDetails from './Pages/About/AboutDetails';
import ManagedITServices from './Pages/Services/ManagedITServices';
import CloudManagement from './Pages/Services/CloudManagement';
import AmcServices from './Pages/Services/AmcServices';
import ConsultingService from './Pages/Services/ConsultingService';
import AllProducts from './Pages/Products/AllProducts';
import AudioVideo from './Pages/Products/AudioVideo';
import Contact from './Pages/Contact';
import Cables from './Pages/Products/Cables';
import Infrastructure from './Pages/Products/Infrastructure';
import Iot from './Pages/Products/Iot';
import Kvm from './Pages/Products/Kvm';
import Networking from './Pages/Products/Networking';
function App() {
  return (
    <Router>
    <div className="App">

    <Routes>
            <Route exact path='/' element={< Index />}></Route>
            <Route exact path='/about-us' element={< AboutDetails />}></Route>
            <Route exact path='/managed-it-services' element={< ManagedITServices />}></Route>
            <Route exact path='/cloud-it-services' element={< CloudManagement />}></Route>
            <Route exact path='/amc-services' element={< AmcServices />}></Route>
            <Route exact path='/consulting-services' element={< ConsultingService />}></Route>

            <Route exact path='/products/all-products' element={< AllProducts />}></Route>
            <Route exact path='/products/audio-video' element={< AudioVideo />}></Route>
            <Route exact path='/products/cables' element={< Cables />}></Route>
            <Route exact path='/products/infrastructure' element={< Infrastructure />}></Route>
            <Route exact path='/products/iot' element={< Iot />}></Route>
            <Route exact path='/products/kvm' element={< Kvm />}></Route>
            <Route exact path='/products/networking' element={< Networking />}></Route>


            <Route exact path='/contact-us' element={< Contact />}></Route>
            
            
            
    </Routes>
    </div>
</Router>
  );
}

export default App;
