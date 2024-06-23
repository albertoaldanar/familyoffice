import React from "react";
import { Handle, Position } from "reactflow";
import "reactflow/dist/style.css";
import { Link } from "react-router-dom";

export const CustomNode = ({ data }) => {
  const isNodeRoot = data.role === "root";
  console.log("data", data);

  'wealthItem/company/23'
  'wealthItem/realState/13'
  // const isNodeFamilyMember = data.role === 'Miembro Familiar';
  // // @ts-ignore
  let wealthItemUrl;
  let wealthCategoryUrl;

  if (!data.coreId){
    switch (data.name) {
      case "Empresas":
        //@ts-ignore
        wealthCategoryUrl = `${import.meta.env.BASE_URL}administration/companyCreate`;
        break;
      case "Bienes raices":
        wealthCategoryUrl = "realStateCreate";
        break;
      case "Capital privado":
        wealthCategoryUrl = "privateCapitalCreate";
        break;
      case "Vehiculos":
        wealthCategoryUrl = "vehicleCreate";
        break;
      case "Inversiones":
        wealthCategoryUrl = "investmentCreate";
        break;
      case "Tesoreria":
        wealthCategoryUrl = "treasuryCreate";
        break;
      default:
        break;
    }
  }

  const renderCallbackType = () => {
    if (isNodeRoot) {
      return (
        <p style={{ fontSize: 12, alignSelf: "center", marginTop: 13 }}>
          {data.name}
        </p>
      );
    }

    if (data.coreId) {
      return (
        <>
          <div
            style={{ marginBottom: -8 }}
            className="governance-custom-node-interior"
          >
            <div></div>
            {/*// @ts-ignore */}
            <Link style={{ color: "black", marginBottom: 2 }} to={""}>
              <i
                style={{
                  cursor: "pointer",
                  marginTop: 5,
                  fontSize: 12,
                  color: "gray",
                }}
                className="fa fa-edit"
                data-bs-toggle="tooltip"
                title="fa fa-edit"
              ></i>
            </Link>
          </div>
          <p style={{ fontSize: 12, marginTop: 2 }}>{data.name}</p>
        </>
      );
    }

    return (
      <>
        <div
          style={{ marginBottom: -8 }}
          className="governance-custom-node-interior"
        >
          <div></div>
          {/*// @ts-ignore */}
          <Link style={{ color: "black", marginBottom: 2 }} to={wealthCategoryUrl}>
            <i
              style={{
                cursor: "pointer",
                marginTop: 5,
                fontSize: 12,
                color: "gray",
              }}
              className="fa fa-plus-square-o"
              data-bs-toggle="tooltip"
              title="fa fa-plus-square-o"
            ></i>
          </Link>
        </div>
        <p style={{ fontSize: 12, marginTop: 4 }}>{data.name}</p>
      </>
    );
  };

  return (
    <div className="governance-custom-node">
      {renderCallbackType()}
      <Handle type="target" position={Position.Top} id="1" />
      <Handle type="source" position={Position.Bottom} id="2" />
    </div>
  );
};
