import React, { Fragment, useState } from "react";
import { Button, Card, Col, Row, Form, InputGroup } from "react-bootstrap";
import Select from "react-select";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { formatRealstateData, formatVehicleData } from "../paymentUtils";
import { otherWealthData } from "../../../governance/wealthStructure/wealthStructureData";
import { realstateData } from "../../../investments/realState/realStateData";

export default function MantainanceCreate(props) {
  const params = useParams();
  const typeSelected = params.type === 'realState' ? { value: "Inmobiliario", label: "Mantenimiento Inmobiliario" } : params.type === 'vehicle' ? { value: "Vehicular", label: "Mantenimiento Vehicular" }: { value: '', label: '' } ;

  const propertySelected = params.itemId === null ? null : realstateData.find(property => property.id === Number(params.itemId));
  const propertySelectedValue = propertySelected && params.type === 'realState' ? formatRealstateData([propertySelected]) : { value: "", label: "" };

  const vehicleSelected = params.itemId === null ? null : otherWealthData.vehicles.find(property => property.id === Number(params.itemId));
  const vehicleSelectedValue = vehicleSelected && params.type === 'vehicle' ? formatVehicleData([vehicleSelected]) : { value: "", label: "" };

  const [mantainanceType, setMantainanceType] = useState(typeSelected);
  const [otherType, setOtherType] = useState("");
  const [concept, setConcept] = useState("");
  const [description, setDescription] = useState("");
  const [payTo, setPayTo] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(propertySelectedValue);
  const [selectedVehicle, setSelectedVehicle] = useState(vehicleSelectedValue);
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
  const [isFamilyMember, setIsFamilyMember] = useState(true);

  const Options = [
    { value: "Alberto Aldana Rios", label: "Alberto Aldana Rios" },
    { value: "Alejandra Aldana Rios", label: "Alejandra Aldana Rios" },
    { value: "Ana Sofia Aldana Rios", label: "Ana Sofia Aldana Rios" },
  ];

  const OptionsProperties = formatRealstateData(realstateData);

  const OptionsVehicles = formatVehicleData(otherWealthData.vehicles)

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

  const OptionsMantainanceType = [
    { value: "Inmobiliario", label: "Mantenimiento Inmobiliario" },
    { value: "Vehicular", label: "Mantenimiento Vehicular" },
    { value: "Otro", label: "Otro" },
  ];

  const handleTypeOfInsurance = () => {
    if (mantainanceType.value === "Inmobiliario") {
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

                <InputGroup hasValidation style={{ marginTop: 10 }}>
                  <Form.Control
                    type="numeric"
                    placeholder="Dirección de propiedad"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) =>
                      setNotPropertyMemberAddress(text.target.value)
                    }
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
    } else if (mantainanceType.value === "Vehicular") {
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

    return (
      <Form.Group
        as={Col}
        md="10"
        controlId="validationCustom01"
        className="form-group"
      >
        <Form.Label>Tipo de mantenimiento</Form.Label>
        <Form.Control
          type="numeric"
          placeholder=""
          aria-describedby="inputGroupPrepend"
          required
          onChange={(text) => setOtherType(text.target.value)}
          value={otherType}
        />
      </Form.Group>
    )
  };

  return (
    <Fragment>
      <Row>
        <Card style={{ padding: 30, marginTop: 20 }}>
          <Card.Title style={{ marginBottom: 35 }}>
            Nuevo Registro de Mantenimiento
          </Card.Title>
          <Form noValidate validated={false} onSubmit={() => {}}>
            <Row style={{ marginBottom: 10 }}>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Tipo de mantenimiento</Form.Label>
                <Select
                  options={OptionsMantainanceType}
                  classNamePrefix="Select2"
                  className="multi-select"
                  onChange={(value) => setMantainanceType(value)}
                  placeholder=""
                  value={mantainanceType}
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
                md="6"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  type="numeric"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setDescription(text.target.value)}
                  value={description}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                md="3"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Pago a</Form.Label>
                <Form.Control
                  type="numeric"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setPayTo(text.target.value)}
                  value={payTo}
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
                <p style={{marginTop: 7, fontSize: 11, color: 'gray'}}>Si los pagos no tendran un monto fijo, este campo se puede dejar en blanco y se asignara un monto a cada registro de pago</p>
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
