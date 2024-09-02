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
import { creditos } from "../paymentsData";
import { useParams } from "react-router-dom";
import { formateDateForUI } from "../paymentUtils";

export default function DebtNewPayment(props) {
  const params = useParams();
  const debt = creditos.find((seguro) => seguro.id === Number(params.id));

  const [year, setYear] = useState({
    value:'',
    label:'',
  });
  const [amount, setAmount] = useState('');
  const [deductFromTotal, setDeductFromTotal] = useState(false);

  const [fechaLimitePago, setFechaLimitePago] = useState<Dayjs | null>(
    dayjs('')
  );
  const [proxPago, setProxPago] = useState<Dayjs | null>(
    dayjs('')
  );

  const [hasBeenPayed, setHasBeenPayed] = useState(false);

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
            Nuevo pago - Credito {debt.concepto}
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
                
                <div style={{marginTop: 13}}>
                  <Form.Check
                    required
                    checked={deductFromTotal}
                    onChange={(e) => setDeductFromTotal(e.target.checked)}
                    label="Descontar monto de la deuda por pagar"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </div>
                <p style={{fontSize: 11, color: 'gray'}}>Puedes descontar este monto del total o editarlo manualmente desde la descripción del credito. (Se descontara una vez que se marque como pagado).</p>
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
                          onChange={(value) => setProxPago(value)}
                          value={dayjs(proxPago)}
                          defaultValue={dayjs(proxPago)}
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
                    <Form.Control
                        type="file"
                        className="border-right-0 browse-file"
                        placeholder="Comprobante de pago"
                        readOnly
                    />
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
                Crear pago
              </Button>
            </div>
          </Form>
        </Card>
      </Row>
    </Fragment>
  );
}
