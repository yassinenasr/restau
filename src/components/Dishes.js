import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import {
  getAllPlats,
  getplatbyid,
  deleteAllPlats,
  deleteplatbyid,
  searchForDish,
} from "../services/services";
Modal.setAppElement("#root");

export default function Dishes() {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const [dishes, setDishes] = useState([]);
  const [loadData, setLoadData] = useState(false);
  const [selecteddish, setselecteddish] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  const [deleteIsOpen, setdeleteIsOpen] = useState(false);
  const [deleteEIsOpen, setdeleteEIsOpen] = useState(false);
  const [modifyIsOpen, setmodifyIsOpen] = useState(false);
async function search(value) {
      try {
          let filtredDishes= await searchForDish(value);
          setDishes(filtredDishes);
      } catch (error) {
        console.error("Error deleting Dishes:", error);
      }
    }
  function openModifyModal(dish) {
    setselecteddish(dish);
    setmodifyIsOpen(true);
  }
  function openModalDe(dish) {
    setselecteddish(dish);
    setdeleteEIsOpen(true);
  }
  function closeModalDe() {
    setdeleteEIsOpen(false);
  }
  async function deletebyid(event) {
    try {
      event.preventDefault();
      const updatedDishes = dishes.filter(
        (dish) => dish.id !== selecteddish.id
      );
      await deleteplatbyid(selecteddish.id);
      console.log("Here is the new Dishes tab", updatedDishes);
      setDishes(updatedDishes);
      setdeleteEIsOpen(false);
    } catch (error) {
      console.error("Error deleting dish by id:", error);
    }
  }
  async function deletebyid(event) {
    try {
      event.preventDefault();
      const updatedDishes = dishes.filter(
        (dish) => dish.id !== selecteddish.id
      );
      await deleteplatbyid(selecteddish.id);
      console.log("Here is the new Dishes tab", updatedDishes);
      setDishes(updatedDishes);
      setdeleteEIsOpen(false);
    } catch (error) {
      console.error("Error deleting dish by id:", error);
    }
  }

  async function deleteAllDishes(event) {
    console.log("Deleting all dishes...");
    try {
      event.preventDefault();
      setDishes([]);
      await deleteAllPlats();
      setdeleteIsOpen(false);
    } catch (error) {
      console.error("Error deleting dishes:", error);
    }
  }

  function Modify(dish) {
    let dishesTab = getAllPlats();
    console.log("Here dishes tab", dishesTab);
    dishesTab = dishesTab.map((object) => {
      if (object.dish === dish.dish) {
        return dish;
      }
      return object;
    });

    localStorage.setItem("dishes", JSON.stringify(dishesTab));
  }
  function closeModifyModal() {
    setmodifyIsOpen(false);
  }

  const fetchDisheById = async (id) => {
    console.log("Getting dish with id " + id + " from backend...");
    try {
      let dish = await getplatbyid(id);

      console.log("dish result", dish);
      setselecteddish(dish);
    } catch (error) {
      console.error("Error fetching dishes:", error);
    }
  };

  async function openModal(id) {
    await fetchDisheById(id);
    setIsOpen(true);
  }
  function openModalD() {
    setdeleteIsOpen(true);
  }
  function closeModalD() {
    setdeleteIsOpen(false);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const fetchDishes = async () => {
    console.log("Getting dishes from backend...");
    try {
      let dishesTab = await getAllPlats();
      if (dishesTab.length !== 0 && !loadData) {
        setDishes(dishesTab);
        setLoadData(true);
      }
      console.log("Here dishes state", dishesTab);
    } catch (error) {
      console.error("Error fetching dishes:", error);
    }
  };

  useEffect(() => {
    if (!loadData) {
      fetchDishes();
    }
  }, [loadData]);
  return (
    <div className="site-section section_padding">
      <div className="container">
        <div className="col-lg-12 ">
          <div className="section_tittle">
            <h2>Our Dishes</h2>
          </div>
          {/*add filter field*/}

          <div className="container mt-4">
            <div className="row justify-content-center">
              <div className="col-12 col-md-6 mb-3">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-search"></i>
                    </span>
                  </div>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    aria-label="Search"
                    id="searchInput"
                    onChange  ={(event) => {
                      const searchTerm = event.target.value.toLowerCase();
                      search(searchTerm);
                    }}
                  />
                  <button
                    type="reset"
                    className="cancelbtn btn btn-danger  ml-5 "
                    onClick={openModalD}
                  >
                    Delete All Dishes
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="widget-next-match">
            <table className="table custom-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {dishes.map((value, key) => (
                  <tr key={key}>
                    <td>
                      <img
                        src={value.pic}
                        height="35px"
                        alt={`image-${key}`}
                      />
                    </td>
                    <td>{value.name}</td>
                    <td>{value.description}</td>
                    <td>{value.price}</td>

                    <td>
                      <div style={{ display: "flex" }}>
                        <button
                          type="reset"
                          className="cancelbtn btn btn-danger mr-1  "
                          onClick={() => openModalDe(value)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                          </svg>
                        </button>
                        <button
                          type="reset"
                          className="cancelbtn btn btn-info  mr-1 "
                          onClick={() => openModifyModal(value)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-pen"
                            viewBox="0 0 16 16"
                          >
                            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                          </svg>
                        </button>
                        <button
                          type="submit"
                          className="cancelbtn btn btn-success text-white "
                          onClick={() => openModal(value.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-info-circle"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal
        isOpen={deleteEIsOpen}
        onRequestClose={closeModalDe}
        style={customStyles}
        appElement={document.getElementById("root")}
        contentLabel="Example Modal"
      >
        <button onClick={closeModalDe} type="reset">
          X
        </button>
        <form>
          <div className="col-sm-6 col-lg-12 ">
            <div className="single_blog_item p-3">
              <div className="single_blog_text text-center">
                <h3>Are you sure you want to delete this dish ?</h3>
                <button
                  className="cancelbtn btn btn-success text-white mt-3 mr-3"
                  onClick={deletebyid}
                >
                  Yes
                </button>
                <button
                  className="cancelbtn btn btn-danger text-white mt-3"
                  onClick={closeModalDe}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </Modal>
      <Modal
        isOpen={deleteIsOpen}
        onRequestClose={closeModalD}
        style={customStyles}
        appElement={document.getElementById("root")}
        contentLabel="Example Modal"
      >
        <button onClick={closeModalD} type="reset">
          X
        </button>
        <form>
          <div className="col-sm-6 col-lg-12 ">
            <div className="single_blog_item p-3">
              <div className="single_blog_text text-center">
                <h3>Are you sure you want to delete all dishes ?</h3>
                <button
                  className="cancelbtn btn btn-success text-white mt-3 mr-3"
                  onClick={deleteAllDishes}
                >
                  Yes
                </button>
                <button
                  className="cancelbtn btn btn-danger text-white mt-3"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </Modal>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        appElement={document.getElementById("root")}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} type="reset">
          X
        </button>
        <form>
          <div className="col-sm-6 col-lg-12 ">
            <div className="single_blog_item p-3">
              <div className="single_blog_img p-3 ">
                <img
                  src={selecteddish.pic}
                  height={"350px"}
                  width={"500px"}
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
      <Modal
        isOpen={modifyIsOpen}
        onRequestClose={closeModifyModal}
        style={customStyles}
        appElement={document.getElementById("root")}
        contentLabel="Example Modal"
      >
        <button onClick={closeModifyModal} type="reset">
          X
        </button>
        <form>
          <div className="col-sm-6 col-lg-12 ">
            <div className="single_blog_item p-3">
              <div className="single_blog_text text-center">
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    value={selecteddish.name}
                    onChange={(event) => {
                      setselecteddish((prev) => ({
                        ...prev,
                        name: event.target.value,
                      }));
                    }}
                    placeholder="Name *"
                  />
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    value={selecteddish.description}
                    onChange={(event) => {
                      setselecteddish((prev) => ({
                        ...prev,
                        description: event.target.value,
                      }));
                    }}
                    placeholder="Description *"
                  />
                </div>

                <div className="form-group col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    value={selecteddish.price}
                    onChange={(event) => {
                      setselecteddish((prev) => ({
                        ...prev,
                        price: event.target.value,
                      }));
                    }}
                    placeholder="Price *"
                  />
                </div>

                <div className="form-group col-md-12">
                  <button
                    type="submit"
                    className="cancelbtn btn btn-success text-white mt-3"
                    onClick={() => Modify(selecteddish)}
                  >
                    Apply Your Modification
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}
