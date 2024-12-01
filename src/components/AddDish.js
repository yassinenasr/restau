import React,{  useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function AddDish() {
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
    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [price,setPrice]=useState("");
    const [image,setImage]=useState(null);
    const addDish = () =>{ 
        let dishes = JSON.parse(localStorage.getItem("dishes")|| "[]");
        console.log("Here name",name);
        console.log("Here description",description);
        console.log("Here price",price);
        console.log("Here image",image);
        let dishObj ={
            image:image,
            name:name,
            description:description,
            price:price,
            image:image,
            dish:generateId(dishes),

        };
    dishes.push(dishObj);
    localStorage.setItem('dishes',JSON.stringify(dishes));
    toast.success(" Dish "+dishObj.name+" ,Welcome To Dingo!");
   }
   const generateId = (T) =>{
    let max;
    if (T.length==0) {
      max=0;
    }
    else{
      max=T[0].dish;
      for(let i=0; i<T.length;i++){
        if (T[i].dish>max){
          max= T[i].dish;
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
            <h2>Add Dish</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="regervation_part_iner">
            <form>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <input type="email" className="form-control" onChange={(event) => {setName(event.target.value)}} id="inputEmail4" placeholder="Name *" />
                </div>
                <div className="form-group col-md-12">
                  <input type="email" className="form-control" id="inputPassword4" onChange={(event) => {setDescription(event.target.value)}} placeholder="Description *" />
                </div>
                <div className="form-group col-md-12">
                  <input type="email" className="form-control" id="inputPassword4" onChange={(event) => {setPrice(event.target.value)}} placeholder="Price *" />
                </div>
                <div className="form-group col-md-12">
                  <input type="file" className="form-control"  onChange={handleImageChange} id="inputPassword4" placeholder="Email *" />
                </div>
              </div>
              <div className="regerv_btn">
                <a href="#" className="btn_4" onClick={addDish } >Add Dish ☺ </a>
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
