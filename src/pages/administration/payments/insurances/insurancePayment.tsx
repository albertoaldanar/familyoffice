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
import { formateDateForUI } from "../paymentUtils";

export default function InsurancesPayment(props) {
  const params = useParams();
  const insurance = seguros.find((seguro) => seguro.id === Number(params.id));
  const payment = insurance.pagos.find(
    (pymnt) => pymnt.id === Number(params.paymentId)
  );
  const isItPayed =
    payment.fechaDePago.length > 0 && payment.comprobantePago.length > 0;

  const vigenciaDelFormatted = formateDateForUI(payment.vigenciaDel);
  const vigenciaAlFormatted = formateDateForUI(payment.vigenciaAl);
  const fechaLimitePagoFormatted = formateDateForUI(payment.limitePago);
  const proxPagoFormatted = formateDateForUI(payment.proximoPago);
  const fechaPagoFormatted = formateDateForUI(payment.fechaDePago);

  const [year, setYear] = useState({
    value: payment.anio,
    label: payment.anio,
  });
  const [amount, setAmount] = useState(payment.monto);
  const [vigenciaDel, setVigenciaDel] = useState<Dayjs | null>(
    dayjs(vigenciaDelFormatted)
  );
  const [vigenciaAl, setVigenciaAl] = useState<Dayjs | null>(
    dayjs(vigenciaAlFormatted)
  );
  const [fechaLimitePago, setFechaLimitePago] = useState<Dayjs | null>(
    dayjs(fechaLimitePagoFormatted)
  );
  const [proxPago, setProxPago] = useState<Dayjs | null>(
    dayjs(proxPagoFormatted)
  );

  const [fechaPago, setFechaPago] = useState<Dayjs | null>(
    dayjs(fechaPagoFormatted)
  );
  const [isComprobanteEditable, setIsComprobanteEditable] = useState(false);

  const [hasBeenPayed, setHasBeenPayed] = useState(isItPayed);

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

  const renderComprobante = () => {
    if (payment.comprobantePago) {
      if (isComprobanteEditable) {
        return (
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <div></div>
              <i
                onClick={() => setIsComprobanteEditable(false)}
                style={{ fontSize: 18, cursor: "pointer" }}
                className="fa fa-times"
                data-bs-toggle="tooltip"
                title="fa fa-times"
              ></i>
            </div>
            <Form.Control
              type="file"
              className="border-right-0 browse-file"
              placeholder="Comprobante de pago"
              readOnly
            />
          </div>
        );
      } else {
        return (
          <div
            style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}
          >
            <div
              style={{
                textDecoration: "underline",
                cursor: "pointer",
                color: "#5488d2",
                marginRight: 15,
              }}
            >
              {payment.comprobantePago}
            </div>
            <div style={{ marginTop: 2 }}>
              <i
                onClick={() => setIsComprobanteEditable(true)}
                style={{
                  cursor: "pointer",
                  marginRight: 15,
                  fontSize: 18,
                }}
                className="fa fa-edit"
                data-bs-toggle="tooltip"
                title="fa fa-edit"
              ></i>
            </div>
          </div>
        );
      }
    }

    return (
      <Form.Control
        type="file"
        className="border-right-0 browse-file"
        placeholder="Comprobante de pago"
      />
    );
  };

  return (
    <Fragment>
      <Row>
        <Card style={{ padding: 30, marginTop: 50 }}>
          <Card.Title style={{ marginBottom: 50 }}>
            Registro de pago - Seguro {insurance.tipo} {insurance.nombre}
          </Card.Title>
          <Form noValidate validated={false} onSubmit={() => { }}>
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
            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Fecha limite de pago</Form.Label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      format="DD/MM/YYYY"
                      onChange={(value) => setFechaLimitePago(value)}
                      value={dayjs(fechaLimitePago)}
                      defaultValue={dayjs(fechaLimitePago)}
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
            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group className="mb-3 form-group">
                <Form.Check
                  required
                  checked={hasBeenPayed}
                  onChange={(e) => setHasBeenPayed(e.target.checked)}
                  label="Ya se pago"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
            </Row>
            {hasBeenPayed && (
              <>
                <Row style={{ marginTop: 10 }}>
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

                <Row>
                  <Form.Group as={Col} md="6" className="form-group">
                    <Form.Label className="form-label my-3">
                      Comprobante de pago
                    </Form.Label>
                    {renderComprobante()}
                  </Form.Group>
                  <Form.Group as={Col} md="6" className="form-group">
                    <Form.Label className="form-label my-3">
                      Recibo o factura
                    </Form.Label>

                    <Form.Control
                      type="file"
                      className="border-right-0 browse-file"
                      placeholder="Cargar recibo o factura"
                      readOnly
                    />
                  </Form.Group>
                </Row>
              </>
            )}

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
                Guardar
              </Button>
            </div>
          </Form>
        </Card>
      </Row>
    </Fragment>
  );
}
