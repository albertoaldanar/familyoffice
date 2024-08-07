export const wealthStructure = {
  title: "Patrimonio Familia Aldana Ríos",
  wealthCategories: [
    {
      name: "Empresas",
      id: 1,
      source: "root",
    },
    {
      name: "Bienes raices",
      id: 2,
      source: "root",
    },
    {
      name: "Capital privado",
      id: 3,
      source: "root",
    },
    {
      name: "Vehiculos",
      id: 4,
      source: "root",
    },
    {
      name: "Inversiones",
      id: 5,
      source: "root",
    },
    {
      name: "Cuantas bancarias",
      id: 6,
      source: "root",
    },
    {
      name: "Arte, colecciones y otros",
      id: 7,
      source: "root",
    },
    {
      name: "Prestamos por cobrar",
      id: 8,
      source: "root",
    },
  ],
  wealthItems: [
    {
      id: 13,
      coreId: 23,
      name: "Aldana Clima Integral SA de CV",
      value: "10,000,000.00",
      source: 1,
    },
    {
      id: 15,
      coreId: 1,
      name: "Audi A3",
      value: "600000",
      source: 4,
    },
    // {
    //   id: 25,
    //   coreId: 44,
    //   name: 'ACI SA de CV',
    //   value: '10,000,000.00',
    //   source: 1,
    // },
    // {
    //   id: 94,
    //   coreId: 33,
    //   name: 'MGH SA de CV',
    //   value: '10,000,000.00',
    //   source: 1,
    // },
    {
      id: 24,
      coreId: 29,
      name: "Casa Colinas del parque",
      value: "2,500,000.00",
      source: 2,
    },
    {
      id: 88,
      coreId: 1,
      name: "Prestamo Celsius SA de CV",
      value: "2,000,000.00",
      source: 8,
    },
    {
      id: 32,
      coreId: 43,
      name: "Coleccion de arte de Gerhard Richter",
      value: "2,000,000.00",
      source: 7,
    },
  ],
};

export const otherWealthData = {
  vehicles: [
    {
      id: 1,
      model: "A3",
      brand: "Audi",
      year: "2023",
      color: "Gris",
      value: "600000",
      circulationCard: "https://googledrive.com/erg3440398f4fmv",
      currency: "MXN",
      country: 'México',
      platesNumber: "XBJ21NB3",
      invoice: "https://googledrive.com/erg3440398f4fmv",
      owners: [
        {
          type: "family",
          pct: "100",
          coreId: "12",
          name: "Alberto Aldana Rios",
        },
      ],
      containedIntrusts: [
        {
          id: 20,
          name: 'Fideicomiso 0014233 Santander'
        },
      ],
    },
    {
      id: 3,
      model: "BYD",
      brand: "HAN",
      year: "2024",
      color: "Gris",
      country: 'USA',
      value: "60000",
      circulationCard: "",
      currency: "USD",
      platesNumber: "ABJ2NB3",
      invoice: "https://googledrive.com/erg3440398f4fmv",
      owners: [
        {
          type: "family",
          pct: "100",
          coreId: "43",
          name: "Francisco Aldana Fariñas",
        },
      ],
      containedIntrusts:[],
    },
    {
      id: 23,
      model: "Frontier",
      brand: "Nissan",
      country: 'México',
      value: "640000",
      currency: "MXN",
      circulationCard: "",
      year: "2015",
      color: "Gris",
      platesNumber: "AARBYNB1",
      invoice: "https://googledrive.com/erg3440398f4fmv",
      owners: [
        {
          type: "company",
          pct: "100",
          coreId: 23,
          name: "Aldana Clima Integral",
        },
      ],
      containedIntrusts:[],
    },
  ],
  artAndOthers: [
    {
      id: 43,
      type: "Arte",
      name: "Coleccion de arte de Gerhard Richter",
      containedIntrusts:[
        {
          id: 20,
          name: 'Fideicomiso 0014233 Santander'
        },
      ],
      value: "5000000",
      currency: "EUR",
      country: 'España',
      photo: "https://googledrive.com/erg3440398f4fmv",
      certificate: "https://googledrive.com/erg3440398f4fmv",
      owners: [
        {
          type: "family",
          pct: "100",
          coreId: "43",
          name: "Francisco Aldana Fariñas",
        },
      ],
    },
  ],
  bankAccounts: [
    {
      id: 1,
      owners: [
        {
          type: "Persona física",
          pct: "100",
          coreId: "43",
          name: "Francisco Aldana Fariñas",
        },
      ],
      containedIntrusts:[
        {
          id: 20,
          name: 'Fideicomiso 0014233 Santander'
        },
      ],
      bank: "Santander",
      accountNumber: "100434346583",
      country: "México",
      accountType: "Inversión",
      value: "1000000",
      currency: "MXN",
      lastUpdate: "30/05/2024",
    },
    {
      id: 2,
      owners: [
        {
          type: "Persona moral",
          pct: "100",
          coreId: 23,
          name: "Aldana Clima Integreal",
        },
      ],
      containedIntrusts:[
        {
          id: 20,
          name: 'Fideicomiso 0014233 Santander'
        },
      ],
      bank: "BBVA",
      accountNumber: "34333311021",
      country: "México",
      accountType: "Corriente",
      value: "30000",
      currency: "MXN",
      lastUpdate: "30/05/2024",
    },
  ],
  privateEquity: [
    {
      id: 2,
      fundName: 'Fondo ABC',
      investment: '10000000',
      containedIntrusts:[
        {
          id: 20,
          name: 'Fideicomiso 0014233 Santander'
        },
      ],
      currency: 'MXN',
      investmentYear: '2020',
      fundType: 'Venture Capital',
      industry: 'Startups',
      location: 'Mexico',
      owners: [
        {
          type: "Persona moral",
          pct: "100",
          coreId: 23,
          name: "Aldana Clima Integreal",
        },
      ],
    },
    {
      id: 6,
      fundName: 'BR capital',
      investment: '90000',
      containedIntrusts:[],
      currency: 'USD',
      investmentYear: '2023',
      fundType: 'Private Equity',
      industry: 'Real State',
      location: 'Europa',
      owners: [
        {
          type: "Persona física",
          pct: "100",
          coreId: "43",
          name: "Francisco Aldana Fariñas",
        },
      ],
    }
  ], 
  stockInvestments: [
    {
      id: 499,
      figure: 'Figura 1',
      bank: 'Scotia Bank',
      country: 'México',
      accountNumber: '6641232',
      routing: '43595932129',
      currency: 'MXN',
      investmentAmount: '2000000',
      owners: [
        {
          type: "family",
          pct: "50",
          coreId: "43",
          name: "Francisco Aldana Fariñas",
        },
        {
          type: "family",
          pct: "50",
          coreId: "23",
          name: "Patricia Ríos Collantes",
        },
      ],
      resultsReports: [
        {
          id: 1,
          value: '2100000',
          invoice: "https://googledrive.com/erg3440398f4fmv", 
          month: 'Enero',
          year: 2024
        },
        {
          id: 3,
          value: '2200000',
          invoice: "https://googledrive.com/erg3440398f4fmv", 
          month: 'Feberor',
          year: 2024
        },
        {
          id: 6,
          value: '2140000',
          invoice: "https://googledrive.com/erg3440398f4fmv", 
          month: 'Marzo',
          year: 2024
        }
      ]
    },
    {
      id: 159,
      figure: 'Figura 2',
      bank: 'Santander',
      country: 'México',
      accountNumber: '79441232',
      routing: '00146932129',
      currency: 'MXN',
      investmentAmount: '1000000',
      owners: [
        {
          type: "family",
          pct: "50",
          coreId: "43",
          name: "Francisco Aldana Fariñas",
        },
        {
          type: "family",
          pct: "50",
          coreId: "23",
          name: "Patricia Ríos Collantes",
        },
      ],
      resultsReports: []
    }
  ]
};
