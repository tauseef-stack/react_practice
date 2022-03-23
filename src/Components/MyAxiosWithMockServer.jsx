import React, { useEffect, useState } from 'react'
import  axios  from 'axios';
import { useNavigate } from 'react-router-dom';

export const MyAxiosWithMockServer = (props) => {
    const navigate = useNavigate();
    const [list, setList] = useState([]);
    
    useEffect(() => {
        function gettingEmployees() {
            axios.get("http://localhost:3333/employees").then((res) => {
                if (res.status === 200) {
                    let data = res.data;
                    console.log(data)
                    setList([...data]);
                }
            })
        }
        gettingEmployees();
    }, [props.isAction]);
    
    

  return (
      <div className="container  my-3">
          <table className="table table-striped table-hover border border-dark">
              <thead>
                  <tr>
                      <th scope="col">ID</th>
                      <th scope="col">FIRST NAME</th>
                      <th scope="col">LAST NAME</th>
                      <th scope="col">EMAIL</th>
                      <th scope="col">GENDER</th>
                      <th scope="col">STATUS</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      list && list.map((ele, i) => (
                          <tr key={i}>
                              <th scope="row">{ele.id }</th>
                              <td>{ ele.first_name }</td>
                              <td>{ ele.last_name }</td>
                              <td>{ ele.email }</td>
                              <td>{ ele.gender }</td>
                              <td>{ ele.status }</td>
                          </tr>
                      ))
                  }
              </tbody>
          </table>   
          <button className="btn btn-primary" onClick={()=>{navigate("/form")}}>Add New Employee</button>
     </div>
  )
}
