import React from "react";
import { Card, Row } from "react-bootstrap";
import ReactFlow, { ReactFlowProvider } from "reactflow";
import { generateNodesAndEdges } from "../councilAndCommitteeUtils";
import { CustomNode } from "./customeNode";
import "reactflow/dist/base.css";

export default function Structure(props) {
  const { initialNodes, initialEdges } = generateNodesAndEdges(props.data, props.structureName, props.type);

  const nodeTypes = {
    customNode: CustomNode,
  };

  const renderFamilyStructure = () => {
    const defaultViewport = { x: 100, y: 0, zoom: 0.7 };

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
    <Row>
      <Card style={{ minHeight: 450}}>
        {renderFamilyStructure()}
      </Card>
    </Row>
  );
}
