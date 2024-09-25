import React, { Fragment, useState } from "react";
import {
  Button,
  Card,
  Col,
  Table,
  Row,
  Form,
  ProgressBar,
  InputGroup,
  Tab,
  Nav,
} from "react-bootstrap";
import Select from "react-select";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Link, useNavigate } from "react-router-dom";
import {
  calculateDaysOrMonthsLeft,
  formatToDateString,
} from "../paymentUtils";
import { creditos } from "../paymentsData";
import { useParams } from "react-router-dom";
import FileView from "../../accounting/components/fileView";
import FileUpload from "../../accounting/components/fileUpload";
import { formateDateForUI } from "../paymentUtils";
import { realstateData } from "../../../investments/realState/realStateData";
import { otherWealthData } from "../../../governance/wealthStructure/wealthStructureData";
import { formatRealstateData, formatVehicleData } from "../paymentUtils";
import { formatFamilyMembers } from "../paymentUtils";
import { companies } from "../../accounting/accountingData";
import { family } from "../../../governance/familyStructure/familyStructureData";
import { formatCompany } from "../../accounting/companyUtils";

export default function DebtDescription(props) {
  //@ts-ignore
  const baseURL = import.meta.env.BASE_URL;
  const navigate = useNavigate();
  const params = useParams();
  const debt = creditos.find((credito) => credito.id === Number(params.id));
  const familyOptions = formatFamilyMembers(family.members);
  const companiesList = formatCompany(companies);
  const OptionsVehicles = formatVehicleData(otherWealthData.vehicles);
  const OptionsProperties = formatRealstateData(realstateData);
  const [amount, setAmount] = useState(debt.monto);
  const [totalDebt, setTotalDebt] = useState(debt.pagado);
  const [interestRate, setInterestRate] = useState(debt.interes);
  const [alreadyPayed, setAlreadyPayed] = useState(debt.pagado);
  const [amountToPay, setAmountToPay] = useState(debt.porPagar);
  const [shouldShowNextPaymentDatePicker, setShouldShowNextPaymentDatePicker] =
    useState(debt.proxPago ? true : false);
  const nextPaymentFormatted = formateDateForUI(debt.proxPago);
  const contractDateStart = formateDateForUI(debt.fechaDeContratacion);
  const contractDateEnd = formateDateForUI(debt.fechaVencimiento);

  const [nextPayment, setNextPayment] = useState<Dayjs | null>(
    nextPaymentFormatted ? dayjs(nextPaymentFormatted) : dayjs("")
  );

  const [startDay, setStartDay] = useState<Dayjs | null>(
    contractDateStart ? dayjs(contractDateStart) : dayjs("")
  );

  const [endDay, setEndDay] = useState<Dayjs | null>(
    contractDateEnd ? dayjs(contractDateEnd) : dayjs("")
  );
  const [debtSource, setDebtSource] = useState({
    value: debt.tipo,
    label: debt.tipo,
  });

  const [payTo, setPayTo] = useState(debt.acreedor);
  const [concept, setConcept] = useState(debt.concepto);
  const [paymentFrequency, setPaymentFrequency] = useState({
    value: debt.frecuenciaDePago,
    label: debt.frecuenciaDePago,
  });

  const [currency, setCurrency] = useState({
    value: debt.moneda,
    label: debt.moneda,
  });

  const [companySelected, setCompanySelected] = useState({
    label: debt.tipoCredito === 'Empresarial' ? debt.concepto : '',
    value: debt.tipoCredito === 'Empresarial'? debt.concepto : "",
  });

  const [selectedProperty, setSelectedProperty] = useState({
    label: debt.tipoCredito === 'Hipotecario' ? debt.concepto : '',
    value: debt.tipoCredito === 'Hipotecario'? debt.concepto : "",
  });

  const [selectedVehicle, setSelectedVehicle] = useState({
    label: debt.tipoCredito === 'Vehicular' ? debt.concepto : '',
    value: debt.tipoCredito === 'Vehicular'? debt.concepto : "",
  });

  const [selectedMember, setSelectedMember] = useState({
    label: debt.tipoCredito === 'Personal' ? debt.concepto : '',
    value: debt.tipoCredito === 'Personal'? debt.concepto : "",
  });

  const OptionsDebtSource = [
    {
      value: "Credito de entidad financiera",
      label: "Credito de entidad financiera",
    },
    { value: "Prestamo de tercero", label: "Prestamo de tercero" },
  ];

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

  function addEllipsis(str: string): string {
    if (str.length > 20) {
      return str.substring(0, 20) + "...";
    } else {
      return str;
    }
  }

  const renderDebtPayments = () => {
    return (
      <div className="table-responsive">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            marginBottom: 20,
          }}
        >
          <dt style={{ fontWeight: "500" }}>Registro de pagos</dt>
          <Button
            style={{
              marginRight: 10,
            }}
            variant="primary"
            size="sm"
            className=" mb-1"
          >
            <Link
              style={{ color: "white" }}
              to={`${baseURL}administration/debtNewPayment/${debt.id}`}
            >
              + Añadir pago
            </Link>
          </Button>
        </div>
        <Table className="table border text-nowrap text-md-nowrap  mb-0">
          <thead className="bg-light">
            <tr>
              <th>Año</th>
              {debt.frecuenciaDePago !== "Anual" && <th>Mes</th>}
              <th>Monto</th>
              <th>Comprobante pago</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {debt.pagos.map((idx, tb8) => (
              <tr key={tb8}>
                <td>{idx.anio}</td>
                <td>{idx.limitePago}</td>
                <td>
                  ${idx.monto} {debt.moneda}
                </td>
                <td
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  {addEllipsis(idx.comprobantePago)}
                </td>
                <td
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "#5488d2",
                  }}
                >
                  <Link
                    to={`${baseURL}administration/debtPayment/${debt.id}/payment/${idx.id}`}
                  >
                    Ver
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  };

  const renderContract = () => {
    return (
      <Row>
        <Form.Group as={Col} md="3" className="form-group">
          <Form.Label
            className="form-label my-3"
          >
            Contrato de prestamo
          </Form.Label>
          {debt.contrato ? (
            <>
              <FileView title="CIF" fileName={debt.contrato} />
            </>
          ) : (
            <FileUpload />
          )}
        </Form.Group>

        <Form.Group
          as={Col}
          md="4"
          style={{marginTop: 14}}
          controlId="validationCustom01"
          className="form-group"
        >
          <Form.Label>Fecha de contratación</Form.Label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                format="DD/MM/YYYY"
                onChange={(value) => setStartDay(value)}
                value={dayjs(startDay)}
                defaultValue={dayjs(startDay)}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Form.Group>

        <Form.Group
          as={Col}
          md="4"
           style={{marginTop: 14}}
          controlId="validationCustom01"
          className="form-group"
        >
          <Form.Label>Fecha de vencimiento</Form.Label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                format="DD/MM/YYYY"
                onChange={(value) => setEndDay(value)}
                value={dayjs(endDay)}
                defaultValue={dayjs(endDay)}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Form.Group>
      </Row>
    );
  };

  const renderDatesComponent = () => {
    return (
      <>
        <Row style={{ marginTop: 20 }}>
          <Form.Group className="mb-3 form-group">
            <Form.Check
              required
              checked={shouldShowNextPaymentDatePicker}
              style={{ fontSize: 13, color: "gray" }}
              onChange={(e) =>
                setShouldShowNextPaymentDatePicker(e.target.checked)
              }
              label={`Agendar una fecha de proximo pago`}
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
        </Row>

        {shouldShowNextPaymentDatePicker ? (
          <Row>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationCustom01"
              className="form-group"
            >
              <Form.Label>Fecha de proximo pago</Form.Label>
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
            <Form.Group
              as={Col}
              md="4"
              controlId="validationCustom01"
              className="form-group"
            >
              <Form.Label>Días para proximo pago:</Form.Label>
              <p>
                {calculateDaysOrMonthsLeft(formatToDateString(nextPayment))}
              </p>
            </Form.Group>
          </Row>
        ) : (
          <p
            style={{
              color: "gray",
              marginTop: -5,
              fontSize: 12,
              marginLeft: 20,
            }}
          >
            Es muy importante agendar una fecha de pago ya que esta es la que
            notificara en el calendario de obligaciones, si se modifica haz
            click en 'Guardar'
          </p>
        )}
      </>
    );
  };

  const handleTypeOfDebt = () => {
    if (debt.tipoCredito === "Hipotecario") {
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
    } else if (debt.tipoCredito === "Vehicular") {
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
    } else if (debt.tipoCredito === "Personal") {
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
    } else if (debt.tipoCredito === "Empresarial") {
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

  const renderDescription = () => {
    return (
      <div>
        <Row>
          {handleTypeOfDebt()}
        </Row>
        <Row>
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

        <Row style={{ marginTop: 20 }}>
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
        <Row>{renderDatesComponent()}</Row>
        <Row style={{ marginTop: 20 }}>
          <Form.Group
            as={Col}
            md="4"
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
            <Form.Control.Feedback type="invalid">
              Favor de añadir el modelo
            </Form.Control.Feedback>
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
          <Form.Group
            as={Col}
            md="3"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Frequencia de pago</Form.Label>
            <Select
              options={OptionsPaymentFrequency}
              classNamePrefix="Select2"
              className="multi-select"
              onChange={(value) => setPaymentFrequency(value)}
              placeholder=""
              value={paymentFrequency}
            />
            <Form.Control.Feedback type="invalid">
              Favor de añadir el modelo
            </Form.Control.Feedback>
          </Form.Group>
          <Row style={{ marginTop: 20 }}>
            <Form.Group
              as={Col}
              md="5"
              controlId="validationCustom01"
              className="form-group"
            >
              <Form.Label>Nombre del acreedor</Form.Label>
              <Form.Control
                type="text"
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
              <Form.Label>Concepto</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                aria-describedby="inputGroupPrepend"
                required
                onChange={(text) => setConcept(text.target.value)}
                value={concept}
              />
            </Form.Group>
          </Row>
        </Row>
      </div>
    );
  };

  return (
    <Fragment>
      <Row>
        <Card style={{ padding: 30, marginTop: 20, minHeight: 550 }}>
          <h4 className="mb-3 fw-semibold">
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
            Credito {debt.tipoCredito} - {debt.concepto}
          </h4>

          <Tab.Container id="left-tabs-example" defaultActiveKey="info">
            <div
              style={{
                paddingBottom: 0,
                paddingLeft: 10,
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <div className="tabs-menu1">
                <Nav as="ul" className="nav panel-tabs">
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="info">
                      <i
                        style={{ marginRight: 9 }}
                        className="fe fe-trending-up text-black fs-13"
                      ></i>
                      Información de deuda
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="contract">
                      <i
                        style={{ marginRight: 9 }}
                        className="fe fe-file text-black fs-13"
                      ></i>
                      Contrato de prestamo
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="payments">
                      <i
                        style={{ marginRight: 9 }}
                        className="fe fe-calendar text-black fs-13"
                      ></i>
                      Registro de pagos
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>

            <Tab.Content className="panel-body">
              <Tab.Pane eventKey="info">{renderDescription()}</Tab.Pane>
              <Tab.Pane eventKey="contract">{renderContract()}</Tab.Pane>
              <Tab.Pane eventKey="payments">{renderDebtPayments()}</Tab.Pane>
            </Tab.Content>
          </Tab.Container>
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
        </Card>
      </Row>
    </Fragment>
  );
}
