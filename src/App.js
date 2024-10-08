import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Course from './Pages/Course/Course';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import Videos from './Pages/Videos/videos'
import Cadastro from "./Pages/Cadastro/Cadastro"
import CTrail from './Pages/ChooseTrail/CTrail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/course" element={<Course/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Cadastro/>} />
          <Route path="/videos" element={<Videos/>} />
          <Route path="/ctrail" element={<CTrail/>} />
          
        </Routes>
      </Router>
    </div>  
  );
}

export default App;
