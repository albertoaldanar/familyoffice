import React from "react";
import { Handle, Position } from "reactflow";
import "reactflow/dist/style.css";
import { Link } from "react-router-dom";

export const CustomNode = ({ data }) => {
  console.log("data", data);

  const isNodeRoot = data.role === "root";
  const isNodeFamilyMember = data.role === 'Miembro Familiar';
  // @ts-ignore 
  const viewMemberUrl = isNodeFamilyMember ? `${import.meta.env.BASE_URL}governance/familyMember/${data.id}`: `${import.meta.env.BASE_URL}administration/providerDescription/${data.providerCategory}/provider/${data.id}`;

  const renderCallbackType = () => {
    if (isNodeRoot) {
      return (
        <>
          <div
            style={{ marginBottom: -8 }}
            className="governance-custom-node-interior"
          >
            <div></div>
            {/*// @ts-ignore */}
            <Link style={{ color: "black", marginBottom: 5 }} to={`${import.meta.env.BASE_URL}governance/councilAndCommittee/addMember/${data.type}`}>
              <i
                style={{
                  cursor: "pointer",
                  marginTop: 5,
                  fontSize: 12,
                }}
                className="fa fa-plus-square-o"
                data-bs-toggle="tooltip"
                title="fa fa-plus-square-o"
              ></i>
            </Link>
          </div>
          <p style={{ fontSize: 12, marginBottom: 15 }}>{data.name}</p>
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
          <Link style={{ color: "black", marginBottom: 2 }} to={viewMemberUrl}>
            <i
              style={{
                cursor: "pointer",
                marginTop: 5,
                fontSize: 12,
                color: 'gray', 
              }}
              className="fa fa-edit"
              data-bs-toggle="tooltip"
              title="fa fa-edit"
            ></i>
          </Link>
        </div>
        <p style={{ marginBottom: -5, fontSize: 12, marginTop: 2 }}>{data.name}</p>
        <p style={{ fontSize: 12, fontStyle: 'italic', color: 'gray'}}>{data.role}</p>
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
