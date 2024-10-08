import React, { Fragment, useState } from "react";
import {
  Button,
  Card,
  Col,
  Table,
  Row,
  InputGroup,
  Tab,
  Nav,
  Form,
} from "react-bootstrap";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Link, useNavigate } from "react-router-dom";
import { prestamos } from "../collectingData";
import FileView from "../../accounting/components/fileView";
import FileUpload from "../../accounting/components/fileUpload";
import { useParams } from "react-router-dom";
import { calculateDaysOrMonthsLeft } from "../../payments/paymentUtils";
import { formateDateForUI } from "../../payments/paymentUtils";
import Select from "react-select";
import { formatFamilyMembers } from "../../payments/paymentUtils";
import { formatCompany } from "../../accounting/companyUtils";
import { formatToDateString } from "../../payments/paymentUtils";
import { family } from "../../../governance/familyStructure/familyStructureData";
import { companies } from "../../accounting/accountingData";
import { countryOptions } from "../../accounting/companyUtils";

export default function LoansDescription(props) {
  //@ts-ignore
  const baseURL = import.meta.env.BASE_URL;
  const navigate = useNavigate();
  const params = useParams();
  const debt = prestamos.find((prestamo) => prestamo.id === Number(params.id));
  const contractDateStart = formateDateForUI(debt.fechaDeContratacion);
  const contractDateEnd = formateDateForUI(debt.fechaVencimiento);
  const familyOptions = formatFamilyMembers(family.members);
  const companiesList = formatCompany(companies);
  const [debtorNotLinkedName, setDebtorNotLinkedName] = useState(debt.debtor.linkedItemId ? '': debt.debtor.name);
  const [debtorNotLinkedPhone, setDebtorNotLinkedPhone] = useState(debt.debtor.linkedItemId ? '': debt.debtor.phone );
  const [debtorNotLinkedEmail, setDebtorNotLinkedEmail] = useState(debt.debtor.linkedItemId ? '': debt.debtor.email );
  const [amount, setAmount] = useState(debt.monto);
  const [totalDebt, setTotalDebt] = useState(debt.pagado);
  const [interestRate, setInterestRate] = useState(debt.interes);
  const [alreadyPayed, setAlreadyPayed] = useState(debt.pagado);
  const [amountToPay, setAmountToPay] = useState(debt.porPagar);
  const [shouldShowNextPaymentDatePicker, setShouldShowNextPaymentDatePicker] =
    useState(debt.proxCobro ? true : false);
  const nextPaymentFormatted = formateDateForUI(debt.proxCobro);
  const [nextPayment, setNextPayment] = useState<Dayjs | null>(
    nextPaymentFormatted ? dayjs(nextPaymentFormatted) : dayjs("")
  );
  const [debtorSelected, setDebtorSelected] = useState({
    value: debt.debtor.linkedItemId,
    label: debt.debtor.name,
  });

  const [creditorSelected, setCreditorSelected] = useState({
    value: debt.creditor.linkedItemId,
    label: debt.creditor.name,
  });

  const [creditorType, setCreditorType] = useState({
    value: debt.creditor.type,
    label: debt.creditor.type,
  });

  const [debtorType, setDebtorType] = useState({
    value: debt.debtor.type,
    label: debt.debtor.type,
  });

  const [debtSource, setDebtSource] = useState({
    value: debt.tipo,
    label: debt.tipo,
  });

  const [concept, setConcept] = useState(debt.concepto);
  const [paymentFrequency, setPaymentFrequency] = useState({
    value: debt.frecuenciaDePago,
    label: debt.frecuenciaDePago,
  });

  const [startDay, setStartDay] = useState<Dayjs | null>(
    contractDateStart ? dayjs(contractDateStart) : dayjs("")
  );

  const [endDay, setEndDay] = useState<Dayjs | null>(
    contractDateEnd ? dayjs(contractDateEnd) : dayjs("")
  );

  const [country, setCountry] = useState({
    value: debt.country,
    label: debt.country,
  });

  const [currency, setCurrency] = useState({
    value: debt.moneda,
    label: debt.moneda,
  });

  const OptionsPaymentFrequency = [
    { value: "Mensual", label: "Mensual" },
    { value: "Anual", label: "Anual" },
    { value: "MensualNR", label: "Mensual no recurrente" },
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


  const updateCreditor = (value) => {
    //@ts-ignore
    setCreditorSelected({label: '', value: ''});
    setCreditorType(value)
  }

  const updateDebtor = (value) => {
    //@ts-ignore
    setDebtorSelected({label: '', value: ''});
    setDebtorType(value)
  }

  const renderLoanType = () => {
    return (
      <Row style={{marginTop: -10}}>
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
    );
  }

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


  const handleDebtorCreditorLogic = () => {
    if (debtSource.value === "Prestamo intrafamiliar") {
      return (
        <Row>
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
        <Row className="mb-3" style={{ marginTop: 10 }}>
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

  const renderDebtorAndCreditor = () => {
    return (
      <>
        {renderLoanType()}
        {handleDebtorCreditorLogic()}
        {handleDebtorAndCreditor()}
        {renderNotLinkedCreditorInputs()}
      </>
    );
  }


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
              label={`Agendar una fecha de proximo cobro`}
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
              <Form.Label>Fecha de proximo cobro</Form.Label>
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
              <Form.Label>Días para proximo Cobro:</Form.Label>
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
            Es muy importante agendar una fecha de cobro, ya que esta es la que
            notificara en el calendario de obligaciones, si se modifica haz
            click en 'Guardar'
          </p>
        )}
      </>
    );
  };

  const renderDescription = () => {
    return (
      <div>
        <Row>
          <Form.Group
            as={Col}
            md="4"
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
        <Row>{renderDatesComponent()}</Row>
        <Row style={{marginTop: 20}}>
        <Form.Group
            as={Col}
            md="4"
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
            <Form.Label>País</Form.Label>
            <Select
              options={countryOptions}
              classNamePrefix="Select2"
              className="multi-select"
              onChange={(value) => setCountry(value)}
              placeholder=""
              value={country}
            />
            <Form.Control.Feedback type="invalid">
              Favor de añadir el modelo
            </Form.Control.Feedback>
          </Form.Group>
          <Row style={{ marginTop: 20 }}>
            <Form.Group
              as={Col}
              md="10"
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

  const renderContract = () => {
    return (
      <Row>
        <Form.Group as={Col} md="3" className="form-group">
          <Form.Label className="form-label my-3">
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
          style={{ marginTop: 14 }}
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
          style={{ marginTop: 14 }}
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

  const renderDebtPayments = () => {
    return (
      <div className="table-responsive" style={{ marginTop: 15 }}>
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
            size="sm"
            className="custom-button"
          >
            <Link
              style={{ color: "white" }}
              to={`${baseURL}administration/loanNewPayment/${debt.id}`}
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
                {debt.frecuenciaDePago !== "Anual" && <td>{idx.mes}</td>}
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
                  {/*// @ts-ignore */}
                  <Link
                    to={`${baseURL}administration/loanCollecting/${debt.id}/payment/${
                      idx.id
                    }`}
                  >
                      <i
                        className="fe fe-arrow-right text-black fs-15"
                      ></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  };

  return (
    <Fragment>
      <Row>
        <div style={{ padding: 30, minHeight: 550 }}>
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
            Prestamo {debt.tipo} por cobrar: {debt.concepto}
          </h4>

          <Tab.Container id="left-tabs-example" defaultActiveKey="numbers">
            <div
              style={{
                paddingBottom: 0,
                paddingLeft: 10,
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              <div className="tabs-menu1">
                <Nav as="ul" className="nav panel-tabs">
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="numbers">
                      <i
                        style={{ marginRight: 9 }}
                        className="fe fe-trending-up text-black fs-13"
                      ></i>
                      Información de prestamo
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="info">
                      <i
                        style={{ marginRight: 9 }}
                        className="fe fe-users text-black fs-13"
                      ></i>
                      Acreedor y deudor
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
                      Registro de cobranza
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>

            <Tab.Content className="panel-body">
              <Tab.Pane eventKey="numbers">{renderDescription()}</Tab.Pane>
              <Tab.Pane eventKey="info">{renderDebtorAndCreditor()}</Tab.Pane>
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
              style={{ position: "absolute", right: 25, bottom: 80 }}
              className="custom-button"
              type="submit"
            >
              Guardar
            </Button>
          </div>
        </div>
      </Row>
    </Fragment>
  );
}
