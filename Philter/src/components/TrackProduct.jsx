import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import { CDBContainer, CDBBreadcrumb, CDBIcon } from "cdbreact";
import add_product from "./images/add_product.jpg";
import track_product from "./images/track_product.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TrackProduct({ contract, account }) {
  const navigate = useNavigate();
  const [assets, setAssets] = useState([]);

  const getAssets = async () => {
    try {
      let a = await contract.getAllAssets();
      setAssets(a);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAssets();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <h2
            className="text-center "
            style={{
              textTransform: "uppercase",
              marginTop: 40,
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Track Products
          </h2>
        </Row>
      </Container>

      <CDBContainer>
        <CDBBreadcrumb color="none" className="align-items-center mt-3 mb-4">
          <Link style={{ color: "#282828" }} to="/">
            <li className="breadcrumb-item">Manufacturer</li>
          </Link>
          <CDBIcon className="mx-2 text-muted" fas icon="angle-double-right" />
          <Link style={{ color: "#282828" }} to="/Product">
            <li className="breadcrumb-item ">Products</li>
          </Link>
          <CDBIcon className="mx-2 text-muted" fas icon="angle-double-right" />
          <li className="breadcrumb-item active">Track Product</li>
        </CDBBreadcrumb>
      </CDBContainer>
      <br />
      <table className="styled-table">
        <thead>
          <tr>
            <th>Distributor Id</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Cost</th>
            <th>Quantity</th>
            <th>MFG Date</th>
            <th>EXP Date</th>
            <th>Batch Number</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((d, i) => (
            <tr key={i}>
              <td>{d[10].toString()}</td>
              <td>{d[0]}</td>
              <td>{d[1]}</td>
              <td>{d[2].toString()}</td>
              <td>{d[3].toString()}</td>
              <td>{d[4]}</td>
              <td>{d[5]}</td>
              <td>{d[6].toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default TrackProduct;
