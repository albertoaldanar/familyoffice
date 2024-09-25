import React, { Fragment, useState } from "react";
import { Button, Card, Col, Row, Form, InputGroup } from "react-bootstrap";
import Select from "react-select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import {
  formatRealstateData,
  formatVehicleData,
} from "../../payments/paymentUtils";
import { otherWealthData } from "../../../governance/wealthStructure/wealthStructureData";
import { realstateData } from "../../../investments/realState/realStateData";
import dayjs, { Dayjs } from "dayjs";
import FileUpload from "../../accounting/components/fileUpload";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function RentsCreate(props) {
  const params = useParams();
  const navigate = useNavigate();
  const typeSelected = params.type === 'realState' ? { value: "Inmobiliario", label: "Renta Inmobiliario" } : params.type === 'vehicle' ?   { value: "Vehicular", label: "Renta Vehicular" }: { value: '', label: '' } ;

  const propertySelected = params.itemId === null ? null : realstateData.find(property => property.id === Number(params.itemId));
  const propertySelectedValue = propertySelected && params.type === 'realState' ? formatRealstateData([propertySelected]) : { value: "", label: "" };

  const vehicleSelected = params.itemId === null ? null : otherWealthData.vehicles.find(property => property.id === Number(params.itemId));
  const vehicleSelectedValue = vehicleSelected && params.type === 'vehicle' ? formatVehicleData([vehicleSelected]) : { value: "", label: "" };

  const [leasingType, setleasingType] = useState("");
  const [concept, setConcept] = useState("");
  const [payTo, setPayTo] = useState("");
  const [amount, setAmount] = useState("");
  const [rentType, setRentType] = useState(typeSelected);
  const [selectedVehicle, setSelectedVehicle] = useState(vehicleSelectedValue);
  const [selectedProperty, setSelectedProperty] = useState(propertySelectedValue);
  const [notProperyMember, setNotPropertyMember] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isWealthStructureMember, setIsWealthStructureMember] = useState(true);
  const [notVehicleMember, setNotVehicleMember] = useState("");
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

  const Optionscurrency = [
    { value: "MXN", label: "MXN" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
  ];

  const OptionsRent = [
    { value: "Inmobiliario", label: "Renta Inmobiliario" },
    { value: "Vehicular", label: "Renta Vehicular" },
    { value: "Otro", label: "Otro" },
  ];

  const OptionsProperties = formatRealstateData(realstateData);
  const OptionsVehicles = formatVehicleData(otherWealthData.vehicles);

  const handleTypeOfRent = () => {
    if (rentType.value === "Inmobiliario") {
      return (
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom04"
            className="form-group"
          >
            <Form.Label>Inmueble rentado</Form.Label>
            <div style={{ marginTop: 20 }}>
              <Form.Group className="mb-3 form-group">
                <Form.Check
                  required
                  checked={isWealthStructureMember}
                  style={{ fontSize: 12, color: "gray", marginTop: -10 }}
                  onChange={(e) => setIsWealthStructureMember(e.target.checked)}
                  label="El inmueble esta registrado en mi estructura patrimonial"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
            </div>
            {isWealthStructureMember ? (
              <Select
                options={OptionsProperties}
                classNamePrefix="Select2"
                className="multi-select"
                onChange={(value) => setSelectedProperty(value)}
                placeholder="Año"
                value={selectedProperty}
              />
            ) : (
              <>
                <InputGroup hasValidation>
                  <Form.Control
                    type="numeric"
                    placeholder="Nombre de inmueble"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setNotPropertyMember(text.target.value)}
                    value={notProperyMember}
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
    } else if (rentType.value === "Vehicular") {
      return (
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom04"
            className="form-group"
          >
            <Form.Label>Vehiculo rentado</Form.Label>
            <div style={{ marginTop: 20 }}>
              <Form.Group className="mb-3 form-group">
                <Form.Check
                  required
                  checked={isWealthStructureMember}
                  style={{ fontSize: 12, color: "gray", marginTop: -10 }}
                  onChange={(e) => setIsWealthStructureMember(e.target.checked)}
                  label="El vehiculo esta registrado en mi estructura patrimonial"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
            </div>
            {isWealthStructureMember ? (
              <Select
                options={OptionsVehicles}
                classNamePrefix="Select2"
                className="multi-select"
                onChange={(value) => setSelectedVehicle(value)}
                placeholder="Año"
                value={selectedVehicle}
              />
            ) : (
              <>
                <InputGroup hasValidation>
                  <Form.Control
                    type="numeric"
                    placeholder="Nombre del Vehiculo"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setNotVehicleMember(text.target.value)}
                    value={notVehicleMember}
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
            Nuevo Registro de Arrendamiento a cobrar
          </Card.Title>

          <Form noValidate validated={false} onSubmit={() => {}}>
            <Row style={{ marginBottom: 10 }}>
              <Form.Group
                as={Col}
                md="6"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Tipo de arrendamiento</Form.Label>
                <Select
                  options={OptionsRent}
                  classNamePrefix="Select2"
                  className="multi-select"
                  onChange={(value) => setRentType(value)}
                  placeholder=""
                  value={rentType}
                />
              </Form.Group>
            </Row>

            <Row style={{ marginBottom: 10 }}>
              {handleTypeOfRent()}
            </Row>

            {
              rentType.value === 'Otro' && (
                <Row style={{ marginTop: 20 }}>
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationCustom01"
                    className="form-group"
                  >
                    <Form.Label>Renta de</Form.Label>
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
              )
            }

            <Row style={{ marginTop: 20 }}>
              <Form.Group
                as={Col}
                md="5"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Arrendatario</Form.Label>
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
                <Form.Label>Numero de arrendatario</Form.Label>
                <Form.Control
                  type="numeric"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setPhoneNumber(text.target.value)}
                  value={phoneNumber}
                />
              </Form.Group>
            </Row>
            <Row style={{ marginTop: 20 }}>
              <Form.Group
                as={Col}
                md="3"
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
