import React from 'react'

export default function Login() {
  return (
    <form className=" h-100 d-flex flex-column justify-content-center ">
  <div className="  w-75 mx-auto p-2 border  border-info  rounded " style={{backgroundColor: '#b3d3f7', borderWidth: '3px  !important'}}>
    <h2 className="text-center" style={{fontFamily: 'cursive'}}>Add New Player</h2>
    <div className="row p-3">
      <div className="col-6 ">
        <label htmlFor="uname"><b>Name:</b></label><br />
        <input type="text" placeholder="Enter Name" name="name" required id="name" className="w-100 form-control is-invalid  " style={{borderWidth: '1.5px !important', borderColor: 'black !important'}} oninput="alphabetique()" />
        <span id="namewarn" className="text-danger " style={{display: 'none'}}> Invalid Name</span>
      </div>
      <div className="col-6 ">
        <label htmlFor="age"><b>Age:</b></label><br />
        <input type="number" placeholder="Enter Age" name="age" required id="age" className="w-100 form-control is-invalid " style={{borderWidth: '1.5px !important', borderColor: 'black !important'}} oninput="ages()" />
        <span id="agewarn" className="text-danger " style={{display: 'none'}}> Invalid Age</span>
      </div>
    </div>
    <div className="row p-3 jus">
      <div className="col-6">
        <label htmlFor="num"><b>Number:</b></label><br />
        <input type="number" name="num" id="num" placeholder="Enter Number" required className="w-100 form-control is-invalid " style={{borderWidth: '1.5px !important', borderColor: 'black !important'}} oninput="nombre()" />
        <span id="numwarn" className="text-danger " style={{display: 'none'}}> Invalid Number</span>
      </div>
      <div className="col-6">
        <label htmlFor="pos"><b>Position:</b></label><br />
        <select id="pos" name="pos" required className="w-100 form-control   is-invalid" style={{borderWidth: '1.5px !important', borderColor: 'black !important'}} oninput="posi()">
          <option value>Select Position</option>
          <option value="GK">GK</option>
          <option value="CB">CB</option>
          <option value="RB">RB</option>
          <option value="LB">LB</option>
          <option value="CDM">CDM</option>
          <option value="CM">CM</option>
          <option value="CAM">CAM</option>
          <option value="LW">LW</option>
          <option value="RW">RW</option>
          <option value="ST">ST</option>
        </select>
        <span id="poswarn" className="text-danger " style={{display: 'none'}}> Invalid Position</span>
      </div>
    </div>
    <div className="d-flex pt-3 pb-3 justify-content-center ">
      <button type="submit" value="submit" className="mr-2  btn btn-info" onclick="addPlayer()">Sign up </button>
      <button type="reset" className="cancelbtn btn btn-danger">Cancel</button>
    </div>
    <label className="justify-content-center d-flex ">
      <input type="checkbox" name="remember" className="mr-2 " required /> Agree to terms and conditions
    </label>
  </div>
  <div classname="container  h-100">
  </div></form>

  )
}
