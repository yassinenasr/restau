import React,{ useEffect ,useState } from 'react';
import Modal from 'react-modal';
export default function Dishes() {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  const [dishes,setDishes]=useState([]);
  const [loadData , setLoadData]=useState(false);
  const [selecteddish, setselecteddish] = useState({});
   const [modalIsOpen, setIsOpen] = useState(false);
  function openModal(dish) {
    setselecteddish(dish);
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }
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
    setLoadData(false);
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
                  <div style={{ display: "flex" }}>
                        <button
                          type="reset"
                          class="cancelbtn btn btn-danger mr-1  "
                          onClick={() => {
                            deleteDish(value.dish);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-trash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                          </svg>
                        </button>
                        <button
                          type="reset"
                          class="cancelbtn btn btn-info  mr-1 "
                          
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-pen"
                            viewBox="0 0 16 16"
                          >
                            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                          </svg>
                        </button>
                        <button
                          type="submit"
                          class="cancelbtn btn btn-success text-white "
                          onClick={()=> openModal(value)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-info-circle"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                          </svg>
                        </button>
                      </div>
                  </td> 
                  </tr>))
                }
              </tbody>
            </table>
          </div>
        </div>
        </div>
        <Modal
                       isOpen={modalIsOpen}
                       onRequestClose={closeModal}
                       style={customStyles}
                       contentLabel="Example Modal"
               >
                       <button onClick={closeModal} type="reset" >X</button>
                       <form>
                       <div className="col-sm-6 col-lg-12 ">
                         <div className="single_blog_item p-3">
                           <div className="single_blog_img p-3 " >
                           <img
                                       src={selecteddish.image}
                                       height={"200px"}
                                       alt={"image"}
                                     ></img>
                           </div>
                           <div className="single_blog_text text-center">
                             <h3>{selecteddish.name} </h3>
                             <p>{selecteddish.description}</p>
                             <p>{selecteddish.price}</p>
                            
                             
                           </div>
                         </div>
                       </div>
                       </form>
                     </Modal>
        </div>

  )
}
