import React, { Fragment, useState } from "react";
import {
  Button,
  Card,
  Col,
  Row,
  Form,
  InputGroup,
  Tab,
  Nav,
} from "react-bootstrap";
import Select from "react-select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
//@ts-ignore
import download from "../../../assets/images/familyOffice/download.png";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
//@ts-ignore
import FileUpload from "../../../../administration/accounting/components/fileUpload";
import { otherWealthData } from "../../wealthStructureData";
import NotFoundSearch from "../../../../shared/notFoundSearch";
import FileView from "../../../../administration/accounting/components/fileView";
import { mantenimientos, creditos, seguros } from "../../../../administration/payments/paymentsData";
import { arrendamientos } from "../../../../administration/collecting/collectingData";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function VehicleItem(props) {
  const vehicleSelected = otherWealthData.vehicles.find(
    (vehicle) => vehicle.id === Number(props.id)
  );

  console.log("vehicle selected", vehicleSelected);

  if (!vehicleSelected) {
    return <NotFoundSearch />;
  }

  const [model, setModel] = useState(vehicleSelected.model);
  const [brand, setBrand] = useState(vehicleSelected.brand);
  const [year, setYear] = useState(vehicleSelected.year);
  const [color, setColor] = useState(vehicleSelected.color);
  const [platesNumber, setPlatesNumber] = useState(
    vehicleSelected.platesNumber
  );
  const [price, setPrice] = useState(vehicleSelected.value);
  const [invoice, setInvoice] = useState("");
  const [currency, setCurrency] = useState({
    value: vehicleSelected.currency,
    label: vehicleSelected.currency,
  });

  const Optionscurrency = [
    { value: "MXN", label: "MXN" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
  ];

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
            <Form.Label>Modelo</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder=""
                aria-describedby="inputGroupPrepend"
                required
                onChange={(text) => setModel(text.target.value)}
                value={model}
              />
              <Form.Control.Feedback type="invalid">
                Favor de añadir el modelo
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Marca</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setBrand(text.target.value)}
              value={brand}
            />
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Año</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setYear(text.target.value)}
              value={year}
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
            controlId="validationCustomUsername"
            className="form-group"
          >
            <Form.Label>Valor de compra</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend-1">$</InputGroup.Text>
              <Form.Control
                type="numeric"
                aria-describedby="inputGroupPrepend"
                required
                onChange={(text) => setPrice(text.target.value)}
                value={price}
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

        <Row style={{ marginTop: 40 }}>
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustomUsername"
            className="form-group"
          >
            <Form.Label>Color</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                aria-describedby="inputGroupPrepend"
                required
                onChange={(text) => setColor(text.target.value)}
                value={color}
              />
              <Form.Control.Feedback type="invalid">
                Favor de añadir el color
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustomUsername"
            className="form-group"
          >
            <Form.Label>Número de Placas</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                aria-describedby="inputGroupPrepend"
                required
                onChange={(text) => setPlatesNumber(text.target.value)}
                value={platesNumber}
              />
              <Form.Control.Feedback type="invalid">
                Favor de añadir el número de placas
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
      </div>
    );
  };

  const renderDocuments = () => {
    return (
      <Row>
        <Form.Group as={Col} md="4" className="form-group">
          <Form.Label className="form-label my-3">Factura</Form.Label>
          {vehicleSelected.invoice ? (
            <FileView
              title="Invoice"
              fileName={vehicleSelected.invoice}
            />
          ) : (
            <FileUpload />
          )}
        </Form.Group>

        <Form.Group as={Col} md="4" className="form-group">
          <Form.Label className="form-label my-3">Tarjeta de circulación</Form.Label>
          {vehicleSelected.circulationCard ? (
            <FileView
              title="Tarjeta de circulación"
              fileName={vehicleSelected.circulationCard}
            />
          ) : (
            <FileUpload />
          )}
        </Form.Group>
      </Row>
    );
  };

  const renderResponsabilities = () => {
    const mantainanceLinked = mantenimientos.find(mantainence => mantainence.linkedItemId === Number(props.id) && mantainence.tipo === 'Vehicular');
    const creditLinked = creditos.find(credit => credit.linkedItemId === Number(props.id) && credit.tipoCredito === 'Vehicular');
    const insuranceLinked = seguros.find(seg => seg.linkedItemId === Number(props.id) && seg.tipo === 'Vehicular');
    const rentLinked = arrendamientos.find(arr => arr.linkedItemId === Number(props.id) && arr.tipo === 'Vehicular');

    return (
      <div style={{display: 'flex', flexDirection: 'row', marginLeft: 10}}>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', width: '25%'}}>
          <p style={{fontSize: 15, fontWeight: '700', fontStyle: 'italic'}}>Pagos</p>


          <div style={{marginBottom: 20}}>
            <p style={{fontSize: 13, marginRight: 10,  marginBottom: -5}}>Mantenimiento:</p>
            {
              mantainanceLinked ? (
                  <Link
                    // @ts-ignore */
                    to={`${import.meta.env.BASE_URL}administration/mantainanceDescription/${mantainanceLinked.id}`}
                    style={{
                      fontSize: 12,
                      textDecoration: "underline",
                      cursor: "pointer",
                      color: "#5488d2",
                    }}
                  >
                    Ver pagos de mantenimiento
                  </Link>
              ) : (
                <Link
                // @ts-ignore */
                to={`${import.meta.env.BASE_URL}administration/mantainanceCreate/type/vehicle/itemId/${vehicleSelected.id}`}
                style={{
                  fontSize: 12,
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "gray",
                }}
              >
                + Administrar mantenimientos
              </Link>
              )
            }
          </div>
          <div style={{marginBottom: 20}}>
            <p style={{fontSize: 13, marginRight: 10,  marginBottom: -5}}>Credito:</p>
            {
              creditLinked ? (
                  <Link
                    // @ts-ignore */
                    to={`${import.meta.env.BASE_URL}administration/debtDescription/${creditLinked.id}`}
                    style={{
                      fontSize: 12,
                      textDecoration: "underline",
                      cursor: "pointer",
                      color: "#5488d2",
                    }}
                  >
                    Ver pago de credito vehicular
                  </Link>
              ) : (
                <Link
                // @ts-ignore */
                to={`${import.meta.env.BASE_URL}administration/debtCreate/type/vehicle/itemId/${vehicleSelected.id}`}
                style={{
                  fontSize: 12,
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "gray",
                }}
              >
                + Administrar credito
              </Link>
              )
            }
           </div>
           <div style={{marginBottom: 20}}>
            <p style={{fontSize: 13, marginRight: 10, marginBottom: -5}}>Seguro:</p>
            {
              insuranceLinked ? (
                  <Link
                    // @ts-ignore */
                    to={`${import.meta.env.BASE_URL}administration/insuraceDescription/${insuranceLinked.id}`}
                    style={{
                      fontSize: 12,
                      textDecoration: "underline",
                      cursor: "pointer",
                      color: "#5488d2",
                    }}
                  >
                    Ver pagos de seguro vehicular
                  </Link>
              ) : (
                <Link
                  // @ts-ignore */
                  to={`${import.meta.env.BASE_URL}administration/insuranceCreate/type/vehicle/itemId/${vehicleSelected.id}`}
                  style={{
                    fontSize: 12,
                    textDecoration: "underline",
                    cursor: "pointer",
                    color: "gray",
                  }}
                >
                  + Administrar seguro
                </Link>
              )
            }
          </div>
        </div>
       
        <div style={{display: 'flex', flexDirection: 'column', marginLeft: 60 }}>
        <p style={{fontSize: 15, fontWeight: '700', fontStyle: 'italic'}}>Cobranza</p>

          <div style={{marginBottom: 20}}>
            <p style={{fontSize: 13, marginRight: 10, marginBottom: -5}}>Arrendamiento:</p>
            {
              rentLinked ? (
                <Link
                  // @ts-ignore */
                  to={`${import.meta.env.BASE_URL}administration/rentDescription/${rentLinked.id}`}
                  style={{
                    fontSize: 13,
                    textDecoration: "underline",
                    cursor: "pointer",
                    color: "#5488d2",
                  }}
                >
                  Cobranza de arrendamiento vehicular
                </Link>
              ) : (
                <Link
                  // @ts-ignore */
                  to={`${import.meta.env.BASE_URL}administration/rentCreate/type/vehicle/itemId/${vehicleSelected.id}`}
                  style={{
                    fontSize: 12,
                    textDecoration: "underline",
                    cursor: "pointer",
                    color: "gray",
                  }}
                >
                  + Administrar arrendamiento
                </Link>
              )
            }
          </div>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      <Row style={{ marginTop: 10, padding: 20 }}>
        <Card.Title style={{ marginBottom: 10 }}>
          Vehiculo - {vehicleSelected.brand} {vehicleSelected.model}
        </Card.Title>

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
                    Información
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" style={{ marginRight: 10 }}>
                  <Nav.Link eventKey="second">Documentos</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" style={{ marginRight: 10 }}>
                  <Nav.Link eventKey="third">Responsabilidades</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>

          <Tab.Content className="panel-body">
            <Tab.Pane eventKey="first">{renderDescription()}</Tab.Pane>

            <Tab.Pane eventKey="second">
              {renderDocuments()}
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              {renderResponsabilities()}
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
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
      </Row>
    </Fragment>
  );
}
