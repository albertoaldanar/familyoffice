import React, { Fragment, useState } from "react";
import { Button, Card, Col, Table, Row, Nav, Form, Tab } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";
import Select from "react-select";
import { providers } from "./providersData";
import { formatCompany } from "../accounting/companyUtils";
import { companies } from "../accounting/accountingData";
import { realstateData } from "../../investments/realState/realStateData";
import { otherWealthData } from "../../governance/wealthStructure/wealthStructureData";
import { formatRealstateData, formatVehicleData } from "../payments/paymentUtils";
import { formatBankAccounts, formatContainedAssets, formatPrivateEquity } from "../../governance/wealthStructure/wealthStructureUtils";
import { formatMember } from "../../governance/councilAndCommittee/councilAndCommitteeUtils";
import { OptionsProvider } from './providersConst';

export default function ProviderDescription() {
  const params = useParams();
  const navigate = useNavigate();
  const providerCategorySelected = providers.find(
    (prov) => prov.id === Number(params.id)
  );
  const providerSelected = providerCategorySelected.proveedores.find(
    (acc) => acc.id === Number(params.providerId)
  );

  if (!providerSelected) {
    return <p>Not Found</p>;
  }

  if (!providerCategorySelected) {
    return <p>Not Found</p>;
  }

  const companiesList = formatCompany(companies);
  const realStateList = formatRealstateData(realstateData);
  const bankAccountsList = formatBankAccounts(otherWealthData.bankAccounts);
  const vehicleList = formatVehicleData(otherWealthData.vehicles);
  const artAndOthersList = formatMember(otherWealthData.artAndOthers);
  const privateEquityList = formatPrivateEquity(otherWealthData.privateEquity);
  const [isProviderMemberIC, setIsProviderMemberIC] = useState(providerSelected.isMemberIC);
  const [isProviderisMemberFC, setIsProviderisMemberFC] = useState(providerSelected.isMemberFC);
  const [providerName, setProviderName] = useState(providerSelected.nombre);
  const [providerCompany, setProviderCompany] = useState(providerSelected.empresa);
  const [location, setLocation] = useState(providerSelected.location);
  const [phone, setPhone] = useState(providerSelected.telefono);
  const [email, setEmail] = useState(providerSelected.correo);
  const [role, setRole] = useState(providerSelected.puesto);
  const [providerType, setProviderType] = useState({
    label: providerSelected.type,
    value: providerSelected.type
  });

  const [companiesContained, setCompaniesContained] = useState(
    formatContainedAssets(providerSelected.linkedAssets, "company")
  );
  const [realStateContained, setRealStateContained] = useState(
    formatContainedAssets(providerSelected.linkedAssets, "realState")
  );
  const [bankAccountsContained, setBankAccountsContained] = useState(
    formatContainedAssets(providerSelected.linkedAssets, "bankAccount")
  );
  const [vehiclesContained, setVehiclesContained] = useState(
    formatContainedAssets(providerSelected.linkedAssets, "vehicle")
  );
  const [artContained, setArtContained] = useState(
    formatContainedAssets(providerSelected.linkedAssets, "artAndOthers")
  );
  const [privateEquityContained, setPrivateEquityContained] = useState(
    formatContainedAssets(providerSelected.linkedAssets, "privateEquity")
  );

  function addEllipsis(str: string): string {
    if (str.length > 20) {
      return str.substring(0, 20) + "...";
    } else {
      return str;
    }
  }

  const renderInfo = () => {
    return (
      <>
          <Row style={{ marginBottom: 10, marginTop: -5}} >
            <Form.Group className="mb-3 form-group">
              <Form.Check
                required
                checked={isProviderisMemberFC}
                style={{fontSize: 13, color: 'gray'}}
                onChange={(e) => setIsProviderisMemberFC(e.target.checked)}
                label={`Este proveedor es parte del consejo Familiar`}
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Form.Group className="mb-3 form-group" style={{marginTop: -13}}>
              <Form.Check
                required
                style={{fontSize: 13, color: 'gray'}}
                checked={isProviderMemberIC}
                onChange={(e) => setIsProviderMemberIC(e.target.checked)}
                label={`Este proveedor es parte del comite de inversión`}
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
          </Row>
        <Row>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Nombre de proveedor o contacto</Form.Label>
            <Form.Control
              type="numeric"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setProviderName(text.target.value)}
              value={providerName}
            />
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Empresa</Form.Label>
            <Form.Control
              type="numeric"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setProviderCompany(text.target.value)}
              value={providerCompany}
            />
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Tipo de proveedor</Form.Label>
            <Select
              options={OptionsProvider}
              value={providerType}
              classNamePrefix="Select2"
              className="multi-select"
              onChange={setProviderType}
            />
          </Form.Group>
        </Row>
        
        <Row style={{marginTop: 20}}>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Rol o puesto</Form.Label>
            <Form.Control
              type="numeric"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setRole(text.target.value)}
              value={role}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="numeric"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setPhone(text.target.value)}
              value={phone}
            />
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="numeric"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setEmail(text.target.value)}
              value={email}
            />
          </Form.Group>
        </Row>
        <Row style={{marginTop: 20}}>
          <Form.Group
            as={Col}
            md="8"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Ubicación</Form.Label>
            <Form.Control
              type="numeric"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setLocation(text.target.value)}
              value={location}
            />
          </Form.Group>
        </Row>
      </>
    )
  }

  const renderSelectAssetsContained = () => {
    return (
      <div style={{marginBottom: 150}}>
        <Row style={{marginBottom: -10}}>
          <Form.Group
            as={Col}
            md="8"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Bienes y activos relacionados con este proveedor</Form.Label>
            <p style={{color: 'gray', fontSize: 12, marginTop: -7}}>Al vincular a un activo a este proveedor, este aparecera en la lista de contactos en la descripción de dicho activo.</p>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <p style={{ color: "gray", fontSize: 12 }}>Empresas</p>
            <MultiSelect
              options={companiesList}
              value={companiesContained}
              onChange={setCompaniesContained}
              labelledBy="Select"
              overrideStrings={{
                selectSomeItems: "Selecciona empresas",
                allItemsAreSelected: "Todos los miembros",
                selectAll: "Seleccionar todos",
              }}
              disableSearch
            />
            {companiesContained.length > 0
              ? companiesContained.map((company) => {
                  return (
                    <p
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                        marginTop: 5,
                        fontSize: 12,
                      }}
                    >
                      {/*// @ts-ignore */}
                      <Link to={`${import.meta.env.BASE_URL
                        }administration/company/${company.value}/company`}
                      >
                        {company.label}
                      </Link>
                    </p>
                  );
                })
              : null}
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <p style={{ color: "gray", fontSize: 12 }}>Bienes raices</p>
            <MultiSelect
              options={realStateList}
              value={realStateContained}
              onChange={setRealStateContained}
              labelledBy="Select"
              overrideStrings={{
                selectSomeItems: "Selecciona bienes raices",
                allItemsAreSelected: "Todos los miembros",
                selectAll: "Seleccionar todos",
              }}
              disableSearch
            />
            {realStateContained.length > 0
              ? realStateContained.map((realState) => {
                  return (
                    <p
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                        marginTop: 5,
                        fontSize: 12,
                      }}
                    >
                      {/*// @ts-ignore */}
                      <Link to={`${import.meta.env.BASE_URL
                        }governance/wealthItem/type/realState/id/${
                          realState.value
                        }`}
                      >
                        {realState.label}
                      </Link>
                    </p>
                  );
                })
              : null}
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <p style={{ color: "gray", fontSize: 12 }}>Cuentas bancarias</p>
            <MultiSelect
              options={bankAccountsList}
              value={bankAccountsContained}
              onChange={setBankAccountsContained}
              labelledBy="Select"
              overrideStrings={{
                selectSomeItems: "Selecciona cuentas bancarias",
                allItemsAreSelected: "Todos los miembros",
                selectAll: "Seleccionar todos",
              }}
              disableSearch
            />
            {bankAccountsContained.length > 0
              ? bankAccountsContained.map((bankAccount) => {
                  return (
                    <p
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                        marginTop: 5,
                        fontSize: 12,
                      }}
                    >
                      {/*// @ts-ignore */}
                      <Link to={`${import.meta.env.BASE_URL
                        }governance/wealthItem/type/bankAccount/id/${
                          bankAccount.value
                        }`}
                      >
                        {bankAccount.label}
                      </Link>
                    </p>
                  );
                })
              : null}
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <p style={{ color: "gray", fontSize: 12 }}>Vehiculos</p>
            <MultiSelect
              options={vehicleList}
              value={vehiclesContained}
              onChange={setVehiclesContained}
              labelledBy="Select"
              overrideStrings={{
                selectSomeItems: "Selecciona vehiculos",
                allItemsAreSelected: "Todos los miembros",
                selectAll: "Seleccionar todos",
              }}
              disableSearch
            />
            {vehiclesContained.length > 0
              ? vehiclesContained.map((vehicle) => {
                  return (
                    <p
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                        marginTop: 5,
                        fontSize: 12,
                      }}
                    >
                      {/*// @ts-ignore */}
                      <Link to={`${import.meta.env.BASE_URL
                        }governance/wealthItem/type/vehicle/id/${
                          vehicle.value
                        }`}
                      >
                        {vehicle.label}
                      </Link>
                    </p>
                  );
                })
              : null}
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <p style={{ color: "gray", fontSize: 12 }}>Arte y otros</p>
            <MultiSelect
              options={artAndOthersList}
              value={artContained}
              onChange={setArtContained}
              labelledBy="Select"
              overrideStrings={{
                selectSomeItems: "Selecciona arte y otros",
                allItemsAreSelected: "Todos los miembros",
                selectAll: "Seleccionar todos",
              }}
              disableSearch
            />
            {artContained.length > 0
              ? artContained.map((artAndOthers) => {
                  return (
                    <p
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                        marginTop: 5,
                        fontSize: 12,
                      }}
                    >
                      {/*// @ts-ignore */}
                      <Link to={`${import.meta.env.BASE_URL
                        }governance/wealthItem/type/artAndOthers/id/${
                          artAndOthers.value
                        }`}
                      >
                        {artAndOthers.label}
                      </Link>
                    </p>
                  );
                })
              : null}
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <p style={{ color: "gray", fontSize: 12 }}>
              Inversiones capital privado
            </p>
            <MultiSelect
              options={privateEquityList}
              value={privateEquityContained}
              onChange={setPrivateEquityContained}
              labelledBy="Select"
              overrideStrings={{
                selectSomeItems: "Selecciona capital privado",
                allItemsAreSelected: "Todos los miembros",
                selectAll: "Seleccionar todos",
              }}
              disableSearch
            />
            {privateEquityContained.length > 0
              ? privateEquityContained.map((privateEquity) => {
                  return (
                    <p
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                        marginTop: 5,
                        fontSize: 12,
                      }}
                    >
                      {/*// @ts-ignore */}
                      <Link to={`${import.meta.env.BASE_URL}governance/wealthItem/type/privateEquity/id/${
                          privateEquity.value
                        }`}
                      >
                        {privateEquity.label}
                      </Link>
                    </p>
                  );
                })
              : null}
          </Form.Group>
        </Row>
      </div>
    );
  };

  const renderProviderServices = () => {
    return (
      <>
        {/* Always rendered section */}
        <dl className="product-gallery-data1">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <p>Registro de servicios</p>
            <Button
              style={{
                marginRight: 10,
                height: 30
              }}
              size="sm"
              className="custom-button"
            >
              {/*// @ts-ignore */}
              <Link style={{ color: 'white' }} to={`${import.meta.env.BASE_URL}administration/providerNewService/${providerCategorySelected.id}/provider/${providerSelected.id}`}>
                + Añadir registro de servicio
              </Link>
            </Button>
          </div>
        </dl>
  
        {providerSelected.registroDeServicios.length ? (
          <div className="table-responsive" style={{ marginTop: 15 }}>
            <Table className="table border text-nowrap text-md-nowrap mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Fecha</th>
                  <th>Concepto</th>
                  <th>Documento o Entregable</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {providerSelected.registroDeServicios.map((idx, tb8) => (
                  <tr key={tb8}>
                    <td>{idx.fecha}</td>
                    <td>{idx.concepto}</td>
                    <td>{addEllipsis(idx.documentoOEntrgable)}</td>
                    <td
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                      }}
                    >
                      {/*// @ts-ignore */}
                      <Link to={`${import.meta.env.BASE_URL}administration/providerService/${providerCategorySelected.id}/provider/${providerSelected.id}/service/${idx.id}`}>
                        Ver
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <p style={{marginTop: 20, fontSize: 13, color: 'gray' }}>
            Aún no se ha registrado servicios para este proveedor
          </p>
        )}
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
          </Link> Proveedor de servicio {providerCategorySelected.categoria} - {providerSelected.nombre}
          </h4>

          <Form noValidate validated={false} onSubmit={() => {}}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="info">
              <div style={{ padding: 20, paddingBottom: 0, paddingLeft: 10 }}>
                <div className="tabs-menu1">
                  <Nav as="ul" className="nav panel-tabs">
                    <Nav.Item as="li" style={{ marginRight: 10 }}>
                      <Nav.Link eventKey="info">
                      <i
                        style={{ marginRight: 9 }}
                        className="fe fe-file-text text-black fs-13"
                      ></i>
                        Información 
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" style={{ marginRight: 10 }}>
                      <Nav.Link eventKey="assetsRelated">
                        <i
                          style={{ marginRight: 9 }}
                          className="fe fe-bar-chart text-black fs-13"
                        ></i>
                        Activos relacionados
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" style={{ marginRight: 10 }}>
                      <Nav.Link eventKey="services" href="#">
                        <i
                          style={{ marginRight: 9 }}
                          className="fe fe-rotate-ccw text-black fs-13"
                        ></i>
                        Historial de servicios
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>

              <Tab.Content className="panel-body" style={{marginTop: 10}}>
                <Tab.Pane eventKey="info">{renderInfo()}</Tab.Pane>
                <Tab.Pane eventKey="assetsRelated">{renderSelectAssetsContained()}</Tab.Pane>
                <Tab.Pane eventKey="services">
                  {renderProviderServices()}
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>

            <Button
                style={{ position: "absolute", right: 25, bottom: 20 }}
                className="custom-button"
                type="submit"
              >
                Guardar
              </Button>
          </Form>
        </Card>
      </Row>
    </Fragment>
  );
}
