import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CDBContainer, CDBBreadcrumb, CDBIcon } from "cdbreact";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import "./AddDist.css";
import { ethers } from "ethers";
// import contractABI from "./contracts/FakePI.json"
// function AddDist() {

//   return (
//     <div className="container pb-5 col-md-8" style={{boxShadow: '1px 2px 9px #F4AAB9', borderRadius: 10}}>

//       <form className='mt-5 pt-5'>
//         <h2 className='text-center mb-1' style={{textTransform: 'uppercase', color: '#282828', fontWeight: 'bold'}}>Add Distributor</h2>

//         <CDBContainer>
//             <CDBBreadcrumb color="none" className="align-items-center mt-3 mb-4">
//               <Link style={{ color: '#282828'}}  to='/'><li className="breadcrumb-item" >Manufacturer</li></Link>
//               <CDBIcon className="mx-2 text-muted" fas icon="angle-double-right"/>
//               <Link style={{color: '#282828'}}  to='/distributor'><li className="breadcrumb-item ">Distributor</li></Link>
//               <CDBIcon className="mx-2 text-muted" fas icon="angle-double-right"/>
//               <li className="breadcrumb-item active">Add Distributor</li>

//             </CDBBreadcrumb>
//         </CDBContainer>

//         <div className="form-group row d-flex justify-content-center">
//           <label htmlFor="distName" className='col-md-3 col-form-label'>Distributor Name</label>
//           <div className="col-md-3">
//             <input type="text" className='form-control' id='distName' placeholder='Distributor Name' />
//           </div>

//           <label htmlFor="region" className='col-md-2 col-form-label'>Assign Region</label>
//           <div className="col-md-3">
//             <select className='form-select mb-3' >
//               <option value='' disabled selected hidden ></option>
//               <option value='1'>Region 1</option>
//               <option value='2'>Region 2</option>
//               <option value='3'>Region 3</option>
//               <option value='4'>Region 4</option>
//             </select>
//           </div>
//         </div>

//         <div className="form-group row d-flex justify-content-center mb-3">
//           <label htmlFor="CNIC" className='col-md-3 col-form-label'>CNIC #</label>
//           <div className="col-md-3">
//           <input type="text" className='form-control'  data-inputmask="'mask': '99999-9999999-9'"  placeholder="XXXXX-XXXXXXX-X"  id='CNIC' required="" ></input>
//           </div>

//           <label htmlFor="address" className='col-md-2 col-form-label'>Address</label>
//           <div className="col-md-3">
//             <input type="text" className='form-control' id='address'  />
//           </div>
//         </div>

//         <div className="form-group row d-flex justify-content-center mb-3">
//           <label htmlFor="ID" className='col-md-3 col-form-label'>ID</label>
//           <div className="col-md-3">
//             <input type="text" className='form-control' id='ID' placeholder='Assign an ID to Distributor' />
//           </div>

//           <label htmlFor="age" className='col-md-2 col-form-label'>Age</label>
//           <div className="col-md-3">
//             <input type="number" min='18' max='70' className='form-control' id='age'  />
//           </div>
//         </div>

//         <div className="col-md-5 mb-3 d-grid gap-2 d-md-flex justify-content-md-end">
//             <button type="button" class="btn btn-danger px-5 me-md-2">Reset Form</button>
//             <button type="button" class="btn btn-success px-4 ">Add Distributor</button>
//         </div>

//       </form>
//     </div>
//   )
// }

//export default AddDist
const AddDist = ({ contract, account }) => {
  const customStyle = {
    content: {
      top: "40%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "600px",
      height: "250px",
      borderRadius: "20px",
    },
  };
  const navigate = useNavigate();

  const [state, setState] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    aRegion:"",
  });
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [message, setMessage] = useState("Register");
  const closeModal = () => {
    setIsOpen(false);
  };

  const handler = (e) => {
    e.preventDefault();
    const val = e.target.value;
    setState({ ...state, [e.target.name]: val });
    console.log(e.target.value);
  };

    const Submit = async (e) => {
      e.preventDefault();
      if (!state.name || !state.address || !state.email || !state.phone || !state.aRegion  ) {
        setMessage("Please fill all the fields");
      } else {
        setMessage("Registering...");
        try {
          let createDistributor = await contract.insertDistributor(
            state.name,
            state.address,
            state.email,
            state.phone,
            state.aRegion
          );
          await createDistributor.wait();
          console.log(createDistributor.hash);
          setMessage("Register");
          setIsOpen(true);
        } catch (e) {
          setMessage("Distributor Already Exits");
          console.log(e);
        }
      }
    };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={customStyle}
      >
        <div style={{ textAlign: "center", marginTop: 40 }}>
          {/* <h2>Your have successfully Registerated.. 🚀</h2>
          <p>You will get a mail if vendor assigns you a dispatch order</p> */}
          <br />
          <a href="/">Proceed to the Home Page</a>
        </div>

        <span
          onClick={closeModal}
          style={{
            position: "absolute",
            top: 3,
            right: 20,
            fontSize: 28,
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon icon="fa-solid fa-xmark" />
        </span>
      </Modal>
      <div style={{ display: "flex", justifyContent: "between" }}>
        <FontAwesomeIcon
          icon="fa-solid fa-arrow-left"
          className="menu-icon"
          style={{ cursor: "pointer", marginTop: 20 }}
          onClick={() => navigate(-1)}
        />
        <h4 style={{ color: "#000", position: "fixed", right: 8, top: 2 }}>
          Wallet Address:
          {account.substring(0, 4) +
            "..." +
            account.substring(account.length - 4, account.length)}
        </h4>
        <br />
        <br />
      </div>

      <div>
        <form className="form">
          <h2 className="form-title">Register Here</h2>
          <br />
          <label className="lable">Name</label>

          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handler}
            className="input"
            required
          />
          <br />
          <label className="lable">Address</label>
          <input
            type="text"
            placeholder="Address"
            name="address"
            onChange={handler}
            className="input"
            required
          />
          <br />

          <label className="lable">Email</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handler}
            className="input"
            required
          />
          <br />
          <label className="lable">Phone</label>
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            onChange={handler}
            className="input"
            required
          />
          <br />
          <label className="lable">Assign Region</label>
          <input
            type="text"
            placeholder="assignRegion"
            name="aRegion"
            onChange={handler}
            className="input"
            required
          />
          <br />

          <button className="button" onClick={Submit}>
            {message}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDist; 