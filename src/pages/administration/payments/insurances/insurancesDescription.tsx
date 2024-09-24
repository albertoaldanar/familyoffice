import React, { Fragment, useState } from "react";
import {
  Button,
  Card,
  Col,
  Table,
  Row,
  Badge,
  Form,
  Tab,
  Nav,
  InputGroup,
} from "react-bootstrap";
import Select from "react-select";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { countryOptions } from "../../accounting/companyUtils";
import FileView from "../../accounting/components/fileView";
import FileUpload from "../../accounting/components/fileUpload";
import { seguros } from "../paymentsData";
import { realstateData } from "../../../investments/realState/realStateData";
import { otherWealthData } from "../../../governance/wealthStructure/wealthStructureData";
import { family } from "../../../governance/familyStructure/familyStructureData";
import {
  formatFamilyMembers,
  formatVehicleData,
  calculateDaysOrMonthsLeft,
  formatRealstateData,
  formateDateForUI,
  formatToDateString
} from "../paymentUtils";

export default function InsurancesDescription(props) {
  //@ts-ignore
  const baseURL = import.meta.env.BASE_URL;
  const params = useParams();
  const insurance = seguros.find((seguro) => seguro.id === Number(params.id));
  const familyMembersOptions = formatFamilyMembers(family.members);
  const vehiclesOptions = formatVehicleData(otherWealthData.vehicles);
  const realStateOptions = formatRealstateData(realstateData);

  const [familyMemberOwner, setFamilyMemberOwner] = useState({
    label: insurance.linkedItemId ? insurance.nombre : '', 
    value: insurance.linkedItemId ? insurance.linkedItemId : ''
  });
  
  const [vehicleOwner, setVechicleOwner] = useState({
    label: insurance.linkedItemId ? insurance.nombre : '', 
    value: insurance.linkedItemId ? insurance.linkedItemId : ''
  });
  
  const [realStateOwner, setRealStateOwner] = useState({
    label: insurance.linkedItemId ? insurance.nombre : '', 
    value: insurance.linkedItemId ? insurance.linkedItemId : ''
  });

  const [insuranceName, setInsuranceName] = useState(
    insurance.nombreAseguradora
  );

  const [insuranceOwnerNotLinked, setInsuranceOwnerNotLinked] = useState(!insurance.linkedItemId ? insurance.nombre : '');

  const [isInsuranceOwnerLinked, setIsInsuranceOwnerLinked] = useState(insurance.linkedItemId ? true : false);

  const [anualCost, setAnualCost] = useState(
    insurance.anualCost
  );

  const [shouldShowNextPaymentDatePicker, setShouldShowNextPaymentDatePicker] =
    useState(insurance.proxPago ? true : false);
  const vigenciaDelFormatted = formateDateForUI(insurance.vigenciaDel);
  const vigenciaAlFormatted = formateDateForUI(insurance.vigenciaAl);
  const nextPaymentFormatted = formateDateForUI(insurance.proxPago);
  const [vigenciaDel, setVigenciaDel] = useState<Dayjs | null>(
    dayjs(vigenciaDelFormatted)
  );

  const [vigenciaAl, setVigenciaAl] = useState<Dayjs | null>(
    dayjs(vigenciaAlFormatted)
  );

  const [nextPayment, setNextPayment] = useState<Dayjs | null>(
    nextPaymentFormatted ? dayjs(nextPaymentFormatted) : dayjs('') 
  );

  const [country, setCountry] = useState({
    value: insurance.country,
    label: insurance.country,
  });

  const [paymentFrequency, setPaymentFrequency] = useState({
    label: insurance.frecuenciaDePago,
    value: insurance.frecuenciaDePago,
  });

  const [currency, setCurrency] = useState({
    value: insurance.moneda,
    label: insurance.moneda,
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

  const renderIcon = () => {
    if (insurance.tipo === "Inmobiliario") {
      return (
        <i
          style={{ marginRight: 9 }}
          className="fe fe-map-pin text-black fs-13"
        ></i>
      );
    } else if (insurance.tipo === "Vehicular") {
      return (
        <i
          style={{ marginRight: 9 }}
          className="fe fe-truck text-black fs-13"
        ></i>
      );
    }
    return (
      <i
        style={{ marginRight: 9 }}
        className="fe fe-user text-black fs-13"
      ></i>
    );
  };

  const handleTypeOfInsurance = () => {
    if (insurance.tipo === "Vida") {
      return (
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom04"
            className="form-group"
          >
            <Form.Label>Persona asegurada</Form.Label>
            <div style={{ marginTop: 20 }}>
              <Form.Group className="mb-3 form-group">
                <Form.Check
                  required
                  checked={isInsuranceOwnerLinked}
                  style={{ fontSize: 12, color: "gray", marginTop: -10 }}
                  onChange={(e) => setIsInsuranceOwnerLinked(e.target.checked)}
                  label="Miembro de organigrama familiar"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
            </div>
            {isInsuranceOwnerLinked ? (
              <Select
                options={familyMembersOptions}
                classNamePrefix="Select2"
                className="multi-select"
                onChange={(value) => setFamilyMemberOwner(value)}
                placeholder=""
                value={familyMemberOwner}
              />
            ) : (
              <>
                <InputGroup hasValidation>
                  <Form.Control
                    type="numeric"
                    placeholder="Nombre completo"
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
    } else if (insurance.tipo === "Inmobiliario") {
      return (
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom04"
            className="form-group"
          >
            <Form.Label>Inmueble asegurado</Form.Label>
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

                {/* <InputGroup hasValidation style={{marginTop: 10}}>
                  <Form.Control
                    type="numeric"
                    placeholder="Dirección de propiedad"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setNotPropertyMemberAddress(text.target.value)}
                    value={notProperyMemberAddress}
                  />
                  <Form.Control.Feedback type="invalid">
                    Favor de añadir el monto del pago
                  </Form.Control.Feedback>
                </InputGroup> */}
              </>
            )}
          </Form.Group>
        </Row>
      );
    } else if (insurance.tipo === "Vehicular") {
      return (
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom04"
            className="form-group"
          >
            <Form.Label>Vehiculo asegurado</Form.Label>
            <div style={{ marginTop: 20 }}>
              <Form.Group className="mb-3 form-group">
                <Form.Check
                  required
                  checked={isInsuranceOwnerLinked}
                  style={{ fontSize: 12, color: "gray", marginTop: -10 }}
                  onChange={(e) => setIsInsuranceOwnerLinked(e.target.checked)}
                  label="El vehiculo esta registrado en mi estructura patrimonial"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
            </div>
            {isInsuranceOwnerLinked ? (
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
    }

    return;
  };

  const renderInsuranceOwner = () => {
    if(insurance.tipo === "Inmobiliario"){
      return (
        <Form.Group
          as={Col}
          md="4"
          controlId="validationCustom01"
          className="form-group"
        >
          <Form.Label>Propiedad asegurada</Form.Label>
          <Select
            options={realStateOptions}
            classNamePrefix="Select2"
            className="multi-select"
            onChange={(value) => setRealStateOwner(value)}
            placeholder=""
            value={realStateOwner}
          />
        </Form.Group>
      )
    } else if(insurance.tipo === "Vehicular"){
      return (
        <Form.Group
          as={Col}
          md="4"
          controlId="validationCustom01"
          className="form-group"
        >
          <Form.Label>Vehicular asegurado</Form.Label>
          <Select
            options={vehiclesOptions}
            classNamePrefix="Select2"
            className="multi-select"
            onChange={(value) => setVechicleOwner(value)}
            placeholder=""
            value={vehicleOwner}
          />
        </Form.Group>
      )
    } else if(insurance.linkedItemId === null){
      return (
        <Form.Group
          as={Col}
          md="4"
          controlId="validationCustom01"
          className="form-group"
        >
          <Form.Label>Asegurado</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="numeric"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setInsuranceName(text.target.value)}
              value={insuranceName}
            />
            <Form.Control.Feedback type="invalid">
              Favor de añadir el monto del pago
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      )
    }

    return (
      <Form.Group
        as={Col}
        md="4"
        controlId="validationCustom01"
        className="form-group"
      >
        <Form.Label>Miembro familiar asegurado</Form.Label>
        <Select
          options={familyMembersOptions}
          classNamePrefix="Select2"
          className="multi-select"
          onChange={(value) => setFamilyMemberOwner(value)}
          placeholder=""
          value={familyMemberOwner}
        />
      </Form.Group>
    )
  };
  
  const renderDescription = () => {
    return (
      <div>
        <Row style={{ marginBottom: 10, marginTop: 5 }}>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Nombre de aseguradora</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="numeric"
                placeholder=""
                aria-describedby="inputGroupPrepend"
                required
                onChange={(text) => setInsuranceName(text.target.value)}
                value={insuranceName}
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
              placeholder=""
              value={country}
            />
          </Form.Group>
        </Row>

        <Row style={{ marginTop: 20 }}>
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

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustomUsername"
            className="form-group"
          >
            <Form.Label>Costo anual de seguro</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend-1">$</InputGroup.Text>
              <Form.Control
                type="numeric"
                aria-describedby="inputGroupPrepend"
                required
                onChange={(text) => setAnualCost(text.target.value)}
                value={anualCost}
              />
              <InputGroup.Text id="inputGroupPrepend-2">
                {insurance.moneda}
              </InputGroup.Text>
              <Form.Control.Feedback type="invalid">
                Favor de añadir el monto del pago
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        <Row style={{marginTop: 20}}>
          {handleTypeOfInsurance()}
        </Row>

        <Row style={{marginTop: 20}}>
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
              variant="primary"
              size="sm"
              className=" mb-1"
            >
              {/*// @ts-ignore */}
              <Link
                style={{ color: "white" }}
                to={`${baseURL}administration/insuranceNewPayment/${insurance.id}`}
              >
                + Añadir pago
              </Link>
            </Button>
          </div>
        </dl>
        {insurance.pagos.length > 0 ? (
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
              {insurance.pagos.map((idx, tb8) => (
                <tr key={tb8}>
                  <td>{idx.anio}</td>
                  <td>{idx.vigenciaDel}</td>
                  <td>{idx.vigenciaAl}</td>
                  <td>
                    ${idx.monto} {insurance.moneda}
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
                      to={`${baseURL}administration/insurancePayment/${insurance.id}/payment/${idx.id}`}
                    >
                      Ver
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p style={{ marginTop: 20, fontSize: 13, color: "gray" }}>
            No hay pagos registrados para esta póliza de seguro.
          </p>
        )}
      </div>
    );
  };

  const renderPoliza = () => {
    return (
      <Row>
        <Form.Group as={Col} md="4" className="form-group">
          <Form.Label
            className="form-label my-3"
            style={{ fontSize: 13, color: "gray" }}
          >
            Poliza de seguro
          </Form.Label>
          {insurance.poliza ? (
            <>
              <FileView title="CIF" fileName={insurance.comprobantePago} />
            </>
          ) : (
            <FileUpload />
          )}
        </Form.Group>
      </Row>
    );
  };

  const renderEmtyState = () => {
    return (
      <div style={{ justifyContent: "center" }}>
        <h3>No se ha encontrado ningun seguro con este id</h3>
      </div>
    );
  };

  return (
    <Fragment>
      {insurance !== undefined ? (
        <>
          <Row>
            <Card style={{ padding: 30, marginTop: 20, minHeight: 550 }}>
              <h4 className="mb-3 fw-semibold">
              {renderIcon()} Seguro {insurance.tipo} - {insurance.nombre}
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
                            className="fe fe-file text-black fs-13"
                          ></i>
                          Poliza de seguro
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
                      {/* <Nav.Item as="li" style={{ marginRight: 10 }}>
                        <Nav.Link eventKey="fifth">
                          <i
                            style={{ marginRight: 9 }}
                            className="fe fe-users text-black fs-13"
                          ></i>
                          Contactos
                        </Nav.Link>
                      </Nav.Item> */}
                    </Nav>
                  </div>
                </div>

                <Tab.Content className="panel-body">
                  <Tab.Pane eventKey="first">{renderDescription()}</Tab.Pane>
                  <Tab.Pane eventKey="second">{renderPoliza()}</Tab.Pane>
                  <Tab.Pane eventKey="third">
                    {renderInsurancePayments()}
                  </Tab.Pane>
                  {/* <Tab.Pane eventKey="fifth">{}</Tab.Pane> */}
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
        </>
      ) : (
        renderEmtyState()
      )}
    </Fragment>
  );
}
