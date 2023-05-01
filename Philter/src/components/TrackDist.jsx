import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import { CDBContainer, CDBBreadcrumb, CDBIcon } from "cdbreact";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainBar from "./MainBar";
import "./TrackDist.css";

// function TrackDist({ contract, account }) {

//   const navigate = useNavigate();
//   const [distributors, setDistributors] = useState([]);

//   const getDistributor = async () => {
//     try {
//       const di = await contract.getAlldistributors();
//       console.log(di);

//       setDistributors(di);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   useEffect(() => {
//     getDistributor();
//   }, []);
//   return
//   (
//     distributors &&
//     (
//       <MainBar pageTitle="Welcome to manufacturer dashboard">
//         <table className="styled-table">
//           <thead>
//             <tr>
//               <th>id</th>
//               <th>Name</th>
//               <th>Address</th>
//               <th>Email</th>
//               <th>Phone</th>
//             </tr>
//           </thead>
//           <tbody>
//             {distributors.map((d, i) =>
//              (
//               <tr key={i}>

//                 <td>{i}</td>
//                 <td>{d.name}</td>
//                 <td>{d.add}</td>
//                 <td>{d.email}</td>
//                 <td>{d.phone}</td>
//               </tr>
//             )
//           )}
//           </tbody>
//         </table>
//       </MainBar>
//     )
//     // <div>
//     // <Container  >
//     //       <Row >
//     //           <h2 className='text-center' style={{textTransform:'uppercase', marginTop: 40, fontWeight: 'bold', textDecoration: 'underline'}}>Track Distributor</h2>
//     //       </Row>
//     //   </Container>
//     //   <CDBContainer>
//     //       <CDBBreadcrumb color="none" className="align-items-center mt-3 mb-4">
//     //           <Link style={{ color: '#282828'}}  to='/'><li className="breadcrumb-item" >Manufacturer</li></Link>
//     //           <CDBIcon className="mx-2 text-muted" fas icon="angle-double-right"/>
//     //           <Link style={{color: '#282828'}}  to='/distributor'><li className="breadcrumb-item ">Distributor</li></Link>
//     //           <CDBIcon className="mx-2 text-muted" fas icon="angle-double-right"/>
//     //           <li className="breadcrumb-item active">Track Distributor</li>
//     //       </CDBBreadcrumb>
//     //   </CDBContainer>
//     //   distributors &&
//     // (
//     //   <MainBar pageTitle="Welcome to manufacturer dashboard">
//     //     <table className="styled-table">
//     //       <thead>
//     //         <tr>
//     //           <th>id</th>
//     //           <th>Name</th>
//     //           <th>Address</th>
//     //           <th>Email</th>
//     //           <th>Phone</th>
//     //         </tr>
//     //       </thead>
//     //       <tbody>
//     //         {distributors.map((d, i) => (
//     //           <tr key={i}>
//     //             <td>{i}</td>
//     //             <td>{d.name}</td>
//     //             <td>{d.add}</td>
//     //             <td>{d.email}</td>
//     //             <td>{d.phone}</td>
//     //           </tr>
//     //         ))}
//     //       </tbody>
//     //     </table>
//     //   </MainBar>
//     // )
//     //   </div>
//   );
//       //   { <Container >
//       //   <table className="table table-bordered thead-dark table-striped rounded">
//       //     <thead className="table-dark">
//       //       <tr>
//       //         <th scope="col">Distributor ID</th>
//       //         <th scope="col">Distributor Name</th>
//       //         <th scope="col">Region</th>
//       //         <th scope="col">CNIC</th>
//       //       </tr>
//       //     </thead>
//       //     <tbody>
//       //       <tr>
//       //         <th scope="row">01</th>
//       //         <td>Ali</td>
//       //         <td>Samanabad</td>
//       //         <td>890</td>

//       //       </tr>

//       //       <tr>
//       //         <th scope="row">02</th>
//       //         <td>Hassan</td>
//       //         <td>Iqbal Town</td>
//       //         <td>891</td>

//       //       </tr>

//       //       <tr>
//       //         <th scope="row">03</th>
//       //         <td>Subhan</td>
//       //         <td>Chubarjii</td>
//       //         <td>892</td>

//       //       </tr>

//       //     </tbody>
//       //   </table>

//       // </Container> }
// }

// export default TrackDist;

function TrackDist({ contract, account }) {
  const navigate = useNavigate();
  const [distributors, setDistributors] = useState([]);

  const getDistributor = async () => {
    try {
      const di = await contract.getAlldistributors();
      console.log(di);

      setDistributors(di);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDistributor();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <h2
            className="text-center"
            style={{
              textTransform: "uppercase",
              marginTop: 40,
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Track Distributor
          </h2>
        </Row>
        {/* </Container> */}

        <CDBContainer>
          <CDBBreadcrumb color="none" className="align-items-center mt-3 mb-4">
            <Link style={{ color: "#282828" }} to="/">
              <li className="breadcrumb-item">Manufacturer</li>
            </Link>
            <CDBIcon
              className="mx-2 text-muted"
              fas
              icon="angle-double-right"
            />
            <Link style={{ color: "#282828" }} to="/distributor">
              <li className="breadcrumb-item ">Distributor</li>
            </Link>
            <CDBIcon
              className="mx-2 text-muted"
              fas
              icon="angle-double-right"
            />
            <li className="breadcrumb-item active">Track Distributor</li>
          </CDBBreadcrumb>
        </CDBContainer>
      </Container>
      (
      <table className="styled-table">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Region</th>
          </tr>
        </thead>
        <tbody>
          {distributors.map((d, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{d.name}</td>
              <td>{d.add}</td>
              <td>{d.email}</td>
              <td>{d.phone}</td>
              <td>{d.Region}</td>
            </tr>
          ))}
        </tbody>
      </table>
      )
    </div>
  );
}

export default TrackDist;
