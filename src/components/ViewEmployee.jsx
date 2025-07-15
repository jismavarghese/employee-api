import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavEmployee from './NavEmployee';

const ViewEmployee = () => {
  const [employee, setEmployees] = useState({ status: 'success', data: [] });

  const fetchData = () => {
    axios.get("https://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        setEmployees({ status: 'success', data: response.data.data }); 
      })
      .catch((error) => {
        console.error('Error fetching employee:', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
        <NavEmployee/>
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <div className="row g-3">
              <div className="col col-12"></div>
              <table className="table table-bordered table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>ID</th>
                    <th>EMPLOYEE NAME</th>
                    <th>EMPLOYEE SALARY</th>
                    <th>EMPLOYEE AGE</th>
                    <th>PROFILE IMAGE</th>
                  </tr>
                </thead>
                <tbody>
                  {employee.data.map((value, index) => (
                    <tr key={index}>
                      <td>{value.id}</td>
                      <td>{value.employee_name}</td> 
                      <td>{value.employee_salary}</td>
                      <td>{value.employee_age}</td> 
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployee;
