import React from "react";
import { Card, Row } from "react-bootstrap";
import ReactFlow, { ReactFlowProvider } from "reactflow";
import { generateNodesAndEdges } from "../wealthStructureUtils";
import { CustomNode } from "./customeNode";
import "reactflow/dist/base.css";

export default function Structure(props) {
  const { initialNodes, initialEdges } = generateNodesAndEdges(props.data);

  const nodeTypes = {
    customNode: CustomNode,
  };

  const renderWealthStructure = () => {
    const defaultViewport = { x: 200, y: 0, zoom: 0.6 };

    return (
      <ReactFlowProvider>
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          nodeTypes={nodeTypes}
          defaultViewport={defaultViewport}
          zoomOnScroll={true}
        />
      </ReactFlowProvider>
    );
  };

  return (
    <Row>
      <Card style={{ minHeight: 450}}>
        {renderWealthStructure()}
      </Card>
    </Row>
  );
}
