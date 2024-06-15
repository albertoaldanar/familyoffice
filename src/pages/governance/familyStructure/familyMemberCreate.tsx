import React, { Fragment, useCallback } from "react";
import { Badge, Button, Card, Col, Table, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
//@ts-ignore
import "reactflow/dist/base.css";
import { family, familyS, familyG } from "./familyStructureData";

export default function FamilyMemberCreate() {
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
              Añadir miembro a estructura familiar 
            </Card.Title>
          </div>
        </Card>
      </Row>
    </Fragment>
  );
}
