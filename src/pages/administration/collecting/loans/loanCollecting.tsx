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
import { prestamos } from "../collectingData";
import { useParams } from "react-router-dom";
import FileView from "../../accounting/components/fileView";
import { formateDateForUI } from "../../payments/paymentUtils";
import FileUpload from "../../accounting/components/fileUpload";

export default function LoanCollecting(props) {
  const params = useParams();
  const debt = prestamos.find((seguro) => seguro.id === Number(params.id));
  const debtPayment = debt.pagos.find(
    (pymnt) => pymnt.id === Number(params.paymentId)
  );
  const isItPayed =
    debtPayment.fechaDePago.length > 0 &&
    debtPayment.comprobantePago.length > 0;

  const fechaLimitePagoFormatted = formateDateForUI(debtPayment.limitePago);
  const proxPagoFormatted = formateDateForUI(debtPayment.proximoPago);
  const fechaPagoFormatted = formateDateForUI(debtPayment.fechaDePago);

  const [year, setYear] = useState({
    value: debtPayment.anio,
    label: debtPayment.anio,
  });

  const [month, setMonth] = useState({
    value: debtPayment.mes,
    label: debtPayment.mes,
  });

  const [amount, setAmount] = useState(debtPayment.monto);

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
    if (debtPayment.comprobantePago) {
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
              {debtPayment.comprobantePago}
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
        <Card style={{ padding: 30, marginTop: 20 }}>
          <Card.Title style={{ marginBottom: 50 }}>
            Registro de pago - Prestamo {debt.tipo} {debt.nombre}
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
              {debt.frecuenciaDePago === "Mensual" && (
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
                    onChange={(value) => setMonth(value)}
                    value={month}
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
                    {debt.moneda}
                  </InputGroup.Text>
                  <Form.Control.Feedback type="invalid">
                    Favor de añadir el monto del pago
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>

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
              <Form.Group as={Col} md="4" className="form-group">
                <Form.Label
                  className="form-label my-3"
                  style={{ fontSize: 13, color: "gray" }}
                >
                  Comprobante de pago
                </Form.Label>
                {debtPayment.invoice ? (
                  <>
                    <FileView
                      title="CIF"
                      fileName={debtPayment.comprobantePago}
                    />
                  </>
                ) : (
                  <FileUpload />
                )}
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
                Guardar
              </Button>
            </div>
          </Form>
        </Card>
      </Row>
    </Fragment>
  );
}
