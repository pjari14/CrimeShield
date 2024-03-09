import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contactus from "./Pages/Contactus";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import PersonalData from "./Pages/personaldata";
import Incident from "./Pages/Incident";
import CheckStatus from "./Pages/checkstatus";
import Complaint from "./Pages/complaint";
import Cybersafety from "./Pages/cybersafety";
<<<<<<< HEAD
import Cybercrime from "./Pages/cybercrime";
=======
import Lawyer from "./Pages/Lawyer";
>>>>>>> c3cea299364aeb20350725ffa1849a734b332144

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/CheckStatus" element={<CheckStatus />}></Route>
        <Route path="/PersonalData" element={<PersonalData />}></Route>
        <Route path="/Incident" element={<Incident />}></Route>
        <Route path="/contactus" element={<Contactus />}></Route>
        <Route path="/complaint" element={<Complaint />}></Route>
        <Route path="/cybersafety" element={<Cybersafety />}></Route>
<<<<<<< HEAD
        <Route path="/cybercrime" element={< Cybercrime />}></Route>
=======
        <Route path="/lawyer" element={<Lawyer />}></Route>
>>>>>>> c3cea299364aeb20350725ffa1849a734b332144
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
