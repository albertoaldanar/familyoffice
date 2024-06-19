import React, { Fragment, useState } from "react";
import { Button, Card, Col, Row, Form, InputGroup } from "react-bootstrap";
import Select from "react-select";
import dayjs, { Dayjs } from "dayjs";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ProviderCreate(props) {
  const [companyName, setCompanyName] = useState("");
  const [rfc, setRFC] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");

  const params = useParams();

  const [providerType, setProviderType] = useState({
    value: '',
    label: '',
  });

  const addType = params.type === "consejoFamiliar" ?  "Consejo Familiar" : params.type === "comiteInversion" ? 'Comite de Inversión' : null;

  const OptionsProvider = [
    { value: "Asesor Inmobiliario", label: "Asesor Inmobiliario" },
    { value: "Abogado", label: "Abogado" },
    { value: "Asesor Contable", label: "Asesor Contable" },
    { value: "Asesor Fiscal", label: "Asesor Fiscal" },
    { value: "Asesor de seguro", label: "Asesor de seguro" },
  ];

  return (
    <Fragment>
      <Row>
        <Card style={{ padding: 30, marginTop: 20 }}>
          <Card.Title style={{ marginBottom: 10 }}>
            Nuevo Registro de proveedor de servicio
          </Card.Title>
          <Form noValidate validated={false} onSubmit={() => {}}>
          {
            addType && <p style={{color: 'gray', marginBottom: 10, fontStyle: 'italic', fontSize: 12}}>Este proveedor se añadira a {addType} automaticamente despues de ser creado aqui</p>
          }
          <Row style={{ marginTop: 25, marginBottom: 20 }}>
              <Form.Group
                as={Col}
                md="6"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Tipo de proveedor</Form.Label>
                <Select
                  options={OptionsProvider}
                  classNamePrefix="Select2"
                  className="multi-select"
                  onChange={(value) => setProviderType(value)}
                  placeholder=""
                  value={providerType}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Nombre</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="numeric"
                    placeholder=""
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setName(text.target.value)}
                    value={name}
                  />
                  <Form.Control.Feedback type="invalid">
                    Favor de añadir el monto del pago
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
          </Row>
            
            <Row style={{ marginBottom: 20 }}>

            <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Correo</Form.Label>
                <Form.Control
                  type="numeric"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setEmail(text.target.value)}
                  value={email}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="numeric"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setPhone(text.target.value)}
                  value={phone}
                />
              </Form.Group>

            </Row>

            <Row style={{ marginBottom: 20 }}>

              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Empresa</Form.Label>
                <Form.Control
                  type="numeric"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setCompanyName(text.target.value)}
                  value={companyName}
                />
              </Form.Group>
            <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Puesto</Form.Label>
                <Form.Control
                  type="numeric"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setRole(text.target.value)}
                  value={role}
                />
              </Form.Group>

            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group
                as={Col}
                md="8"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Ciudad/Dirección </Form.Label>
                <Form.Control
                  type="numeric"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setAdress(text.target.value)}
                  value={adress}
                />
              </Form.Group>
            </Row>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
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
