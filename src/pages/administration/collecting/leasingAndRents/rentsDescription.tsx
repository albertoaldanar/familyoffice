import React, { Fragment, useState } from "react";
import {
  Button,
  Card,
  Col,
  Table,
  Row,
  Tab,
  Nav,
  Form,
  InputGroup,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import dayjs, { Dayjs } from "dayjs";
import Select from "react-select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { countryOptions } from "../../accounting/companyUtils";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useParams } from "react-router-dom";
import { arrendamientos } from "../collectingData";
import FileView from "../../accounting/components/fileView";
import FileUpload from "../../accounting/components/fileUpload";
import { formateDateForUI } from "../../payments/paymentUtils";
import { otherWealthData } from "../../../governance/wealthStructure/wealthStructureData";
import { realstateData } from "../../../investments/realState/realStateData";
import { formatVehicleData } from "../../payments/paymentUtils";
import { formatRealstateData } from "../../payments/paymentUtils";
import {
  calculateDaysOrMonthsLeft,
  formatToDateString,
} from "../../payments/paymentUtils";

export default function RentDescription(props) {
  //@ts-ignore
  const baseURL = import.meta.env.BASE_URL;
  const navigate = useNavigate();
  const params = useParams();
  const leasing = arrendamientos.find(
    (arrendamiento) => arrendamiento.id === Number(params.id)
  );
  const nextPaymentFormatted = formateDateForUI(leasing.proxCobro);
  const [nextPayment, setNextPayment] = useState<Dayjs | null>(
    nextPaymentFormatted ? dayjs(nextPaymentFormatted) : dayjs("")
  );

  const vehiclesOptions = formatVehicleData(otherWealthData.vehicles);
  const realStateOptions = formatRealstateData(realstateData);

  const [rentNotLinekd, setRentNotLinked] = useState(
    !leasing.linkedItemId ? leasing.nombre : ""
  );
  const [cost, setCost] = useState(leasing.monto);
  const [lessorName, setLessorName] = useState(leasing.arrendatario);
  const [lessorPhone, setLessorPhone] = useState(leasing.tenantPhone);
  const [shouldShowNextPaymentDatePicker, setShouldShowNextPaymentDatePicker] =
    useState(leasing.proxCobro ? true : false);

  const [isRentLinked, setIsRentLinked] = useState(
    leasing.linkedItemId ? true : false
  );

  const [concept, setConcept] = useState(leasing.concepto);

  const [country, setCountry] = useState({
    value: leasing.country,
    label: leasing.country,
  });

  const [paymentFrequency, setPaymentFrequency] = useState({
    label: leasing.frecuenciaDePago,
    value: leasing.frecuenciaDePago,
  });

  const [currency, setCurrency] = useState({
    value: leasing.moneda,
    label: leasing.moneda,
  });

  const [vehicleOwner, setVechicleOwner] = useState({
    label: leasing.linkedItemId ? leasing.nombre : "",
    value: leasing.linkedItemId ? leasing.linkedItemId : "",
  });

  const [realStateOwner, setRealStateOwner] = useState({
    label: leasing.linkedItemId ? leasing.concepto : "",
    value: leasing.linkedItemId ? leasing.linkedItemId : "",
  });

  const Optionscurrency = [
    { value: "MXN", label: "MXN" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
  ];

  const OptionsPaymentFrequency = [
    { value: "Mensual", label: "Mensual" },
    { value: "Mensual no recurrente", label: "Mensual no recurrente" },
    { value: "Anual", label: "Anual" },
  ];

  function addEllipsis(str: string): string {
    if (str.length > 20) {
      return str.substring(0, 20) + "...";
    } else {
      return str;
    }
  }

  const renderRentType = () => {
    if (leasing.tipo === "Inmobiliario") {
      return (
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="8"
            controlId="validationCustom04"
            className="form-group"
          >
            <Form.Label>Propiedad arrendada</Form.Label>
            <div style={{ marginTop: 20 }}>
              <Form.Group className="mb-3 form-group">
                <Form.Check
                  required
                  checked={isRentLinked}
                  style={{ fontSize: 12, color: "gray", marginTop: -10 }}
                  onChange={(e) => setIsRentLinked(e.target.checked)}
                  label="El inmueble esta registrado en mi estructura patrimonial"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
            </div>
            {isRentLinked ? (
              <Select
                options={realStateOptions}
                classNamePrefix="Select2"
                className="multi-select"
                onChange={(value) => setRealStateOwner(value)}
                placeholder="Año"
                value={realStateOwner}
              />
            ) : (
              <>
                <InputGroup hasValidation>
                  <Form.Control
                    type="numeric"
                    placeholder="Nombre de inmueble"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setRentNotLinked(text.target.value)}
                    value={rentNotLinekd}
                  />
                  <Form.Control.Feedback type="invalid">
                    Favor de añadir el monto del pago
                  </Form.Control.Feedback>
                </InputGroup>
              </>
            )}
          </Form.Group>
        </Row>
      );
    } else if (leasing.tipo === "Vehicular") {
      return (
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="8"
            controlId="validationCustom04"
            className="form-group"
          >
            <Form.Label>Vehiculo arrendado</Form.Label>
            <div style={{ marginTop: 20 }}>
              <Form.Group className="mb-3 form-group">
                <Form.Check
                  required
                  checked={isRentLinked}
                  style={{ fontSize: 12, color: "gray", marginTop: -10 }}
                  onChange={(e) => setIsRentLinked(e.target.checked)}
                  label="El vehiculo esta registrado en mi estructura patrimonial"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
            </div>
            {isRentLinked ? (
              <Select
                options={vehiclesOptions}
                classNamePrefix="Select2"
                className="multi-select"
                onChange={(value) => setVechicleOwner(value)}
                placeholder="Año"
                value={vehicleOwner}
              />
            ) : (
              <>
                <InputGroup hasValidation>
                  <Form.Control
                    type="numeric"
                    placeholder="Nombre del Vehiculo"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setRentNotLinked(text.target.value)}
                    value={rentNotLinekd}
                  />
                  <Form.Control.Feedback type="invalid">
                    Favor de añadir el monto del pago
                  </Form.Control.Feedback>
                </InputGroup>
              </>
            )}
          </Form.Group>
        </Row>
      );
    }
  };

  const renderContract = () => {
    return (
      <Row>
        <Form.Group as={Col} md="4" className="form-group">
          <Form.Label
            className="form-label my-3"
            style={{ fontSize: 13, color: "gray" }}
          >
            Contrato de arrendamiento
          </Form.Label>
          {leasing.contrato ? (
            <>
              <FileView title="CIF" fileName={leasing.contrato} />
            </>
          ) : (
            <FileUpload />
          )}
        </Form.Group>
      </Row>
    );
  };

  const renderDescription = () => {
    return (
      <div>
        <Row style={{ marginBottom: 10 }}>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Arrendadatario</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="numeric"
                placeholder=""
                aria-describedby="inputGroupPrepend"
                required
                onChange={(text) => setLessorName(text.target.value)}
                value={lessorName}
              />
              <Form.Control.Feedback type="invalid">
                Favor de añadir el monto del pago
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Telefono arrendatario</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="numeric"
                placeholder=""
                aria-describedby="inputGroupPrepend"
                required
                onChange={(text) => setLessorPhone(text.target.value)}
                value={lessorPhone}
              />
              <Form.Control.Feedback type="invalid">
                Favor de añadir el monto del pago
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          {leasing.tipo === "Otro" && (
            <Form.Group
              as={Col}
              md="4"
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
          )}
        </Row>

        <Row style={{ marginTop: 20 }}>
          {leasing.tipo !== "Otro" && renderRentType()}
        </Row>
        <Row style={{ marginTop: 20 }}>
          <Form.Group
            as={Col}
            md="4"
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
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>País</Form.Label>
            <Select
              options={countryOptions}
              classNamePrefix="Select2"
              className="multi-select"
              onChange={(value) => setCountry(value)}
              placeholder="Año"
              value={country}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustomUsername"
            className="form-group"
          >
            <Form.Label>Monto</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend-1">$</InputGroup.Text>
              <Form.Control
                type="numeric"
                aria-describedby="inputGroupPrepend"
                required
                onChange={(text) => setCost(text.target.value)}
                value={cost}
              />
              <InputGroup.Text id="inputGroupPrepend-2">
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
            md="8"
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
          </Form.Group>
        </Row>

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
      </div>
    );
  };

  const renderLeasingPayments = () => {
    return (
      <div className="table-responsive">
        <dl className="product-gallery-data1">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
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
                to={`${baseURL}administration/rentNewPayment/${leasing.id}`}
              >
                + Añadir pago
              </Link>
            </Button>
          </div>
        </dl>
        <Table className="table border text-nowrap text-md-nowrap  mb-0">
          <thead className="bg-light">
            <tr>
              <th>Año</th>
              {leasing.frecuenciaDePago === "Mensual" && <th>Mes</th>}
              <th>Monto</th>
              <th>Comprobante pago</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {leasing.pagos.map((idx, tb8) => (
              <tr key={tb8}>
                <td>{idx.anio}</td>
                {leasing.frecuenciaDePago === "Mensual" && <td>{idx.mes}</td>}
                <td>
                  ${idx.monto} {leasing.moneda}
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
                    to={`${baseURL}administration/rentCollecting/${leasing.id}/payment/${idx.id}`}
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
            Cobro de arrendamiento {leasing.tipo} - {leasing.concepto}
          </h4>

          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
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
                    <Nav.Link eventKey="first" href="#">
                      <i
                        style={{ marginRight: 9 }}
                        className="fe fe-file-text text-black fs-13"
                      ></i>
                      Información
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="contract" href="#">
                      <i
                        style={{ marginRight: 9 }}
                        className="fe fe-file text-black fs-13"
                      ></i>
                      Contrato de arrendamiento
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="second">
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
              <Tab.Pane eventKey="first">{renderDescription()}</Tab.Pane>
              <Tab.Pane eventKey="contract">{renderContract()}</Tab.Pane>
              <Tab.Pane eventKey="second">{renderLeasingPayments()}</Tab.Pane>
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
