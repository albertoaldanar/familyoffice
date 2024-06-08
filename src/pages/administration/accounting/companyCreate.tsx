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
import FileUpload from "./components/fileUpload";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function CompanyCreate(props) {
  const [companyName, setCompanyName] = useState("");
  const [rfc, setRFC] = useState("");
  const [razonSocial, setRazonSocial] = useState("");
  const [percentage, setPercentage] = useState("");
  const [todayValue, setTodayValue] = useState("");
  const [address, setAddress] = useState("");
  const [foundationDate, setfoundationDate] = useState<Dayjs | null>(dayjs(""));

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

      <Row>
        <Card style={{ padding: 30, marginTop: 50 }}>
          <Card.Title style={{ marginBottom: 35 }}>
            Nuevo Registro de Empresa
          </Card.Title>
          <Form noValidate validated={false} onSubmit={() => {}}>
            <Row style={{ marginBottom: 10 }}>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Nombre comercial</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="numeric"
                    placeholder=""
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setCompanyName(text.target.value)}
                    value={companyName}
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
                <Form.Label>RFC</Form.Label>
                <Form.Control
                  type="numeric"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setRFC(text.target.value)}
                  value={rfc}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Razon social</Form.Label>
                <Form.Control
                  type="numeric"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setRazonSocial(text.target.value)}
                  value={razonSocial}
                />
              </Form.Group>
            </Row>

            {/* <Row style={{ marginTop: 20 }}>

            </Row> */}
            <Row style={{ marginTop: 20 }}>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Moneda de operación</Form.Label>
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
                <Form.Label>Valuación actual</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                  <Form.Control
                    type="numeric"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setTodayValue(text.target.value)}
                    value={todayValue}
                  />
                  <InputGroup.Text id="inputGroupPrepend">
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
                controlId="validationCustomUsername"
                className="form-group"
              >
                <Form.Label>Porcentaje de propiedad</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="numeric"
                    aria-describedby="inputGroupPrepend"
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
                md="8"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Dirección Fiscal</Form.Label>
                <Form.Control
                  type="numeric"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setAddress(text.target.value)}
                  value={address}
                />
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Fecha de fundación</Form.Label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      format="DD/MM/YYYY"
                      onChange={(value) => setfoundationDate(value)}
                      value={dayjs(foundationDate)}
                      defaultValue={dayjs(foundationDate)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group as={Col} md="6" className="form-group">
                <Form.Label className="form-label my-3">
                  Acta constitutiva
                </Form.Label>
                <div>
                  <FileUpload />
                  <p style={{fontSize: 10, textDecoration: 'underline', cursor: 'pointer', marginTop: -15, color: "#A0A0A0",}}>Descargar formato guia</p>
                </div>
              </Form.Group>

              <Form.Group as={Col} md="6" className="form-group">
                <Form.Label className="form-label my-3">
                  Acta de asamblea ordinaria
                </Form.Label>
                <div>
                  <FileUpload />
                  <p style={{fontSize: 10, textDecoration: 'underline', cursor: 'pointer', marginTop: -15, color: "#A0A0A0",}}>Descargar formato guia</p>
                </div>
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group as={Col} md="6" className="form-group">
                <Form.Label className="form-label my-3">
                Acta de asamblea extraordinaria
                </Form.Label>
                <div>
                  <FileUpload />
                  <p style={{fontSize: 10, textDecoration: 'underline', cursor: 'pointer', marginTop: -15, color: "#A0A0A0",}}>Descargar formato guia</p>
                </div>
              </Form.Group>

              <Form.Group as={Col} md="6" className="form-group">
                <Form.Label className="form-label my-3">
                  Poderes
                </Form.Label>
                <div>
                  <FileUpload />
                  <p style={{fontSize: 10, textDecoration: 'underline', cursor: 'pointer', marginTop: -15, color: "#A0A0A0",}}>Descargar formato guia</p>
                </div>
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group as={Col} md="6" className="form-group">
                <Form.Label className="form-label my-3">
                  Actas de dividendos
                </Form.Label>
                <div>
                  <FileUpload />
                  <p style={{fontSize: 10, textDecoration: 'underline', cursor: 'pointer', marginTop: -15, color: "#A0A0A0",}}>Descargar formato guia</p>
                </div>
              </Form.Group>

              <Form.Group as={Col} md="6" className="form-group">
                <Form.Label className="form-label my-3">
                CIF (Constancia de Identificación Fiscal)
                </Form.Label>
                <div>
                  <FileUpload />
                  <p style={{fontSize: 10, textDecoration: 'underline', cursor: 'pointer', marginTop: -15, color: "#A0A0A0",}}>Descargar formato guia</p>
                </div>
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
