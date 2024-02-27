import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Complaint from "./Pages/Complaint";
import Incident from "./Pages/Incident";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>

        <Route path="/Complaint" element={<Complaint />}></Route>
        <Route path="/Incident" element={<Incident />}></Route>
        
        <Route path="/complaint" element={<Complaint />}></Route>
</Routes>
      <Footer />
    </div>
  );
}

export default App;
