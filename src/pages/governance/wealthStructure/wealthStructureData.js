export const wealthStructure = {
  title: 'Patrimonio Familia Aldana Ríos',
  wealthCategories: [
    {
      name: 'Empresas', 
      id: 1,
      source: 'root',
    }, 
    {
      name: 'Bienes raices', 
      id: 2, 
      source: 'root'
    }, 
    {
      name: 'Capital privado', 
      id: 3, 
      source: 'root'
    }, 
    {
      name: 'Vehiculos', 
      id: 4, 
      source: 'root'
    }, 
    {
      name: 'Inversiones', 
      id: 5, 
      source: 'root'
    }, 
    {
      name: 'Tesoreria', 
      id: 6, 
      source: 'root'
    }
  ],
  wealthItems: [
    {
      id: 13,
      coreId: 23,
      name: 'Aldana Clima Integral SA de CV',
      value: '10,000,000.00',
      source: 1,
    },
    {
      id: 15,
      coreId: 24,
      name: 'Airenlinea SA de CV',
      value: '10,000,000.00',
      source: 1,
    },
    {
      id: 25,
      coreId: 44,
      name: 'ACI SA de CV',
      value: '10,000,000.00',
      source: 1,
    },
    // {
    //   id: 94,
    //   coreId: 33,
    //   name: 'MGH SA de CV',
    //   value: '10,000,000.00',
    //   source: 1,
    // },
    // {
    //   id: 18,
    //   coreId: 39,
    //   name: 'Departamento la marina',
    //   value: '2,500,000.00',
    //   source: 2,
    // },
  ],
};
