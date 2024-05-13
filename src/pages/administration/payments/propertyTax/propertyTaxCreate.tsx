import React, { Fragment, useState } from "react";
import {
  Button,
  Card,
  Col,
  Row,
  Badge,
  Form,
  InputGroup,
} from "react-bootstrap";
import Select from "react-select";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function PropertyTaxCreate(props) {
  const [notMemberPropertyName, setNotMemberPropertyName] = useState("");
  const [notMemberPropertyAddress, setNotMemberPropertyAddress] = useState("");

  const [personaAsegurada, setPersonaAsegurada] = useState({
    value: "",
    label: "",
  });

  const [selectedProperty, setSelectedProperty] = useState({
    value: "",
    label: "",
  });

  const [currency, setCurrency] = useState({
    value: "",
    label: "",
  });

  const [amount, setAmount] = useState('');

  const [isPropertyMember, setIsPropertyMember] = useState(true);

  const OptionsProperties = [
    { value: "Casa la Primavera", label: "Casa la Primavera" },
    { value: "Departamento Los cabos", label: "Departamento Los cabos" },
    { value: "Casa San diego", label: "Casa San Diego" },
  ];

  const Optionscurrency = [
    { value: "MXN", label: "MXN" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
  ];

  return (
    <Fragment>
      <Row>
        <Card style={{ padding: 30, marginTop: 50 }}>
          <Card.Title style={{ marginBottom: 35 }}>
            Nuevo Registro de Predial
          </Card.Title>
          <Form
           noValidate validated={false} onSubmit={() => {}}>
            <Row style={{ marginBottom: 10 }}>
              <Form.Group                 
                as={Col}
                md="6" 
                className="mb-3 form-group"
              >
                <Form.Check
                  required
                  checked={isPropertyMember}
                  style={{ fontSize: 12, color: "gray", marginTop: -10 }}
                  onChange={(e) => setIsPropertyMember(e.target.checked)}
                  label="El inmueble esta registrado en mi estructura patrimonial"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
                {
                  isPropertyMember ? (
                    <Select
                      options={OptionsProperties}
                      classNamePrefix="Select2"
                      className="multi-select"
                      onChange={(value) => setSelectedProperty(value)}
                      placeholder="Año"
                      value={selectedProperty}
                    />
                  ) : (
                    <div style={{marginTop: 10}}>
                      <Form.Control
                        type="numeric"
                        placeholder="Nombre de propiedad"
                        aria-describedby="inputGroupPrepend"
                        required
                        onChange={(text) => setNotMemberPropertyName(text.target.value)}
                        value={notMemberPropertyName}
                      />
                      <div style={{marginTop: 10}}>
                        <Form.Control
                          type="numeric"
                          placeholder="Dirección de propiedad"
                          aria-describedby="inputGroupPrepend"
                          required
                          onChange={(text) => setNotMemberPropertyAddress(text.target.value)}
                          value={notMemberPropertyAddress}
                        />
                      </div>
                    </div>
                  )

              }
              </Form.Group>

            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group
                as={Col}
                md="3"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Moneda</Form.Label>
                <Select
                  options={Optionscurrency}
                  classNamePrefix="Select2"
                  className="multi-select"
                  onChange={(value) => setCurrency(value)}
                  placeholder=""
                  value={currency}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustomUsername"
                className="form-group"
              >
                <Form.Label>Monto predial</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                  <Form.Control
                    type="numeric"
                    placeholder="Monto"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setAmount(text.target.value)}
                    value={amount}
                  />
                  <InputGroup.Text id="inputGroupPrepend">
                    {currency.value}
                  </InputGroup.Text>
                  <Form.Control.Feedback type="invalid">
                    Favor de añadir el monto del pago
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group as={Col} md="6" className="form-group">
                <Form.Label className="form-label my-3">
                  Certificado de predial
                </Form.Label>

                <Form.Control
                  type="file"
                  className="border-right-0 browse-file"
                  placeholder="Cargar poliza"
                  readOnly
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
