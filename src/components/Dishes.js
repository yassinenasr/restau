import React,{ useEffect ,useState } from 'react';
export default function Dishes() {
  const [dishes,setDishes]=useState([]);
  const [loadData , setLoadData]=useState(false);
  useEffect(
    ()=>{
      console.log("Here Dishes ");
      let dishesTab = JSON.parse(localStorage.getItem("dishes")|| "[]");
      console.log("Here all dishes from LS",dishesTab);
      if(dishesTab.length!==0 && !loadData){
        setDishes(dishesTab);
        setLoadData(true);
      }
      console.log("Here dishes state",dishes);
    },[dishes,loadData]
  )
  const deleteDish=(dish) => {
    console.log("Here Selected Dish",dish);
    for ( let i=0; dishes.length>i;i++){
      if(dishes[i].dish === dish){
        dishes.splice(i,1);
        break;
      }
    }
    localStorage.setItem("dishes",JSON.stringify(dishes));
    setDishes(dishes);
    setLoadData(true);
  }
  return (
    <div className="site-section section_padding">
    <div className="container">
    <div className="col-lg-12 ">
    <div className="section_tittle">
            <h2>Our Dishes</h2>
          </div>
          <div className="widget-next-match">
            <table className="table custom-table">
              <thead>
                <tr>
                <th>Dish</th>
                <th>Image</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                { dishes.map((value,key) => (
                  <tr>
                  <td>{value.dish}</td>
                  <td><img src={value.image} height={"35px"} alt={"image"+key}></img></td>
                  <td>{value.name}</td>
                  <td>{value.description}</td>
                  <td>{value.price}</td>
                  
                  <td>
                  <div > 
                  <button type="reset" class="cancelbtn btn btn-danger mr-3 col-lg-3 " onClick={()=> {deleteDish(value.dish)}}>Delete</button>
                  <button type="reset" class="cancelbtn btn btn-info mr-3  col-lg-3 "  >Modify</button>
                  <button type="submit" class="cancelbtn btn btn-success text-white col-lg-3 "   >Display</button>
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
