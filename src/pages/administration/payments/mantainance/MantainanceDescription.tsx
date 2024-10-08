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
import { mantenimientos } from "../paymentsData";
import { useParams } from "react-router-dom";
import Select from "react-select";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { countryOptions } from "../../accounting/companyUtils";
import { calculateDaysOrMonthsLeft } from "../paymentUtils";
import { formatVehicleData } from "../paymentUtils";
import { otherWealthData } from "../../../governance/wealthStructure/wealthStructureData";
import { realstateData } from "../../../investments/realState/realStateData";
import { formateDateForUI } from "../paymentUtils";
import { formatRealstateData } from "../paymentUtils";
import { formatToDateString } from "../paymentUtils";

export default function MantainanceDescription(props) {
  //@ts-ignore
  const baseURL = import.meta.env.BASE_URL;
  const params = useParams();
  const navigate = useNavigate();
  const mantainance = mantenimientos.find(
    (mantenimiento) => mantenimiento.id === Number(params.id)
  );
  const nextPaymentFormatted = formateDateForUI(mantainance.proxPago);
  const vehiclesOptions = formatVehicleData(otherWealthData.vehicles);
  const realStateOptions = formatRealstateData(realstateData);
  const [mantainanceNotLinked, setMantainanceNotLinked] = useState(
    !mantainance.linkedItemId ? mantainance.nombre : ""
  );
  const [shouldShowNextPaymentDatePicker, setShouldShowNextPaymentDatePicker] =
    useState(mantainance.proxPago ? true : false);
  const [isMantainanceLinked, setIsMantainanceLinked] = useState(
    mantainance.linkedItemId ? true : false
  );
  const [nextPayment, setNextPayment] = useState<Dayjs | null>(
    nextPaymentFormatted ? dayjs(nextPaymentFormatted) : dayjs("")
  );

  const [vehicleOwner, setVechicleOwner] = useState({
    label: mantainance.linkedItemId ? mantainance.nombre : "",
    value: mantainance.linkedItemId ? mantainance.linkedItemId : "",
  });

  const [realStateOwner, setRealStateOwner] = useState({
    label: mantainance.linkedItemId ? mantainance.concepto : "",
    value: mantainance.linkedItemId ? mantainance.linkedItemId : "",
  });

  const [concept, setConcept] = useState(
    mantainance.concepto ? mantainance.concepto : ""
  );
  const [payTo, setPayTo] = useState(mantainance.pagoA);

  const [country, setCountry] = useState({
    value: mantainance.country,
    label: mantainance.country,
  });

  const [paymentFrequency, setPaymentFrequency] = useState({
    label: mantainance.frecuenciaDePago,
    value: mantainance.frecuenciaDePago,
  });

  const [currency, setCurrency] = useState({
    value: mantainance.moneda,
    label: mantainance.moneda,
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

  const handleMantainanceType = () => {
    if (mantainance.tipo === "Inmobiliario") {
      return (
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="8"
            controlId="validationCustom04"
            className="form-group"
          >
            <Form.Label>Mantenimiento a inmueble</Form.Label>
            <div style={{ marginTop: 20 }}>
              <Form.Group className="mb-3 form-group">
                <Form.Check
                  required
                  checked={isMantainanceLinked}
                  style={{ fontSize: 12, color: "gray", marginTop: -10 }}
                  onChange={(e) => setIsMantainanceLinked(e.target.checked)}
                  label="El inmueble esta registrado en mi estructura patrimonial"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
            </div>
            {isMantainanceLinked ? (
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
                    onChange={(text) =>
                      setMantainanceNotLinked(text.target.value)
                    }
                    value={mantainanceNotLinked}
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
    } else if (mantainance.tipo === "Vehicular") {
      return (
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="8"
            controlId="validationCustom04"
            className="form-group"
          >
            <Form.Label>Mantenimiento a vehiculo</Form.Label>
            <div style={{ marginTop: 20 }}>
              <Form.Group className="mb-3 form-group">
                <Form.Check
                  required
                  checked={isMantainanceLinked}
                  style={{ fontSize: 12, color: "gray", marginTop: -10 }}
                  onChange={(e) => setIsMantainanceLinked(e.target.checked)}
                  label="El vehiculo esta registrado en mi estructura patrimonial"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
            </div>
            {isMantainanceLinked ? (
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
                    onChange={(text) =>
                      setMantainanceNotLinked(text.target.value)
                    }
                    value={mantainanceNotLinked}
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
            <Form.Label>Pagar a</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="numeric"
                placeholder=""
                aria-describedby="inputGroupPrepend"
                required
                onChange={(text) => setPayTo(text.target.value)}
                value={payTo}
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
        <Row style={{ marginTop: 20 }}>{handleMantainanceType()}</Row>
        {mantainance.tipo === "Otro" && (
          <Row style={{ marginTop: 20 }}>
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
          </Row>
        )}

        {(mantainance.tipo === "Otro" || !isMantainanceLinked) && (
          <Row>
            <Form.Group
              as={Col}
              md="8"
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
          </Row>
        )}
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

  const renderMantainancePayments = () => {
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
              {/*// @ts-ignore */}
              <Link
                style={{ color: "white" }}
                to={`${baseURL}administration/mantainanceNewPayment/${mantainance.id}`}
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
              {mantainance.frecuenciaDePago !== "Anual" && <th>Mes</th>}
              <th>Fecha limite pago</th>
              <th>Monto</th>
              <th>Comprobante pago</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {mantainance.pagos.map((idx, tb8) => (
              <tr key={tb8}>
                <td>{idx.anio}</td>
                {mantainance.frecuenciaDePago !== "Anual" && <td>{idx.mes}</td>}
                <td>{idx.limitePago}</td>
                <td>
                  ${idx.monto} {mantainance.moneda}
                </td>
                <td
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                ></td>
                <td
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "#5488d2",
                  }}
                >
                  {/*// @ts-ignore */}
                  <Link to={`${import.meta.env.BASE_URL
                    }administration/mantainancePayment/${
                      mantainance.id
                    }/payment/${idx.id}`}
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
            <i
              style={{ marginRight: 9 }}
              className="fe fe-clipboard text-black fs-13"
            ></i>{" "}
            Cuota de Mantenimiento {mantainance.tipo} - {mantainance.concepto}
          </h4>

          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
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
                    <Nav.Link eventKey="first" href="#">
                      <i
                        style={{ marginRight: 9 }}
                        className="fe fe-file-text text-black fs-13"
                      ></i>
                      Información
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
              <Tab.Pane eventKey="second">
                {renderMantainancePayments()}
              </Tab.Pane>
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
        </Card>
      </Row>
    </Fragment>
  );
}
