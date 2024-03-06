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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
