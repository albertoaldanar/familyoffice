import React, { Fragment, useCallback } from "react";
import { Badge, Button, Card, Col, Table, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { companies } from "./accountingData";
//@ts-ignore
import company from "../../../assets/images/familyOffice/company.png";
import Pageheader from "../../../layouts/pageheader/pageheader";
import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";

export default function Companies() {
  const initialNodes = [
    { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
    { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
  ];
  const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  {
    /* <ReactFlowProvider>
      <ReactFlow
          nodes={nodes}
          edges={edges}
          // onNodesChange={onNodesChange}
          // onEdgesChange={onEdgesChange}
          // onConnect={onConnect}
      />
    </ReactFlowProvider> */
  }
  const breadcrumbs = ["Administración", "Empresas"];

  const renderCompanies = () => {
    return companies.map((comp) => {
      return (
        <div>
          <img src={company} style={{ width: "50px" }} />
          {comp.nombre}
          {comp.nombre}
        </div>
      );
    });
  };

  const renderTable = () => {
    return (
      <Col xl={12}>
        <Card>
          <div className="table-responsive">
            <Table className="table border text-nowrap text-md-nowrap mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Nombre</th>
                  <th>RFC</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {companies.map((idx, tb8) => (
                  <tr key={tb8}>
                    <td>{idx.nombre}</td>
                    <td>{idx.rfc}</td>
                    <td
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                      }}
                    >
                      {/*// @ts-ignore */}
                      <Link to={`${import.meta.env.BASE_URL}administration/company/${idx.id}`}>
                        Ver
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card>
      </Col>
    );
  };
  return (
    <Fragment>
      <Pageheader items={breadcrumbs} />
      <Row>
        <Card style={{minHeight: 400}}>
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "row",
              marginBottom: 15,
            }}
          >
            <Card.Title style={{ marginLeft: 15, marginTop: 30 }}>
              Empresas
            </Card.Title>
            <Button
              style={{
                marginRight: 15,
                alignSelf: "flex-end",
                justifyContent: "flex-end",
              }}
              variant="primary"
              size="sm"
              className=" mb-1"
            >
              {/*// @ts-ignore */}
              <Link style={{ color: "white" }} to={`${import.meta.env.BASE_URL}administration/companyCreate`}>
                + Añadir empresa
              </Link>
            </Button>
          </div>
          
          <div style={{display: 'flex', flexDirection: 'row'}}>
            {renderTable()}
          </div>

        </Card>
      </Row>
    </Fragment>
  );
}
