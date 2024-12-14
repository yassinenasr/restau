import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
  const logintoast = () =>{ 
  toast.success("Welcome To Dingo!");}
  return (
    <div><section className="regervation_part section_padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="section_tittle">
                <p>Welcome To Dingo !</p>
                <h2>Login</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="regervation_part_iner">
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <input type="email" className="form-control"  id="inputEmail4" placeholder="Email *" />
                    </div>
                    <div className="form-group col-md-12">
                      <input type="password" className="form-control"  id="inputPassword4" placeholder="Password *" />
                    </div>
                    
          
                  </div>
                  <div className="regerv_btn ">
                    <a href="#" className="btn_4 form-group col-md-12 text-center" onClick={logintoast} >Add Login ☺ </a>
                    
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        
            <ToastContainer />
      </section></div>

  )
}
