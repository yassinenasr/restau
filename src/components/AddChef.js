import React,{  useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {addchef,getAllChefs} from "../services/services";
export default function AddChef() {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result); 
      };
    }
  };
    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const [email,setEmail]=useState("");
    const [number,setNumber]=useState("");
    const [password,setPassword]=useState("");
    const [adress,setAdress]=useState("");
    const [speciality,setSpecialty]=useState("");
    const [exprience,setExprience]=useState("");
    const [image,setImage]=useState(null);
    const  AddChef = async (event) =>{ 
        event.preventDefault();
        let chefs = await getAllChefs();
        console.log("Here firstname",firstname);
        console.log("Here lastname",lastname);
        console.log("Here email",email);
        console.log("Here number",number);
        console.log("Here pwd",password);
        console.log("Here adress",adress);
        console.log("Here specialité",speciality);
        console.log("Here exprience",exprience);
        console.log("Here image",image);
        let chefObj ={
          chef:chefs.length + 1,
          image:image,
          FirstName:firstname,
          LastName:lastname,
          Email:email,
          Tel:number,
          Password:password,
          Adress:adress,
          Speciality:speciality,
          Exprience:exprience,  
        };
    addchef(chefObj)
          .then((response) => {
            console.log("chef added successfully", response);
            toast.success("chef added successfully! Welcome To Dingo!");
          })
          .catch((error) => {
            console.error("Error adding chef", error);
            toast.error("Error adding chef. Please try again.");
          });
        console.log("chef added successfully", chefObj);
      };
  return (
    <div><section className="regervation_part section_padding ">
    <div className="container">
      <div className="row">
        <div className="col-xl-5">
          <div className="section_tittle">
            <p>Welcome To Dingo !</p>
            <h2>Add Chef</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="regervation_part_iner ">
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input type="email" className="form-control" id="txt" onChange={(event) => {setFirstname(event.target.value)}} placeholder="FirstName *" />
                </div>
                <div className="form-group col-md-6">
                  <input type="email" className="form-control" id="txtt" onChange={(event) => {setLastname(event.target.value)}} placeholder="LastName *" />
                </div>
                <div className="form-group col-md-6">
                  <input type="email" className="form-control" id="mail" onChange={(event) => {setEmail(event.target.value)}} placeholder="Email *" />
                </div>
                <div className="form-group col-md-6">
                  <input type="number" className="form-control" id="num" onChange={(event) => {setNumber(event.target.value)}} placeholder="Phone number *" />
                </div>
                <div className="form-group col-md-6">
              
                  <input type="password" className="form-control" id="pwd" onChange={(event) => {setPassword(event.target.value)}} placeholder="Password *" />
               
                </div>
                <div className="form-group col-md-6">
                
                  <input type="text" className="form-control" id="adress" onChange={(event) => {setAdress(event.target.value)}} placeholder="Adress *" />
                
                </div>
                
              
              <div className="form-group col-md-6">
              
                  <input type="text" className="form-control" onChange={(event) => {setSpecialty(event.target.value)}} id="spec" placeholder="Speciality *" />
               
                </div>
                <div className="form-group col-md-6">
                
                  <input type="text" className="form-control" onChange={(event) => {setExprience(event.target.value)}} id="exp" placeholder="Experience *" />
                
                </div>
                </div>
              <div className="form-group col-md-12">
                
                  <input type="file" onChange={handleImageChange} className="form-control" id="pnone" placeholder="Adress *" />
                
                </div>
              <div className="regerv_btn">
                <a href="#" onClick={AddChef}  className="btn_4">Add Chef ☺ </a>
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
