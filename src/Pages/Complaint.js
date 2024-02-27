import React from "react";

const Complaint = () => { 
    return(
        <>
       
    <div class="container mt-1 pt-1">
        
        <div class="col-12">
            <div class="bg-secondary opacity-75 bg-gradient p-1 text-center mb-1 text-white fw-bolder fs-3">
                File your complain here !
            </div>
            <hr />
        </div>
        <form class="row g-3">
        <div class="col-md-6">
                <label for="inputName" class="form-label">Complaint ID</label>
                <input type="text" class="form-control" id="inputName" placeholder="ID" />
            </div>
            <div class="col-md-6">
                <label for="inputName" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="inputName" placeholder="Name" />
            </div>

            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="E-mail" />
            </div>
            <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Contact No.</label>
                <input type="text" class="form-control" id="inputPassword4" placeholder="Contact Number" />
            </div>
            <div class="col-12">
                <label for="inputAddress" class="form-label">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div class="col-md-4">
                <label for="inputCity" class="form-label">City</label>
                <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="col-md-4">
                <label for="inputState" class="form-label">State</label>
                <select id="inputState" class="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                    <option>Gujarat</option>
                    <option>Maharastra</option>
                    <option>Rajasthan</option>
                    <option>Punjab</option>
                    <option>Karnataka</option>
                </select>
            </div>
            <div class="col-md-4">
                <label for="inputZip" class="form-label">Date</label>
                <input type="date" class="form-control" id="inputZip" />
            </div>
            <div class="col-12">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                    <label class="form-check-label" for="gridCheck">
                        Terms & Conditions Apply !!
                    </label>
                </div>
            </div>
            <div class="col-12 text-end">
                <button type="submit" class="btn btn-success w-100 h-50 bg-gradient p-2 text-center mb-4 text-white fw-bolder fs-3">Submit</button>
                <a href="#" class="text-primary shadow-sm">Forgot Password? Click here</a>
            </div>
        </form>
    </div>
    
</>
);
};
export default Complaint;