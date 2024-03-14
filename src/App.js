import './App.css';
import Addmenu from './pages/Addmenu';
import Dashboard from './pages/Dashboard';

import Login from './pages/LoginComponent/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/addmenu' element={<Addmenu/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
