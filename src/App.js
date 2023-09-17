import logo from './logo.svg';
import './App.css';
import Index from './Pages/Index';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">

    <Routes>
            <Route exact path='/' element={< Index />}></Route>
    </Routes>
    </div>
</Router>
  );
}

export default App;
