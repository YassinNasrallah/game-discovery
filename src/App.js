
import './App.css';
import Gamedetails from './pages/Gamedetails';
import Main from './pages/Main';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/game/:id' element={<Gamedetails />} />
      </Routes>
     
    </div>
  );
}

export default App;
