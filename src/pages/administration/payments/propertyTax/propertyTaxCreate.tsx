import React, { Fragment, useState } from "react";
import { Button, Card, Col, Row, Form, InputGroup } from "react-bootstrap";
import Select from "react-select";
import { formatRealstateDataPropertyTax } from "../paymentUtils";
import { prediales } from "../paymentsData";
import { useParams } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import { realstateData } from "../../../investments/realState/realStateData";
import { Link, useNavigate } from "react-router-dom";
export default function PropertyTaxCreate(props) {
  const [notMemberPropertyName, setNotMemberPropertyName] = useState("");
  const [notMemberPropertyAddress, setNotMemberPropertyAddress] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const propertySelected = params.id === null ? null : realstateData.find(property => property.id === Number(params.id));
  const propertySelectedValue = propertySelected ? { value: propertySelected.nombre, label: propertySelected.nombre} : { value: "", label: "" };
  const [nextPayment, setNextPayment] = useState<Dayjs | null>(dayjs(""));

  const [paymentFrequency, setPaymentFrequency] = useState({
    value: "",
    label: "",
  });

  const [selectedProperty, setSelectedProperty] = useState(propertySelectedValue);

  const [currency, setCurrency] = useState({
    value: "",
    label: "",
  });

  const [isPropertyMember, setIsPropertyMember] = useState(true);
  const OptionsProperties = formatRealstateDataPropertyTax(
    realstateData,
    prediales
  );

  const Optionscurrency = [
    { value: "MXN", label: "MXN" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
  ];


  const OptionsPaymentFrequency = [
    { value: "Mensual", label: "Mensual" },
    { value: "Anual", label: "Anual" },
  ];

  return (
    <Fragment>
      <Row>
        <Card style={{ padding: 30, marginTop: 20, minHeight: 550 }}>
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
            Nuevo Registro de Predial
          </Card.Title>
          <Form noValidate validated={false} onSubmit={() => {}}>
            <Row style={{ marginBottom: 10 }}>
              <Form.Group as={Col} md="6" className="mb-3 form-group">
                <Form.Check
                  required
                  checked={isPropertyMember}
                  style={{ fontSize: 12, color: "gray", marginTop: -10 }}
                  onChange={(e) => setIsPropertyMember(e.target.checked)}
                  label="El inmueble esta registrado en mi estructura patrimonial"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
                {isPropertyMember ? (
                  <Select
                    options={OptionsProperties}
                    classNamePrefix="Select2"
                    className="multi-select"
                    onChange={(value) => setSelectedProperty(value)}
                    placeholder="Año"
                    value={selectedProperty}
                  />
                ) : (
                  <div style={{ marginTop: 10 }}>
                    <Form.Control
                      type="numeric"
                      placeholder="Nombre de propiedad"
                      aria-describedby="inputGroupPrepend"
                      required
                      onChange={(text) =>
                        setNotMemberPropertyName(text.target.value)
                      }
                      value={notMemberPropertyName}
                    />
                    <div style={{ marginTop: 10 }}>
                      <Form.Control
                        type="numeric"
                        placeholder="Dirección de propiedad"
                        aria-describedby="inputGroupPrepend"
                        required
                        onChange={(text) =>
                          setNotMemberPropertyAddress(text.target.value)
                        }
                        value={notMemberPropertyAddress}
                      />
                    </div>
                  </div>
                )}
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group
                as={Col}
                md="6"
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


            <Row style={{ marginTop: 20 }}>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Agendar proximo pago</Form.Label>
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
            </Row>

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
          </Form>
        </Card>
      </Row>
    </Fragment>
  );
}
