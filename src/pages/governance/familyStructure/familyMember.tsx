import React, { Fragment, useState } from "react";
import {
  Button,
  Card,
  Col,
  Row,
  Form,
  InputGroup,
  Nav,
  Tab,
  Table,
} from "react-bootstrap";
import Select from "react-select";
import { MultiSelect } from "react-multi-select-component";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
//@ts-ignore
import download from "../../../assets/images/familyOffice/download.png";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import FileUpload from "../../administration/providers/components/fileUpload";
import FileView from "../../administration/accounting/components/fileView";
import Pageheader from "../../../layouts/pageheader/pageheader";
import { taxesRules } from "../../administration/taxes/taxesUtils";
import { seguros } from "../../administration/payments/paymentsData";
import { family } from "./familyStructureData";
import { taxes } from "../../administration/taxes/taxesData";
import { calculateDaysOrMonthsLeft } from "../../administration/payments/paymentUtils";
import { renderFlag } from "../../administration/accounting/companyUtils";
import {
  renderAssetTypeIcon,
  formatNationalities,
} from "./familyStructureUtils";
import { nationalities } from "./familyStructureConst";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function FamilyMember(props) {
  //@ts-ignore
  const baseUrl = import.meta.env.BASE_URL;
  const navigate = useNavigate();
  const params = useParams();
  const memberSelected = family.members.find((memb) => memb.id === params.id);

  if (!memberSelected) {
    return <p>Not Found</p>;
  }

  const [memberName, setMemberName] = useState(memberSelected.name);
  const [isProviderMemberIC, setIsProviderMemberIC] = useState(
    memberSelected.isMemberIC
  );
  const [isProviderisMemberFC, setIsProviderisMemberFC] = useState(
    memberSelected.isMemberFC
  );
  const [rfc, setRFC] = useState(memberSelected.rfc);

  const [regimen, setRegimen] = useState({
    value: memberSelected.regimenFiscal,
    label: memberSelected.regimenFiscal,
  });

  const [nationality, setNationalities] = useState(
    formatNationalities(memberSelected.nationalities)
  );

  const [relationship, setRelationship] = useState({
    value: "",
    label: "",
  });
  const [address, setAddress] = useState(memberSelected.address);
  const [dateOfBirth, setDateOfBirth] = useState<Dayjs | null>(
    dayjs(memberSelected.dob)
  );

  const [gender, setGender] = useState({
    value: memberSelected.gender,
    label: memberSelected.gender,
  });

  const [assetsPostMortemVisibility, setAssetsPostMortemVisibility] = useState(
    family.members[0].assets
  );

  const [obligationsPostMortemVisibility, setObligationsPostMortemVisibility] =
    useState(family.members[0].obligations);

  const [trustorPostMortemVisibility, setTrustorPostMortemVisibility] =
    useState(family.members[0].trustor);

  const [willsPostMortemVisibility, setWillsPostMortemVisibility] = useState(
    family.members[0].wills.map((will) => ({
      ...will,
      visibility: will.visibility.filter((member) => !member.hasVisibility),
    }))
  );

  const OptionsGender = [
    { value: "Masculino", label: "Masculino" },
    { value: "Femenino", label: "Femenino" },
  ];

  const OptionsRelationship = [
    { value: "Descendiente", label: "Descendiente" },
    { value: "Pareja", label: "Pareja" },
  ];

  const onlyDescendantOption = OptionsRelationship.filter(
    (option) => option.value !== "Pareja"
  );

  const OptionsRegimen = taxesRules.map((rule) => ({
    value: rule.regimen,
    label: rule.regimen,
  }));

  const handleSelectionChange = (assetId, type, selected) => {
    setAssetsPostMortemVisibility((prevState) =>
      prevState.map((asset) => {
        if (asset.id === assetId) {
          const updatedVisibility = asset.visibility.map((member) => {
            const isSelected = selected.some((s) => s.value === member.id);
            return member.type === type
              ? { ...member, hasVisibility: isSelected }
              : member;
          });
          return { ...asset, visibility: updatedVisibility };
        }
        return asset;
      })
    );
  };

  const handleWillChange = (willId, type, selected) => {
    setWillsPostMortemVisibility((prevState) =>
      prevState.map((will) => {
        if (will.id === willId) {
          const updatedVisibility = will.visibility.map((member) => {
            const isSelected = selected.some((s) => s.value === member.id);
            return member.type === type
              ? { ...member, hasVisibility: isSelected }
              : member;
          });
          return { ...will, visibility: updatedVisibility };
        }
        return will;
      })
    );
  };

  const handleObligationChange = (obligationId, type, selected, category) => {
    setObligationsPostMortemVisibility((prevState) => ({
      ...prevState,
      [category]: prevState[category].map((obligation) => {
        if (obligation.id === obligationId) {
          const updatedVisibility = obligation.visibility.map((member) => {
            const isSelected = selected.some((s) => s.value === member.id);
            return member.type === type
              ? { ...member, hasVisibility: isSelected }
              : member;
          });
          return { ...obligation, visibility: updatedVisibility };
        }
        return obligation;
      }),
    }));
  };

  const handleTrustorSelectionChange = (trustId, type, selected) => {
    setTrustorPostMortemVisibility((prevState) =>
      prevState.map((trust) => {
        if (trust.id === trustId) {
          const updatedVisibility = trust.visibility.map((member) => {
            const isSelected = selected.some((s) => s.value === member.id);
            return member.type === type
              ? { ...member, hasVisibility: isSelected }
              : member;
          });
          return { ...trust, visibility: updatedVisibility };
        }
        return trust;
      })
    );
  };

  const renderTypeIcon = (type) => {
    if (type === "Tercero") {
      return (
        <td>
          {" "}
          <i
            className="fe fe-user"
            style={{ color: "gray", marginRight: 10, fontSize: 14 }}
          ></i>{" "}
          {type}
        </td>
      );
    } else if (type === "Intrafamiliar") {
      return (
        <td>
          {" "}
          <i
            className="fe fe-users"
            style={{ color: "gray", marginRight: 10, fontSize: 14 }}
          ></i>{" "}
          {type}
        </td>
      );
    } else if (type === "Capital Privado") {
      return (
        <td>
          {" "}
          <i
            className="fe fe-activity"
            style={{ color: "gray", marginRight: 10, fontSize: 14 }}
          ></i>{" "}
          {type}
        </td>
      );
    }

    return (
      <td>
        {" "}
        <i
          className="fe fe-user"
          style={{ color: "gray", marginRight: 10, fontSize: 14 }}
        ></i>{" "}
        {type}
      </td>
    );
  };

  const renderObligationTitle = (obligation) => {
    if (obligation.rfc) {
      return (
        <p style={{ fontWeight: "bold" }}>
          Declaraciónes fiscales {obligation.regimenFiscal} - {obligation.rfc}
        </p>
      );
    } else if (obligation.acreedor) {
      return (
        <p style={{ fontWeight: "bold" }}>
          Deuda por pagar {obligation.tipo} - {obligation.acreedor}
        </p>
      );
    } else if (obligation.deudor) {
      return (
        <p style={{ fontWeight: "bold" }}>
          Deuda por cobrar {obligation.tipo} - {obligation.deudor}
        </p>
      );
    }
    return;
  };

  const renderObligationVisibility = (obligation, category) => {
    const familyOptions = obligation.visibility
      .filter((v) => v.type === "Family")
      .map((v) => ({ label: v.name, value: v.id }));

    const providerOptions = obligation.visibility
      .filter((v) => v.type === "Provider")
      .map((v) => ({ label: v.name, value: v.id }));

    const defaultFamilySelection = obligation.visibility
      .filter((v) => v.type === "Family" && v.hasVisibility)
      .map((v) => ({ label: v.name, value: v.id }));

    const defaultProviderSelection = obligation.visibility
      .filter((v) => v.type === "Provider" && v.hasVisibility)
      .map((v) => ({ label: v.name, value: v.id }));

    return (
      <div key={obligation.id} style={{ marginTop: 20 }}>
        {renderObligationTitle(obligation)}
        <Row>
          <Form.Group
            as={Col}
            md="5"
            controlId="familyVisibility"
            className="form-group"
          >
            <p style={{ color: "gray", fontSize: 13 }}>
              Familiares a los que se le dará visibilidad:
            </p>
            <MultiSelect
              options={familyOptions}
              value={defaultFamilySelection}
              onChange={(selected) =>
                handleObligationChange(
                  obligation.id,
                  "Family",
                  selected,
                  category
                )
              }
              labelledBy="Selecciona miembros familiares"
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
            md="5"
            controlId="providerVisibility"
            className="form-group"
          >
            <p style={{ color: "gray", fontSize: 13 }}>
              Proveedores a los que se le dará visibilidad:
            </p>
            <MultiSelect
              options={providerOptions}
              value={defaultProviderSelection}
              onChange={(selected) =>
                handleObligationChange(
                  obligation.id,
                  "Provider",
                  selected,
                  category
                )
              }
              labelledBy="Selecciona proveedores"
              overrideStrings={{
                selectSomeItems: "Selecciona miembros accionistas",
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

  const renderWillDatasVisibility = (asset) => {
    const familyOptions = asset.visibility
      .filter((v) => v.type === "Family")
      .map((v) => ({ label: v.name, value: v.id }));

    const providerOptions = asset.visibility
      .filter((v) => v.type === "Provider")
      .map((v) => ({ label: v.name, value: v.id }));

    const defaultFamilySelection = asset.visibility
      .filter((v) => v.type === "Family" && v.hasVisibility)
      .map((v) => ({ label: v.name, value: v.id }));

    const defaultProviderSelection = asset.visibility
      .filter((v) => v.type === "Provider" && v.hasVisibility)
      .map((v) => ({ label: v.name, value: v.id }));

    return (
      <div key={asset.id} style={{ marginTop: 20 }}>
        <p style={{ fontWeight: "bold" }}>{asset.name}</p>
        <Row>
          <Form.Group
            as={Col}
            md="5"
            controlId="validationCustom01"
            className="form-group"
          >
            <p style={{ color: "gray", fontSize: 13 }}>
              Familiares a los que se le dará visibilidad:
            </p>
            <MultiSelect
              options={familyOptions}
              value={defaultFamilySelection}
              onChange={(selected) =>
                handleWillChange(asset.id, "Family", selected)
              }
              labelledBy="Selecciona miembros familiares"
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
            md="5"
            controlId="validationCustom01"
            className="form-group"
          >
            <p style={{ color: "gray", fontSize: 13 }}>
              Proveedores a los que se le dará visibilidad:
            </p>
            <MultiSelect
              options={providerOptions}
              value={defaultProviderSelection}
              onChange={(selected) =>
                handleWillChange(asset.id, "Provider", selected)
              }
              labelledBy="Selecciona proveedores"
              overrideStrings={{
                selectSomeItems: "Selecciona miembros accionistas",
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

  const renderWills = () => (
    <div style={{ marginTop: 20, marginBottom: 200 }}>
      {willsPostMortemVisibility.map((asset) =>
        renderWillDatasVisibility(asset)
      )}
    </div>
  );

  const renderObligations = () => (
    <div style={{ marginTop: 20, marginBottom: 200 }}>
      {Object.entries(obligationsPostMortemVisibility).map(
        ([category, obligations]) =>
          obligations.length > 0 && (
            <div key={category}>
              {obligations.map((obligation) =>
                renderObligationVisibility(obligation, category)
              )}
            </div>
          )
      )}
    </div>
  );

  const renderTrustorVisibility = (trust) => {
    const familyOptions = trust.visibility
      .filter((v) => v.type === "Family")
      .map((v) => ({ label: v.name, value: v.id }));

    const providerOptions = trust.visibility
      .filter((v) => v.type === "Provider")
      .map((v) => ({ label: v.name, value: v.id }));

    const defaultFamilySelection = trust.visibility
      .filter((v) => v.type === "Family" && v.hasVisibility)
      .map((v) => ({ label: v.name, value: v.id }));

    const defaultProviderSelection = trust.visibility
      .filter((v) => v.type === "Provider" && v.hasVisibility)
      .map((v) => ({ label: v.name, value: v.id }));

    return (
      <div key={trust.id} style={{ marginTop: 20 }}>
        <p style={{ fontWeight: "bold" }}>
          Fideicomiso {trust.trustNumber} - {trust.trusteeBank}
        </p>
        <Row>
          <Form.Group
            as={Col}
            md="5"
            controlId="familyVisibilityTrustor"
            className="form-group"
          >
            <p style={{ color: "gray", fontSize: 13 }}>
              Familiares a los que se le dará visibilidad:
            </p>
            <MultiSelect
              options={familyOptions}
              value={defaultFamilySelection}
              onChange={(selected) =>
                handleTrustorSelectionChange(trust.id, "Family", selected)
              }
              labelledBy="Selecciona miembros familiares"
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
            md="5"
            controlId="providerVisibilityTrustor"
            className="form-group"
          >
            <p style={{ color: "gray", fontSize: 13 }}>
              Proveedores a los que se le dará visibilidad:
            </p>
            <MultiSelect
              options={providerOptions}
              value={defaultProviderSelection}
              onChange={(selected) =>
                handleTrustorSelectionChange(trust.id, "Provider", selected)
              }
              labelledBy="Selecciona proveedores"
              overrideStrings={{
                selectSomeItems: "Selecciona miembros accionistas",
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

  const renderTrustor = () => (
    <div style={{ marginTop: 20, marginBottom: 200 }}>
      {trustorPostMortemVisibility.map((trust) =>
        renderTrustorVisibility(trust)
      )}
    </div>
  );

  const renderAssetVisibility = (asset) => {
    const familyOptions = asset.visibility
      .filter((v) => v.type === "Family")
      .map((v) => ({ label: v.name, value: v.id }));

    const providerOptions = asset.visibility
      .filter((v) => v.type === "Provider")
      .map((v) => ({ label: v.name, value: v.id }));

    const defaultFamilySelection = asset.visibility
      .filter((v) => v.type === "Family" && v.hasVisibility)
      .map((v) => ({ label: v.name, value: v.id }));

    const defaultProviderSelection = asset.visibility
      .filter((v) => v.type === "Provider" && v.hasVisibility)
      .map((v) => ({ label: v.name, value: v.id }));

    return (
      <div key={asset.id} style={{ marginTop: 20 }}>
        <p style={{ fontWeight: "bold" }}>{asset.name}</p>
        <Row>
          <Form.Group
            as={Col}
            md="5"
            controlId="validationCustom01"
            className="form-group"
          >
            <p style={{ color: "gray", fontSize: 13 }}>Familiares</p>
            <MultiSelect
              options={familyOptions}
              value={defaultFamilySelection}
              onChange={(selected) =>
                handleSelectionChange(asset.id, "Family", selected)
              }
              labelledBy="Selecciona miembros familiares"
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
            md="5"
            controlId="validationCustom01"
            className="form-group"
          >
            <p style={{ color: "gray", fontSize: 13 }}>Proveedores</p>
            <MultiSelect
              options={providerOptions}
              value={defaultProviderSelection}
              onChange={(selected) =>
                handleSelectionChange(asset.id, "Provider", selected)
              }
              labelledBy="Selecciona proveedores"
              overrideStrings={{
                selectSomeItems: "Selecciona miembros accionistas",
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

  const renderDescription = () => {
    return (
      <div>
        <Row style={{ marginBottom: 20 }}>
          <Form.Group className="mb-3 form-group">
            <Form.Check
              required
              checked={isProviderisMemberFC}
              onChange={(e) => setIsProviderisMemberFC(e.target.checked)}
              label={`Este miembro de la familia es parte del consejo Familiar`}
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>

          <Form.Group className="mb-3 form-group">
            <Form.Check
              required
              checked={isProviderMemberIC}
              onChange={(e) => setIsProviderMemberIC(e.target.checked)}
              label={`Este miembro de la familia es parte del comite de inversión`}
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
        </Row>
        {memberSelected.trusteeOf.length ? (
          <Row style={{ marginTop: -10, marginBottom: 20 }}>
            <Form.Label>
              {memberSelected.name} es uno de los beneficiarios en los
              siguientes fideicomisos:
            </Form.Label>
            {memberSelected.trusteeOf.map((trust) => {
              return (
                <p
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "#004745",
                    fontSize: 12,
                    marginTop: -6,
                  }}
                >
                  <Link
                    to={`${baseUrl}administration/trustDescription/${trust.coreId}`}
                  >
                    {trust.name}
                  </Link>
                </p>
              );
            })}
          </Row>
        ) : null}
        <Row style={{ marginBottom: 10 }}>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Nombre completo</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="numeric"
                placeholder=""
                aria-describedby="inputGroupPrepend"
                required
                onChange={(text) => setMemberName(text.target.value)}
                value={memberName}
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
            <Form.Label>Genero</Form.Label>
            <Select
              options={OptionsGender}
              classNamePrefix="Select2"
              className="multi-select"
              onChange={(value) => setGender(value)}
              placeholder=""
              value={gender}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Nacionalidades</Form.Label>
            <MultiSelect
              options={nationalities}
              value={nationality}
              onChange={setNationalities}
              labelledBy="Select"
              overrideStrings={{
                selectSomeItems: "Selecciona nacionalidades",
                allItemsAreSelected: "Todos los miembros",
                selectAll: "Seleccionar todos",
              }}
              disableSearch
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
            <Form.Label>Fecha de Nacimiento</Form.Label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  format="DD/MM/YYYY"
                  onChange={(value) => setDateOfBirth(value)}
                  value={dayjs(dateOfBirth)}
                  defaultValue={dayjs(dateOfBirth)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Form.Group>
        </Row>
        <Row style={{ marginTop: 20 }}>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom02"
            className="form-group"
          >
            <Form.Label>Regimen Fiscal</Form.Label>
            <Select
              options={OptionsRegimen}
              classNamePrefix="Select2"
              className="multi-select"
              onChange={(value) => setRegimen(value)}
              placeholder=""
              value={regimen}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>RFC</Form.Label>
            <Form.Control
              type="numeric"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setRFC(text.target.value)}
              value={rfc}
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
            <Form.Label>Dirección Fiscal</Form.Label>
            <Form.Control
              type="numeric"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setAddress(text.target.value)}
              value={address}
            />
          </Form.Group>
        </Row>
      </div>
    );
  };

  const renderDocuments = () => {
    return (
      <>
        <Row>
          <p
            style={{
              fontSize: 15,
            }}
          >
            1) Licencia, acta de nacimiento y CIF:
          </p>
          <Form.Group as={Col} md="4" className="form-group">
            <Form.Label
              className="form-label my-3"
              style={{ fontSize: 13, color: "gray" }}
            >
              Licencia de conducir
            </Form.Label>
            {memberSelected.driverLicence ? (
              <FileView
                title="driverLicence"
                fileName={memberSelected.driverLicence}
              />
            ) : (
              <>
                <FileUpload />
              </>
            )}
          </Form.Group>

          <Form.Group as={Col} md="4" className="form-group">
            <Form.Label
              className="form-label my-3"
              style={{ fontSize: 13, color: "gray" }}
            >
              Copia de acta de nacimiento
            </Form.Label>
            {memberSelected.birthCertificate ? (
              <FileView
                title="birthCertificate"
                fileName={memberSelected.birthCertificate}
              />
            ) : (
              <>
                <FileUpload />
              </>
            )}
          </Form.Group>

          <Form.Group as={Col} md="4" className="form-group">
            <Form.Label
              className="form-label my-3"
              style={{ fontSize: 13, color: "gray" }}
            >
              Cedula de Identificación fiscal
            </Form.Label>
            {memberSelected.cif ? (
              <FileView title="cif" fileName={memberSelected.cif} />
            ) : (
              <>
                <FileUpload />
              </>
            )}
          </Form.Group>
        </Row>

        <Row>
          <p
            style={{
              fontSize: 15,
              marginTop: 50,
            }}
          >
            2) Identificaciones (INE, DNI, ID)
          </p>
          {memberSelected.ids.length ? (
            memberSelected.ids.map((acta, index) => (
              <Form.Group as={Col} md="4" className="form-group">
                <Form.Label
                  className="form-label my-3"
                  style={{ color: "gray", fontSize: 13 }}
                >
                  {" "}
                  {acta.name}
                </Form.Label>
                <FileView key={index} title={acta.name} fileName={acta.url} />
              </Form.Group>
            ))
          ) : (
            <p
              style={{
                fontSize: 13,
                fontStyle: "italic",
                color: "gray",
                textAlign: "center",
              }}
            ></p>
          )}
          <div style={{ width: "70%" }}>
            <p style={{ fontSize: 10, color: "gray", marginBottom: -1 }}>
              + Añadir identificaciónes
            </p>
            <FileUpload />
          </div>
        </Row>

        <Row>
          <p
            style={{
              fontSize: 15,
              marginTop: 50,
            }}
          >
            3) Pasaportes
          </p>
          {memberSelected.passports.length ? (
            memberSelected.passports.map((acta, index) => (
              <Form.Group as={Col} md="4" className="form-group">
                <Form.Label
                  className="form-label my-3"
                  style={{ color: "gray", fontSize: 13 }}
                >
                  {" "}
                  {acta.name}
                </Form.Label>
                <FileView key={index} title={acta.name} fileName={acta.url} />
              </Form.Group>
            ))
          ) : (
            <p
              style={{
                fontSize: 13,
                fontStyle: "italic",
                color: "gray",
                textAlign: "center",
              }}
            ></p>
          )}
          <div style={{ width: "70%" }}>
            <p style={{ fontSize: 10, color: "gray", marginBottom: -1 }}>
              + Añadir identificaciónes
            </p>
            <FileUpload />
          </div>
        </Row>

        <Row>
          <p
            style={{
              fontSize: 15,
              marginTop: 50,
            }}
          >
            3) Permisos (Visas, Global entry, Sentri, CLEAR etc.)
          </p>
          {memberSelected.permits.length ? (
            memberSelected.permits.map((acta, index) => (
              <Form.Group as={Col} md="4" className="form-group">
                <Form.Label
                  className="form-label my-3"
                  style={{ color: "gray", fontSize: 13 }}
                >
                  {" "}
                  {acta.name}
                </Form.Label>
                <FileView key={index} title={acta.name} fileName={acta.url} />
              </Form.Group>
            ))
          ) : (
            <p
              style={{
                fontSize: 13,
                fontStyle: "italic",
                color: "gray",
                textAlign: "center",
              }}
            ></p>
          )}
          <div style={{ width: "70%" }}>
            <p style={{ fontSize: 10, color: "gray", marginBottom: -1 }}>
              + Añadir identificaciónes
            </p>
            <FileUpload />
          </div>
        </Row>
      </>
    );
  };

  const renderObligationsCollection = () => {
    return (
      <div style={{ marginTop: 15 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <Card.Title style={{ fontSize: 13 }}>
            <i style={{ marginRight: 4 }} className="fe fe-edit-3 fs-13"></i>{" "}
            Prestamos por cobrar
          </Card.Title>
          <Button
            style={{
              marginRight: 10,
            }}
            variant="default"
            size="sm"
          >
            <Link
              style={{ color: "black" }}
              to={`${baseUrl}administration/loanCreate`}
            >
              + Añadir prestamo por cobrar
            </Link>
          </Button>
        </div>

        {memberSelected.obligations.loansCollecting.length === 0 ? (
          <p
            style={{
              marginLeft: 15,
              color: "gray",
              fontSize: 13,
              marginTop: -15,
            }}
          >
            Aún no hay registros de creditos o deudas para este vehiculo
          </p>
        ) : (
          <div className="table-responsive">
            <Table
              className="table border text-nowrap text-md-nowrap mb-0"
              style={{ fontSize: "12px" }}
            >
              <thead className="bg-light">
                <tr>
                  <th style={{ padding: "6px", fontSize: "12px" }}>Tipo</th>
                  <th style={{ padding: "6px", fontSize: "12px" }}>Deudor</th>
                  <th style={{ padding: "6px", fontSize: "12px" }}>País</th>
                  <th style={{ padding: "6px", fontSize: "12px" }}>
                    Pendiente por cobrar
                  </th>
                  <th style={{ padding: "6px", fontSize: "12px" }}>
                    Prox cobro
                  </th>
                  <th style={{ padding: "6px", fontSize: "12px" }}></th>
                </tr>
              </thead>
              <tbody>
                {memberSelected.obligations.loansCollecting.map((debt, tb8) => (
                  <tr key={tb8}>
                    {renderTypeIcon(debt.tipo)}
                    <td>{debt.debtor.name}</td>
                    <td>{renderFlag(debt.country)}</td>
                    <td>
                      $ {debt.porPagar} {debt.moneda}
                    </td>
                    <td>{calculateDaysOrMonthsLeft(debt.proxCobro)}</td>
                    <td
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                      }}
                    >
                      <Link
                        to={`${baseUrl}administration/loanDescription/${debt.id}`}
                      >
                        <i className="fe fe-arrow-right text-black fs-15"></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </div>
    );
  };

  const renderTaxesObligations = () => {
    return (
      <div style={{ marginTop: 5 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <Card.Title style={{ fontSize: 13 }}>
            <i
              style={{ marginRight: 4, marginTop: 15 }}
              className="fe fe-book-open fs-12"
            ></i>{" "}
            Declaración fiscal persona física
          </Card.Title>
        </div>

        {memberSelected.obligations.taxes.length === 0 ? (
          <p
            style={{
              marginLeft: 15,
              color: "gray",
              fontSize: 13,
              marginTop: -10,
            }}
          >
            {memberSelected.name} no tiene un regimen fiscal añadido. Para
            administrar sus declaraciones fiscales, añade un regimen en la
            pestaña de información
          </p>
        ) : (
          <div className="table-responsive">
            <Table
              className="table border text-nowrap text-md-nowrap mb-0"
              style={{ fontSize: "12px" }}
            >
              <thead className="bg-light">
                <tr>
                  <th style={{ padding: "6px", fontSize: "12px" }}>
                    Regimen físcal
                  </th>
                  <th style={{ padding: "6px", fontSize: "12px" }}>RFC</th>
                  <th style={{ padding: "6px", fontSize: "12px" }}>País</th>
                  <th style={{ padding: "6px", fontSize: "12px" }}></th>
                </tr>
              </thead>
              <tbody>
                {memberSelected.obligations.taxes.map((tax, tb8) => (
                  <tr key={tb8}>
                    <td>{tax.regimenFiscal}</td>
                    <td>{tax.rfc}</td>
                    <td>{renderFlag(tax.country)}</td>
                    <td
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                      }}
                    >
                      <Link to={`${baseUrl}administration/taxes/${tax.id}`}>
                        <i className="fe fe-arrow-right text-black fs-15"></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </div>
    );
  };

  const renderObligationsPayments = () => {
    return (
      <>
        <div style={{ marginTop: 5 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Card.Title style={{ fontSize: 13 }}>
              <i
                style={{ marginRight: 4, marginTop: 10 }}
                className="fe fe-user fs-12"
              ></i>{" "}
              Seguros de vida
            </Card.Title>
            <Button
              style={{
                marginRight: 10,
              }}
              variant="default"
              size="sm"
              className="mb-2"
            >
              <Link
                style={{ color: "black" }}
                to={`${baseUrl}administration/insuranceCreate/type/familyMember/itemId/${memberSelected.id}`}
              >
                + Añadir seguro de vida
              </Link>
            </Button>
          </div>

          {memberSelected.obligations.lifeInsurances.length === 0 ? (
            <p
              style={{
                marginLeft: 15,
                color: "gray",
                fontSize: 13,
                marginTop: -10,
              }}
            >
              Aún no hay registros de mantenimientos para este vehiculo
            </p>
          ) : (
            <div className="table-responsive">
              <Table
                className="table border text-nowrap text-md-nowrap mb-0"
                style={{ fontSize: "12px" }}
              >
                <thead className="bg-light">
                  <tr>
                    <th style={{ padding: "6px", fontSize: "12px" }}>
                      Aseguradora
                    </th>
                    <th style={{ padding: "6px", fontSize: "12px" }}>Moneda</th>
                    <th style={{ padding: "6px", fontSize: "12px" }}>País</th>
                    <th style={{ padding: "6px", fontSize: "12px" }}>
                      Vigencia del
                    </th>
                    <th style={{ padding: "6px", fontSize: "12px" }}>
                      Vigencia al
                    </th>
                    <th style={{ padding: "6px", fontSize: "12px" }}>
                      Prox. pago en:
                    </th>
                    <th style={{ padding: "6px", fontSize: "12px" }}></th>
                  </tr>
                </thead>
                <tbody>
                  {memberSelected.obligations.lifeInsurances.map(
                    (insurance, tb8) => (
                      <tr key={tb8}>
                        <td>{insurance.nombreAseguradora}</td>
                        <td>{insurance.moneda}</td>
                        <td>{renderFlag(insurance.country)}</td>
                        <td>{insurance.vigenciaDel}</td>
                        <td>{insurance.vigenciaAl}</td>
                        <td>{calculateDaysOrMonthsLeft(insurance.proxPago)}</td>

                        <td
                          style={{
                            cursor: "pointer",
                            textDecoration: "underline",
                            color: "#5488d2",
                          }}
                        >
                          <Link
                            to={`${baseUrl}administration/insuranceDescription/${insurance.id}`}
                          >
                            <i className="fe fe-arrow-right text-black fs-15"></i>
                          </Link>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </Table>
            </div>
          )}
        </div>

        <div style={{ marginTop: 50 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Card.Title style={{ fontSize: 13 }}>
              <i
                style={{ marginRight: 4, marginTop: 10 }}
                className="fe fe-heart fs-12"
              ></i>{" "}
              Seguros medicos
            </Card.Title>
            <Button
              style={{
                marginRight: 10,
              }}
              variant="default"
              size="sm"
              className="mb-2"
            >
              <Link
                style={{ color: "black" }}
                to={`${baseUrl}administration/insuranceCreate/type/familyMember/itemId/${memberSelected.id}`}
              >
                + Añadir seguro medico
              </Link>
            </Button>
          </div>

          {memberSelected.obligations.medicalInsurances.length === 0 ? (
            <p
              style={{
                marginLeft: 15,
                color: "gray",
                fontSize: 13,
                marginTop: -10,
              }}
            >
              Aún no hay registros de mantenimientos para este vehiculo
            </p>
          ) : (
            <div className="table-responsive">
              <Table
                className="table border text-nowrap text-md-nowrap mb-0"
                style={{ fontSize: "12px" }}
              >
                <thead className="bg-light">
                  <tr>
                    <th style={{ padding: "6px", fontSize: "12px" }}>
                      Aseguradora
                    </th>
                    <th style={{ padding: "6px", fontSize: "12px" }}>Moneda</th>
                    <th style={{ padding: "6px", fontSize: "12px" }}>País</th>
                    <th style={{ padding: "6px", fontSize: "12px" }}>
                      Vigencia del
                    </th>
                    <th style={{ padding: "6px", fontSize: "12px" }}>
                      Vigencia al
                    </th>
                    <th style={{ padding: "6px", fontSize: "12px" }}>
                      Prox. pago en:
                    </th>
                    <th style={{ padding: "6px", fontSize: "12px" }}></th>
                  </tr>
                </thead>
                <tbody>
                  {memberSelected.obligations.medicalInsurances.map(
                    (insurance, tb8) => (
                      <tr key={tb8}>
                        <td>{insurance.nombreAseguradora}</td>
                        <td>{insurance.moneda}</td>
                        <td>{renderFlag(insurance.country)}</td>
                        <td>{insurance.vigenciaDel}</td>
                        <td>{insurance.vigenciaAl}</td>
                        <td>{calculateDaysOrMonthsLeft(insurance.proxPago)}</td>

                        <td
                          style={{
                            cursor: "pointer",
                            textDecoration: "underline",
                            color: "#5488d2",
                          }}
                        >
                          <Link
                            to={`${baseUrl}administration/insuranceDescription/${insurance.id}`}
                          >
                            <i className="fe fe-arrow-right text-black fs-15"></i>
                          </Link>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </Table>
            </div>
          )}
        </div>

        <div style={{ marginTop: 50, marginBottom: 20 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Card.Title style={{ fontSize: 13 }}>
              <i style={{ marginRight: 4 }} className="fe fe-edit-3 fs-13"></i>{" "}
              Deudas y creditos personales
            </Card.Title>
            <Button
              style={{
                marginRight: 10,
              }}
              variant="default"
              size="sm"
            >
              <Link
                style={{ color: "black" }}
                to={`${baseUrl}administration/debtCreate/type/member/itemId/${memberSelected.id}`}
              >
                + Añadir deuda
              </Link>
            </Button>
          </div>

          {memberSelected.obligations.debt.length === 0 ? (
            <p
              style={{
                marginLeft: 15,
                color: "gray",
                fontSize: 13,
                marginTop: -15,
              }}
            >
              Aún no hay registros de creditos o deudas para este vehiculo
            </p>
          ) : (
            <div className="table-responsive">
              <Table
                className="table border text-nowrap text-md-nowrap mb-0"
                style={{ fontSize: "12px" }}
              >
                <thead className="bg-light">
                  <tr>
                    <th style={{ padding: "6px", fontSize: "12px" }}>
                      Tipo de deuda
                    </th>
                    <th style={{ padding: "6px", fontSize: "12px" }}>
                      Monto otorgado
                    </th>
                    <th style={{ padding: "6px", fontSize: "12px" }}>
                      % interes
                    </th>
                    <th style={{ padding: "6px", fontSize: "12px" }}>
                      Por pagar
                    </th>
                    <th style={{ padding: "6px", fontSize: "12px" }}>
                      Prox pago
                    </th>
                    <th style={{ padding: "6px", fontSize: "12px" }}></th>
                  </tr>
                </thead>
                <tbody>
                  {memberSelected.obligations.debt.map((debt, tb8) => (
                    <tr key={tb8}>
                      <td style={{ padding: "10px" }}>{debt.tipo}</td>
                      <td style={{ padding: "10px" }}>
                        ${debt.monto} {debt.moneda}
                      </td>
                      <td style={{ padding: "10px" }}>{debt.interes} %</td>
                      <td style={{ padding: "10px" }}>
                        ${debt.pagado} {debt.moneda}
                      </td>
                      <td style={{ padding: "10px" }}>
                        {calculateDaysOrMonthsLeft(debt.proxPago)}
                      </td>
                      <td
                        style={{
                          cursor: "pointer",
                          textDecoration: "underline",
                          color: "#5488d2",
                        }}
                      >
                        <Link
                          to={
                            debt.tipo === "Prestamo intrafamiliar"
                              ? `${baseUrl}administration/loanDescription/${debt.id}`
                              : `${baseUrl}administration/debtDescription/${debt.id}`
                          }
                        >
                          <i className="fe fe-arrow-right text-black fs-15"></i>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </div>
      </>
    );
  };

  const renderAssets = () => (
    <div style={{ marginTop: 20, marginBottom: 200 }}>
      {assetsPostMortemVisibility.map((asset) => renderAssetVisibility(asset))}
    </div>
  );

  const renderVisibilityAccess = () => {
    return (
      <>
        <p style={{ marginTop: -10, marginLeft: 15, marginBottom: 30 }}>
          Oculta o da visivilidad de toda tu información a otros usuarios de tu
          Family Office ya sean familiares o proveedores
        </p>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div style={{ marginLeft: 15 }}>
            <Nav
              variant="pills"
              as="ul"
              className="nav panel-tabs mr-auto custom-nav"
            >
              <Nav.Item as="li" style={{ marginRight: 10 }}>
                <Nav.Link eventKey="first" href="#" style={{ fontSize: 12 }}>
                  <i
                    style={{ marginRight: 9 }}
                    className="fe fe-trending-up text-black fs-13"
                  ></i>
                  Activos y empresas
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" style={{ marginRight: 10 }}>
                <Nav.Link eventKey="second" style={{ fontSize: 12 }}>
                  <i
                    style={{ marginRight: 9 }}
                    className="fe fe-calendar text-black fs-13"
                  ></i>
                  Obligaciones
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" style={{ marginRight: 10 }}>
                <Nav.Link eventKey="third" style={{ fontSize: 12 }}>
                  <i
                    style={{ marginRight: 9 }}
                    className="fe fe-folder text-black fs-13"
                  ></i>
                  Fideicomisos
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" style={{ marginRight: 10 }}>
                <Nav.Link eventKey="fourth" style={{ fontSize: 12 }}>
                  <i
                    style={{ marginRight: 9 }}
                    className="fe fe-book-open text-black fs-13"
                  ></i>
                  Testamentos
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>

          <Tab.Content className="panel-body">
            <Tab.Pane eventKey="first">{renderAssets()}</Tab.Pane>
            <Tab.Pane eventKey="second">{renderObligations()}</Tab.Pane>
            <Tab.Pane eventKey="third">{renderTrustor()}</Tab.Pane>
            <Tab.Pane eventKey="fourth">{renderWills()}</Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </>
    );
  };

  const renderObligationsTabs = () => {
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <div style={{ marginLeft: 15, marginTop: -7 }}>
          <Nav
            variant="pills"
            as="ul"
            className="nav panel-tabs mr-auto custom-nav"
          >
            <Nav.Item as="li" style={{ marginRight: 10 }}>
              <Nav.Link eventKey="first" href="#" style={{ fontSize: 12 }}>
                <i
                  style={{ marginRight: 9 }}
                  className="fe fe-arrow-up-right text-black fs-13"
                ></i>
                Pagos
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" style={{ marginRight: 10 }}>
              <Nav.Link eventKey="second" style={{ fontSize: 12 }}>
                <i
                  style={{ marginRight: 9 }}
                  className="fe fe-arrow-down-right text-black fs-13"
                ></i>
                Cobranza
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" style={{ marginRight: 10 }}>
              <Nav.Link eventKey="third" style={{ fontSize: 12 }}>
                <i
                  style={{ marginRight: 9 }}
                  className="fe fe-book-open text-black fs-13"
                ></i>
                Fiscal
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        <Tab.Content className="panel-body">
          <Tab.Pane eventKey="first">{renderObligationsPayments()}</Tab.Pane>
          <Tab.Pane eventKey="second">{renderObligationsCollection()}</Tab.Pane>
          <Tab.Pane eventKey="third">{renderTaxesObligations()}</Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    );
  };

  const renderAssetList = () => {
    if (memberSelected.assets.length > 0) {
      return (
        <div
          className="table-responsive"
          style={{ marginTop: 5, marginBottom: 50 }}
        >
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
              {memberSelected.assets.map((idx, tb8) => (
                <tr key={tb8}>
                  {renderAssetTypeIcon(idx.type)}
                  <td>{idx.name}</td>
                  <td>{renderFlag(idx.country)}</td>
                  <td>
                    ${idx.value} {idx.currency}
                  </td>
                  <td style={{ textAlign: "center" }}>{idx.pct}%</td>
                  <td
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "#5488d2",
                    }}
                  >
                    {idx.type === "company" ? (
                      <Link
                        to={`${baseUrl}administration/company/${idx.id}/company`}
                      >
                        <i className="fe fe-arrow-right text-black fs-15"></i>
                      </Link>
                    ) : (
                      <Link
                        to={`${baseUrl}governance/wealthItem/type/${idx.type}/id/${idx.id}`}
                      >
                        <i className="fe fe-arrow-right text-black fs-15"></i>
                      </Link>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    }
    return (
      <div
        style={{
          alignContent: "center",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            color: "gray",
            fontSize: 12,
            marginRight: 4,
            marginBottom: -6,
          }}
        >
          Aún no hay resultados activos registrados para {memberSelected.name}
        </p>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <p
            style={{
              color: "gray",
              fontSize: 12,
              marginRight: 4,
            }}
          >
            Los bienes activos se pueden crear asignar en la pestaña de
          </p>
          <Link style={{ fontSize: 12 }} to={`${baseUrl}administration/assets`}>
            Activos fijos
          </Link>
        </div>
      </div>
    );
  };

  const renderWillData = () => {
    <div
      style={{
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "row",
        marginBottom: 30,
      }}
    >
      <div></div>
      <Button
        style={{
          marginRight: 15,
          alignSelf: "flex-end",
          justifyContent: "flex-end",
        }}
        size="sm"
        className="custom-button"
      >
        <Link
          style={{ color: "white" }}
          to={`${baseUrl}administration/willCreate`}
        >
          + Añadir testamento
        </Link>
      </Button>
    </div>;
    return (
      <div>
        {/* Button Section */}
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row",
            marginBottom: 30,
          }}
        >
          <div></div>
          <Button
            style={{
              marginRight: 15,
              alignSelf: "flex-end",
              justifyContent: "flex-end",
            }}
            size="sm"
            className="custom-button"
          >
            <Link
              style={{ color: "white" }}
              to={`${baseUrl}administration/willCreate`}
            >
              + Añadir testamento
            </Link>
          </Button>
        </div>

        {/* Will Data Section */}
        {memberSelected.wills.length > 0 ? (
          <div
            className="table-responsive"
            style={{ marginTop: 5, marginBottom: 50 }}
          >
            <Table className="table border text-nowrap text-md-nowrap mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Nombre</th>
                  <th>País</th>
                  <th>Notaría de emisión</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {memberSelected.wills.map((idx, tb8) => (
                  <tr key={tb8}>
                    <td>{idx.name}</td>
                    <td>{renderFlag(idx.country)}</td>
                    <td>{idx.notary}</td>
                    <td
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                      }}
                    >
                      <Link
                        to={`${baseUrl}administration/willDescription/${idx.id}/userId/${memberSelected.id}`}
                      >
                        <i className="fe fe-arrow-right fs-15"></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <div
            style={{
              alignContent: "center",
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                color: "gray",
                fontSize: 12,
                marginRight: 4,
                marginBottom: -6,
              }}
            >
              Aún no hay testamentos registrados
            </p>
          </div>
        )}
      </div>
    );
    // return(
    //   <>
    //   <Row>
    //       <p
    //         style={{
    //           fontSize: 15,
    //         }}
    //       >
    //         Testamentos
    //       </p>
    //       {memberSelected.wills.length ? (
    //         memberSelected.wills.map((acta, index) => (
    //           <Form.Group as={Col} md="4" className="form-group">
    //             <Form.Label
    //               className="form-label my-3"
    //               style={{ color: "gray", fontSize: 13 }}
    //             >
    //               {" "}
    //               {acta.name}
    //             </Form.Label>
    //             <FileView key={index} title={acta.name} fileName={acta.url} />
    //           </Form.Group>
    //         ))
    //       ) : (
    //         <p
    //           style={{
    //             fontSize: 13,
    //             fontStyle: "italic",
    //             color: "gray",
    //             textAlign: "center",
    //           }}
    //         ></p>
    //       )}
    //       <div style={{ width: "70%" }}>
    //         <p style={{ fontSize: 10, color: "gray", marginBottom: -1 }}>
    //           + Añadir testamento
    //         </p>
    //         <FileUpload />
    //       </div>
    //     </Row>
    //   </>
    // )
  };

  return (
    <Fragment>
      <Row>
        <div style={{ padding: 30, minHeight: 550 }}>
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
            <i
              style={{ marginRight: 9 }}
              className="fe fe-user text-black fs-13"
            ></i>
            {memberSelected.name}
          </Card.Title>

          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div
              style={{
                paddingBottom: 0,
                paddingLeft: 10,
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              <div className="tabs-menu1">
                <Nav as="ul" className="nav panel-tabs">
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="first" href="#">
                      <i
                        style={{ marginRight: 9 }}
                        className="fe fe-folder text-black fs-13"
                      ></i>
                      Documentos
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="second">
                      <i
                        style={{ marginRight: 9 }}
                        className="fe fe-file-text text-black fs-13"
                      ></i>
                      Información
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="third">
                      <i
                        style={{ marginRight: 9 }}
                        className="fe fe-calendar text-black fs-13"
                      ></i>
                      Obligaciones
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="fourth">
                      <i
                        style={{ marginRight: 9 }}
                        className="fe fe-trending-up text-black fs-13"
                      ></i>
                      Bienes y Activos
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="will">
                      <i
                        style={{ marginRight: 9 }}
                        className="fe fe-book-open text-black fs-13"
                      ></i>
                      Testamentos
                    </Nav.Link>
                  </Nav.Item>
                  {memberSelected.name === "Francisco Carrasco Ramos" && (
                    <Nav.Item as="li">
                      <Nav.Link eventKey="view">
                        <i
                          style={{ marginRight: 9 }}
                          className="fe fe-lock text-black fs-13"
                        ></i>
                        Privacidad de mis datos
                      </Nav.Link>
                    </Nav.Item>
                  )}
                </Nav>
              </div>
            </div>

            <Tab.Content className="panel-body">
              <Tab.Pane eventKey="first">{renderDocuments()}</Tab.Pane>
              <Tab.Pane eventKey="second">{renderDescription()}</Tab.Pane>
              <Tab.Pane eventKey="third">{renderObligationsTabs()}</Tab.Pane>
              <Tab.Pane eventKey="fourth">{renderAssetList()}</Tab.Pane>
              <Tab.Pane eventKey="will">{renderWillData()}</Tab.Pane>
              {memberSelected.name === "Francisco Carrasco Ramos" && (
                <Tab.Pane eventKey="view">{renderVisibilityAccess()}</Tab.Pane>
              )}
            </Tab.Content>
          </Tab.Container>
          <Form noValidate validated={false} onSubmit={() => {}}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                position: "absolute",
                bottom: 80,
                right: 15,
              }}
            >
              <div></div>
              <Button className="custom-button" type="submit">
                Guardar
              </Button>
            </div>
          </Form>
        </div>
      </Row>
    </Fragment>
  );
}
