export const realstateData = [
  {
    id: 24,
    nombre: "Departamento costa veleros la marina",
    moneda: "MXN",
    escrituras: "https://www.google.drive/1423nger",
    valuacion: "3,000,000.00",
    location: "Col la marina mazatlan camaron sabalo CP 233",
    ciudad: "Mazatlán, Sinaloa",
    country: 'México',
    percentage: "100",
    mt2: "250",
    propertyType: "Departamento",
    containedIntrusts:[],
    images: [
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fapartment%2520building%2F&psig=AOvVaw1zYHqxmpBoPCXfkEVBI9UX&ust=1719262565828000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjk16XO8oYDFQAAAAAdAAAAABAE",
      "https://img.zumpercdn.com/209027862/1280x960",
      "https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=0&k=20&c=iW4NBiMPKEuvaA7h8wIsPHikhS64eR-5EVPfjQ9GPOA=",
    ],
    owners: [
      {
        type: "family",
        pct: '100',
        coreId: '43',
        name: "Alberto Aldana Fariñas",
      },
    ],
  },
  {
    id: 29,
    nombre: "Casa Colinas del parque",
    containedIntrusts:[
      {
        id: 90,
        name: 'Fideicomiso 144002 BBVA'
      },
    ],
    moneda: "MXN",
    escrituras: "https://www.google.drive/1423nger",
    valuacion: "7,500,000.00",
    country: 'México',
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
        pct: '50',
        coreId: '23',
        name: "Patricia Rios Collantes",
        capitalSocial: "1000000",
      },
      {
        type: "family",
        pct: '50',
        coreId: '43',
        name: "Alberto Aldana Fariñas",
        capitalSocial: "1500000",
      },
    ],
  },
  {
    id: 42,
    nombre: "Oficinas mutualismo",
    ciudad: "Culiacan, Sinaloa",
    containedIntrusts:[],
    moneda: "MXN",
    country: 'México',
    escrituras: "https://www.google.drive/1423nger",
    valuacion: "16,500,000.00",
    location: "Col El vallado calle zapata 322",
    percentage: "100",
    mt2: "2250",
    propertyType: "Oficinas",
    owners: [
      {
        type: "family",
        pct: '100',
        coreId: '23',
        name: "Patricia Rios Collantes",
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
      currency: 'MXN',
      value: '14,000,000.00'
    }, 
    {      
      currency: 'USD',
      value: '750,988.35'
    },
    {      
      currency: 'EUR',
      value: '68,0583.19'
    }
  ],
  byType: [
    {
      type: 'Casas',
      value: [
        { currency: 'MXN', value: 9000000 },
        { currency: 'USD', value: 473946.14 },
        { currency: 'EUR', value: 426147.16 }
      ]
    },
    {
      type: 'Oficinas',
      value: [
        { currency: 'MXN', value: 4500000 },
        { currency: 'USD', value: 236973.07 },
        { currency: 'EUR', value: 213073.58 }
      ]
    },
    {
      type: 'Departamentos',
      value: [
        { currency: 'MXN', value: 6000000 },
        { currency: 'USD', value: 315964.09 },
        { currency: 'EUR', value: 284098.11 }
      ]
    }
  ], 
  byOwners: [
    {
      type: 'Alberto Aldana Fariñas',
      value: [
        { currency: 'MXN', value: 4500000 },
        { currency: 'USD', value: 236973.07 },
        { currency: 'EUR', value: 213073.58 }
      ]
    },
    {
      type: 'Patricia Ríos Collantes',
      value: [
        { currency: 'MXN', value: 3375000 },
        { currency: 'USD', value: 177729.80 },
        { currency: 'EUR', value: 159805.19 }
      ]
    }
  ],
  byUsage: [
    {
      type: 'Renta', 
      value: 4
    }, 
    {
      type: 'Especulación', 
      value: 3
    }, 
    {
      type: 'Inversión', 
      value: 1
    },
    {
      type: 'Uso habitacional', 
      value: 1
    }, 
  ], 
  byCountry: [
    {
      type: 'México', 
      value: 6
    }, 
  ], 
  byAssets: [
    {
      type: 'Departamento costa veleros la marina',
      value: [
        { currency: 'MXN', value: 3000000 },
        { currency: 'USD', value: 157982.04 },
        { currency: 'EUR', value: 142089.05 }
      ]
    },
    {
      type: 'Oficinas mutualismo',
      value: [
        { currency: 'MXN', value: 16500000 },
        { currency: 'USD', value: 868901.23 },
        { currency: 'EUR', value: 781489.77 }
      ]
    },
    {
      type: 'Casa Colinas del parque',
      value: [
        { currency: 'MXN', value: 7500000 },
        { currency: 'USD', value: 394955.11 },
        { currency: 'EUR', value: 355222.63 }
      ]
    },
  ], 
  countries: ['Mexico']
}