import React, { Fragment, useState } from "react";
import { Button, Card, Col, Row, Form, InputGroup } from "react-bootstrap";
import Select from "react-select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import { Link, useNavigate } from "react-router-dom";
import { countryOptions } from "../../accounting/companyUtils";
import FileUpload from "../../accounting/components/fileUpload";
import { useParams } from "react-router-dom";

export default function LeasingAndRentsCreate(props) {
  const navigate = useNavigate();
  const [leasingType, setleasingType] = useState("");
  const [concept, setConcept] = useState("");
  const [lessorPhone, setLessorPhone] = useState("");
  const [lessorName, setLessorName] = useState("");
  const [nextPayment, setNextPayment] = useState<Dayjs | null>(dayjs(""));
  const [amount, setAmount] = useState("");
  const [vigenciaDel, setVigenciaDel] = useState<Dayjs | null>(dayjs(""));
  const [vigenciaAl, setVigenciaAl] = useState<Dayjs | null>(dayjs(""));
  const [paymentFrequency, setPaymentFrequency] = useState({
    value: "",
    label: "",
  });

  const [country, setCountry] = useState({
    value: "",
    label: "",
  });

  const [currency, setCurrency] = useState({
    value: "",
    label: "",
  });

  const OptionsPaymentFrequency = [
    { value: "Mensual", label: "Mensual" },
    { value: "Anual", label: "Anual" },
    { value: "MensualNR", label: "Mensual no recurrente" },
  ];

  const Optionscurrency = [
    { value: "MXN", label: "MXN" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
  ];

  const OptionsMantainanceType = [
    { value: "Inmobiliario", label: "Renta Inmobiliaria" },
    { value: "Vehicular", label: "Renta vehicular" },
    { value: "Otro", label: "Otro" },
  ];

  return (
    <Fragment>
      <Row>
        <Card style={{ padding: 30, marginTop: 20 }}>
          <Card.Title style={{ marginBottom: 35 }}>
            <Link
              style={{
                color: "#696969",
                fontSize: 16,
                marginBottom: 20,
                marginRight: 15,
              }}
              to={".."}
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              <i
                style={{ marginRight: 9 }}
                className="fe fe-arrow-left text-black fs-13"
              ></i>
            </Link>
            Nuevo Registro de Arrendamiento
          </Card.Title>
          <Form noValidate validated={false} onSubmit={() => {}}>
            <Row style={{ marginBottom: 10 }}>
              <Form.Group
                as={Col}
                md="5"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Tipo de arrendamiento por pagar</Form.Label>
                <Select
                  options={OptionsMantainanceType}
                  classNamePrefix="Select2"
                  className="multi-select"
                  onChange={(value) => setleasingType(value)}
                  placeholder=""
                  value={leasingType}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                md="5"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Concepto</Form.Label>
                <Form.Control
                  type="numeric"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setConcept(text.target.value)}
                  value={concept}
                />
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group
                as={Col}
                md="5"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Nombre de Arrendador</Form.Label>
                <Form.Control
                  type="numeric"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setLessorName(text.target.value)}
                  value={lessorName}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                md="5"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Telefono de Arrendador</Form.Label>
                <Form.Control
                  type="numeric"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setLessorPhone(text.target.value)}
                  value={lessorPhone}
                />
              </Form.Group>
            </Row>
            <Row style={{ marginTop: 20 }}>
              <Form.Group
                as={Col}
                md="5"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>País</Form.Label>
                <Select
                  options={countryOptions}
                  classNamePrefix="Select2"
                  className="multi-select"
                  onChange={(value) => setCountry(value)}
                  placeholder=""
                  value={country}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                md="5"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Frecuencia de pago</Form.Label>
                <Select
                  options={OptionsPaymentFrequency}
                  classNamePrefix="Select2"
                  className="multi-select"
                  onChange={(value) => setPaymentFrequency(value)}
                  placeholder=""
                  value={paymentFrequency}
                />
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group
                as={Col}
                md="5"
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
                md="5"
                controlId="validationCustomUsername"
                className="form-group"
              >
                <Form.Label>Monto</Form.Label>
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
                <p style={{ marginTop: 7, fontSize: 11, color: "gray" }}>
                  Si los pagos no tendran un monto fijo, este campo se puede
                  dejar en blanco y se asignara un monto a cada registro de pago
                </p>
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Plazo del</Form.Label>
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
                <Form.Label>Al</Form.Label>
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
                <Form.Label>Agendar proximo pago</Form.Label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      format="DD/MM/YYYY"
                      onChange={(value) => setNextPayment(value)}
                      value={dayjs(nextPayment)}
                      defaultValue={dayjs(nextPayment)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group as={Col} md="4" className="form-group">
                <Form.Label
                  className="form-label my-3"
                  style={{ fontSize: 13, color: "gray" }}
                >
                  Contrato de arrendamiento
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
              <Button className="custom-button" type="submit">
                Crear
              </Button>
            </div>
          </Form>
        </Card>
      </Row>
    </Fragment>
  );
}
