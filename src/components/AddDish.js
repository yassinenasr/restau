import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { addplat, getAllPlats } from "../services/services";
import "react-toastify/dist/ReactToastify.css";
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
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const addDish = async (event) => {
    event.preventDefault();
    let dishes = await getAllPlats();
    console.log("Here dishes", dishes);
    console.log("Here name", name);
    console.log("Here description", description);
    console.log("Here price", price);
    console.log("Here image", image);
    let dishObj = {
      id: dishes.length + 1,
      pic: image,
      name: name,
      description: description,
      price: price
    };
    addplat(dishObj)
      .then((response) => {
        console.log("Dish added successfully", response);
        toast.success("Dish added successfully! Welcome To Dingo!");
      })
      .catch((error) => {
        console.error("Error adding dish", error);
        toast.error("Error adding dish. Please try again.");
      });
    console.log("Dish added successfully", dishObj);
  };

  return (
    <div>
      <section className="regervation_part section_padding">
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
                      <input
                        type="text"
                        className="form-control"
                        onChange={(event) => {
                          setName(event.target.value);
                        }}
                        id="inputName"
                        placeholder="Name *"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        id="inputDesc"
                        onChange={(event) => {
                          setDescription(event.target.value);
                        }}
                        placeholder="Description *"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="number"
                        className="form-control"
                        id="inputEmail"
                        onChange={(event) => {
                          setPrice(event.target.value);
                        }}
                        placeholder="Price *"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="file"
                        className="form-control"
                        onChange={handleImageChange}
                        id="inputImage"
                        placeholder="Select Image *"
                      />
                    </div>
                  </div>
                  <div className="regerv_btn">
                    <a href="#" className="btn_4" onClick={addDish}>
                      Add Dish ☺{" "}
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </div>
  );
}
