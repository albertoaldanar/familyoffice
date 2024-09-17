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
import { arrendamientos } from "../collectingData";
import { useParams } from "react-router-dom";
import { formateDateForUI } from "../../payments/paymentUtils";
import FileView from "../../accounting/components/fileView";
import FileUpload from "../../accounting/components/fileUpload";

export default function RentPayment(props) {
  const params = useParams();
  const leasingAndRent = arrendamientos.find(
    (seguro) => seguro.id === Number(params.id)
  );
  const rentPayment = leasingAndRent.pagos.find(
    (pymnt) => pymnt.id === Number(params.paymentId)
  );

  const fechaLimitePagoFormatted = formateDateForUI(rentPayment.limitePago);
  const proxPagoFormatted = formateDateForUI(rentPayment.proximoPago);
  const fechaPagoFormatted = formateDateForUI(rentPayment.fechaDePago);

  const [year, setYear] = useState({
    value: rentPayment.anio,
    label: rentPayment.anio,
  });

  const [month, setMonth] = useState({
    value: rentPayment.mes,
    label: rentPayment.mes,
  });

  const [amount, setAmount] = useState(rentPayment.monto);

  const [proxPago, setProxPago] = useState<Dayjs | null>(
    dayjs(proxPagoFormatted)
  );

  const [fechaPago, setFechaPago] = useState<Dayjs | null>(
    dayjs(fechaPagoFormatted)
  );

  const [isComprobanteEditable, setIsComprobanteEditable] = useState(false);

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
        <Card style={{ padding: 30, marginTop: 20, minHeight: 500 }}>
          <Card.Title style={{ marginBottom: 30 }}>
            Registro de pago - Renta {leasingAndRent.tipo}{" "}
            {leasingAndRent.concepto}
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
              {leasingAndRent.frecuenciaDePago === "Mensual" && (
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
                    {leasingAndRent.moneda}
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
                  {rentPayment.comprobantePago ? (
                    <>
                      <FileView
                        title="CIF"
                        fileName={rentPayment.comprobantePago}
                      />
                    </>
                  ) : (
                    <FileUpload />
                  )}
                </Form.Group>
                <Form.Group as={Col} md="4" className="form-group">
                  <Form.Label
                    className="form-label my-3"
                    style={{ fontSize: 13, color: "gray" }}
                  >
                    Factura o recibo
                  </Form.Label>
                  {rentPayment.invoice ? (
                    <>
                      <FileView
                        title="CIF"
                        fileName={rentPayment.comprobantePago}
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
              }}
            >
              <div></div>
              <Button
                style={{ position: "absolute", right: 25, bottom: 20 }}
                variant="primary"
                className=" mb-1"
                type="submit"
              >
                Guardar
              </Button>
            </div>
          </Form>
        </Card>
      </Row>
    </Fragment>
  );
}
