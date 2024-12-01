import React,{ useEffect ,useState } from 'react'
export default function Clients() {
  const [clients,setClients]=useState([]);
  useEffect(()=>{
      console.log("Here Clients ");
      let clientsTab = JSON.parse(localStorage.getItem("clients")|| "[]");
      console.log("Here all clients from LS",clientsTab);
      setClients(clientsTab);
      console.log("Here clients state",clients);
    }
  )
  const deleteClient=(client) => {
    console.log("Here Selected Client",client);
    for ( let i=0; clients.length>i;i++){
      if(clients[i].client === client){
        clients.splice(i,1);
        break;
      }
    }
    localStorage.setItem("clients",JSON.stringify(clients));
    setClients(clients);
  }
  return (
    <div className="site-section section_padding  ">
    <div className="container col-lg-12 ">
    <div className="col-lg-12">
    <div className="section_tittle ">
            <h2>Our Clients</h2>
          </div>
          <div className="widget-next-match  ">
            <table className="table custom-table  ">
              <thead>
                <tr>
                <th>Client</th>
                <th>Image</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Adress</th>
                </tr>
              </thead>
              <tbody>
                { clients.map((value,key) => (
                  <tr>
                  <td>{value.client}</td>
                  <td><img src={value.image} height={"35px"} ></img></td>
                  <td>{value.firstname}</td>
                  <td>{value.email}</td>
                  <td>{value.number}</td>
                  <td>{value.password}</td>
                  <td>{value.adress}</td>
                  <td>
                  <div > 
                  <button type="reset" class="cancelbtn btn btn-danger mr-3" onClick={()=> {deleteClient(value.client)}}>Delete</button>
                  <button type="reset" class="cancelbtn btn btn-info mr-3  ">Modify</button>
                  <button type="submit" class="cancelbtn btn btn-success text-white ">Display</button>
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
