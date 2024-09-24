import React, { Fragment, useState } from "react";
import { Button, Card, Col, Row, Form, InputGroup } from "react-bootstrap";
import Select, { components } from "react-select";
import dayjs, { Dayjs } from "dayjs";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { family } from "../familyStructure/familyStructureData";
import { formatAvailableFamilyMember, formatAvailableExternalProviders } from "./councilAndCommitteeUtils";
import { providers } from "../../administration/providers/providersData";

export default function CouncilAndCommitteAddMember(props) {
  const [companyName, setCompanyName] = useState("");
  const [rfc, setRFC] = useState("");
  const [name, setName] = useState("");

  const params = useParams();
  
  const [memberType, setMemberName] = useState({
    value: "Miembro familiar",
    label: "Miembro familiar",
  });

  const [familyMemberName, setFamilyMemberName] = useState({
    value: "",
    label: "",
  });

  const [providerName, setProviderName] = useState({
    value: "",
    label: "",
  });

  const OptionsProvider = [
    { value: "Miembro familiar", label: "Miembro familiar" },
    {
      value: "Miembro externo / Proveedor de servicio",
      label: "Miembro externo / Proveedor de servicio",
    },
  ];

  const CustomNoOptionsMessage = (props) => {
    return (
      <components.NoOptionsMessage {...props}>
        <span style={{ color: 'gray' }}>No hay opciones disponibles</span>
      </components.NoOptionsMessage>
    );
  };

  const typOfMembership = params.type === "consejoFamiliar" ? "Consejo Familiar" : "Comite de inversión"

  return (
    <Fragment>
      <Row>
        <Card style={{ padding: 30, marginTop: 20, minHeight: 550 }}>
          <Card.Title style={{ marginBottom: 35 }}>
            Añadir miembro a{" "}
            {typOfMembership}
          </Card.Title>
          <Form noValidate validated={false} onSubmit={() => {}}>
            <Row style={{ marginTop: 20, marginBottom: 20 }}>
              <Form.Group
                as={Col}
                md="6"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Tipo de miembro</Form.Label>
                <Select
                  options={OptionsProvider}
                  classNamePrefix="Select2"
                  className="multi-select"
                  onChange={(value) => setMemberName(value)}
                  placeholder=""
                  value={memberType}
                />
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20, marginBottom: 20 }}>
              {memberType.value === "Miembro familiar" ? (
                <>
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationCustom01"
                    className="form-group"
                  >
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                    <Form.Label>Miembros familiares</Form.Label>

                      <p style={{fontSize: 12, color: 'gray', marginLeft: 4, marginTop: 1}}>
                        (Que aún no han sido asignado al {typOfMembership})
                      </p>
                    </div>
                    
                    <Select
                      options={formatAvailableFamilyMember(family, params.type)}
                      classNamePrefix="Select2"
                      className="multi-select"
                      components={{ NoOptionsMessage: CustomNoOptionsMessage }}
                      onChange={(value) => setFamilyMemberName(value)}
                      placeholder=""
                      value={familyMemberName}
                    />
                  </Form.Group>
                  {/*// @ts-ignore */}
                  <Link to={`${import.meta.env.BASE_URL}governance/familyStructure`}
                    style={{
                      color:"#5488d2",
                      textDecoration: "underline",
                      fontSize: 11,
                      marginTop: -6,
                      
                    }}
                  >
                    Añadir nuevo miembro familiar
                  </Link>
                </>
              ) : (
                <>
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationCustom01"
                    className="form-group"
                  >
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                    <Form.Label>Lista de proveedores de la familia</Form.Label>
                    <p style={{fontSize: 12, color: 'gray', marginLeft: 4, marginTop: 1}}>(Que aún no han sido asignado al {typOfMembership})</p>
                    </div>
                    <Select
                      options={formatAvailableExternalProviders(providers, params.type)}
                      classNamePrefix="Select2"
                      className="multi-select"
                      components={{ NoOptionsMessage: CustomNoOptionsMessage }}
                      onChange={(value) => setProviderName(value)}
                      placeholder=""
                      value={providerName}
                    />
                  </Form.Group>
                   {/*// @ts-ignore */}
                    <Link to={`${import.meta.env.BASE_URL}administration/providerCreate/${params.type}`}
                      style={{
                        color:"#5488d2",
                        textDecoration: "underline",
                        fontSize: 11,
                        marginTop: -6
                      }}
                    >
                      Añadir nuevo proveedor de servicios
                    </Link>
                  </>
              )}
            </Row>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
                position: "absolute",
                bottom: 15,
                right: 30,
              }}
            >
              <div></div>
              <Button variant="primary" className=" mb-1" type="submit">
                Crear
              </Button>
            </div>
          </Form>
        </Card>
      </Row>
    </Fragment>
  );
}
