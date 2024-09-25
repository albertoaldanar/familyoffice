import React, { Fragment, useState } from "react";
import { Button, Card, Col, Row, Form, InputGroup } from "react-bootstrap";
import Select from "react-select";
import dayjs, { Dayjs } from "dayjs";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";
import { otherWealthData } from "../../governance/wealthStructure/wealthStructureData";
import { companies, fideicomisos } from "../accounting/accountingData";
import { formatCompany } from "../accounting/companyUtils";
import { realstateData } from "../../investments/realState/realStateData";
import {
  formatRealstateData,
  formatVehicleData,
} from "../payments/paymentUtils";
import {
  formatPrivateEquity,
  formatTrust,
} from "../../governance/wealthStructure/wealthStructureUtils";
import { formatBankAccounts } from "../../governance/wealthStructure/wealthStructureUtils";
import { formatMember } from "../../governance/councilAndCommittee/councilAndCommitteeUtils";
import { formatContainedAssets } from "../../governance/wealthStructure/wealthStructureUtils";
import { OptionsProvider } from './providersConst';

export default function ProviderCreate(props) {
  const navigate = useNavigate();
  const companiesList = formatCompany(companies);
  const realStateList = formatRealstateData(realstateData);
  const bankAccountsList = formatBankAccounts(otherWealthData.bankAccounts);
  const vehicleList = formatVehicleData(otherWealthData.vehicles);
  const artAndOthersList = formatMember(otherWealthData.artAndOthers);
  const privateEquityList = formatPrivateEquity(otherWealthData.privateEquity);
  const stockInvestmentList = formatBankAccounts(
    otherWealthData.stockInvestments
  );
  const trustList = formatTrust(fideicomisos);

  const [companyName, setCompanyName] = useState("");
  const [rfc, setRFC] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [companiesContained, setCompaniesContained] = useState([]);
  const [realStateContained, setRealStateContained] = useState([]);
  const [bankAccountsContained, setBankAccountsContained] = useState([]);
  const [vehiclesContained, setVehiclesContained] = useState([]);
  const [artContained, setArtContained] = useState([]);
  const [privateEquityContained, setPrivateEquityContained] = useState([]);
  const [stockInvestmentContained, setStockInvestmentContained] = useState([]);
  const [trustContained, setTrustContained] = useState([]);

  const params = useParams();

  const [providerType, setProviderType] = useState({
    value: "",
    label: "",
  });

  const addType =
    params.type === "consejoFamiliar"
      ? "Consejo Familiar"
      : params.type === "comiteInversion"
      ? "Comite de Inversión"
      : null;

  const renderSelectAssetsContained = () => {
    return (
      <div>
        <Row style={{ marginBottom: 5 }}>
          <Form.Group
            as={Col}
            md="8"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>
              Vinculación de este proveedor a activos de la familia (Opcional){" "}
            </Form.Label>
            <p style={{ color: "gray", fontSize: 12 }}>
              Al vincular a este proveedor a uno o mas activos, este aparecera
              en la lista de contactos en la descripción de cada uno.{" "}
            </p>
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
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <p style={{ color: "gray", fontSize: 12 }}>Fideicomisos</p>
            <MultiSelect
              options={trustList}
              value={trustContained}
              onChange={setTrustContained}
              labelledBy="Select"
              overrideStrings={{
                selectSomeItems: "Selecciona fideicomisos",
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
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <p style={{ color: "gray", fontSize: 12 }}>
              Inversiones bursatiles
            </p>
            <MultiSelect
              options={stockInvestmentList}
              value={stockInvestmentContained}
              onChange={setStockInvestmentContained}
              labelledBy="Select"
              overrideStrings={{
                selectSomeItems: "Selecciona cuentas bancarias",
                allItemsAreSelected: "Todos los miembros",
                selectAll: "Seleccionar todos",
              }}
              disableSearch
            />
          </Form.Group>
        </Row>
      </div>
    );
  };

  // const renderSelectResponsabilitiesContained = () => {
  //   return (
  //     <div>
  //       <Row style={{marginBottom: 5 }}>
  //         <Form.Group
  //           as={Col}
  //           md="8"
  //           controlId="validationCustom01"
  //           className="form-group"
  //         >
  //           <Form.Label>Vinculación de este proveedor a obligaciones de la familia (Opcional) </Form.Label>
  //           <p style={{color: 'gray', fontSize: 12}}>Al vincular a este proveedor a una o mas obligaciones, este aparecera en la lista de contactos en la descripción de cada uno. </p>
  //         </Form.Group>
  //       </Row>
  //       <Row>
  //         <Form.Group
  //           as={Col}
  //           md="4"
  //           controlId="validationCustom01"
  //           className="form-group"
  //         >
  //           <p style={{ color: "gray", fontSize: 12}}>Seguros</p>
  //           <MultiSelect
  //             options={companiesList}
  //             value={companiesContained}
  //             onChange={setCompaniesContained}
  //             labelledBy="Select"
  //             overrideStrings={{
  //               selectSomeItems: "Selecciona empresas accionistas",
  //               allItemsAreSelected: "Todos los miembros",
  //               selectAll: "Seleccionar todos",
  //             }}
  //             disableSearch
  //           />
  //         </Form.Group>

  //         <Form.Group
  //           as={Col}
  //           md="4"
  //           controlId="validationCustom01"
  //           className="form-group"
  //         >
  //           <p style={{ color: "gray", fontSize: 12 }}>Deudas por pagar</p>
  //           <MultiSelect
  //             options={realStateList}
  //             value={realStateContained}
  //             onChange={setRealStateContained}
  //             labelledBy="Select"
  //             overrideStrings={{
  //               selectSomeItems: "Selecciona bienes raices",
  //               allItemsAreSelected: "Todos los miembros",
  //               selectAll: "Seleccionar todos",
  //             }}
  //             disableSearch
  //           />
  //         </Form.Group>

  //         <Form.Group
  //           as={Col}
  //           md="4"
  //           controlId="validationCustom01"
  //           className="form-group"
  //         >
  //           <p style={{ color: "gray", fontSize: 12 }}>Pagos de mantenimiento</p>
  //           <MultiSelect
  //             options={bankAccountsList}
  //             value={bankAccountsContained}
  //             onChange={setBankAccountsContained}
  //             labelledBy="Select"
  //             overrideStrings={{
  //               selectSomeItems: "Selecciona cuentas bancarias",
  //               allItemsAreSelected: "Todos los miembros",
  //               selectAll: "Seleccionar todos",
  //             }}
  //             disableSearch
  //           />
  //         </Form.Group>

  //         <Form.Group
  //           as={Col}
  //           md="4"
  //           controlId="validationCustom01"
  //           className="form-group"
  //         >
  //           <p style={{ color: "gray", fontSize: 12 }}>Pagos de arrendamiento</p>
  //           <MultiSelect
  //             options={vehicleList}
  //             value={vehiclesContained}
  //             onChange={setVehiclesContained}
  //             labelledBy="Select"
  //             overrideStrings={{
  //               selectSomeItems: "Selecciona vehiculos",
  //               allItemsAreSelected: "Todos los miembros",
  //               selectAll: "Seleccionar todos",
  //             }}
  //             disableSearch
  //           />
  //         </Form.Group>
  //       </Row>
  //     </div>
  //   );
  // };

  return (
    <Fragment>
      <Row>
        <Card style={{ padding: 30, marginTop: 20 }}>
          <Card.Title style={{ marginBottom: 10 }}>
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
            Nuevo Registro de proveedor de servicio o contacto
          </Card.Title>
          <Form noValidate validated={false} onSubmit={() => {}}>
            {addType && (
              <p
                style={{
                  color: "gray",
                  marginBottom: 10,
                  fontStyle: "italic",
                  fontSize: 12,
                }}
              >
                Este proveedor se añadira a {addType} automaticamente despues de
                ser creado aqui
              </p>
            )}
            <Row style={{ marginTop: 25, marginBottom: 20 }}>
              <Form.Group
                as={Col}
                md="6"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Tipo de proveedor</Form.Label>
                <Select
                  options={OptionsProvider}
                  classNamePrefix="Select2"
                  className="multi-select"
                  onChange={(value) => setProviderType(value)}
                  placeholder=""
                  value={providerType}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Nombre</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="numeric"
                    placeholder=""
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setName(text.target.value)}
                    value={name}
                  />
                  <Form.Control.Feedback type="invalid">
                    Favor de añadir el monto del pago
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>

            <Row style={{ marginBottom: 20 }}>
              <Form.Group
                as={Col}
                md="6"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Correo</Form.Label>
                <Form.Control
                  type="numeric"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setEmail(text.target.value)}
                  value={email}
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
            </Row>

            <Row style={{ marginBottom: 20 }}>
              <Form.Group
                as={Col}
                md="5"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Empresa</Form.Label>
                <Form.Control
                  type="numeric"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setCompanyName(text.target.value)}
                  value={companyName}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                md="5"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Puesto</Form.Label>
                <Form.Control
                  type="numeric"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setRole(text.target.value)}
                  value={role}
                />
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group
                as={Col}
                md="10"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Ciudad/Dirección </Form.Label>
                <Form.Control
                  type="numeric"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setAdress(text.target.value)}
                  value={adress}
                />
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20, marginBottom: 140 }}>
              {renderSelectAssetsContained()}
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
