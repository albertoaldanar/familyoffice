import React, { Fragment, useState } from "react";
import Select from "react-select";
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
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Link, useNavigate } from "react-router-dom";
import { prediales } from "../paymentsData";
import { useParams } from "react-router-dom";
import { calculateDaysOrMonthsLeft } from "../paymentUtils";
import { realstateData } from "../../../investments/realState/realStateData";
import { formatToDateString, formatRealstateData, formateDateForUI } from "../paymentUtils";

export default function PropertTaxDescription(props) {
  //@ts-ignore
  const baseURL = import.meta.env.BASE_URL;
  const navigate = useNavigate();
  const params = useParams();
  const taxProperty = prediales.find(
    (predial) => predial.id === Number(params.id)
  );

  const [realStateOwner, setRealStateOwner] = useState({
    label: taxProperty.linkedItemId ? taxProperty.nombre : '', 
    value: taxProperty.linkedItemId ? taxProperty.linkedItemId : ''
  });

  const realStateOptions = formatRealstateData(realstateData);

  const [insuranceOwnerNotLinked, setInsuranceOwnerNotLinked] = useState(!taxProperty.linkedItemId ? taxProperty.nombre : '');
  const [isInsuranceOwnerLinked, setIsInsuranceOwnerLinked] = useState(taxProperty.linkedItemId ? true : false);

  const [shouldShowNextPaymentDatePicker, setShouldShowNextPaymentDatePicker] =
    useState(taxProperty.proxPago ? true : false);
  const vigenciaDelFormatted = formateDateForUI(taxProperty.vigenciaDel);
  const vigenciaAlFormatted = formateDateForUI(taxProperty.vigenciaAl);
  const nextPaymentFormatted = formateDateForUI(taxProperty.proxPago);
  const [vigenciaDel, setVigenciaDel] = useState<Dayjs | null>(
    dayjs(vigenciaDelFormatted)
  );

  const [vigenciaAl, setVigenciaAl] = useState<Dayjs | null>(
    dayjs(vigenciaAlFormatted)
  );

  const [nextPayment, setNextPayment] = useState<Dayjs | null>(
    nextPaymentFormatted ? dayjs(nextPaymentFormatted) : dayjs("")
  );

  const [currency, setCurrency] = useState({
    value: taxProperty.moneda,
    label: taxProperty.moneda,
  });

  const [paymentFrequency, setPaymentFrequency] = useState({
    label: taxProperty.frecuenciaDePago,
    value: taxProperty.frecuenciaDePago,
  });

  const Optionscurrency = [
    { value: "MXN", label: "MXN" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
  ];

  const OptionsPaymentFrequency = [
    { value: "Mensual", label: "Mensual" },
    { value: "Anual", label: "Anual" },
  ];

  function addEllipsis(str: string): string {
    if (str.length > 20) {
      return str.substring(0, 20) + "...";
    } else {
      return str;
    }
  }

  const handleTypeOfInsurance = () => {
      return (
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom04"
            className="form-group"
          >
            <Form.Label>Predial de inmueble:</Form.Label>
            <div style={{ marginTop: 20 }}>
              <Form.Group className="mb-3 form-group">
                <Form.Check
                  required
                  checked={isInsuranceOwnerLinked}
                  style={{ fontSize: 12, color: "gray", marginTop: -10 }}
                  onChange={(e) => setIsInsuranceOwnerLinked(e.target.checked)}
                  label="El inmueble esta registrado en mi estructura patrimonial"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
            </div>
            {isInsuranceOwnerLinked ? (
              <Select
                options={realStateOptions}
                classNamePrefix="Select2"
                className="multi-select"
                onChange={(value) => setRealStateOwner(value)}
                placeholder=""
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
                    onChange={(text) => setInsuranceOwnerNotLinked(text.target.value)}
                    value={insuranceOwnerNotLinked}
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
  };

  const renderDescription = () => {
    return (
      <div style={{marginBottom: 40}}>
        <Row style={{ marginBottom: 10 }}>
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

          <Form.Group
            as={Col}
            md="6"
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
        {handleTypeOfInsurance()}
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
              <p>{calculateDaysOrMonthsLeft(formatToDateString(nextPayment))}</p>
            </Form.Group>
          </Row>
        ) : (
          <p
            style={{
              color: "gray",
              marginTop: -13,
              fontSize: 12,
              marginLeft: 20,
              marginBottom: 40
            }}
          >
            Es muy importante agendar una fecha de pago ya que esta es la que
            notificara en el calendario de obligaciones, si se modifica haz
            click en 'Guardar'
          </p>
        )}

        <Row style={{ marginTop: 20 }}>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Vigencia del</Form.Label>
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
            <Form.Label>Vigencia al</Form.Label>
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
      </div>
    );
  };

  const renderInsurancePayments = () => {
    return (
      <>
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
              to={`${baseURL}administration/propertyTaxNewPayment/${taxProperty.id}`}
            >
              + Añadir pago
            </Link>
          </Button>
        </div>

        <div className="table-responsive" style={{ marginTop: 15 }}>
          {taxProperty.pagos.length > 0 ? (
            <Table className="table border text-nowrap text-md-nowrap mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Año</th>
                  <th>Vigencia del</th>
                  <th>Vigencia al</th>
                  <th>Monto</th>
                  <th>Comprobante pago</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {taxProperty.pagos.map((idx, tb8) => (
                  <tr key={tb8}>
                    <td>{idx.anio}</td>
                    <td>{idx.vigenciaDel}</td>
                    <td>{idx.vigenciaAl}</td>
                    <td>
                      ${idx.monto} {taxProperty.moneda}
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
                        state={{ name: "alberto" }}
                        to={`${baseURL}administration/propertyTaxPayment/${taxProperty.id}/payment/${idx.id}`}
                      >
                        Ver
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>No hay registros de pagos disponibles.</p>
          )}
        </div>
      </>
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
            {" "}
            <i
              style={{ marginRight: 9 }}
              className="fe fe-map-pin text-black fs-13"
            ></i>
            Predial - {taxProperty.nombre}
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
                    <Nav.Link eventKey="third">
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
              <Tab.Pane eventKey="third">{renderInsurancePayments()}</Tab.Pane>
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
