import React,{  useState } from 'react';
export default function AddClient() {
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
    const [lastname,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [number,setNumber]=useState("");
    const [password,setPassword]=useState("");
    const [adress,setAdress]=useState("");
    const [image,setImage]=useState(null);
    const addClient = () =>{ 
        let clients = JSON.parse(localStorage.getItem("clients")|| "[]");
        console.log("Here firstname",firstname);
        console.log("Here lastname",lastname);
        console.log("Here email",email);
        console.log("Here number",number);
        console.log("Here pwd",password);
        console.log("Here adress",adress);
        console.log("Here image",image);
        let clientsObj ={
          firstname:firstname,
          lastname:lastname,
          email:email,
          number:number,
          password:password,
          adress:adress,
          image:image,
          client:generateId(clients),

        };
        clients.push(clientsObj);
    localStorage.setItem('clients',JSON.stringify(clients));
   }
   const generateId = (T) =>{
    let max;
    if (T.length==0) {
      max=0;
    }
    else{
      max=T[0].client;
      for(let i=0; i<T.length;i++){
        if (T[i].client>max){
          max= T[i].client;
        }
      }
    }
    return max +1;
   }
  return (
    <div><section className="regervation_part section_padding">
    <div className="container">
      <div className="row">
        <div className="col-xl-5">
          <div className="section_tittle">
            <p>Welcome To Dingo !</p>
            <h2>Add Client</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="regervation_part_iner">
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input type="email" className="form-control" onChange={(event) => {setFirstname(event.target.value)}} id="inputEmail4" placeholder="FirstName *" />
                </div>
                <div className="form-group col-md-6">
                  <input type="email" className="form-control" onChange={(event) => {setLastName(event.target.value)}} id="inputPassword4" placeholder="LastName *" />
                </div>
                <div className="form-group col-md-6">
                  <input type="email" className="form-control" onChange={(event) => {setEmail(event.target.value)}} id="inputPassword4" placeholder="Email *" />
                </div>
                <div className="form-group col-md-6">
                  <input type="text" className="form-control" onChange={(event) => {setNumber(event.target.value)}} id="pnone" placeholder="Phone number *" />
                </div>
                <div className="form-group col-md-6">
              
                  <input type="password" className="form-control" onChange={(event) => {setPassword(event.target.value)}} id="inputPassword5" placeholder="Password *" />
               
                </div>
                <div className="form-group col-md-6">
                
                  <input type="text" className="form-control" onChange={(event) => {setAdress(event.target.value)}} id="pnone" placeholder="Adress *" />
                
                </div>
                <div className="form-group col-md-12">
                
                  <input type="file" className="form-control" onChange={handleImageChange} id="pnone" placeholder="Adress *" />
                
                </div>
              </div>
              <div className="regerv_btn">
                <a href="#" onClick={addClient}  className="btn_4">Add Client ☺ </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}
