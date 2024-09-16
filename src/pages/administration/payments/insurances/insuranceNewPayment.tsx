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
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import { Link } from "react-router-dom";
import { seguros } from "../paymentsData";
import { useParams } from "react-router-dom";
import FileUpload from "../../accounting/components/fileUpload";

export default function InsurancesNewPayment(props) {
  const params = useParams();
  const insurance = seguros.find((seguro) => seguro.id === Number(params.id));

  const [year, setYear] = useState({
    value: "",
    label: "",
  });
  const [amount, setAmount] = useState("");
  const [vigenciaDel, setVigenciaDel] = useState<Dayjs | null>(dayjs(""));
  const [vigenciaAl, setVigenciaAl] = useState<Dayjs | null>(dayjs(""));
  const [fechaLimitePago, setFechaLimitePago] = useState<Dayjs | null>(
    dayjs("")
  );
  const [proxPago, setProxPago] = useState<Dayjs | null>(dayjs(""));

  const [fechaPago, setFechaPago] = useState<Dayjs | null>(dayjs(""));

  const Options = [
    { value: "2023", label: "2023" },
    { value: "2024", label: "2024" },
    { value: "2025", label: "2025" },
  ];

  const OptionsMonths = [
    { value: "Enero", label: "Enero" },
    { value: "Febrero", label: "Febrero" },
    { value: "Marzo", label: "Marzo" },
    { value: "Abril", label: "Abril" },
    { value: "Mayo", label: "Mayo" },
    { value: "Junio", label: "Junio" },
    { value: "Julio", label: "Julio" },
    { value: "Agosto", label: "Agosto" },
    { value: "Septiembre", label: "Septiembre" },
    { value: "Octubre", label: "Octubre" },
    { value: "Noviembre", label: "Noviembre" },
    { value: "Diciembre", label: "Diciembre" },
  ];

  return (
    <Fragment>
      <Row>
        <Card style={{ padding: 30, marginTop: 20 }}>
          <Card.Title style={{ marginBottom: 50 }}>
            Nuevo pago - Seguro {insurance.tipo} {insurance.nombre}
          </Card.Title>
          <Form noValidate validated={false} onSubmit={() => {}}>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                md="3"
                controlId="validationCustom04"
                className="form-group"
              >
                <Form.Label>Año</Form.Label>
                <Select
                  options={Options}
                  classNamePrefix="Select2"
                  className="multi-select"
                  onChange={(value) => setYear(value)}
                  placeholder="Año"
                  value={year}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>
              {insurance.frecuenciaDePago === "Mensual" && (
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="validationCustom04"
                  className="form-group"
                >
                  <Form.Label>Mes</Form.Label>
                  <Select
                    options={OptionsMonths}
                    classNamePrefix="Select2"
                    className="multi-select"
                    placeholder="Mes"
                  />

                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
              )}

              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustomUsername"
                className="form-group"
              >
                <Form.Label>Monto del pago</Form.Label>
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
                    {insurance.moneda}
                  </InputGroup.Text>
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
                <Form.Label>Vigencia del</Form.Label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      format="DD/MM/YYYY"
                      onChange={(value) => setVigenciaDel(value)}
                      value={dayjs(vigenciaDel)}
                      defaultValue={dayjs(vigenciaDel)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Vigencia al</Form.Label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      format="DD/MM/YYYY"
                      onChange={(value) => setVigenciaAl(value)}
                      value={dayjs(vigenciaAl)}
                      defaultValue={dayjs(vigenciaAl)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Form.Group>

              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Fecha de realización de pago</Form.Label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      format="DD/MM/YYYY"
                      onChange={(value) => setFechaPago(value)}
                      value={dayjs(fechaPago)}
                      defaultValue={dayjs(fechaPago)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Form.Group>
            </Row>

            {/* <Row style={{ marginTop: 20 }}>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Agendar proximo pago</Form.Label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      format="DD/MM/YYYY"
                      onChange={(value) => setProxPago(value)}
                      value={dayjs(proxPago)}
                      defaultValue={dayjs(proxPago)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Form.Group>
            </Row> */}

            <Row style={{ marginTop: 20 }}>
              <Form.Group as={Col} md="4" className="form-group">
                <Form.Label
                  className="form-label my-3"
                  style={{ fontSize: 13, color: "gray" }}
                >
                  Comprobante de pago
                </Form.Label>
                <FileUpload />
              </Form.Group>
              <Form.Group as={Col} md="4" className="form-group">
                <Form.Label
                  className="form-label my-3"
                  style={{ fontSize: 13, color: "gray" }}
                >
                  Factura o recibo
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
                Crear pago
              </Button>
            </div>
          </Form>
        </Card>
      </Row>
    </Fragment>
  );
}
