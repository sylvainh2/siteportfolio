import '../src/assets/scss/style.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Cv from './pages/Cv';
import Cvnew from './pages/Cvnew';
import Space from './pages/Space';
import Morpion from './pages/Morpion';
import Memory from './pages/Memory';
import Mail from './pages/Mail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cv" element={<Cv />}/>
          <Route path="/cvnew" element={<Cvnew />}/>
          <Route path="/space" element={<Space />}/>
          <Route path="/morpion" element={<Morpion />}/>
          <Route path="/memory" element={<Memory />}/>
          <Route path="/mail" element={<Mail />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
