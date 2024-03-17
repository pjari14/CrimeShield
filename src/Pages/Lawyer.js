import React from "react";
import image from "../Assets/images/Lawyer-rafiki.png";
import { Link } from "react-router-dom";

const lawyer = () => {
  // function UsersTable() {
 
  //   const [lawyer,setLawyer] = useState([]);
  //   useEffect(()=>{
  //    fetchLawyers(); 
  //   })
  //    function fetchLawyers(){
  //    fetch("http://localhost:5000/user/get/").then((response)=>{
     
  //    return response.json()
  //    })
  //    .then((data)=>{
  //      console.log(data.data.data);
  //      const transformLawyer = data.data.data.map(lawyerData =>{
  //        return {
  //          fname: lawyerData.firstname,
  //          lname: lawyerData.lastname,
  //          address: lawayerData.address,
  //          contact: lawyerData.contact,
  //          email: lawyerData.email
   
  //        }
       
  //      });
   
  //      setUser(transformUser);
  //    })
  //   }
  return (
    <>
      <section className="bg-light py-5 py-md-5 py-xl-8">
        <div className="container">
          <div className="row gy-4 align-items-center">
            <div className="col-12 col-md-6 col-xl-7">
              <div className="d-flex justify-content-center text-bg-primary">
                <div className="col-12 col-xl-9">
                  <h1
                    class="heading py-2"
                    style={{ color: "#BA68C8", fontSize: "45px" }}
                  >
                    Find your lawyer and make an appointment
                  </h1>
                  <hr className="border-primary-subtle mb-4" />
                  <h4 className=" mb-4 text-secondary">
                    Select preferred lawyer and time slot to book an appointment
                    or consultation
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-5">
              <div className="card border-0 rounded-4">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-4">
                        <img
                          class="img-fluid responsiv"
                          alt="not found"
                          style={{
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            position: "relative",
                          }}
                          src={image}
                        ></img>
                        <div
                          class="container"
                          style={{
                            position: "absolute",
                            top: "80%",
                            left: "50%",
                            width: "150%",
                            transform: "translate(-120%, -20%)",
                            backgroundColor: "#fff",
                            padding: "20px",
                            border: "1px solid #ddd",
                            borderRadius: "5px",
                            boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
                          }}
                        >
                          <h4 style={{ color: "#2193b0" }}>
                            Book appointment now
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default lawyer;
