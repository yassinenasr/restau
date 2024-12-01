
    import React,{ useEffect ,useState } from 'react';
    export default function Chefs() {
      const [chefs,setChefs]=useState([]);
      useEffect(
        ()=>{
          console.log("Here chefs ");
          let chefsTab = JSON.parse(localStorage.getItem("chefs")|| "[]");
          console.log("Here all chefs from LS",chefsTab);
          setChefs(chefsTab);
          console.log("Here chefs state",chefs);
        }
      )
      const deleteChef=(chef) => {
        console.log("Here Selected Dish",chef);
        for ( let i=0; chefs.length>i;i++){
          if(chefs[i].chef === chef){
           chefs.splice(i,1);
            break;
          }
        }
        localStorage.setItem("chefs",JSON.stringify(chefs));
        setChefs(chefs);
      }
      return (
        <div className="site-section section_padding">
        <div className="container col-lg-12">
        <div className="col-lg-12">
        <div className="section_tittle">
            <h2>Our Chefs</h2>
          </div>
              <div className="widget-next-match">
                <table className="table custom-table  ">
                  <thead>
                    <tr>
                    <th>Chef</th>
                <th>Image</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Email</th>
                  <th>Number</th>
                  <th>Password</th>
                  <th>Adress</th>
                  <th>Speciality</th>
                  <th>Experience</th>
                    </tr>
                  </thead>
                  <tbody>
                    { chefs.map((value,key) => (
                      <tr>
                      <td>{value.chef}</td>
                      <td><img src={value.image} height={"35px"} ></img></td>
                      <td>{value.firstname}</td>
                      <td>{value.lastname}</td>
                      <td>{value.email}</td>
                      <td>{value.number}</td>
                      <td>{value.password}</td>
                      <td>{value.adress}</td>
                      <td>{value.speciality}</td>
                      <td>{value.exprience}</td>
                      <td>
                      <div > 
                      <button type="reset"  class="cancelbtn btn btn-danger mr-3 mb-1 col-lg-12" onClick={()=> {deleteChef(value.chef)}}>Delete</button>
                      <button type="reset" class="cancelbtn btn btn-info mb-1 col-lg-12 ">Modify</button>
                      <button type="submit" class="cancelbtn btn btn-success text-white col-lg-12">Display</button>
                      </div>
                      </td> 
                      </tr>))
                    }
                  </tbody>
                </table>
              </div>
            </div>
            </div>
            </div>
    
      )
    }
    

