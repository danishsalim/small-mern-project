import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/homepage"
import Login from './components/login/login';
import Register from './components/register/register';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login/" element={<Login />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/register/" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
 
  );
}

export default App;
