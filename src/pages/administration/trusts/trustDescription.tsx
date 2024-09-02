import React, { Fragment, useState } from "react";
import {
  Button,
  Card,
  Col,
  Row,
  Form,
  InputGroup,
  Table,
  Tab,
  Nav,
} from "react-bootstrap";
import Select from "react-select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
//@ts-ignore
import { MultiSelect } from "react-multi-select-component";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import FileUpload from "../accounting/components/fileUpload";
import NotFoundSearch from "../../shared/notFoundSearch";
import FileView from "../accounting/components/fileView";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { family } from "../../governance/familyStructure/familyStructureData";
import { companies, fideicomisos } from "../accounting/accountingData";
import { renderAssetTypeIcon } from "../../governance/familyStructure/familyStructureUtils";
import { realstateData } from "../../investments/realState/realStateData";
import { renderFlag } from "../accounting/companyUtils";
import { otherWealthData } from "../../governance/wealthStructure/wealthStructureData";
import { formatCompany } from "../accounting/companyUtils";
import { formatMember } from "../../governance/councilAndCommittee/councilAndCommitteeUtils";
import { countryOptions } from "../accounting/companyUtils";
import { formateDateForUI } from "../payments/paymentUtils";
import { formatRealstateData } from "../payments/paymentUtils";
import {
  formatBankAccounts,
  formatPrivateEquity,
  formatContainedAssets,
} from "../../governance/wealthStructure/wealthStructureUtils";
import { formatVehicleData } from "../payments/paymentUtils";

export default function TrustDescription(props) {
  const params = useParams();
  const trustSelected = fideicomisos.find(
    (trust) => trust.id === Number(params.id)
  );

  if (!trustSelected) {
    return <NotFoundSearch />;
  }

  const trustDateFormatted = formateDateForUI(trustSelected.trustCreation);

  const [trustNumber, setTrustNumber] = useState(trustSelected.trustNumber);
  const [trustBank, setTrustBank] = useState(trustSelected.trusteeBank);
  const [trustee, setTrustee] = useState(trustSelected.trustee);
  const [purpose, setPurpose] = useState(trustSelected.purpose);
  const [ownerFamilyMembers, setOwnerFamilyMembers] = useState(
    formatMember(trustSelected.trustors)
  );
  const [companiesContained, setCompaniesContained] = useState(
    formatContainedAssets(trustSelected.content, "company")
  );
  const [realStateContained, setRealStateContained] = useState(
    formatContainedAssets(trustSelected.content, "realState")
  );
  const [bankAccountsContained, setBankAccountsContained] = useState(
    formatContainedAssets(trustSelected.content, "bankAccount")
  );
  const [vehiclesContained, setVehiclesContained] = useState(
    formatContainedAssets(trustSelected.content, "vehicle")
  );
  const [artContained, setArtContained] = useState(
    formatContainedAssets(trustSelected.content, "artAndOthers")
  );
  const [privateEquityContained, setPrivateEquityContained] = useState(
    formatContainedAssets(trustSelected.content, "privateEquity")
  );
  const [country, setCountry] = useState({
    label: trustSelected.country,
    value: trustSelected.country,
  });
  const [creationDate, setCreationDate] = useState<Dayjs | null>(
    dayjs(trustDateFormatted)
  );

  const [trustType, setTrustType] = useState({
    value: trustSelected.trustType,
    label: trustSelected.trustType,
  });

  console.log("companies container", companiesContained);
  const familyList = formatMember(family.members);

  const companiesList = formatCompany(companies);
  const realStateList = formatRealstateData(realstateData);
  const bankAccountsList = formatBankAccounts(otherWealthData.bankAccounts);
  const vehicleList = formatVehicleData(otherWealthData.vehicles);
  const artAndOthersList = formatMember(otherWealthData.artAndOthers);
  const privateEquityList = formatPrivateEquity(otherWealthData.privateEquity);

  const OptionsTrustType = [
    {
      value: "Patrimonial recovable con derecho a reversión",
      label: "Patrimonial recovable con derecho a reversión",
    },
    { value: "Testamentario", label: "Testamentario" },
    { value: "Estructurado", label: "Estructurado" },
  ];

  const renderSelectAssetsContained = () => {
    return (
      <div>
        <Row>
          <Form.Group
            as={Col}
            md="8"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Bienes y activos contenidos en fideicomiso</Form.Label>
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
                selectSomeItems: "Selecciona empresas accionistas",
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
                selectSomeItems: "Selecciona cuentas bancarias",
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

  const renderAssetList = () => {
    if(trustSelected.content.length > 0){
      return (
        <div className="table-responsive" style={{ marginTop: 15, marginBottom: 50 }}>
          <Table className="table border text-nowrap text-md-nowrap  mb-0">
            <thead className="bg-light">
              <tr>
                <th>Tipo de activo</th>
                <th>Nombre</th>
                <th>País</th>
                <th>Valor de activo</th>
                <th>Porcentaje de propiedad</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {trustSelected.content.map((idx, tb8) => (
                <tr key={tb8}>
                  {renderAssetTypeIcon(idx.type)}
                  <td>{idx.name}</td>
                  <td>{renderFlag(idx.country)}</td>
                  <td>${idx.value} {idx.currency}</td>
                  <td style={{textAlign: 'center'}}>{idx.pct}%</td>
                  <td
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "#5488d2",
                    }}
                  >
                    {
                      idx.type === 'company' ? (
                        // @ts-ignore
                        <Link to={`${import.meta.env.BASE_URL}administration/company/${idx.coreId}/company`}>
                          Ver
                        </Link>
                      ) : (
                        // @ts-ignore
                        <Link to={`${import.meta.env.BASE_URL}governance/wealthItem/type/${idx.type}/id/${idx.coreId}`}>
                          Ver
                        </Link>
                      )
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    } return (
      <div style={{alignContent: 'center', alignSelf: 'center', justifyContent: 'center', alignItems: 'center'}}>
        <i className="fa fa-line-chart" style={{color: '#D3D3D3', marginRight: 10, fontSize: 50, alignSelf: 'center', marginBottom: 20}}></i>
       
        <p style={{
          color: "gray",
          fontSize: 12,
          marginRight: 4,
          marginBottom: -6

        }}>
          Aún no hay activos contenidos registrados en este fideicomiso
        </p>
      </div>
    )
  };

  const renderContract = () => {
    return (
      <Row>
        <Form.Group as={Col} md="6" className="form-group">
          <Form.Label>Contrato de fideicomiso</Form.Label>
          {trustSelected.contract ? (
            <FileView fileName="Fideicomiso" title="Fideicomiso" />
          ) : (
            <FileUpload />
          )}
        </Form.Group>
      </Row>
    );
  };

  const renderInfo = () => {
    return (
      <div>
        <Row style={{ marginBottom: 20 }}>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Numero de fideicomiso</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="numeric"
                placeholder=""
                aria-describedby="inputGroupPrepend"
                required
                onChange={(text) => setTrustNumber(text.target.value)}
                value={trustNumber}
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
            <Form.Label>Fiduciario (Banco)</Form.Label>
            <Form.Control
              type="numeric"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setTrustBank(text.target.value)}
              value={trustBank}
            />
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Tipo de fideicomiso</Form.Label>
            <Select
              options={OptionsTrustType}
              classNamePrefix="Select2"
              className="multi-select"
              onChange={(value) => setTrustType(value)}
              placeholder=""
              value={trustType}
            />
          </Form.Group>
        </Row>

        <Row style={{ marginTop: 20, marginBottom: -10 }}>
          <Form.Group
            as={Col}
            md="8"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Participantes en fideicomiso</Form.Label>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <p style={{ color: "gray", fontSize: 12 }}>
              Fideicomitentes de la familia (beneficiarios)
            </p>
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
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <p style={{ color: "gray", fontSize: 12 }}>Fideicomisario</p>
            <Form.Control
              type="numeric"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setTrustee(text.target.value)}
              value={trustee}
            />
          </Form.Group>
        </Row>

        <Row style={{ marginTop: 20 }}>
          <Form.Group
            as={Col}
            md="8"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Finalidad del fideicomiso</Form.Label>
            <Form.Control
              type="numeric"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setPurpose(text.target.value)}
              value={purpose}
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
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Fecha de creación de fideicomiso</Form.Label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  format="DD/MM/YYYY"
                  onChange={(value) => setCreationDate(value)}
                  value={dayjs(creationDate)}
                  defaultValue={dayjs(creationDate)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Form.Group>
        </Row>
      </div>
    );
  };

  return (
    <Fragment>
      <Row>
        <Card style={{ padding: 30, marginTop: 20, minHeight: 500 }}>
          <Card.Title style={{ marginBottom: 0 }}>
            Fideicomiso {trustSelected.trustNumber} {trustSelected.trusteeBank}
          </Card.Title>
          <Form noValidate validated={false} onSubmit={() => {}}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="third">
              <div style={{ padding: 20, paddingBottom: 0, paddingLeft: 10 }}>
                <div className="tabs-menu1">
                  <Nav as="ul" className="nav panel-tabs">
                    <Nav.Item as="li" style={{ marginRight: 10 }}>
                      <Nav.Link eventKey="third">Información </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" style={{ marginRight: 10 }}>
                      <Nav.Link eventKey="second">Contrato </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" style={{ marginRight: 10 }}>
                      <Nav.Link eventKey="fifth" href="#">
                        Contenido de fideicomiso
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>

              <Tab.Content className="panel-body" style={{marginTop: 10}}>
                <Tab.Pane eventKey="third">{renderInfo()}</Tab.Pane>
                <Tab.Pane eventKey="second">{renderContract()}</Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  {renderAssetList()}
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
              <Button variant="primary" className=" mb-1" type="submit">
                Guardar
              </Button>
            </div>
          </Form>
        </Card>
      </Row>
    </Fragment>
  );
}
