import React, { Fragment, useState } from "react";
import {
  Button,
  Card,
  Col,
  Row,
  Badge,
  Form,
  InputGroup,
} from "react-bootstrap";
import Select from "react-select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import { useParams } from "react-router-dom";
import { realstateData } from "../../../investments/realState/realStateData";
import { otherWealthData } from "../../../governance/wealthStructure/wealthStructureData";
import { family } from "../../../governance/familyStructure/familyStructureData";
import { formatRealstateData, formatFamilyMembers, formatVehicleData } from "../paymentUtils";

export default function InsuranceCreate(props) {
  const params = useParams();
  const typeSelected = params.type === 'realState' ? { value: "Inmobiliario", label: "Seguro Inmobiliario" } : params.type === 'vehicle' ?  { value: "Vehicular", label: "Seguro Vehicular" } : params.type === 'familyMember' ? { value: "Vida", label: "Seguro de vida" } : { value: '', label: '' } ;

  const propertySelected = params.itemId === null ? null : realstateData.find(property => property.id === Number(params.itemId));
  const propertySelectedValue = propertySelected && params.type === 'realState' ? formatRealstateData([propertySelected]) : { value: "", label: "" };

  const vehicleSelected = params.itemId === null ? null : otherWealthData.vehicles.find(property => property.id === Number(params.itemId));
  const vehicleSelectedValue = vehicleSelected && params.type === 'vehicle' ? formatVehicleData([vehicleSelected]) : { value: "", label: "" };

  const familyMemberSelected = params.itemId === null ? null : family.members.find(member => member.id === params.itemId);
  const familyMemberSelectedValue = familyMemberSelected && params.type === 'familyMember' ? formatFamilyMembers([familyMemberSelected]) : { value: "", label: "" };

  const [insuranceType, setInsuranceType] = useState(typeSelected);
  const [personaAsegurada, setPersonaAsegurada] = useState(familyMemberSelectedValue);
  const [selectedProperty, setSelectedProperty] = useState(propertySelectedValue);
  const [selectedVehicle, setSelectedVehicle] = useState(vehicleSelectedValue);
  const [insuranceCompany, setInsuranceCompany] = useState("");
  const [notFamilyMember, setNotFamilyMember] = useState("");
  const [notProperyMember, setNotPropertyMember] = useState("");
  const [notProperyMemberAddress, setNotPropertyMemberAddress] = useState("");
  const [notVehicleMember, setNotVehicleMember] = useState("");
  const [paymentFrequency, setPaymentFrequency] = useState({
    value: "",
    label: "",
  });

  const [currency, setCurrency] = useState({
    value: "",
    label: "",
  });
  const [vigenciaDel, setVigenciaDel] = useState<Dayjs | null>(dayjs(""));
  const [vigenciaAl, setVigenciaAl] = useState<Dayjs | null>(dayjs(""));
  const [isFamilyMember, setIsFamilyMember] = useState(true);

  const Options = formatFamilyMembers(family.members);

  const OptionsProperties = formatRealstateData(realstateData);

  const OptionsVehicles = formatVehicleData(otherWealthData.vehicles)

  const OptionsPaymentFrequency = [
    { value: "Mensual", label: "Mensual" },
    { value: "Anual", label: "Anual" },
  ];

  const Optionscurrency = [
    { value: "MXN", label: "MXN" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
  ];

  const OptionsInsuranceType = [
    { value: "Vida", label: "Seguro de vida" },
    { value: "Inmobiliario", label: "Seguro Inmobiliario" },
    { value: "Vehicular", label: "Seguro Vehicular" },
  ];

  const handleTypeOfInsurance = () => {
    if (insuranceType.value === "Vida") {
      return (
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="3"
            controlId="validationCustom04"
            className="form-group"
          >
            <Form.Label>Persona asegurada</Form.Label>
            <div style={{ marginTop: 20 }}>
              <Form.Group className="mb-3 form-group">
                <Form.Check
                  required
                  checked={isFamilyMember}
                  style={{ fontSize: 12, color: "gray", marginTop: -10 }}
                  onChange={(e) => setIsFamilyMember(e.target.checked)}
                  label="Miembro de organigrama familiar"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
            </div>
            {isFamilyMember ? (
              <Select
                options={Options}
                classNamePrefix="Select2"
                className="multi-select"
                onChange={(value) => setPersonaAsegurada(value)}
                placeholder="Año"
                value={personaAsegurada}
              />
            ) : (
              <>
                <InputGroup hasValidation>
                  <Form.Control
                    type="numeric"
                    placeholder="Nombre completo"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setNotFamilyMember(text.target.value)}
                    value={notFamilyMember}
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
    } else if (insuranceType.value === "Inmobiliario") {
      return (
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom04"
            className="form-group"
          >
            <Form.Label>Inmueble asegurado</Form.Label>
            <div style={{ marginTop: 20 }}>
              <Form.Group className="mb-3 form-group">
                <Form.Check
                  required
                  checked={isFamilyMember}
                  style={{ fontSize: 12, color: "gray", marginTop: -10 }}
                  onChange={(e) => setIsFamilyMember(e.target.checked)}
                  label="El inmueble esta registrado en mi estructura patrimonial"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
            </div>
            {isFamilyMember ? (
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

                <InputGroup hasValidation style={{marginTop: 10}}>
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
                </InputGroup>
              </>
            )}
          </Form.Group>
        </Row>
      );
    } else if (insuranceType.value === "Vehicular") {
      return (
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom04"
            className="form-group"
          >
            <Form.Label>Vehiculo asegurado</Form.Label>
            <div style={{ marginTop: 20 }}>
              <Form.Group className="mb-3 form-group">
                <Form.Check
                  required
                  checked={isFamilyMember}
                  style={{ fontSize: 12, color: "gray", marginTop: -10 }}
                  onChange={(e) => setIsFamilyMember(e.target.checked)}
                  label="El vehiculo esta registrado en mi estructura patrimonial"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
            </div>
            {isFamilyMember ? (
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

    return;
  };

  return (
    <Fragment>
      <Row>
        <Card style={{ padding: 30, marginTop: 20 }}>
          <Card.Title style={{ marginBottom: 35 }}>
            Nuevo Registro de Seguro
          </Card.Title>
          <Form noValidate validated={false} onSubmit={() => {}}>
            <Row style={{ marginBottom: 10 }}>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Tipo de seguro</Form.Label>
                <Select
                  options={OptionsInsuranceType}
                  classNamePrefix="Select2"
                  className="multi-select"
                  onChange={(value) => setInsuranceType(value)}
                  placeholder=""
                  value={insuranceType}
                />
              </Form.Group>
            </Row>

            {handleTypeOfInsurance()}

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
                md="3"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Compañia aseguradora</Form.Label>
                <Form.Control
                  type="numeric"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setInsuranceCompany(text.target.value)}
                  value={insuranceCompany}
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

            <Row style={{ marginTop: 20 }}>
              <Form.Group as={Col} md="6" className="form-group">
                <Form.Label className="form-label my-3">
                  Adjuntar poliza
                </Form.Label>

                <Form.Control
                  type="file"
                  className="border-right-0 browse-file"
                  placeholder="Cargar poliza"
                  readOnly
                />
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
