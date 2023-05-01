import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useTable } from "react-table";
import Modal from "react-modal";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QRCode from "react-qr-code";
import { useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./AddProduct.css";
const TableInput = (props) => {
  // console.log("TableInput", props);
  const { column, row, cell, updateData } = props;
  const onChange = (e) => updateData(row.index, column.id, e.target.value);
  return (
    <input
      type="number"
      value={cell.value}
      onChange={onChange}
      className="cell-input"
    />
  );
};

const ItemName = (props) => {
  // console.log("ItemName", props);
  const { column, row, cell, updateData } = props;
  const onChange = (e) => updateData(row.index, column.id, e.target.value);
  return (
    <input
      type="text"
      value={cell.value}
      onChange={onChange}
      className="cell-input"
    />
  );
};

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    width: 25%;
    text-align: center;
    border: 1px solid lightgray;
    padding: 5px;
  }
`;

const ReactTable = React.memo((props) => {
  // console.log("ReactTable", props);
  const { setAmountDue } = props;
  const columns = React.useMemo(
    () => [
      {
        Header: "Product",
        accessor: "Product",
        Cell: ItemName,
      },
      {
        Header: "Item Description",
        accessor: "description",
        Cell: ItemName,
      },
      {
        Header: "Cost",
        accessor: "cost",
        Cell: TableInput,
      },
      {
        Header: "Quantity",
        accessor: "quantity",
        Cell: TableInput,
      },
      {
        Header: "Total",
        accessor: (row) => row.cost * row.quantity,
        id: "total",
      },
    ],
    []
  );
  const initialData = [
    {
      Product: "panadol",
      description: "Medicine",
      cost: 1,
      quantity: 2,
    },
  ];
  const [data, setData] = React.useState(initialData);
  const resetData = () => setData(initialData);

  const updateData = (rowIndex, columnID, value) => {
    setData((oldData) =>
      oldData.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...oldData[rowIndex],
            [columnID]: value,
          };
        }
        return row;
      })
    );
  };
  const table = useTable({ columns, data, updateData });
  const { getTableProps, headerGroups, rows, prepareRow } = table;
  const tableSum = rows.reduce((sum, row) => sum + row.values.total, 0);
  // console.log("setAmountDue", tableSum);
  setAmountDue(tableSum);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [qrcode, setQrcode] = React.useState(null);
  const [hash, setHash] = React.useState(null);
  const [assetMessage, setAssetMessage] = React.useState("Create");
  const [assetModalIsOpen, setAssetModalIsOpen] = React.useState(false);
  const [assetDetails, setAssetDetails] = React.useState([]);

  const closeModal = () => {
    setQrcode(null);
    setIsOpen(false);
  };

  const assetcloseModal = () => {
    setAssetModalIsOpen(false);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "600px",
      height: "580px",
      borderRadius: "20px",
      backgroundClip: "text",
    },
  };
  const assetModalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "600px",
      height: "400px",
      borderRadius: "20px",
      backgroundClip: "text",
    },
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="QrCode Modal"
        ariaHideApp={false}
      >
        <div style={{ textAlign: "center", marginTop: 10 }}>
          <PaymentQRCode size={500} value={`${qrcode}`} />
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
      <Modal
        isOpen={assetModalIsOpen}
        onRequestClose={assetcloseModal}
        style={assetModalStyles}
        contentLabel="Asset Modal"
        ariaHideApp={false}
      >
        <div style={{ textAlign: "center", marginTop: 10, color: "black" }}>
          <h2>CompanyName:{assetDetails[0]}</h2>
          <h2>ProductTitle:{assetDetails[1]}</h2>
          <h2>Description:{assetDetails[8]}</h2>
          <h2>Cost:{assetDetails[7]}</h2>
          <h2>MFG_Date:{assetDetails[2]}</h2>
          <h2>EXP_Date:{assetDetails[3]}</h2>
          <h2>Batch_No:{assetDetails[4]}</h2>
          <h2>Quantity:{assetDetails[5]}</h2>
        </div>

        <span
          onClick={assetcloseModal}
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

      <br />
      <StyledTable {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
          <tr>
            <td colSpan={3}>
              <button type="button" onClick={resetData} className="btn">
                Reset Table
              </button>
            </td>
            <br />
            <button
              type="submit"
              onClick={async (e) => {
                // console.log("id", props.distributorId);
                // console.log("data", data);
                // if (
                //   !props.CompanyName ||
                //   !data[0].ProductTitle ||
                //   !data[0].description ||
                //   !data[0].cost ||
                //   !data[0].quantity ||
                //   !props.MFG_Date ||
                //   !props.EXP_Date ||
                //   !props.Batch_No ||
                //   !props.distributorId
                // ) {
                //   setAssetMessage("Plese fill all the fields");
                // } else {
                setAssetMessage("Creating...");
                e.preventDefault();
                // console.log(
                //   data[0].CompanyName ||
                //     data[0].ProductTitle ||
                //     data[0].description ||
                //     data[0].cost ||
                //     data[0].quantity ||
                //     props.MFG_Date ||
                //     props.EXP_Date ||
                //     props.Batch_No ||
                //     props.distributorId
                // );
                // setAmountDue={setAmountDue}
                // contract={props.contract}
                // MFGDate={MFG_Date}
                // EXPDate={EXP_Date}
                // distributorId={distributorId}
                // comapnyName={CompanyName}
                // description={description}
                // productTitle={product}
                // batchNumber={batchNo}
                // costPrice={costp}
                // quantity={quantity}
                console.log("here");
                console.log(
                  props.companyName,
                  props.productTitle,
                  props.description,
                  Number(props.MFGDate),
                  Number(props.EXPDate),
                  props.batchNumber,
                  Number(props.costPrice),
                  Number(props.quantity),
                  Number(props.distributorId)
                );
                let asset = await props.contract.createAsset(
                  props.companyName,
                  props.productTitle,
                  props.description,
                  Number(props.MFGDate),
                  Number(props.EXPDate),
                  props.batchNumber,
                  Number(props.costPrice),
                  Number(props.quantity),
                  Number(props.distributorId)
                );
                await asset.wait();
                console.log("asset created", asset.hash);
                setHash(asset.hash);
                if (asset.hash) {
                  const info = {
                    CompanyName: data[0].CompanyName,
                    name: data[0].productname,
                    description: data[0].description,
                    distributorId: props.distributorId,
                    cost: data[0].cost,
                    quantity: data[0].quantity,
                    vendorName: props.MFG_Date,
                    consumerName: props.EXP_Date,
                    vendorAdd: props.Batch_No,
                    // consumerAdd: props.consumerAdd,
                    hash: asset.hash,
                  };
                  let strData = JSON.stringify(info);
                  setQrcode(strData);
                  try {
                    let distributor = await props.contract.getDistributorbyId(
                      props.distributorId
                    );
                    console.log(distributor[2]);
                    if (distributor[2]) {
                      let body = `Deliver to the given address: ${props.consumerAdd}`;
                      const options = {
                        method: "POST",
                        url: "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",
                        headers: {
                          "content-type": "application/json",
                          "X-RapidAPI-Host":
                            "rapidprod-sendgrid-v1.p.rapidapi.com",
                          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
                        },
                        data: `{"personalizations":[{"to":[{"email":"${distributor[2]}"}],"subject":"Dispatch Item"}],"from":{"email":"rp589006@gmail.com"},"content":[{"type":"text/plain","value":"${body}"}]}`,
                      };
                      axios
                        .request(options)
                        .then(function (response) {
                          console.log("Email Succesfully Send");
                        })
                        .catch(function (error) {
                          console.error("Unable to send the mail");
                        });
                      setAssetMessage("Create");
                      setIsOpen(true);
                    } else {
                      console.log("distributor does not exixts");
                      return;
                    }
                  } catch (e) {
                    console.log(e);
                  }
                } else {
                  console.log("unable to create asset");
                }
              }}
              className="btn"
              style={{ marginLeft: "40%" }}
            >
              {assetMessage}
            </button>
          </tr>
        </tbody>
      </StyledTable>
    </>
  );
});

const FormStyles = styled.div`
  form {
    margin: 10px;
    label {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    aside {
      display: flex;
      justify-content: space-between;
    }
    section {
      flex: 1 1 auto;
      display: flex;
      flex-flow: column nowrap;
    }
    button {
      margin: 5px;
      padding: 5px;
      width: 100px;
      align-self: flex-end;
    }
  }
`;
const AmountDue = styled.label`
  margin: 10px;
  font-size: 1.5em;
  align-self: flex-end;
`;
const PaymentQRCode = styled(QRCode)`
  padding: 5px;
  align-self: flex-end;
`;

  const ReactForm = (props) => {
    // console.log("ReactForm", props);
    const navigate = useNavigate();
    const { amountDue, setAmountDue, distributors } = props;
    const defaultValues = React.useMemo(
      () => ({
        name: "M Hassan Ijaz",
        MFG_Date: "09 03 2023",
        EXP_Date: "09 06 2023",
        notes: "Payment terms: Net 30",
      }),
      []
    );
    const onSubmit = async (values, instance) => {
      // console.log("Form values:", values);
      instance.reset();
    };
    const form = useForm({ defaultValues, onSubmit });
    const { Form, values, meta } = form;

    const [CompanyName, setCompanyName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [MFG_Date, setMFG] = React.useState("");
    const [EXP_Date, setEXP] = React.useState("");
    const [product, productTitle] = React.useState("");
    const [batchNo, batch] = React.useState("");
    const [costp, CostP] = React.useState("");
    const [quantity, Quantity] = React.useState("");
    const [distributorId, setDistributorId] = React.useState(0);
    return (
      <>
        <FontAwesomeIcon
          icon="fa-solid fa-arrow-left"
          className="menu-icon"
          style={{ cursor: "pointer", marginTop: 20 }}
          onClick={() => navigate(-1)}
        />

        <FormStyles style={{ marginTop: "40px" }}>
          <Form>
            <aside>
              <section>
                <div className="info-container">
                  <label className="label">
                    CompanyName :{" "}
                    <input
                      type="text"
                      className="CompanyName"
                      onChange={(e) => {
                        e.preventDefault();
                        setCompanyName(e.target.value);
                      }}
                    />
                  </label>
                  <label className="label">
                    Product title :{" "}
                    <input
                      type="text"
                      className="Product title"
                      onChange={(e) => {
                        e.preventDefault();
                        productTitle(e.target.value);
                      }}
                    />
                  </label>
                  <label className="label">
                    description:{" "}
                    <input
                      type="text"
                      className="descrption"
                      onChange={(e) => {
                        e.preventDefault();
                        setDescription(e.target.value);
                      }}
                    />
                  </label>
                  <label className="label">
                    MFG_Date
                    <input
                      type="text"
                      className="MFG_Date"
                      onChange={(e) => {
                        e.preventDefault();
                        setMFG(e.target.value);
                      }}
                    />
                  </label>
                  <label className="label">
                    EXP_Date
                    <input
                      type="text"
                      className="EXP_Date"
                      onChange={(e) => {
                        e.preventDefault();
                        setEXP(e.target.value);
                      }}
                    />
                  </label>
                  <label className="label">
                    batchNo
                    <input
                      type="text"
                      className="batchno"
                      onChange={(e) => {
                        e.preventDefault();
                        batch(e.target.value);
                      }}
                    />
                  </label>
                  <label className="label">
                    costp
                    <input
                      type="text"
                      className="cost"
                      onChange={(e) => {
                        e.preventDefault();
                        CostP(e.target.value);
                      }}
                    />
                  </label>
                  <label className="label">
                    quantity
                    <input
                      type="text"
                      className="quantity"
                      onChange={(e) => {
                        e.preventDefault();
                        Quantity(e.target.value);
                      }}
                    />
                  </label>
                  <label className="label">
                    Distributors:
                    <select
                      className="VendorInfo"
                      value={distributorId}
                      onChange={(e) => {
                        setDistributorId(e.target.value);
                      }}
                    >
                      {distributors.map((d, i) => (
                        <option key={i} value={i}>
                          {d.name}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </section>
              <section>
                <AmountDue>Amount Due: {amountDue} PKR</AmountDue>
              </section>
            </aside>
            <ReactTable
              setAmountDue={setAmountDue}
              contract={props.contract}
              MFGDate={MFG_Date}
              EXPDate={EXP_Date}
              distributorId={distributorId}
              companyName={CompanyName}
              description={description}
              productTitle={product}
              batchNumber={batchNo}
              costPrice={costp}
              quantity={quantity}
            />
            <br />
          </Form>
        </FormStyles>
      </>
    );
  };
const Main = styled.main`
  border-radius: 5px;
  padding: 10px;
  background: white;
  height: 100vh;
  overflow: scroll;
  h2 {
    text-align: center;
  }
`;
const Invoice = (props) => {
  // console.log("Invoice", props);
  const [amountDue, setAmountDue] = React.useState(0);

  return (
    <Main>
      <ReactForm
        amountDue={amountDue}
        setAmountDue={setAmountDue}
        account={props.account}
        contract={props.contract}
        distributors={props.distributors}
      />
    </Main>
  );
};
const AddProduct = (props) => {
  const [distributors, setDistributors] = useState([]);
  const getDistributors = async () => {
    let dis = await props.contract.getAlldistributors();
    setDistributors(dis);
  };
  useEffect(() => {
    getDistributors();
  }, []);
  return (
    <div>
        <Invoice
          account={props.account}
          contract={props.contract}
          distributors={distributors}
        />
      </div>
    );
  };
export default AddProduct;