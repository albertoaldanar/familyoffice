export const realstateData = [
  {
    id: 24,
    nombre: "Departamento costa veleros la marina",
    moneda: "MXN",
    escrituras: "https://www.google.drive/1423nger",
    valuacion: "3,000,000.00",
    location: "Col la marina mazatlan camaron sabalo CP 233",
    ciudad: "Mazatlán, Sinaloa",
    country: "México",
    percentage: "100",
    mt2: "250",
    propertyType: "Departamento",
    obligations: {
      popertyTaxes: [],
      mantainances: [
        {
          id: 21,
          tipo: "Inmobiliario",
          pagoA: "Administración la marina",
          monto: "2,500.00",
          moneda: "MXN",
          proxPago: "12/12/2024",
          conuntry: "México",
        },
      ],
      rentsCollecting: [
        {
          id: 21,
          tipo: "Inmobiliario",
          arrendatario: "John Williams",
          moneda: "MXN",
          country: "México",
          monto: "34,000.00",
          proxCobro: "22/09/2024",
        },
      ],
      debt: [],
      insurances: [],
    },
    containedIntrusts: [],
    contacts: [
      {
        id: 1,
        name: "Cesar Tamayo",
        type: "Asesor Inmobiliario",
        categoryCoreId: 23,
        coreId: 1,
        number: "6691481888",
        location: "Mazatlán, Sinaloa",
        email: "cesar@tamayocoppel.com",
      },
    ],
    images: [
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fapartment%2520building%2F&psig=AOvVaw1zYHqxmpBoPCXfkEVBI9UX&ust=1719262565828000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjk16XO8oYDFQAAAAAdAAAAABAE",
      "https://img.zumpercdn.com/209027862/1280x960",
      "https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=0&k=20&c=iW4NBiMPKEuvaA7h8wIsPHikhS64eR-5EVPfjQ9GPOA=",
    ],
    owners: [
      {
        type: "family",
        pct: "100",
        coreId: "43",
        name: "Francisco Carrasco Ramos",
      },
    ],
  },
  {
    id: 29,
    nombre: "Casa Colinas del parque",
    contacts: [],
    obligations: {
      popertyTaxes: [
        {
          id: 2,
          name: "Predial - Casa Colinas del parque",
          monto: "15,350.00",
          moneda: "MXN",
          proxPago: "29/09/2024",
          country: "México",
          frecuenciaDePago: "Anual",
        },
      ],
      mantainances: [
        {
          id: 12,
          tipo: "Inmobiliario",
          pagoA: "Administración colinas",
          monto: "4,000.00",
          conuntry: 'México',
          proxPago: "12/12/2024",
          moneda: 'MXN',
        },
      ],
      rentsCollecting: [], 
      debt: [
        {
          id: 1,
          tipoCredito: "Hipotecario",
          monto: "10,000,000.00",
          proxPago: "29/12/2024",
          porPagar: "9,790,000.00",
          pagado: "210,000",
          moneda: "MXN",
          interes: "15",
        }
      ], 
      insurances: [
        {
          id: 26,
          proxPago: "11/09/2024",
          country: 'México',
          nombreAseguradora: "MAPFRE",
          moneda: "MXN",
          vigenciaDel: "12/01/2024",
          vigenciaAl: "12/01/2024",
        }
      ]
    },
    containedIntrusts: [
      {
        id: 90,
        name: "Fideicomiso 144002 BBVA",
      },
    ],
    moneda: "MXN",
    escrituras: "https://www.google.drive/1423nger",
    valuacion: "7,500,000.00",
    country: "México",
    ciudad: "Culiacan, Sinaloa",
    location: "Col Montebello Calle cipres 322 Privada colinas del parque",
    percentage: "100",
    mt2: "1250",
    propertyType: "Casa",
    images: [
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fapartment%2520building%2F&psig=AOvVaw1zYHqxmpBoPCXfkEVBI9UX&ust=1719262565828000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjk16XO8oYDFQAAAAAdAAAAABAE",
      "https://img.zumpercdn.com/209027862/1280x960",
      "https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=0&k=20&c=iW4NBiMPKEuvaA7h8wIsPHikhS64eR-5EVPfjQ9GPOA=",
    ],
    owners: [
      {
        type: "family",
        pct: "50",
        coreId: "23",
        name: "Adriana Carrasco Nieto",
        capitalSocial: "1000000",
      },
      {
        type: "family",
        pct: "50",
        coreId: "43",
        name: "Francisco Carrasco Ramos",
        capitalSocial: "1500000",
      },
    ],
  },
  {
    id: 42,
    nombre: "Oficinas mutualismo",
    ciudad: "Culiacan, Sinaloa",
    contacts: [],
    containedIntrusts: [],
    obligations: {
      popertyTaxes: [
        {
          id: 2,
          name: "Predial - Casa Colinas del parque",
          monto: "15,350.00",
          moneda: "MXN",
          proxPago: "29/09/2024",
          country: "México",
          frecuenciaDePago: "Anual",
        },
      ],
      mantainances: [
        {
          id: 12,
          tipo: "Inmobiliario",
          pagoA: "Administración colinas",
          monto: "4,000.00",
          conuntry: 'México',
          proxPago: "12/12/2024",
          moneda: 'MXN',
        },
      ],
      rentsCollecting: [
        {
          id: 8,
          tipo: "Inmobiliario",
          arrendatario: "Grupo Agricola Carrasco SA de CV",
          country: 'México',
          proxCobro: "22/09/2024",
          monto: "45,000.00",
          moneda: "MXN",
        },
      ], 
      debt: [],
      insurances: [],
    },
    moneda: "MXN",
    country: "México",
    escrituras: "https://www.google.drive/1423nger",
    valuacion: "16,500,000.00",
    location: "Col El vallado calle zapata 322",
    percentage: "100",
    mt2: "2250",
    propertyType: "Oficinas",
    owners: [
      {
        type: "family",
        pct: "100",
        coreId: "23",
        name: "Adriana Carrasco Nieto",
      },
    ],
    images: [
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fapartment%2520building%2F&psig=AOvVaw1zYHqxmpBoPCXfkEVBI9UX&ust=1719262565828000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjk16XO8oYDFQAAAAAdAAAAABAE",
      "https://img.zumpercdn.com/209027862/1280x960",
      "https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=0&k=20&c=iW4NBiMPKEuvaA7h8wIsPHikhS64eR-5EVPfjQ9GPOA=",
    ],
  },
];

export const realStateStats = {
  numberOfProperties: 6,
  totalValueOfProperties: [
    {
      currency: "MXN",
      value: "14,000,000.00",
    },
    {
      currency: "USD",
      value: "750,988.35",
    },
    {
      currency: "EUR",
      value: "68,0583.19",
    },
  ],
  byType: [
    {
      type: "Casas",
      value: [
        { currency: "MXN", value: 9000000 },
        { currency: "USD", value: 473946.14 },
        { currency: "EUR", value: 426147.16 },
      ],
    },
    {
      type: "Oficinas",
      value: [
        { currency: "MXN", value: 4500000 },
        { currency: "USD", value: 236973.07 },
        { currency: "EUR", value: 213073.58 },
      ],
    },
    {
      type: "Departamentos",
      value: [
        { currency: "MXN", value: 6000000 },
        { currency: "USD", value: 315964.09 },
        { currency: "EUR", value: 284098.11 },
      ],
    },
  ],
  byOwners: [
    {
      type: "Francisco Carrasco Ramos",
      value: [
        { currency: "MXN", value: 4500000 },
        { currency: "USD", value: 236973.07 },
        { currency: "EUR", value: 213073.58 },
      ],
    },
    {
      type: "Adriana Carrasco Nieto",
      value: [
        { currency: "MXN", value: 3375000 },
        { currency: "USD", value: 177729.8 },
        { currency: "EUR", value: 159805.19 },
      ],
    },
  ],
  byUsage: [
    {
      type: "Renta",
      value: 4,
    },
    {
      type: "Especulación",
      value: 3,
    },
    {
      type: "Inversión",
      value: 1,
    },
    {
      type: "Uso habitacional",
      value: 1,
    },
  ],
  byCountry: [
    {
      type: "México",
      value: 6,
    },
  ],
  byAssets: [
    {
      type: "Departamento costa veleros la marina",
      value: [
        { currency: "MXN", value: 3000000 },
        { currency: "USD", value: 157982.04 },
        { currency: "EUR", value: 142089.05 },
      ],
    },
    {
      type: "Oficinas mutualismo",
      value: [
        { currency: "MXN", value: 16500000 },
        { currency: "USD", value: 868901.23 },
        { currency: "EUR", value: 781489.77 },
      ],
    },
    {
      type: "Casa Colinas del parque",
      value: [
        { currency: "MXN", value: 7500000 },
        { currency: "USD", value: 394955.11 },
        { currency: "EUR", value: 355222.63 },
      ],
    },
  ],
  countries: ["Mexico"],
};
