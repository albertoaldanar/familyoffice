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
      name: "Empresa Agricola SA de CV",
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
      name: "Casa Culiacan 322",
      value: "2,500,000.00",
      source: 2,
    },
    {
      id: 88,
      coreId: 1,
      name: "Empresa financiera SA de CV",
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
      successionInstructions: [
        "Esta vehiculo se le dara a la empresa Empresa Agricola SA de CV"
      ],
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
          name: "Miembro 3 (Hijo)",
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
      successionInstructions: [
        "Esta vehiculo se le heredara a mi hijo Miembro 3 (Hijo)"
      ],
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
          name: "Miembro 1 (Padre)",
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
      successionInstructions: [
        "Esta vehiculo se le heredara a mi hijo Miembro 3 (Hijo)"
      ],
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
          name: "Empresa Agricola SA de CV",
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
      successionInstructions: [
        "Esta vehiculo quedara en la casa de san diego y se podra utilizar por cualquier miembro de la familia que se este quedando ahi"
      ],
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
          name: "Empresa Transporte LLC",
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
      successionInstructions: [],
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
          name: "Empresa Agricola SA de CV",
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
      successionInstructions: [
        "Esta coleccion de arte se encuentra en casa de San Diego Mission Valley. En caso de mi fallecimiento se heredara en partes iguales entre mis 3 hijos"
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
          name: "Miembro 1 (Padre)",
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
          name: "Miembro 1 (Padre)"
        }
      ],
      successionInstructions: [
        "La beneficiria de esta cuenta en su totalidad es Miembro 2 (Madre)", 
        "En caso del fallcimiento de Diana el monto de esta cuenta bancarias se heredara a mis 3 hijos Adrian, Sofia y Javier en partes iguales 33% a cada uno"
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
      successionInstructions: [],
      owners: [
        {
          type: "Persona moral",
          pct: "100",
          coreId: 23,
          name: "Empresa Agricola SA de CV"
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
          name: "Miembro 1 (Padre)"
        }
      ],
      successionInstructions: [
        "La beneficiria de esta cuenta en su totalidad es Miembro 2 (Madre)", 
        "En caso del fallcimiento de Diana el monto de esta cuenta bancarias se heredara a mis 3 hijos Adrian, Sofia y Javier en partes iguales 33% a cada uno"
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
          name: "Miembro 1 (Padre)"
        }
      ],
      successionInstructions: [
        "La beneficiria de esta cuenta en su totalidad es Miembro 2 (Madre)", 
        "En caso del fallcimiento de Diana el monto de esta cuenta bancarias se heredara a mis 3 hijos Adrian, Sofia y Javier en partes iguales 33% a cada uno"
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
          name: "Miembro 1 (Padre)"
        }
      ],
      successionInstructions: [
        "La beneficiria de esta cuenta en su totalidad es Miembro 2 (Madre)", 
        "En caso del fallcimiento de Diana el monto de esta cuenta bancarias se heredara a mis 3 hijos Adrian, Sofia y Javier en partes iguales 33% a cada uno"
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
          name: "Miembro 1 (Padre)"
        }
      ],
      successionInstructions: [
        "La beneficiria de esta cuenta en su totalidad es Miembro 2 (Madre)", 
        "En caso del fallcimiento de Diana el monto de esta cuenta bancarias se heredara a mis 3 hijos Adrian, Sofia y Javier en partes iguales 33% a cada uno"
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
      successionInstructions: [
        "Los rendimientos y retornos de esta inversión se depositan en la cuenta BBVA-32473", 
        "En caso de mi fallecimiento si el fondo no se ha cerrado, la beneficiaria de esta cuenta es Miembro 2 (Madre)", 
        "En caso de impago, contactar a Raul Ortiz para solicitar pago de retornos, su contacto se encuentra en la lista de proveedores", 
      ],
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
          name: "Empresa Agricola SA de CV",
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
      successionInstructions: [
        "El 20% de esta empresa se obtuvo a raiz de invertir 10,000,000 MXN en el restaurante de Raul Quintero, este 20% se le heredara a mi hijo Javier", 
        "En caso de fallecimiento llamar a Raul Quintero arreglar la sociedad", 
      ],
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
          name: "Miembro 1 (Padre)",
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
      successionInstructions: [
        "La cobranza de este prestamo la debe de seguir llevando a cabo mi contadora Daniela Moreno",
        "Los montos de la deuda por pagar se le otorgara a mi esposa Miembro 2 (Madre), en caso de mi fallecimiento, a mis 3 hijos en partes iguales.",
      ],
      owners: [
        {
          type: "family",
          pct: "100",
          coreId: 23,
          name: "Miembro 1 (Padre)",
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
      successionInstructions: [
        "Esta cuent se encuentra añadida en el Fideicomiso SocitiaBanke 232421, llamar a Raul Aldana"
      ],
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
          name: "Miembro 1 (Padre)",
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
      successionInstructions: [
        "Esta cuent se encuentra añadida en el Fideicomiso Santander 232421, llamar a Ruben Mora"
      ],
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
          name: "Miembro 1 (Padre)",
        },
        {
          type: "family",
          pct: "50",
          coreId: "43",
          name: "Miembro 2 (Madre)",
        },
      ],
      resultsReports: [],
    },
  ],
  "totalValues": {
    "vehicles": {
      "value": [
        {
          "currency": "MXN",
          "value": "5,450,000"
        },
        {
          "currency": "USD",
          "value": "281,077.51"
        },
        {
          "currency": "EUR",
          "value": "257,975.75"
        }
      ],
      "numberOfVehicles": 6
    },
    "realState": {
      "value": [
        {
          "currency": "MXN",
          "value": "18,900,000"
        },
        {
          "currency": "USD",
          "value": "1,021,621.62" // 18,900,000 / 18.5
        },
        {
          "currency": "EUR",
          "value": "989,528.80" // 18,900,000 / 19.1
        }
      ],
      "rentValue": [
        {
          "currency": "MXN",
          "value": "67,000"
        },
        {
          "currency": "USD",
          "value": "3,621.62" // 67,000 / 18.5
        },
        {
          "currency": "EUR",
          "value": "3,508.38" // 67,000 / 19.1
        }
      ]
    },
    "bankAccounts": {
      "companiesValue": [
        {
          "currency": "MXN",
          "value": "4,500,000"
        },
        {
          "currency": "USD",
          "value": "243,243.24" // 4,500,000 / 18.5
        },
        {
          "currency": "EUR",
          "value": "235,602.09" // 4,500,000 / 19.1
        }
      ],
      "familyMembersValue": [
        {
          "currency": "MXN",
          "value": "2,650,000"
        },
        {
          "currency": "USD",
          "value": "143,243.24" // 2,650,000 / 18.5
        },
        {
          "currency": "EUR",
          "value": "138,743.98" // 2,650,000 / 19.1
        }
      ]
    },
    "privateEquity": {
      "totalValueOfPrivateEquity": [
        {
          "currency": "MXN",
          "value": "4,500,000.00"
        },
        {
          "currency": "USD",
          "value": "236,804.96"
        },
        {
          "currency": "EUR",
          "value": "212,906.60"
        }
      ],
      "totalValueOfPrivateEquityFunds": [
        {
          "currency": "MXN",
          "value": "400,000.00"
        },
        {
          "currency": "USD",
          "value": "19,804.96"
        },
        {
          "currency": "EUR",
          "value": "16,906.60"
        }
      ],
      "totalValueOfPrivateEquityDirect": [
        {
          "currency": "MXN",
          "value": "4,100,000.00"
        },
        {
          "currency": "USD",
          "value": "206,804.96"
        },
        {
          "currency": "EUR",
          "value": "196,906.60"
        }
      ]
    },
    "artAndCollections": {
      "value": [
        {
          "currency": "MXN",
          "value": "10,000,000.00"
        },
        {
          "currency": "USD",
          "value": "540,540.54" // 10,000,000 / 18.5
        },
        {
          "currency": "EUR",
          "value": "523,560.21" // 10,000,000 / 19.1
        }
      ],
      "totalItems": 1
    },
    "stockInvestments": {
      "value": [
        {
          "currency": "MXN",
          "value": "2,500,000.00"
        },
        {
          "currency": "USD",
          "value": "135,135.14" // 2,500,000 / 18.5
        },
        {
          "currency": "EUR",
          "value": "130,890.05" // 2,500,000 / 19.1
        }
      ],
      "totalItems": 2
    }
  }
};
