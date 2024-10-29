import React, { Fragment, useState } from "react";
import { Card, Row, Button } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";

export default function DataSuccession() {
  //@ts-ignore
  const baseUrl = `${import.meta.env.BASE_URL}`;

  // Sample data, replace with your real data source
  const assets = [
    {
      id: 43,
      name: 'Coleccion de arte de Gerhard Richter',
      type: 'artAndOthers',
      pct: '100',
      value: '5000000.00',
      currency: 'EUR',
      country: 'España',
      visibility: [
        { id: '43', name: 'Diana Nieto Vega', type: 'Family', hasVisibility: true },
        { id: '12', name: 'Javier Carrasco Nieto', type: 'Family', hasVisibility: false },
        { id: '13', name: 'Adriana Carrasco Nieto', type: 'Family', hasVisibility: false },
        { id: '34', type: 'Provider', name: 'Raul Gallego León', hasVisibility: false },
        { id: '24', type: 'Provider', name: 'Luz Amelia Jacobo', hasVisibility: false },
      ],
    },
  ];

  const [selectedFamily, setSelectedFamily] = useState({});
  const [selectedProviders, setSelectedProviders] = useState({});

  const handleSelectionChange = (assetId, type, selected) => {
    if (type === 'Family') {
      setSelectedFamily(prev => ({ ...prev, [assetId]: selected }));
    } else if (type === 'Provider') {
      setSelectedProviders(prev => ({ ...prev, [assetId]: selected }));
    }
  };

  const renderInstructions = () => (
    <>
      <p style={{ fontWeight: 'bold', marginBottom: 30 }}>
        El protocolo de sucesión de datos te permitirá hacer visible toda tu información después de tu fallecimiento (Francisco Carrasco Ramos)
      </p>
      <p style={{ color: 'gray', fontSize: 13 }}>
        1. Esta funcionalidad te permitirá suceder y hacer visible toda tu información registrada en Famhold a familiares o proveedores que tú selecciones.
      </p>
      <p style={{ color: 'gray', fontSize: 13 }}>
        2. A continuación podrás generar instrucciones para dar visibilidad a cada activo u obligación.
      </p>
      <p style={{ color: 'gray', fontSize: 13 }}>
        3. Estas instrucciones se guardarán de forma encriptada en la base de datos y el asesor solo las ejecutará ciegamente, por seguridad.
      </p>
    </>
  );

  const renderAssetVisibility = (asset) => {
    const familyOptions = asset.visibility
      .filter(v => v.type === 'Family' && !v.hasVisibility)
      .map(v => ({ label: v.name, value: v.id }));

    const providerOptions = asset.visibility
      .filter(v => v.type === 'Provider' && !v.hasVisibility)
      .map(v => ({ label: v.name, value: v.id }));

    return (
      <div key={asset.id} style={{ marginTop: 20 }}>
        <h5>{asset.name}</h5>
        <p>Valor: {asset.value} {asset.currency}</p>

        <div>
          <p>Familiares:</p>
          <MultiSelect
            options={familyOptions}
            value={selectedFamily[asset.id] || []}
            onChange={selected => handleSelectionChange(asset.id, 'Family', selected)}
            labelledBy="Seleccionar Familiares"
          />
        </div>

        <div style={{ marginTop: 20 }}>
          <p>Proveedores:</p>
          <MultiSelect
            options={providerOptions}
            value={selectedProviders[asset.id] || []}
            onChange={selected => handleSelectionChange(asset.id, 'Provider', selected)}
            labelledBy="Seleccionar Proveedores"
          />
        </div>
      </div>
    );
  };

  const renderAssets = () => (
    <div style={{ marginTop: 50, marginBottom: 500 }}>
      <p>1. Portafolio de activos y empresas</p>
      {assets.map(asset => renderAssetVisibility(asset))}
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
