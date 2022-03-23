import React, { useState } from 'react'

export const MyForm = () => {
    const [payload, setPaylod] = useState({
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        status: "",
        isCheked: "",
        marks:0,
    });

    function handleChange(e) {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setPaylod({
            ...payload,
            [e.target.name]:value,

        });
        console.log(payload);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(payload);
    }
  return (
      <div className="container w-50 mx-auto my-3 ">
          <h2 class="text-muted fst-italic">Full Form Control Using React</h2>
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
              <label className="form-check-label">Gender :</label>
                  <div className="form-check form-check-inline">
                      <input type="radio" className="form-check-input mx-2" name="gender"  value="Male" checked={payload.gender==="Male"} onChange={handleChange}/>
                      <label className="form-check-label"  >Male</label>
                  </div>
                  <div className="form-check form-check-inline">
                      <input type="radio" className="form-check-input" name="gender"  value="Female" checked={payload.gender==="Female"} onChange={handleChange}/>
                      <label className="form-check-label" >Female</label>
                  </div>
                  
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
              <div className=" mb-3 form-check">
                  <input type="checkbox" className="form-check-input" name="isCheked" checked={payload.isChecked} onChange={handleChange} />
                  <label className="form-check-label">Is Graduate? </label>
              </div>
              <div className="mb-3">
                  <label>Performance</label>
                  <input type="range" className="form-range" min="0" max="10" step="2" defaultValue="5" name="marks" value={ payload.marks } onChange={handleChange}/>
              </div>

              <button type="submit" onClick={handleSubmit} className="btn btn-primary mx-3">Submit</button>
              

          </form> 
     </div>
  )
}
