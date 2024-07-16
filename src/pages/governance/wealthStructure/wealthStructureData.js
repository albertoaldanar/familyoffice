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
      name: 'Audi A3',
      value: '600000',
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
      value: '600000',
      circulationCard: 'https://googledrive.com/erg3440398f4fmv',
      currency: 'MXN',
      platesNumber: "XBJ21NB3",
      invoice: 'https://googledrive.com/erg3440398f4fmv'
    },
    {
      id: 3,
      model: "BYD",
      brand: "HAN",
      year: "2024",
      color: "Gris",
      value: '1200000',
      circulationCard: '',
      currency: 'MXN',
      platesNumber: "ABJ2NB3",
      invoice: 'https://googledrive.com/erg3440398f4fmv'
    },
    {
      id: 23,
      model: "Frontier",
      brand: "Nissan",
      value: '640000',
      currency: 'MXN',
      circulationCard: '',
      year: "2015",
      color: "Gris",
      platesNumber: "AARBYNB1",
      invoice: 'https://googledrive.com/erg3440398f4fmv'
    },
  ],
  artAndOthers: [
    {
      id: 43,
      type: 'Arte',
      name: 'Coleccion de arte de Gerhard Richter', 
      value: '5000000',
      currency: 'MXN',
      photo: 'https://googledrive.com/erg3440398f4fmv',
      certificate: 'https://googledrive.com/erg3440398f4fmv',
      ownersId: [],

    }
  ]
};
