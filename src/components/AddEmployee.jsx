import React, { useState } from 'react'
import NavEmployee from './NavEmployee'

const AddEmployee = () => {
  const [input,changeInput] =useState(
    { Id:"",employee_name:"",employee_salary:"",employee_age:"",profile_image:""}
  )

  const inputHandler=(event)=>{

    changeInput( {...input,[event.target.name]:event.target.value} )

  }
  const readValues=()=>{
    console.log(input)
  }

  return (
   <div>
     <NavEmployee/>
      <div className="container">
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Id</label>
                <input type="text" className="form-control"  name="Id" value={input.Id} onChange={inputHandler}/>
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">employee_name</label>
                <input type="text" className="form-control"  name="employee_name" value={input.employee_name} onChange={inputHandler}/>
              </div>
             
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">employee_salary</label>
                <input type="text" className="form-control"  name='employee_salary' value={input.employee_salary} onChange={inputHandler}/>
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">employee_age</label>
                <input type="text" className="form-control"name='employee_age'  value={input.employee_age} onChange={inputHandler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">profile_image</label>
                <input type="text" className="form-control" name='profile_image' value={input.profile_image} onChange={inputHandler} />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={readValues}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddEmployee