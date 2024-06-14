export const family = {
  lastName: 'Familia Aldana Ríos',
  members: [
    {
      id: '23',
      name: 'Francisco Alberto Aldana Rios',
      dob: '06/02/1963',
      regimenFiscal: 'Regimen de Dividendos',
      generation: 1,
      source: 'root',
      coupleId: '43',  // Link to the couple node
    },
    {
      id: '43',
      name: 'Patricia Ríos Collantes',
      dob: '12/07/1963',
      regimenFiscal: 'Regimen de Dividendos',
      generation: 1,
      source: 'root',
      coupleId: '23',  // Link to the couple node
    },
    {
      id: '13',
      name: 'Alejandra Aldana Ríos',
      dob: '25/10/1991',
      regimenFiscal: 'Régimen Simplificado de Confianza (RESICO)',
      source: 'couple-23-43',  // Link to the couple node
      generation: 2,
    },
    {
      id: '12',
      name: 'Alberto Aldana Ríos',
      dob: '16/02/1994',
      regimenFiscal: 'Regimen de Introducción Fiscal (RIF)',
      source: 'couple-23-43',
      generation: 2,
    },
    {
      id: '9',
      name: 'Ana Sofia Aldana Ríos',
      dob: '18/03/1998',
      regimenFiscal: 'Régimen Simplificado de Confianza (RESICO)',
      source: 'couple-23-43',
      generation: 2,
    },
    {
      id: '19',
      name: 'Gustavo Miranda Aldana',
      dob: '06/05/2012',
      regimenFiscal: null,
      source: '13',
      generation: 3,
    },
  ],
}


export const familyS = {
  lastName: 'Familia Aldana Schmidt',
  members: [
    {
      id: '23',
      name: 'Servando Aldana Fariñas',
      dob: '06/02/1963',
      regimenFiscal: 'Regimen de Dividendos',
      generation: 1,
      source: 'root'
    }, 
    {
      id: '43',
      name: 'Marcela Aldana Schmidt',
      dob: '12/07/1963',
      regimenFiscal: 'Regimen de Dividendos',
      generation: 2,
      source: '23'
    }, 
    {
      id: '13',
      name: 'Cesar Aldana Schmidt',
      dob: '25/10/1991',
      regimenFiscal: 'Régimen Simplificado de Confianza (RESICO)',
      source: '23', 
      generation: 2,
    },
    {
      id: '19',
      name: 'Eric Diaz Aldana',
      dob: '06/05/2012',
      regimenFiscal: null,
      source: '43', 
      generation: 3,
    },
    {
      id: '21',
      name: 'Mateo Diaz Aldana',
      dob: '06/05/2012',
      regimenFiscal: null,
      source: '43', 
      generation: 3,
    },
    {
      id: '20',
      name: 'Valeria Diaz Aldana',
      dob: '06/05/2012',
      regimenFiscal: null,
      source: '43', 
      generation: 3,
    },
  ]
}
