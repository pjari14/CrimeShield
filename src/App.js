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
import Lawyer from "./Pages/Lawyer";
import Cybercrime from "./Pages/cybercrime";
import Citizenmanual from "./Pages/citizenmanual";
import Gallery from "./Pages/gallery";
import Admin from "./Pages/Admin-Pages/Admin";
import Annonymously from "./Pages/reportannonymously";
import Suspect from "./Pages/SuspectDetails";
import Preview from "./Pages/previewcomplaint";
import Suspectdetail from "./Pages/suspectdetail";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "./ReduxStore/Userslice/Userslice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
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
        <Route path="/lawyer" element={<Lawyer />}></Route>
        <Route path="/cybercrime" element={<Cybercrime />}></Route>
        <Route path="/citizenmanual" element={<Citizenmanual />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="reportannonymously" element={<Annonymously />}></Route>
        <Route path="/suspectdetails" element={<Suspect />}></Route>
        <Route path="/previewcomplaint" element={<Preview />}></Route>
        <Route path="/suspectdetail" element={<Suspectdetail />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
