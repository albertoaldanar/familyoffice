import React, { Fragment, useCallback } from "react";
import { Badge, Button, Card, Col, Table, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
//@ts-ignore
import Pageheader from "../../../layouts/pageheader/pageheader";
import ReactFlow, {
  ReactFlowProvider,
} from "reactflow";
import { CustomNode } from "./components/customeNode";
import { generateNodesAndEdges } from "./familyStructureUtils";
import "reactflow/dist/base.css";
import { family, familyS, familyG } from "./familyStructureData";

export default function FamilyStructure() {
  const { initialNodes, initialEdges } = generateNodesAndEdges(family);

  const nodeTypes = {
    customNode: CustomNode,
  };

  const renderFamilyStructure = () => {
    const defaultViewport = { x: 50, y: 0, zoom: 0.8 };

    return (
      <ReactFlowProvider>
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          nodeTypes={nodeTypes}
          defaultViewport={defaultViewport}
          zoomOnScroll={false}
        />
      </ReactFlowProvider>
    );
  };

  return (
    <Fragment>
      <Row>
        <Card style={{ minHeight: 550, marginTop: 20 }}>
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "row",
              marginBottom: 15,
            }}
          >
            <Card.Title style={{ marginLeft: 15, marginTop: 30 }}>
              Estructura Familiar
            </Card.Title>
          </div>
          {renderFamilyStructure()}
        </Card>
      </Row>
    </Fragment>
  );
}
