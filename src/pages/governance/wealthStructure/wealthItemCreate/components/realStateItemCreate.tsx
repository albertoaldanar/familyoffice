import React, { Fragment, useState } from "react";
import { Button, Card, Col, Row, Form, InputGroup } from "react-bootstrap";
import Select from "react-select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
//@ts-ignore
import download from '../../../assets/images/familyOffice/download.png';
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
//@ts-ignore
import FileUpload from "../../../../administration/accounting/components/fileUpload";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function RealStateItemCreate(props) {
  const [propertyName, setPropertyName] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [percentage, setPercentage] = useState("");
  const [todayValue, setTodayValue] = useState("");
  const [mt2, setMt2] = useState("");
  const [foundationDate, setfoundationDate] = useState<Dayjs | null>(dayjs(""));

  const [currency, setCurrency] = useState({
    value: "",
    label: "",
  });

  const [propertyType, setPropertyType] = useState({
    value: "",
    label: "",
  });

  const Optionscurrency = [
    { value: "MXN", label: "MXN" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
  ];

  const OptionsProperyType = [
    { value: "Casa", label: "Casa" },
    { value: "Departamento", label: "Departamento" },
    { value: "Oficinas", label: "Oficinas" },
    { value: "Terreno", label: "Terreno" },
  ];

  return (
    <Fragment>

      <Row style={{padding: 20}}>
          <Card.Title style={{ marginBottom: 35 }}>
            Nuevo Registro de propiedad
          </Card.Title>
          {/* <Form noValidate validated={false} onSubmit={() => {}}> */}
            <Row style={{ marginBottom: 10 }}>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Nombre de propiedad</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="numeric"
                    placeholder=""
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setPropertyName(text.target.value)}
                    value={propertyName}
                  />
                  <Form.Control.Feedback type="invalid">
                    Favor de añadir el monto del pago
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Direccion de propiedad</Form.Label>
                <Form.Control
                  type="numeric"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setLocation(text.target.value)}
                  value={location}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Ciudad</Form.Label>
                <Form.Control
                  type="numeric"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setCity(text.target.value)}
                  value={city}
                />
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustomUsername"
                className="form-group"
              >
                <Form.Label>Valuación actual</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend-1">$</InputGroup.Text>
                  <Form.Control
                    type="numeric"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setTodayValue(text.target.value)}
                    value={todayValue}
                  />
                  <InputGroup.Text id="inputGroupPrepend-2">
                    {currency.value}
                  </InputGroup.Text>
                  <Form.Control.Feedback type="invalid">
                    Favor de añadir el monto del pago
                  </Form.Control.Feedback>
                </InputGroup>
                <p style={{ marginTop: 7, fontSize: 11, color: "gray" }}>
                  Una valuación acertada y reciente es importante para un
                  calculo mas acertado en el total del valor patrimonial
                </p>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
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
                <Form.Label>Porcentaje de propiedad</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="numeric"
                    aria-describedby="inputGroupPrepend-3"
                    required
                    onChange={(text) => setPercentage(text.target.value)}
                    value={percentage}
                  />
                  <InputGroup.Text id="inputGroupPrepend">%</InputGroup.Text>
                  <Form.Control.Feedback type="invalid">
                    Favor de añadir el monto del pago
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustom01"
                  className="form-group"
                >
                <Form.Label>Tipo de propiedad</Form.Label>
                <Select
                  options={OptionsProperyType}
                  classNamePrefix="Select2"
                  className="multi-select"
                  onChange={(value) => setPropertyType(value)}
                  placeholder=""
                  value={propertyType}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Metros cuadrados</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="numeric"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setMt2(text.target.value)}
                    value={mt2}
                  />
                  <InputGroup.Text id="inputGroupPrepend-2">
                    Mt2
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group as={Col} md="6" className="form-group">
                <Form.Label className="form-label my-3">
                  Escrituras
                </Form.Label>
                  <FileUpload />
              </Form.Group>

              <Form.Group as={Col} md="6" className="form-group">
                <Form.Label className="form-label my-3">
                  Imagenes de propieda
                </Form.Label>
                <FileUpload />
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
          {/* </Form> */}
      </Row>
    </Fragment>
  );
}
