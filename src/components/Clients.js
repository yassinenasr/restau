import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { getAllUsers, getuserbyid, modifyuserbyid, searchForUser } from "../services/services";
import { deleteAllUsers, deleteuserbyid } from "../services/services";
export default function Clients() {
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
  const [deleteIsOpen, setdeleteIsOpen] = useState(false);
  const [deleteEIsOpen, setdeleteEIsOpen] = useState(false);
  const [modifiedclient, setmodifiedclient] = useState({});
  
  const [clients, setClients] = useState([]);
  const [loadData, setLoadData] = useState(false);
  const [selectedclient, setselectedclient] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modifyIsOpen, setmodifyIsOpen] = useState(false);
  function openModalD() {
    setdeleteIsOpen(true);
  }
  function closeModalD() {
    setdeleteIsOpen(false);
  }








  const getModifClient = async (id) => {
    try {
      const client = await getuserbyid(id);
      console.log("Here is the client", client);
      setmodifiedclient(client);

    }
    catch (error) {
      console.error("Error fetching client:", error);
    }}
  
   const Modify = async (user) => {
    try {
      await modifyuserbyid(user.id, user);  
      const updatedClients = clients.map((client) =>
        client.id === user.id ? user : client
      );
  
      setClients(updatedClients);
      setmodifyIsOpen(false);
      setLoadData(false);
  
      console.log("Updated clients list:", updatedClients);
    } catch (error) {
      console.error("Error modifying user:", error);
    }
  };
  
  function openModifyModal(id) {
    getModifClient(id);
    setmodifyIsOpen(true);
  }
  
  function closeModifyModal() {
    setmodifyIsOpen(false);
  }
  


















  function openModal(client) {
    setselectedclient(client);
    setIsOpen(true);
  }

  function openModalDe(client) {
    setselectedclient(client);
    setdeleteEIsOpen(true);
  }
  function closeModalDe() {
    setdeleteEIsOpen(false);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const fetchClients = async () => {
    console.log("Getting Clients from backend...");
    try {
      let clientsTab = await getAllUsers();
      if (clientsTab.length !== 0 && !loadData) {
        setClients(clientsTab);
        setLoadData(true);
      }
      console.log("Here clients state", clientsTab);
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  };

  useEffect(() => {
    if (!loadData) {
      fetchClients();
    }
  }, [loadData]);
  useEffect(() => {
    console.log("Clients updated:", clients);
    localStorage.setItem("clients", JSON.stringify(clients));
  }, [clients]);

  async function deleteAllClients(event) {
    console.log("Deleting all dishes...");
    try {
      event.preventDefault();
      setClients([]);
      await deleteAllUsers();
      setdeleteIsOpen(false);
    } catch (error) {
      console.error("Error deleting Clients:", error);
    }
  }

  async function deletebyid(event) {
    try {
      event.preventDefault();
      await deleteuserbyid(selectedclient.firstname);
      console.log("Deleting client with id:", selectedclient);
      const updatedClients = clients.filter(
        (client) => client.id !== selectedclient.id
      );
      console.log("Here is the new Clients tab", updatedClients);
      setClients(updatedClients);
      setdeleteEIsOpen(false);
    } catch (error) {
      console.error("Error deleting client by id:", error);
    }
  }

  async function search(value) {
    try {
        let filtredUsers= await searchForUser(value);
        setClients(filtredUsers);
    } catch (error) {
      console.error("Error deleting Clients:", error);
    }
  }

  return (
    <div className="site-section section_padding  ">
      <div className="container col-lg-12 ">
        <div className="col-lg-12">
          <div className="section_tittle ">
            <h2>Our Clients</h2>
          </div>
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
                    Delete All Clients
                  </button>
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          <div className="widget-next-match  ">
            <table className="table custom-table  ">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Adress</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((value, key) => (
                  <tr key={key}>
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
                    <td>{value.password}</td>
                    <td>{value.adress}</td>
                    <td>
                      <div style={{ display: "flex" }}>
                        <button
                          type="reset"
                          className="cancelbtn btn btn-danger mr-1  "
                          onClick={()=>openModalDe(value)}
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
                          onClick={() => openModifyModal(value.id)}
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
                          onClick={() => openModal(value)}
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
                <h3>Are you sure you want to delete this client ?</h3>
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
                <h3>Are you sure you want to delete all Clients ?</h3>
                <button
                  className="cancelbtn btn btn-success text-white mt-3 mr-3"
                  onClick={deleteAllClients}
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
                  src={selectedclient.image}
                  height={"200px"}
                  alt={"image"}
                ></img>
              </div>
              <div className="single_blog_text text-center">
                <h3>
                  {selectedclient.firstname} {selectedclient.lastname}
                </h3>
                <p>{selectedclient.number}</p>
                <p>{selectedclient.email}</p>
                <p>{selectedclient.Adress}</p>
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
                    value={modifiedclient.firstname}
                    onChange={(event) => {
                      setmodifiedclient((prev) => ({
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
                    value={modifiedclient.lastname}
                    onChange={(event) => {
                      setmodifiedclient((prev) => ({
                        ...prev,
                        lastname: event.target.value,
                      }));
                    }}
                    placeholder="LastName *"
                  />
                </div>

                <div className="form-group col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    value={modifiedclient.email}
                    onChange={(event) => {
                      setmodifiedclient((prev) => ({
                        ...prev,
                        email: event.target.value,
                      }));
                    }}
                    placeholder="Email *"
                  />
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={modifiedclient.password}
                    onChange={(event) => {
                      setmodifiedclient((prev) => ({
                        ...prev,
                        password: event.target.value,
                      }));
                    }}
                    placeholder="Password *"
                  />
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    value={modifiedclient.adress}
                    onChange={(event) => {
                      setmodifiedclient((prev) => ({
                        ...prev,
                        adress: event.target.value,
                      }));
                    }}
                    id="exprience"
                    placeholder="Adress *"
                  />
                  <button
                    type="button"
                    className="cancelbtn btn btn-success text-white mt-3"
                    onClick={() => Modify(modifiedclient)}
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
