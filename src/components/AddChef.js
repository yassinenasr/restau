import React,{  useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const AddChef = () =>{ 
        let chefs = JSON.parse(localStorage.getItem("chefs")|| "[]");
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
          firstname:firstname,
          lastname:lastname,
          email:email,
          number:number,
          password:password,
          adress:adress,
          speciality:speciality,
          exprience:exprience,
          image:image,
          chef:generateId(chefs),
          

        };
    chefs.push(chefObj);
    localStorage.setItem('chefs',JSON.stringify(chefs));
    toast.success(" Chef "+chefObj.firstname+" "+chefObj.lastname +" ,Welcome To Dingo!");
   }
   const generateId = (T) =>{
    let max;
    if (T.length==0) {
      max=0;
    }
    else{
      max=T[0].chef;
      for(let i=0; i<T.length;i++){
        if (T[i].chef>max){
          max= T[i].chef;
        }
      }
    }
    return max +1;
   }
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
                  <input type="email" className="form-control" id="inputEmail4" onChange={(event) => {setFirstname(event.target.value)}} placeholder="FirstName *" />
                </div>
                <div className="form-group col-md-6">
                  <input type="email" className="form-control" id="inputPassword4" onChange={(event) => {setLastname(event.target.value)}} placeholder="LastName *" />
                </div>
                <div className="form-group col-md-6">
                  <input type="email" className="form-control" id="inputPassword4" onChange={(event) => {setEmail(event.target.value)}} placeholder="Email *" />
                </div>
                <div className="form-group col-md-6">
                  <input type="text" className="form-control" id="pnone" onChange={(event) => {setNumber(event.target.value)}} placeholder="Phone number *" />
                </div>
                <div className="form-group col-md-6">
              
                  <input type="password" className="form-control" id="inputPassword4" onChange={(event) => {setPassword(event.target.value)}} placeholder="Password *" />
               
                </div>
                <div className="form-group col-md-6">
                
                  <input type="text" className="form-control" id="pnone" onChange={(event) => {setAdress(event.target.value)}} placeholder="Adress *" />
                
                </div>
                
              
              <div className="form-group col-md-6">
              
                  <input type="text" className="form-control" onChange={(event) => {setSpecialty(event.target.value)}} id="inputPassword4" placeholder="Speciality *" />
               
                </div>
                <div className="form-group col-md-6">
                
                  <input type="text" className="form-control" onChange={(event) => {setExprience(event.target.value)}} id="pnone" placeholder="Experience *" />
                
                </div>
                </div>
              <div className="form-group col-md-12">
                
                  <input type="file" onChange={handleImageChange} className="form-control" id="pnone" placeholder="Adress *" />
                
                </div>
              <div className="regerv_btn">
                <a href="#" onClick={AddChef }  className="btn_4">Add Chef ☺ </a>
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
