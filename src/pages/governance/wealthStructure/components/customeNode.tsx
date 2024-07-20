import React from "react";
import { Handle, Position } from "reactflow";
import "reactflow/dist/style.css";
import { Link } from "react-router-dom";

export const CustomNode = ({ data }) => {
  const isNodeRoot = data.role === "root";
  // const isNodeFamilyMember = data.role === 'Miembro Familiar';
  // // @ts-ignore
  let wealthItemUrl;
  let wealthCategoryUrl;

  if (!data.coreId) {
    //@ts-ignore
    const baseUrl = `${import.meta.env.BASE_URL}`;
    switch (data.name) {
      case "Empresas":
        wealthCategoryUrl = `${baseUrl}administration/companyCreate`;
        break;
      case "Bienes raices":
        wealthCategoryUrl = `${baseUrl}governance/wealthItemCreate/realState`;
        break;
      case "Capital privado":
        wealthCategoryUrl = "privateCapitalCreate";
        break;
      case "Vehiculos":
        wealthCategoryUrl = `${baseUrl}governance/wealthItemCreate/vehicle`;
        break;
      case "Inversiones":
        wealthCategoryUrl = "investmentCreate";
        break;
      case "Tesoreria":
        wealthCategoryUrl = "treasuryCreate";
        break;
      case "Arte, colecciones y otros":
        wealthCategoryUrl = `${baseUrl}governance/wealthItemCreate/artAndOthers`;
        break;
      case "Prestamos por cobrar":
        wealthCategoryUrl = `${baseUrl}administration/loanCreate`;
        break;
      default:
        break;
    }
  } else {
    //@ts-ignore
    const baseUrl = `${import.meta.env.BASE_URL}governance/wealthItem`;
    switch (data.source) {
      case 1:
        wealthItemUrl = `${baseUrl}/type/company/id/${data.coreId}`;
        break;
      case 2:
        wealthItemUrl = `${baseUrl}/type/realState/id/${data.coreId}`;
        break;
      case "Capital privado":
        wealthItemUrl = "privateCapitalCreate";
        break;
      case 4:
        wealthItemUrl =  `${baseUrl}/type/vehicle/id/${data.coreId}`;
        break;
      case "Inversiones":
        wealthItemUrl = "investmentCreate";
        break;
      case "Tesoreria":
        wealthItemUrl = "treasuryCreate";
        break;
      case 7:
        wealthItemUrl =  `${baseUrl}/type/artAndOthers/id/${data.coreId}`;
        break;
      case 8:
        //@ts-ignore
        wealthItemUrl = `${import.meta.env.BASE_URL}administration/loanDescription/${data.coreId}`;
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
            <Link
              style={{ color: "black", marginBottom: 2 }}
              to={wealthItemUrl}
            >
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
          <Link
            style={{ color: "black", marginBottom: 2 }}
            to={wealthCategoryUrl}
          >
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
