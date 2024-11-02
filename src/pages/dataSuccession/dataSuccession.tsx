import React, { Fragment, useState } from "react";
import { Card, Row, Form, Col, Tab, Nav } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
import { family } from "../governance/familyStructure/familyStructureData";

export default function DataSuccession() {
  const [assetsPostMortemVisibility, setAssetsPostMortemVisibility] = useState(
    family.members[0].assets.map((asset) => ({
      ...asset,
      visibility: asset.visibility.filter((member) => !member.hasVisibility),
    }))
  );

  const [obligationsPostMortemVisibility, setObligationsPostMortemVisibility] = useState(
    family.members[0].obligations
  );

  const [trustorPostMortemVisibility, setTrustorPostMortemVisibility] = useState(
    family.members[0].trustor
  );

  const [willsPostMortemVisibility, setWillsPostMortemVisibility] = useState(
    family.members[0].wills.map((will) => ({
      ...will,
      visibility: will.visibility.filter((member) => !member.hasVisibility),
    }))
  );

  const handleSelectionChange = (assetId, type, selected) => {
    setAssetsPostMortemVisibility((prevState) =>
      prevState.map((asset) => {
        if (asset.id === assetId) {
          const updatedVisibility = asset.visibility.map((member) => {
            const isSelected = selected.some((s) => s.value === member.id);
            return member.type === type
              ? { ...member, hasPostMortemVisibility: isSelected }
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
              ? { ...member, hasPostMortemVisibility: isSelected }
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
              ? { ...member, hasPostMortemVisibility: isSelected }
              : member;
          });
          return { ...obligation, visibility: updatedVisibility };
        }
        return obligation;
      })
    }));
  };

  const handleTrustorSelectionChange = (trustId, type, selected) => {
    setTrustorPostMortemVisibility((prevState) =>
      prevState.map((trust) => {
        if (trust.id === trustId) {
          const updatedVisibility = trust.visibility.map((member) => {
            const isSelected = selected.some((s) => s.value === member.id);
            return member.type === type
              ? { ...member, hasPostMortemVisibility: isSelected }
              : member;
          });
          return { ...trust, visibility: updatedVisibility };
        }
        return trust;
      })
    );
  };

  const renderInstructions = () => (
    <>
      <p style={{ fontWeight: "bold", marginBottom: 30 }}>
        El protocolo de sucesión de datos te permitirá hacer visible toda tu
        información después de tu fallecimiento (Francisco Carrasco Ramos)
      </p>
      <p style={{ color: "gray", fontSize: 13 }}>
        1. Esta funcionalidad te permitirá suceder y hacer visible toda tu
        información registrada en Famhold a familiares o proveedores que tú
        selecciones.
      </p>
      <p style={{ color: "gray", fontSize: 13 }}>
        2. A continuación podrás generar instrucciones para dar visibilidad a
        activos, obligaciónes y Documentos.
      </p>
      <p style={{ color: "gray", fontSize: 13 }}>
        3. Estas instrucciones se guardarán de forma encriptada en la base de
        datos y tu asesor de cuenta las ejecutará 'ciegamente', para asegurar la seguridad de tu información.
      </p>
    </>
  );

  const renderAssetVisibility = (asset) => {
    const familyOptions = asset.visibility
      .filter((v) => v.type === "Family")
      .map((v) => ({ label: v.name, value: v.id }));

    const providerOptions = asset.visibility
      .filter((v) => v.type === "Provider")
      .map((v) => ({ label: v.name, value: v.id }));

    const defaultFamilySelection = asset.visibility
      .filter((v) => v.type === "Family" && v.hasPostMortemVisibility)
      .map((v) => ({ label: v.name, value: v.id }));

    const defaultProviderSelection = asset.visibility
      .filter((v) => v.type === "Provider" && v.hasPostMortemVisibility)
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
            <p style={{ color: "gray", fontSize: 13 }}>
              Proveedores a los que se le dará visibilidad:
            </p>
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

  const renderWillsVisibility = (asset) => {
    const familyOptions = asset.visibility
      .filter((v) => v.type === "Family")
      .map((v) => ({ label: v.name, value: v.id }));

    const providerOptions = asset.visibility
      .filter((v) => v.type === "Provider")
      .map((v) => ({ label: v.name, value: v.id }));

    const defaultFamilySelection = asset.visibility
      .filter((v) => v.type === "Family" && v.hasPostMortemVisibility)
      .map((v) => ({ label: v.name, value: v.id }));

    const defaultProviderSelection = asset.visibility
      .filter((v) => v.type === "Provider" && v.hasPostMortemVisibility)
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

  const renderTrustorVisibility = (trust) => {
    const familyOptions = trust.visibility
      .filter((v) => v.type === "Family")
      .map((v) => ({ label: v.name, value: v.id }));

    const providerOptions = trust.visibility
      .filter((v) => v.type === "Provider")
      .map((v) => ({ label: v.name, value: v.id }));

    const defaultFamilySelection = trust.visibility
      .filter((v) => v.type === "Family" && v.hasPostMortemVisibility)
      .map((v) => ({ label: v.name, value: v.id }));

    const defaultProviderSelection = trust.visibility
      .filter((v) => v.type === "Provider" && v.hasPostMortemVisibility)
      .map((v) => ({ label: v.name, value: v.id }));

    return (
      <div key={trust.id} style={{ marginTop: 20 }}>
        <p style={{ fontWeight: "bold" }}>Fideicomiso {trust.trustNumber} - {trust.trusteeBank}</p>
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

  const renderObligationTitle = (obligation) => {
    if(obligation.rfc){
      return <p style={{ fontWeight: "bold" }}>Declaraciónes fiscales {obligation.regimenFiscal} - {obligation.rfc}</p>
    } else if(obligation.acreedor){
      return <p style={{ fontWeight: "bold" }}>Deuda por pagar {obligation.tipo} - {obligation.acreedor}</p>
    }  else if(obligation.deudor){
      return <p style={{ fontWeight: "bold" }}>Deuda por cobrar {obligation.tipo} - {obligation.deudor}</p>
    }
    return;
  }

  const renderObligationVisibility = (obligation, category) => {
    const familyOptions = obligation.visibility
      .filter((v) => v.type === "Family")
      .map((v) => ({ label: v.name, value: v.id }));

    const providerOptions = obligation.visibility
      .filter((v) => v.type === "Provider")
      .map((v) => ({ label: v.name, value: v.id }));

    const defaultFamilySelection = obligation.visibility
      .filter((v) => v.type === "Family" && v.hasPostMortemVisibility)
      .map((v) => ({ label: v.name, value: v.id }));

    const defaultProviderSelection = obligation.visibility
      .filter((v) => v.type === "Provider" && v.hasPostMortemVisibility)
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
                handleObligationChange(obligation.id, "Family", selected, category)
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
                handleObligationChange(obligation.id, "Provider", selected, category)
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

  const renderObligations = () => (
    <div style={{ marginTop: 20, marginBottom: 200 }}>
      {Object.entries(obligationsPostMortemVisibility).map(([category, obligations]) => (
        obligations.length > 0 && (
          <div key={category}>
            {obligations.map((obligation) => renderObligationVisibility(obligation, category))}
          </div>
        )
      ))}
    </div>
  );

  const renderAssets = () => (
    <div style={{ marginTop: 20, marginBottom: 200 }}>
      {assetsPostMortemVisibility.map((asset) => renderAssetVisibility(asset))}
    </div>
  );

  const renderWills = () => (
    <div style={{ marginTop: 20, marginBottom: 200 }}>
      {willsPostMortemVisibility.map((asset) => renderWillsVisibility(asset))}
    </div>
  );

  const renderTrustor = () => (
    <div style={{ marginTop: 20, marginBottom: 200 }}>
      {trustorPostMortemVisibility.map((trust) => renderTrustorVisibility(trust))}
    </div>
  );

  return (
    <Fragment>
      <Row>
        <div
          style={{
            minHeight: 550,
            paddingLeft: 30,
          }}
        >
          <Card.Title style={{ marginTop: 30, marginBottom: 30 }}>
            <i
              style={{ marginRight: 9 }}
              className="fe fe-unlock text-black fs-15"
            ></i>
            Protocolo de sucesión de datos
          </Card.Title>

          {renderInstructions()}

          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div
              style={{
                paddingBottom: 0,
                marginTop: 30,
              }}
            >
              <div className="tabs-menu1">
                <Nav as="ul" className="nav panel-tabs">
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="first">
                      <i
                        style={{ marginRight: 9 }}
                        className="fe fe-trending-up text-black fs-13"
                      ></i>
                      Activos y empresas
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="second">
                      <i
                        style={{ marginRight: 9 }}
                        className="fe fe-calendar text-black fs-13"
                      ></i>
                      Obligaciones
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="third">
                      <i
                        style={{ marginRight: 9 }}
                        className="fe fe-folder text-black fs-13"
                      ></i>
                      Fideicomisos
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="fourth">
                      <i
                        style={{ marginRight: 9 }}
                        className="fe fe-book-open text-black fs-13"
                      ></i>
                      Testamento
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>

            <Tab.Content className="panel-body">
              <Tab.Pane eventKey="first">{renderAssets()}</Tab.Pane>
              <Tab.Pane eventKey="second">{renderObligations()}</Tab.Pane>
              <Tab.Pane eventKey="third">{renderTrustor()}</Tab.Pane>
              <Tab.Pane eventKey="fourth">{renderWills()}</Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </Row>
    </Fragment>
  );
}
