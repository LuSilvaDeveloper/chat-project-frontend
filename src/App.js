import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import Ideas from "./pages/Ideas";

function App(props) {
  return (
      <div className="todoapp stack-large">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login requestType='POST'/>} />
            <Route path="/signup" element={<Signup requestType='POST'/>}  />
            <Route path="/chat" element={<Chat />} />
            <Route path="/ideas" element={<Ideas />} />
          </Routes>
      </div>
  );
}

export default App;
