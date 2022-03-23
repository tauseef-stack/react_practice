import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
export const PostingEmployye = (props) => {
    const navigate = useNavigate();
    const [payload, setPayload] = useState({
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        status: "",
    });

    function handleChange(e) {
        setPayload({
            ...payload,
            [e.target.name]:e.target.value,
        })
        
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Clicked Form")
        console.log(payload);
        postingEmployeeInDB();
    }
    function postingEmployeeInDB() {
        axios.post("http://localhost:3333/employees", {
            id:uuid(),
            first_name: payload.first_name,
            last_name: payload.last_name,
            email: payload.email,
            gender: payload.gender,
            status: payload.status,
        }).then((res) => {
            console.log(res.data);
            props.setAction(!props.isAction);
        }).catch((err) => {
            console.log("Error in posting data",err)
        })
    }
    

  return (
      <div className="container w-50 mx-auto my-3">
          <h1>Add Employee Entry </h1>
          <form action="">
              <div className=" mb-3">
                  <label  for="first_name" className='form-label'>First Name:</label>
                  <input type="text" placeholder="Enter First Name" className="form-control" value={payload.first_name} onChange={handleChange} name="first_name" required/>
              </div>
              <div className=" mb-3">
                  <label for="last_name"  className='form-label'>Last Name:</label>
                  <input type="text" placeholder="Enter Last Name" className="form-control" value={payload.last_name} onChange={handleChange} name="last_name" required/>
              </div>
              <div className=" mb-3">
                  <label for="email"  className='form-label'>Email:</label>
                  <input type="email" placeholder="Enter Email" className="form-control" value={payload.email} onChange={handleChange} name="email" required/>
              </div>
              <div className="mb-3">
                  <select name="gender" value={payload.gender} onChange={handleChange} className="form-select">
                  <option selected>Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
              </div>
              <div className="mb-3">
                  <select name="status" value={payload.status} onChange={handleChange} className="form-select">
                    <option selected>Status</option>
                    <option value="New">New</option>
                    <option value="Terminated">Terminatd</option>
                    <option value="Leaving">Leaving</option>
                    <option value="Active">Active</option>
                  </select>
              </div>
              <button type="submit" onClick={handleSubmit} className="btn btn-primary mx-3">Submit</button>
              <button className="btn btn-primary" onClick={()=>{navigate("/")}}>Go to List</button>

          </form>
    </div>
  )
}
