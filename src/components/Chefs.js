import React, { useEffect, useState } from "react";
import Modal from "react-modal";

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
export default function Chefs() {
  const [chefs, setChefs] = useState([]);
  const [loadData, setLoadData] = useState(false);
  const [selectedchef, setselectedchef] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modifyIsOpen, setmodifyIsOpen] = useState(false);
  function openModifyModal(chef) {
    setselectedchef(chef);
    setmodifyIsOpen(true);
  }

  function Modify(chef) {
    let chefsTab = JSON.parse(localStorage.getItem("chefs") || "[]");

    chefsTab = chefsTab.map((object) => {
      if (object.chef === chef.chef) {
        return chef;
      }
      return object;
    });

    localStorage.setItem("chefs", JSON.stringify(chefsTab));
  }
  function closeModifyModal() {
    setmodifyIsOpen(false);
  }

  function openModal(chef) {
    setselectedchef(chef);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    console.log("Here chefs ");
    let chefsTab = JSON.parse(localStorage.getItem("chefs") || "[]");
    console.log("Here all chefs from LS", chefsTab);
    if (chefsTab.length !== 0 && !loadData) {
      setLoadData(true);
      setChefs(chefsTab);
    }
    console.log("Here chefs state", chefs);
  }, [chefs, loadData]);
  const deleteChef = (chef) => {
    console.log("Here Selected Dish", chef);
    for (let i = 0; chefs.length > i; i++) {
      if (chefs[i].chef === chef) {
        chefs.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("chefs", JSON.stringify(chefs));
    setChefs(chefs);
    setLoadData(false);
  };
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
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {chefs.map((value, key) => (
                  <tr>
                    <td>{value.chef}</td>
                    <td>
                      <img
                        src={value.image}
                        height={"35px"}
                        alt={"image" + key}
                      ></img>
                    </td>
                    <td>{value.firstname}</td>
                    <td>{value.lastname}</td>
                    <td>{value.email}</td>
                    <td>{value.number}</td>
                    <td>{value.password}</td>
                    <td>{value.adress}</td>
                    <td>{value.speciality}</td>
                    <td>{value.exprience}</td>
                    <td>
                      <div style={{ display: "flex" }}>
                        <button
                          type="reset"
                          class="cancelbtn btn btn-danger mr-1  "
                          onClick={() => {
                            deleteChef(value.chef);
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
                          onClick={() => openModifyModal(value)}
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
                          onClick={() => openModal(value)}
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
                  </tr>
                ))}
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
        <button onClick={closeModal} type="reset">
          X
        </button>
        <form>
          <div className="col-sm-6 col-lg-12 ">
            <div className="single_blog_item p-3">
              <div className="single_blog_img p-3 ">
                <img
                  src={selectedchef.image}
                  height={"200px"}
                  alt={"image"}
                ></img>
              </div>
              <div className="single_blog_text text-center">
                <h3>
                  {selectedchef.firstname} {selectedchef.lastname}
                </h3>
                <p>{selectedchef.speciality}</p>
                <p>{selectedchef.exprience}</p>
              </div>
            </div>
          </div>
        </form>
      </Modal>
      <Modal
        isOpen={modifyIsOpen}
        onRequestClose={closeModifyModal}
        style={customStyles}
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
                    value={selectedchef.firstname}
                    onChange={(event) => {
                      setselectedchef((prev) => ({
                        ...prev,
                        firstname: event.target.value,
                      }));
                    }}
                    placeholder="FirstName *"
                  />
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    value={selectedchef.lastname}
                    onChange={(event) => {
                      setselectedchef((prev) => ({
                        ...prev,
                        lastname: event.target.value,
                      }));
                    }}
                    placeholder="FirstName *"
                  />
                </div>

                <div className="form-group col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    id="number"
                    value={selectedchef.number}
                    onChange={(event) => {
                      setselectedchef((prev) => ({
                        ...prev,
                        number: event.target.value,
                      }));
                    }}
                    placeholder="FirstName *"
                  />
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    value={selectedchef.email}
                    onChange={(event) => {
                      setselectedchef((prev) => ({
                        ...prev,
                        email: event.target.value,
                      }));
                    }}
                    placeholder="FirstName *"
                  />
                </div>

                <div className="form-group col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    id="specialty"
                    value={selectedchef.speciality}
                    onChange={(event) => {
                      setselectedchef((prev) => ({
                        ...prev,
                        speciality: event.target.value,
                      }));
                    }}
                    placeholder="FirstName *"
                  />
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    id="adress"
                    value={selectedchef.adress}
                    onChange={(event) => {
                      setselectedchef((prev) => ({
                        ...prev,
                        adress: event.target.value,
                      }));
                    }}
                    placeholder="FirstName *"
                  />
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    value={selectedchef.exprience}
                    onChange={(event) => {
                      setselectedchef((prev) => ({
                        ...prev,
                        exprience: event.target.value,
                      }));
                    }}
                    id="exprience"
                    placeholder="FirstName *"
                  />
                  <button
                    type="submit"
                    class="cancelbtn btn btn-success text-white mt-3"
                    onClick={() => Modify(selectedchef)}
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
