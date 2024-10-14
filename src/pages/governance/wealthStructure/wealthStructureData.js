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
      name: "Agricola Carrasco SA de CV",
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
      name: "Casa La primavera San Anselmo 2083",
      value: "2,500,000.00",
      source: 2,
    },
    {
      id: 88,
      coreId: 1,
      name: "Servicios financieros del campo CN SA de CV",
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
      country: "México",
      platesNumber: "XBJ21NB3",
      invoice: "https://googledrive.com/erg3440398f4fmv",
      obligations: {
        mantainances: [
          {
            id: 22,
            moneda: 'MXN',
            pagoA: "Audi agencia",
            mantainanceTo: "Audi-A3",
            conuntry: 'México',
            monto: "7,500.00",
            proxPago: null,
          },
        ],
        rentsCollecting: [], 
        debt: [
          {
            id: 15,
            monto: "600,000.00",
            pagado: "210,000.00",
            porPagar: "45,000.00",
            interes: "12",
            proxPago: "29/12/2024",
            moneda: "MXN",
          }
        ], 
        insurances: [
          {
            id: 23,
            anualCost: "23,000.00",
            proxPago: null,
            country: 'México',
            nombreAseguradora: "BBVA seguros",
            moneda: "MXN",
            vigenciaDel: "12/01/2024",
            vigenciaAl: "12/01/2024",
          }
        ]
      },
      contacts: [
        {
          id: 1,
          name: 'Daniel Ortega',
          type: 'Notario',
          categoryCoreId: 24,
          coreId: 2,
          number: '6691481888',
          location: 'Mazatlán, Sinaloa',
          email: 'daniel@ortega.com'
        }
      ],
      owners: [
        {
          type: "family",
          pct: "100",
          coreId: "12",
          name: "Javier Carrasco Nieto",
        },
      ],
      containedIntrusts: [
        {
          id: 20,
          name: "Fideicomiso 0014233 Santander",
        },
      ],
    },
    {
      id: 3,
      model: "BYD",
      brand: "HAN",
      year: "2024",
      color: "Gris",
      country: "USA",
      value: "60000",
      circulationCard: "",
      currency: "USD",
      contacts: [],
      obligations: {
        mantainances: [],
        rentsCollecting: [], 
        debt: [], 
        insurances: [
          {
            id: 25,
            proxPago: "28/09/2024",
            anualCost: "43,000.00",
            country: 'México',
            nombreAseguradora: "Seguros Monterrey",
            moneda: "MXN",
            vigenciaDel: "12/01/2024",
            vigenciaAl: "12/01/2024",
          }
        ]
      },
      platesNumber: "ABJ2NB3",
      invoice: "https://googledrive.com/erg3440398f4fmv",
      owners: [
        {
          type: "family",
          pct: "100",
          coreId: "23",
          name: "Francisco Carrasco Ramos",
        },
      ],
      containedIntrusts: [],
    },
    {
      id: 23,
      model: "Frontier",
      brand: "Nissan",
      country: "México",
      value: "640000",
      currency: "MXN",
      circulationCard: "",
      year: "2015",
      color: "Gris",
      platesNumber: "AARBYNB1",
      invoice: "https://googledrive.com/erg3440398f4fmv",
      contacts: [],
      obligations: {
        mantainances: [],
        rentsCollecting: [], 
        debt: [], 
        insurances: [
          {
            id: 24,
            anualCost: "23,000.00",
            country: 'México',
            proxPago: "01/11/2024",
            nombreAseguradora: "Seguros Monterrey",
            moneda: "MXN",
            vigenciaDel: "12/01/2024",
            vigenciaAl: "12/01/2024",
          }
        ]
      },
      owners: [
        {
          type: "company",
          pct: "50",
          coreId: 23,
          name: "Agricola Carrasco SA de CV",
        },
        {
          type: "trust",
          pct: "50",
          coreId: 90,
          name: "144002 BBVA",
        },
      ],
      containedIntrusts: [],
    },
    {
      id: 32,
      model: "Q8",
      brand: "Audi",
      country: "USA",
      value: "67000",
      currency: "USD",
      circulationCard: "",
      year: "2018",
      color: "Gris",
      platesNumber: "N43RNB1",
      invoice: "https://googledrive.com/erg3440398f4fmv",
      contacts: [],
      obligations: {
        mantainances: [],
        rentsCollecting: [], 
        debt: [], 
        insurances: [
          {
            id: 123,
            anualCost: "2,000.00",
            country: 'México',
            proxPago: "01/11/2024",
            nombreAseguradora: "MAPFRE",
            moneda: "USD",
            vigenciaDel: "12/01/2024",
            vigenciaAl: "12/01/2024",
          }
        ]
      },
      owners: [
        {
          type: "company",
          pct: "100",
          coreId: 85,
          name: " CN Market Transportation LLC",
        },
      ],
      containedIntrusts: [],
    },
    {
      id: 23,
      model: "Frontier",
      brand: "Nissan",
      country: "México",
      value: "640000",
      currency: "MXN",
      circulationCard: "",
      year: "2015",
      color: "Gris",
      platesNumber: "AARBYNB1",
      invoice: "https://googledrive.com/erg3440398f4fmv",
      contacts: [],
      obligations: {
        mantainances: [],
        rentsCollecting: [], 
        debt: [], 
        insurances: [
          {
            id: 24,
            anualCost: "23,000.00",
            country: 'México',
            proxPago: "01/11/2024",
            nombreAseguradora: "Seguros Monterrey",
            moneda: "MXN",
            vigenciaDel: "12/01/2024",
            vigenciaAl: "12/01/2024",
          }
        ]
      },
      owners: [
        {
          type: "company",
          pct: "50",
          coreId: 23,
          name: "Agricola Carrasco SA de CV",
        },
        {
          type: "trust",
          pct: "50",
          coreId: 90,
          name: "144002 BBVA",
        },
      ],
      containedIntrusts: [],
    },
  ],
  artAndOthers: [
    {
      id: 43,
      type: "Arte",
      name: "Coleccion de arte de Gerhard Richter",
      contacts: [],
      containedIntrusts: [
        {
          id: 20,
          name: "Fideicomiso 0014233 Santander",
        },
      ],
      value: "5000000",
      currency: "EUR",
      country: "España",
      photo: "https://googledrive.com/erg3440398f4fmv",
      certificate: "https://googledrive.com/erg3440398f4fmv",
      owners: [
        {
          type: "family",
          pct: "80",
          coreId: "23",
          name: "Francisco Carrasco Ramos",
        },
        {
          type: "trust",
          pct: "20",
          coreId: 20,
          name: "0014233-Santander",
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
          coreId: "23",
          name: "Francisco Carrasco Ramos"
        }
      ],
      contacts: [
        {
          id: 1,
          name: "Raul Gallego León",
          type: "Banquero privado",
          categoryCoreId: 50,
          coreId: 34,
          number: "6691481888",
          location: "Mazatlán, Sinaloa",
          email: "raul@gallegosbanca.com"
        }
      ],
      bank: "Santander",
      accountNumber: "100434346583",
      country: "México",
      accountType: "Inversión",
      value: "1000000",
      currency: "MXN",
      lastUpdate: "30/05/2024"
    },
    {
      id: 2,
      owners: [
        {
          type: "Persona moral",
          pct: "100",
          coreId: 23,
          name: "Agricola Carrasco SA de CV"
        }
      ],
      contacts: [],
      bank: "BBVA",
      accountNumber: "34333311021",
      country: "México",
      accountType: "Corriente",
      value: "30000",
      currency: "MXN",
      lastUpdate: "30/05/2024"
    },
    {
      id: 3,
      owners: [
        {
          type: "Persona física",
          pct: "100",
          coreId: "23",
          name: "Francisco Carrasco Ramos"
        }
      ],
      contacts: [
        {
          id: 2,
          name: "John Doe",
          type: "Private Banker",
          categoryCoreId: 51,
          coreId: 35,
          number: "1234567890",
          location: "Los Angeles, California",
          email: "john@usabank.com"
        }
      ],
      bank: "Bank of America",
      accountNumber: "987654321",
      country: "USA",
      accountType: "Investment",
      value: "50000",
      currency: "USD",
      lastUpdate: "15/06/2024"
    },
    {
      id: 4,
      owners: [
        {
          type: "Persona física",
          pct: "100",
          coreId: "23",
          name: "Francisco Carrasco Ramos"
        }
      ],
      contacts: [
        {
          id: 3,
          name: "Jane Smith",
          type: "Private Banker",
          categoryCoreId: 52,
          coreId: 36,
          number: "9876543210",
          location: "New York, USA",
          email: "jane@usabank.com"
        }
      ],
      bank: "Chase",
      accountNumber: "123987654",
      country: "USA",
      accountType: "Checking",
      value: "20000",
      currency: "USD",
      lastUpdate: "20/06/2024"
    },
    {
      id: 5,
      owners: [
        {
          type: "Persona física",
          pct: "100",
          coreId: "23",
          name: "Francisco Carrasco Ramos"
        }
      ],
      contacts: [
        {
          id: 4,
          name: "Carlos López",
          type: "Banquero privado",
          categoryCoreId: 53,
          coreId: 37,
          number: "5551234567",
          location: "Monterrey, México",
          email: "carlos@bancomexico.com"
        }
      ],
      bank: "Scotiabank",
      accountNumber: "765432109",
      country: "México",
      accountType: "Inversión",
      value: "750000",
      currency: "MXN",
      lastUpdate: "05/07/2024"
    },
    {
      id: 6,
      owners: [
        {
          type: "Persona física",
          pct: "100",
          coreId: "23",
          name: "Francisco Carrasco Ramos"
        }
      ],
      contacts: [],
      bank: "HSBC",
      accountNumber: "555666777",
      country: "México",
      accountType: "Corriente",
      value: "50000",
      currency: "MXN",
      lastUpdate: "12/07/2024"
    }
  ],
  privateEquity: [
    {
      id: 2,
      fundName: "Fondo ABC",
      investment: "10000000",
      loanId: null,
      contacts: [
        {
          id: 1,
          name: 'Raul Gallego León',
          type: 'Banquero privado',
          categoryCoreId: 50,
          coreId: 34,
          number: '6691481888',
          location: 'Mazatlán, Sinaloa',
          email: 'raul@gallegosbanca.com'
        }
      ],
      investmentReturns: [
        {
          id: 1,
          year: "2024",
          month: "Enero",
          amount: "45000",
          currency: "MXN",
          voucher: "https://googledrive.com/erg3440398f4fmv",
        },
        {
          id: 2,
          year: "2024",
          month: "Julio",
          amount: "50000",
          currency: "MXN",
          voucher: "https://googledrive.com/erg3440398f4fmv",
        },
      ],
      privateEquityType: "Fondo",
      directType: '',
      investmentName: "Inversión en fondo ABC",
      preMoneyValue: "",
      postMoneyValue: "",
      equityPercentage: "",
      currentValue: "",
      tir: "",
      voucher: "",
      companyStage: "Seed",
      actaConstitutiva: "",
      actaAsamblea: "",
      financialStatements: [],
      containedIntrusts: [],
      containedIntrusts: [
        {
          id: 20,
          name: "Fideicomiso 0014233 Santander",
        },
      ],
      currency: "MXN",
      investmentYear: "2020",
      fundType: "Venture Capital",
      industry: "Startups",
      country: "Brazil",
      owners: [
        {
          type: "company",
          pct: "100",
          coreId: 23,
          name: "Agricola Carrasco SA de CV",
        },
      ],
    },
    {
      id: 6,
      fundName: "",
      investment: "1000000",
      loanId: null,
      investmentReturns: [],
      privateEquityType: "Directo",
      directType: 'Capital',
      investmentName: "Inversión en restaurante de amigo",
      preMoneyValue: "2000000",
      postMoneyValue: "3000000",
      equityPercentage: "20",
      currentValue: "5000000",
      tir: "5",
      voucher: "https://googledrive.com/erg3440398f4fmv",
      companyStage: "Seed",
      actaConstitutiva: "https://googledrive.com/erg3440398f4fmv",
      actaAsamblea: "https://googledrive.com/erg3440398f4fmv",
      financialStatements: [
        "https://googledrive.com/erg3440398f4fmv",
        "https://googledrive.com/erg3440398f4fmv",
      ],
      containedIntrusts: [],
      contacts: [
        {
          id: 1,
          name: 'Raul Gallego León',
          type: 'Banquero privado',
          categoryCoreId: 50,
          coreId: 34,
          number: '6691481888',
          location: 'Mazatlán, Sinaloa',
          email: 'raul@gallegosbanca.com'
        }
      ],
      currency: "USD",
      investmentYear: "2023",
      fundType: "Private Equity",
      industry: "Real State",
      country: "México",
      owners: [
        {
          type: "family",
          pct: "100",
          coreId: 23,
          name: "Francisco Carrasco Ramos",
        },
      ],
    },
    {
      id: 24,
      fundName: "",
      investment: "1000000",
      loanId: 33,
      investmentReturns: [],
      privateEquityType: "Directo",
      directType: 'Deuda',
      investmentName: "Prestamo a constructor ABD",
      preMoneyValue: "",
      postMoneyValue: "",
      equityPercentage: "",
      currentValue: "",
      tir: "",
      voucher: "",
      companyStage: "",
      actaConstitutiva: "",
      actaAsamblea: "",
      financialStatements: [],
      containedIntrusts: [],
      currency: "USD",
      investmentYear: "",
      fundType: "",
      industry: "",
      contacts: [],
      country: "México",
      owners: [
        {
          type: "family",
          pct: "100",
          coreId: 23,
          name: "Francisco Carrasco Ramos",
        },
      ],
    },
  ],
  stockInvestments: [
    {
      id: 499,
      figure: "Figura 1",
      bank: "Scotia Bank",
      country: "México",
      accountNumber: "6641232",
      routing: "43595932129",
      currency: "MXN",
      investmentAmount: "2000000",
      contacts: [
        {
          id: 1,
          name: 'Raul Gallego León',
          type: 'Banquero privado',
          categoryCoreId: 50,
          coreId: 34,
          number: '6691481888',
          location: 'Mazatlán, Sinaloa',
          email: 'raul@gallegosbanca.com'
        }
      ],
      owners: [
        {
          type: "family",
          pct: "50",
          coreId: "23",
          name: "Francisco Carrasco Ramos",
        },
        {
          type: "trust",
          pct: "50",
          coreId: 90,
          name: "144002-BBVA",
        },
      ],
      resultsReports: [
        {
          id: 1,
          value: "2100000",
          invoice: "https://googledrive.com/erg3440398f4fmv",
          month: "Enero",
          year: 2024,
        },
        {
          id: 3,
          value: "2200000",
          invoice: "https://googledrive.com/erg3440398f4fmv",
          month: "Feberor",
          year: 2024,
        },
        {
          id: 6,
          value: "2140000",
          invoice: "https://googledrive.com/erg3440398f4fmv",
          month: "Marzo",
          year: 2024,
        },
      ],
    },
    {
      id: 159,
      figure: "Figura 2",
      bank: "Santander",
      country: "México",
      accountNumber: "79441232",
      routing: "00146932129",
      currency: "MXN",
      investmentAmount: "1000000",
      contacts: [
        {
          id: 1,
          name: 'Raul Gallego León',
          type: 'Banquero privado',
          categoryCoreId: 50,
          coreId: 34,
          number: '6691481888',
          location: 'Mazatlán, Sinaloa',
          email: 'raul@gallegosbanca.com'
        }
      ],
      owners: [
        {
          type: "family",
          pct: "50",
          coreId: "23",
          name: "Francisco Carrasco Ramos",
        },
        {
          type: "family",
          pct: "50",
          coreId: "43",
          name: "Diana Nieto Vega",
        },
      ],
      resultsReports: [],
    },
  ],
};
