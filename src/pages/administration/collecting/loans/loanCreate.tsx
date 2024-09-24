import React, { Fragment, useState } from "react";
import { Button, Card, Col, Row, Form, InputGroup } from "react-bootstrap";
import Select from "react-select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import { Link } from "react-router-dom";
import { family } from "../../../governance/familyStructure/familyStructureData";
import { formatFamilyMembers } from "../../payments/paymentUtils";
import { formatCompany } from "../../accounting/companyUtils";
import { companies } from "../../accounting/accountingData";
import { countryOptions } from "../../accounting/companyUtils";
import FileUpload from "../../accounting/components/fileUpload";

export default function LoanCreate(props) {
  const familyOptions = formatFamilyMembers(family.members);
  const companiesList = formatCompany(companies);
  const [debtorNotLinkedName, setDebtorNotLinkedName] = useState("");
  const [debtorNotLinkedPhone, setDebtorNotLinkedPhone] = useState("");
  const [debtorNotLinkedEmail, setDebtorNotLinkedEmail] = useState("");
  const [debtSource, setDebtSource] = useState({
    value: "",
    label: "",
  });

  const [debtorSelected, setDebtorSelected] = useState({
    value: "",
    label: "",
  });

  const [creditorSelected, setCreditorSelected] = useState({
    value: "",
    label: "",
  });

  const [concept, setConcept] = useState("");
  const [payTo, setPayTo] = useState("");
  const [amount, setAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [alreadyPayed, setAlreadyPayed] = useState("");
  const [amountToPay, setAmountToPay] = useState("");
  const [vigenciaDel, setVigenciaDel] = useState<Dayjs | null>(dayjs(""));
  const [vigenciaAl, setVigenciaAl] = useState<Dayjs | null>(dayjs(""));

  const [creditorType, setCreditorType] = useState({
    value: "",
    label: "",
  });

  const [debtorType, setDebtorType] = useState({
    value: "",
    label: "",
  });

  const [paymentFrequency, setPaymentFrequency] = useState({
    value: "",
    label: "",
  });

  const [currency, setCurrency] = useState({
    value: "",
    label: "",
  });

  const [country, setCountry] = useState({
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

  const OptionsDebtSource = [
    { value: "Prestamo intrafamiliar", label: "Prestamo intrafamiliar" },
    { value: "Prestamo a tercero", label: "Prestamo a tercero" },
    { value: "Deuda Capital privado", label: "Deuda Capital privado" },
  ];

  const debtorAndCreditorType = [
    { value: "Miembro de la familia", label: "Miembro de la familia" },
    { value: "Empresa Familiar", label: "Empresa Familiar" },
  ];

  const updateCreditor = (value) => {
    setCreditorSelected({label: '', value: ''});
    setCreditorType(value)
  }

  const updateDebtor = (value) => {
    setDebtorSelected({label: '', value: ''});
    setDebtorType(value)
  }

  const handleTypeSelection = () => {
    if (debtSource.value === "Prestamo intrafamiliar") {
      return (
        <Row className="mb-3" style={{ marginTop: 20 }}>
          <Form.Group
            as={Col}
            md="5"
            controlId="validationCustom04"
            className="form-group"
          >
            <Form.Label>Tipo de Acreedor:</Form.Label>
            <Select
              options={debtorAndCreditorType}
              classNamePrefix="Select2"
              className="multi-select"
              onChange={(value) => updateCreditor(value)}
              placeholder="Año"
              value={creditorType}
            />
          </Form.Group>

          <Form.Group
            as={Col}
            md="5"
            controlId="validationCustom04"
            className="form-group"
          >
            <Form.Label>Tipo de Deudor:</Form.Label>
            <Select
              options={debtorAndCreditorType}
              classNamePrefix="Select2"
              className="multi-select"
              onChange={(value) => updateDebtor(value)}
              placeholder="Año"
              value={debtorType}
            />
          </Form.Group>
        </Row>
      );
    } else if (
      debtSource.value === "Prestamo a tercero" ||
      debtSource.value === "Deuda Capital privado"
    ) {
      return (
        <Row className="mb-3" style={{ marginTop: 20 }}>
          <Form.Group
            as={Col}
            md="5"
            controlId="validationCustom04"
            className="form-group"
          >
            <Form.Label>Tipo de Acreedor:</Form.Label>
            <Select
              options={debtorAndCreditorType}
              classNamePrefix="Select2"
              className="multi-select"
              onChange={(value) => setCreditorType(value)}
              placeholder="Año"
              value={creditorType}
            />
          </Form.Group>
        </Row>
      );
    }

    return;
  };

  const handleDebtorAndCreditor = () => {
    const filteredFamilyOptions = familyOptions.filter(
      (option) => option.value !== creditorSelected.value
    );
    const filteredCompaniesList = companiesList.filter(
      (option) => option.value !== creditorSelected.value
    );
  
    return (
      <Row>
        {creditorType.value && (
          creditorType.value === 'Empresa Familiar' ? (
            <Form.Group
              as={Col}
              md="5"
              controlId="validationCustom04"
              className="form-group"
            >
              <Form.Label>Empresa acreedora</Form.Label>
              <Select
                options={companiesList}
                classNamePrefix="Select2"
                className="multi-select"
                onChange={(value) => setCreditorSelected(value)}
                placeholder="Año"
                value={creditorSelected}
              />
            </Form.Group>
          ) : creditorType.value === 'Miembro de la familia' ? (
            <Form.Group
              as={Col}
              md="5"
              controlId="validationCustom04"
              className="form-group"
            >
              <Form.Label>Miembro acreedor</Form.Label>
              <Select
                options={familyOptions}
                classNamePrefix="Select2"
                className="multi-select"
                onChange={(value) => setCreditorSelected(value)}
                placeholder="Año"
                value={creditorSelected}
              />
            </Form.Group>
          ) : null
        )}
  
        {debtorType.value && debtSource.value === "Prestamo intrafamiliar" && (
          debtorType.value === 'Empresa Familiar' ? (
            <Form.Group
              as={Col}
              md="5"
              controlId="validationCustom04"
              className="form-group"
            >
              <Form.Label>Empresa deudora</Form.Label>
              <Select
                options={filteredCompaniesList}
                classNamePrefix="Select2"
                className="multi-select"
                onChange={(value) => setDebtorSelected(value)}
                placeholder="Año"
                value={debtorSelected}
              />
            </Form.Group>
          ) : debtorType.value === 'Miembro de la familia' ? (
            <Form.Group
              as={Col}
              md="5"
              controlId="validationCustom04"
              className="form-group"
            >
              <Form.Label>Miembro deudor</Form.Label>
              <Select
                options={filteredFamilyOptions}
                classNamePrefix="Select2"
                className="multi-select"
                onChange={(value) => setDebtorSelected(value)}
                placeholder="Año"
                value={debtorSelected}
              />
            </Form.Group>
          ) : null
        )}
      </Row>
    );
  };

  const renderNotLinkedCreditorInputs = () => {
    if( debtSource.value && debtSource.value !== "Prestamo intrafamiliar"){
      return (
        <Row style={{marginTop: 20}}>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Nombre de deudor</Form.Label>
            <Form.Control
              type="numeric"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setDebtorNotLinkedName(text.target.value)}
              value={debtorNotLinkedName}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="3"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Teléfono de deudor</Form.Label>
            <Form.Control
              type="numeric"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setDebtorNotLinkedPhone(text.target.value)}
              value={debtorNotLinkedPhone}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="3"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Email de deudor</Form.Label>
            <Form.Control
              type="numeric"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setDebtorNotLinkedEmail(text.target.value)}
              value={debtorNotLinkedEmail}
            />
          </Form.Group>
        </Row>
      );
    }
  };

  return (
    <Fragment>
      <Row>
        <Card style={{ padding: 30, marginTop: 20 }}>
          <Card.Title style={{ marginBottom: 35 }}>
            Nuevo Registro de Prestamo otorgado
          </Card.Title>
          <Form noValidate validated={false} onSubmit={() => {}}>
            <Row style={{ marginBottom: 10 }}>
              <Form.Group
                as={Col}
                md="6"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Tipo de prestamo</Form.Label>
                <Select
                  options={OptionsDebtSource}
                  classNamePrefix="Select2"
                  className="multi-select"
                  onChange={(value) => setDebtSource(value)}
                  placeholder=""
                  value={debtSource}
                />
              </Form.Group>
            </Row>

            {handleTypeSelection()}
            {handleDebtorAndCreditor()}

            {renderNotLinkedCreditorInputs()}

            <Row style={{ marginTop: 20 }}>
              <Form.Group
                as={Col}
                md="10"
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
                md="4"
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
              <Form.Group
                as={Col}
                md="3"
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
            </Row>
            <Row style={{ marginTop: 20 }}>
              <Form.Group
                as={Col}
                md="6"
                controlId="validationCustomUsername"
                className="form-group"
              >
                <Form.Label>Monto prestado</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                  <Form.Control
                    type="numeric"
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

              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustomUsername"
                className="form-group"
              >
                <Form.Label>Tasa de interes</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="numeric"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setInterestRate(text.target.value)}
                    value={interestRate}
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
                controlId="validationCustomUsername"
                className="form-group"
              >
                <Form.Label>Cobrado hasta el dia de hoy</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                  <Form.Control
                    type="numeric"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setAlreadyPayed(text.target.value)}
                    value={alreadyPayed}
                  />
                  <InputGroup.Text id="inputGroupPrepend">
                    {currency.value}
                  </InputGroup.Text>
                  <Form.Control.Feedback type="invalid">
                    Favor de añadir el monto del pago
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group
                as={Col}
                md="6"
                controlId="validationCustomUsername"
                className="form-group"
              >
                <Form.Label>Monto pendiente por cobrar</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                  <Form.Control
                    type="numeric"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setAmountToPay(text.target.value)}
                    value={amountToPay}
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
            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group as={Col} md="4" className="form-group">
                <Form.Label
                  className="form-label my-3"
                  style={{ fontSize: 13, color: "gray" }}
                >
                  Contrato de prestamo
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
          </Form>
        </Card>
      </Row>
    </Fragment>
  );
}
