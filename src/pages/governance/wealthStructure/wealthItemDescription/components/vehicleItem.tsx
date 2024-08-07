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
//@ts-ignore
import FileUpload from "../../../../administration/accounting/components/fileUpload";
import { otherWealthData } from "../../wealthStructureData";
import NotFoundSearch from "../../../../shared/notFoundSearch";
import FileView from "../../../../administration/accounting/components/fileView";
import { mantenimientos, creditos, seguros } from "../../../../administration/payments/paymentsData";
import { arrendamientos } from "../../../../administration/collecting/collectingData";
import { Link } from "react-router-dom";
import { family } from "../../../familyStructure/familyStructureData";
import { companies } from "../../../../administration/accounting/accountingData";
import { formatCompany, formatOwnersData } from "../../../../administration/accounting/companyUtils";
import { formatMember } from "../../../councilAndCommittee/councilAndCommitteeUtils";
import { MultiSelect } from "react-multi-select-component";
import { countryOptions } from "../../../../administration/accounting/companyUtils";
import { useParams } from "react-router-dom";

export default function VehicleItem(props) {
  const vehicleSelected = otherWealthData.vehicles.find(
    (vehicle) => vehicle.id === Number(props.id)
  );

  if (!vehicleSelected) {
    return <NotFoundSearch />;
  }
  
  const familyList = formatMember(family.members);
  const companiesList = formatCompany(companies);
  const ownerData = formatOwnersData(vehicleSelected);

  const [model, setModel] = useState(vehicleSelected.model);
  const [brand, setBrand] = useState(vehicleSelected.brand);
  const [year, setYear] = useState(vehicleSelected.year);
  const [color, setColor] = useState(vehicleSelected.color);
  const [ownerFamilyMembers, setOwnerFamilyMembers] = useState(ownerData.family);
  const [ownerCompanies, setOwnerCompanies] = useState(ownerData.company);
  const [platesNumber, setPlatesNumber] = useState(
    vehicleSelected.platesNumber
  );
  const [price, setPrice] = useState(vehicleSelected.value);
  
  const [country, setCountry] = useState({
    label: vehicleSelected.country, 
    value: vehicleSelected.country
  });

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
        {
          vehicleSelected.containedIntrusts.length ? (
            <Row style={{marginTop: -10}}>
              <Form.Label>Vehiculo contenido en los siguientes fideicomisos:</Form.Label>
              {vehicleSelected.containedIntrusts.map(trust => {
                  return (
                    <p
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                        fontSize: 12,
                        marginTop: -6
                      }}
                    >
                      {/*// @ts-ignore */}
                      <Link to={`${import.meta.env.BASE_URL}administration/trustDescription/${trust.id}`}>
                        {trust.name}
                      </Link>
                    </p>
                  );
              })}
            </Row>
          ): null
        }
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

  const handleInputChange = (memberIndex, attributeName, value, type) => {
    if (type === "family") {
      setOwnerFamilyMembers((prevState) => {
        const updatedMembers = [...prevState];
        updatedMembers[memberIndex] = {
          ...updatedMembers[memberIndex],
          [attributeName]: value,
        };
        return updatedMembers;
      });
    } else if (type === "company") {
      setOwnerCompanies((prevState) => {
        const updatedCompanies = [...prevState];
        updatedCompanies[memberIndex] = {
          ...updatedCompanies[memberIndex],
          [attributeName]: value,
        };
        return updatedCompanies;
      });
    }
  };

  const renderOwners = () => {
    return (
      <>
        <Row>
          <Form.Group
            as={Col}
            md="8"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Porcentajes de propietarios</Form.Label>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <p style={{ color: "gray", fontSize: 13 }}>Miembros familiares</p>
            <MultiSelect
              options={familyList}
              value={ownerFamilyMembers}
              onChange={setOwnerFamilyMembers}
              labelledBy="Select"
              overrideStrings={{
                selectSomeItems: "Selecciona miembros accionistas",
                allItemsAreSelected: "Todos los miembros",
                selectAll: "Seleccionar todos",
              }}
              disableSearch
            />

            {renderOptionsSelected("family")}
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <p style={{ color: "gray", fontSize: 13 }}>Empresas</p>
            <MultiSelect
              options={companiesList}
              value={ownerCompanies}
              onChange={setOwnerCompanies}
              labelledBy="Select"
              overrideStrings={{
                selectSomeItems: "Selecciona empresas accionistas",
                allItemsAreSelected: "Todos los miembros",
                selectAll: "Seleccionar todos",
              }}
              disableSearch
            />

            {renderOptionsSelected("company")}
          </Form.Group>
        </Row>
      </>
    );
  };

  const renderOptionsSelected = (type) => {
    if (type === "family") {
      if (ownerFamilyMembers.length) {
        return ownerFamilyMembers.map((member, index) => {
          return (
            <div key={index} style={{ marginTop: 15 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div></div>
                <p
                  style={{
                    marginTop: 3,
                    fontWeight: "500",
                    fontSize: 13,
                    marginBottom: -3,
                  }}
                >
                  {member.label}
                </p>
              </div>

              <p
                style={{
                  color: "gray",
                  fontSize: 12,
                  marginTop: 3,
                  marginBottom: 4,
                }}
              >
                Porcentaje
              </p>
              <InputGroup hasValidation style={{ marginBottom: 8 }}>
                <Form.Control
                  type="numeric"
                  aria-describedby="inputGroupPrepend-3"
                  required
                  onChange={(e) =>
                    handleInputChange(index, "pct", e.target.value, "family")
                  }
                  value={member.pct || ""}
                />
                <InputGroup.Text id="inputGroupPrepend">%</InputGroup.Text>
              </InputGroup>
            </div>
          );
        });
      }
    } else if (type === "company") {
      if (ownerCompanies.length) {
        return ownerCompanies.map((company, index) => {
          return (
            <div key={index} style={{ marginTop: 15 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div></div>
                <p
                  style={{
                    marginTop: 3,
                    fontWeight: "500",
                    fontSize: 13,
                    marginBottom: -3,
                  }}
                >
                  {company.label}
                </p>
              </div>

              <p
                style={{
                  color: "gray",
                  fontSize: 12,
                  marginTop: 3,
                  marginBottom: 4,
                }}
              >
                Porcentaje
              </p>
              <InputGroup hasValidation style={{ marginBottom: 8 }}>
                <Form.Control
                  type="numeric"
                  aria-describedby="inputGroupPrepend-3"
                  required
                  onChange={(e) =>
                    handleInputChange(index, "pct", e.target.value, "company")
                  }
                  value={company.pct || ""}
                />
                <InputGroup.Text id="inputGroupPrepend">%</InputGroup.Text>
              </InputGroup>
            </div>
          );
        });
      }
    }

    return;
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
                <Nav.Item as="li" style={{ marginRight: 10 }}>
                  <Nav.Link eventKey="fourth">Propietario(s)</Nav.Link>
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
            <Tab.Pane eventKey="fourth">
              {renderOwners()}
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
