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

export default function VehicleItemCreate(props) {
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [platesNumber, setPlatesNumber] = useState("");
  const [price, setPrice] = useState("");
  const [invoice, setInvoice] = useState("");
  const [currency, setCurrency] = useState({
    value: "",
    label: "",
  });

  const Optionscurrency = [
    { value: "MXN", label: "MXN" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
  ];

  return (
    <Fragment>
      <Row style={{padding: 20}}>
          <Card.Title style={{ marginBottom: 35 }}>
            Nuevo Registro de Vehículo
          </Card.Title>
          <Row style={{ marginBottom: 10 }}>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Modelo</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder=""
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setModel(text.target.value)}
                    value={model}
                  />
                  <Form.Control.Feedback type="invalid">
                    Favor de añadir el modelo
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Marca</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setBrand(text.target.value)}
                  value={brand}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Año</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setYear(text.target.value)}
                  value={year}
                />
              </Form.Group>
            </Row>
            <Row style={{ marginTop: 20 }}>
            <Form.Group
                as={Col}
                md="6"
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
                md="6"
                controlId="validationCustomUsername"
                className="form-group"
              >
                <Form.Label>Valor de compra</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend-1">$</InputGroup.Text>
                  <Form.Control
                    type="numeric"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setPrice(text.target.value)}
                    value={price}
                  />
                  <InputGroup.Text id="inputGroupPrepend-2">
                    {currency.value}
                  </InputGroup.Text>
                  <Form.Control.Feedback type="invalid">
                    Favor de añadir el monto del pago
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 40 }}>
              <Form.Group
                as={Col}
                md="6"
                controlId="validationCustomUsername"
                className="form-group"
              >
                <Form.Label>Color</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setColor(text.target.value)}
                    value={color}
                  />
                  <Form.Control.Feedback type="invalid">
                    Favor de añadir el color
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group
                as={Col}
                md="6"
                controlId="validationCustomUsername"
                className="form-group"
              >
                <Form.Label>Número de Placas</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setPlatesNumber(text.target.value)}
                    value={platesNumber}
                  />
                  <Form.Control.Feedback type="invalid">
                    Favor de añadir el número de placas
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>


            <Row style={{ marginTop: 20 }}>
              <Form.Group as={Col} md="6" className="form-group">
                <Form.Label className="form-label my-3">
                  Factura
                </Form.Label>
                  <FileUpload />
              </Form.Group>

              <Form.Group as={Col} md="6" className="form-group">
                <Form.Label className="form-label my-3">
                  Tarjeta de circulación
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
      </Row>
    </Fragment>
  );
}