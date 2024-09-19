import React, { Fragment, useState } from "react";
import { Button, Card, Col, Row, Form, InputGroup } from "react-bootstrap";
import Select from "react-select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { realstateData } from "../../../investments/realState/realStateData";
import { otherWealthData } from "../../../governance/wealthStructure/wealthStructureData";
import { formatRealstateData, formatVehicleData } from "../paymentUtils";
import { formatFamilyMembers } from "../paymentUtils";
import { companies } from "../../accounting/accountingData";
import FileUpload from "../../accounting/components/fileUpload";
import { family } from "../../../governance/familyStructure/familyStructureData";
import { formatCompany } from "../../accounting/companyUtils";

export default function DebtCreate(props) {
  const params = useParams();
  const familyOptions = formatFamilyMembers(family.members);
  const companiesList = formatCompany(companies)

  const typeSelected =
    params.type === "realState"
      ? { value: "Inmobiliario", label: "Prestamo Hipotecario" }
      : params.type === "vehicle"
      ? { value: "Vehicular", label: "Prestamo Vehicular" }
      : { value: "", label: "" };

  const propertySelected =
    params.itemId === null
      ? null
      : realstateData.find((property) => property.id === Number(params.itemId));
  const propertySelectedValue =
    propertySelected && params.type === "realState"
      ? formatRealstateData([propertySelected])
      : { value: "", label: "" };

  const vehicleSelected =
    params.itemId === null
      ? null
      : otherWealthData.vehicles.find(
          (property) => property.id === Number(params.itemId)
        );

  const familyMemberSelected =
    params.itemId === null
      ? null
      : family.members.find(
          (member) => member.id === params.itemId
        );

  const vehicleSelectedValue =
    vehicleSelected && params.type === "vehicle"
      ? formatVehicleData([vehicleSelected])
      : { value: "", label: "" };

  const familySelectedValue =
    familyMemberSelected && params.type === "member"
      ? formatFamilyMembers([familyMemberSelected])
      : { value: "", label: "" };

  const [debtSource, setDebtSource] = useState({
    value: "",
    label: "",
  });

  const [companySelected, setCompanySelected] = useState({
    value: "",
    label: "",
  });

  const [debtType, setDebtType] = useState(typeSelected);
  const [selectedProperty, setSelectedProperty] = useState(
    propertySelectedValue
  );
  const [selectedVehicle, setSelectedVehicle] = useState(vehicleSelectedValue);
  const [selectedMember, setSelectedMember] = useState(familySelectedValue);
  const OptionsVehicles = formatVehicleData(otherWealthData.vehicles);

  const [concept, setConcept] = useState("");
  const [payTo, setPayTo] = useState("");
  const [payToPhone, setPayToPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [totalDebt, setTotalDebt] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [alreadyPayed, setAlreadyPayed] = useState("");
  const [amountToPay, setAmountToPay] = useState("");
  const [vigenciaDel, setVigenciaDel] = useState<Dayjs | null>(dayjs(""));
  const [vigenciaAl, setVigenciaAl] = useState<Dayjs | null>(dayjs(""));
  const [paymentFrequency, setPaymentFrequency] = useState({
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

  const OptionsLoan = [
    { value: "Inmobiliario", label: "Credito Hipotecario" },
    { value: "Vehicular", label: "Credito Vehicular" },
    { value: "Personal", label: "Credito Personal" },
    { value: "Empresarial", label: "Credito Empresarial" },
  ];

  const OptionsProperties = formatRealstateData(realstateData);

  const Optionscurrency = [
    { value: "MXN", label: "MXN" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
  ];

  const OptionsDebtSource = [
    { value: "Entidad financiera", label: "Entidad financiera" },
    { value: "Prestamo de tercero", label: "Prestamo de tercero" },
  ];

  const handleTypeOfDebt = () => {
    if (debtType.value === "Inmobiliario") {
      return (
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="10"
            controlId="validationCustom04"
            className="form-group"
          >
            <Form.Label>Credito de propiedad</Form.Label>
            <Select
              options={OptionsProperties}
              classNamePrefix="Select2"
              className="multi-select"
              onChange={(value) => setSelectedProperty(value)}
              placeholder="Año"
              value={selectedProperty}
            />
          </Form.Group>
        </Row>
      );
    } else if (debtType.value === "Vehicular") {
      return (
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="10"
            controlId="validationCustom04"
            className="form-group"
          >
            <Form.Label>Credito vehicular de:</Form.Label>
            <Select
              options={OptionsVehicles}
              classNamePrefix="Select2"
              className="multi-select"
              onChange={(value) => setSelectedVehicle(value)}
              placeholder="Año"
              value={selectedVehicle}
            />
          </Form.Group>
        </Row>
      );
    } else if (debtType.value === "Personal") {
      return (
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="10"
            controlId="validationCustom04"
            className="form-group"
          >
            <Form.Label>Credito personal de:</Form.Label>
            <Select
              options={familyOptions}
              classNamePrefix="Select2"
              className="multi-select"
              onChange={(value) => setSelectedMember(value)}
              placeholder="Año"
              value={selectedMember}
            />
          </Form.Group>
        </Row>
      );
    }  else if (debtType.value === "Empresarial") {
      return (
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="10"
            controlId="validationCustom04"
            className="form-group"
          >
            <Form.Label>Credito empresarial de:</Form.Label>
            <Select
              options={companiesList}
              classNamePrefix="Select2"
              className="multi-select"
              onChange={(value) => setCompanySelected(value)}
              placeholder="Año"
              value={companySelected}
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
            Nuevo Registro de Deuda
          </Card.Title>
          <Form noValidate validated={false} onSubmit={() => {}}>
            <Row style={{ marginBottom: 10 }}>
              <Form.Group
                as={Col}
                md="6"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Fuente de prestamo</Form.Label>
                <Select
                  options={OptionsDebtSource}
                  classNamePrefix="Select2"
                  className="multi-select"
                  onChange={(value) => setDebtSource(value)}
                  placeholder=""
                  value={debtSource}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Tipo de prestamo</Form.Label>
                <Select
                  options={OptionsLoan}
                  classNamePrefix="Select2"
                  className="multi-select"
                  onChange={(value) => setDebtType(value)}
                  placeholder=""
                  value={debtType}
                />
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20 }}>{handleTypeOfDebt()}</Row>

            <Row>
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
                md="5"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Nombre de acreedor</Form.Label>
                <Form.Control
                  type="numeric"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setPayTo(text.target.value)}
                  value={payTo}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                md="5"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Telefono de acreedor</Form.Label>
                <Form.Control
                  type="numeric"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setPayToPhone(text.target.value)}
                  value={payToPhone}
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
            </Row>
            <Row style={{ marginTop: 30 }}>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustomUsername"
                className="form-group"
              >
                <Form.Label>Monto otorgado</Form.Label>
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
                md="2"
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
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustomUsername"
                className="form-group"
              >
                <Form.Label>Deuda total</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                  <Form.Control
                    type="numeric"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setTotalDebt(text.target.value)}
                    value={totalDebt}
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

            <Row style={{ marginTop: 30 }}>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustomUsername"
                className="form-group"
              >
                <Form.Label>Pagado hasta el dia de hoy</Form.Label>
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
                <Form.Label>Monto pendiente por pagar</Form.Label>
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
