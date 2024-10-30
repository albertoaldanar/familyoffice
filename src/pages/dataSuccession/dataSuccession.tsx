import React, { Fragment, useState } from "react";
import { Card, Row, Form, Col } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
import { family } from "../governance/familyStructure/familyStructureData";

export default function DataSuccession() {
  //@ts-ignore
  const baseUrl = `${import.meta.env.BASE_URL}`;
  const [selectedFamily, setSelectedFamily] = useState({});
  const [selectedProviders, setSelectedProviders] = useState({});

  const handleSelectionChange = (assetId, type, selected) => {
    if (type === "Family") {
      setSelectedFamily((prev) => ({ ...prev, [assetId]: selected }));
    } else if (type === "Provider") {
      setSelectedProviders((prev) => ({ ...prev, [assetId]: selected }));
    }
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
        cada activo u obligación.
      </p>
      <p style={{ color: "gray", fontSize: 13 }}>
        3. Estas instrucciones se guardarán de forma encriptada en la base de
        datos y el asesor solo las ejecutará ciegamente, por seguridad.
      </p>
    </>
  );

  const renderAssetVisibility = (asset) => {
    const familyOptions = asset.visibility
      .filter((v) => v.type === "Family" && !v.hasVisibility)
      .map((v) => ({ label: v.name, value: v.id }));

    const providerOptions = asset.visibility
      .filter((v) => v.type === "Provider" && !v.hasVisibility)
      .map((v) => ({ label: v.name, value: v.id }));

    return (
      <div key={asset.id} style={{ marginTop: 20 }}>
        <p style={{fontSize: 13}}>-{asset.name}</p>
        <Row>
          <Form.Group
            as={Col}
            md="5"
            controlId="validationCustom01"
            className="form-group"
          >
            <p style={{color: 'gray', fontSize: 13}}>Familiares que aún no tienen visibilidad:</p>
            <MultiSelect
              options={familyOptions}
              value={selectedFamily[asset.id] || []}
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
            <p style={{color: 'gray', fontSize: 13}}>Proveedores que aún no tienen visibilidad:</p>
            <MultiSelect
              labelledBy="Selecciona proveedores"
              overrideStrings={{
                selectSomeItems: "Selecciona miembros accionistas",
                allItemsAreSelected: "Todos los miembros",
                selectAll: "Seleccionar todos",
              }}
              disableSearch
              options={providerOptions}
              value={selectedProviders[asset.id] || []}
              onChange={(selected) =>
                handleSelectionChange(asset.id, "Provider", selected)
              }
            />
          </Form.Group>
        </Row>
      </div>
    );
  };

  const renderAssets = () => (
    <div style={{ marginTop: 50, marginBottom: 200 }}>
      <p style={{fontWeight: 'bold'}}>1. Portafolio de activos y empresas</p>
      {family.members[0].assets.map((asset) => renderAssetVisibility(asset))}

      <p style={{fontWeight: 'bold'}}>2. Portafolio de activos y empresas</p>
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

          {renderAssets()}
        </div>
      </Row>
    </Fragment>
  );
}
