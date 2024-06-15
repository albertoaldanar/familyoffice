import React from "react";
import { Handle, Position } from "reactflow";
import "reactflow/dist/style.css";
import { Link } from "react-router-dom";

export const CustomNode = ({ data }) => {
  return (
    <div className="governance-custom-node">
      {data.name !== "Couple" ? (
        <>
          <div
            style={{ marginBottom: -8 }}
            className="governance-custom-node-interior"
          >
            <i
              style={{
                cursor: "pointer",
                marginTop: 5,
                fontSize: 12,
              }}
              className="fa fa-edit"
              data-bs-toggle="tooltip"
              title="fa fa-edit"
            ></i>
            {/*// @ts-ignore */}
            <Link style={{color: 'black'}} to={`${import.meta.env.BASE_URL}governance/familyMemberCreate/source/${data.id}/gen/${data.generation}`}>
              <p className="governance-custom-node-add-member">+</p>
            </Link>
          </div>
          <p style={{ marginBottom: -2, fontSize: 12 }}>{data.name}</p>
          <p style={{ fontSize: 12 }}>{data.dob}</p>
        </>
      ) : (
        <></>
      )}

      <Handle type="target" position={Position.Top} id="1" />
      <Handle type="source" position={Position.Bottom} id="2" />
    </div>
  );
};
