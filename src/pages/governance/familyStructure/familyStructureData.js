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
      source: '23',
      coupleId: '543'
    }, 
    {
      id: '543',
      name: 'Eric Diaz',
      dob: '12/07/1963',
      regimenFiscal: 'Regimen de Dividendos',
      generation: 2,
      source: '', 
      coupleId: '43'
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
      id: '388',
      name: 'Poncho Aldana Schmidt',
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
      source: 'couple-43-543', 
      generation: 3,
    },
    {
      id: '21',
      name: 'Mateo Diaz Aldana',
      dob: '06/05/2012',
      regimenFiscal: null,
      source: 'couple-43-543', 
      generation: 3,
    },
    {
      id: '210',
      name: 'Mateo Diaz Aldana',
      dob: '06/05/2012',
      regimenFiscal: null,
      source: '543', 
      generation: 3,
    },
    {
      id: '20',
      name: 'Valeria Diaz Aldana',
      dob: '06/05/2012',
      regimenFiscal: null,
      source: 'couple-43-543', 
      generation: 3,
    },
    {
      id: '9',
      name: 'Ponchito Aldana Schmidt',
      dob: '25/10/1991',
      regimenFiscal: 'Régimen Simplificado de Confianza (RESICO)',
      source: '388', 
      generation: 3,
    },
  ]
}


export const familyG = {
  lastName: 'Familia Gonzalez Ayala',
  members: [
    {
      id: '23',
      name: 'Oscar Gonzalez',
      dob: '06/02/1963',
      regimenFiscal: 'Regimen de Dividendos',
      generation: 1,
      source: 'root'
    }, 
    {
      id: '43',
      name: 'Oscar Gonzalez Ayala',
      dob: '12/07/1963',
      regimenFiscal: 'Regimen de Dividendos',
      generation: 2,
      source: '23',
      coupleId: '477'
    }, 
    {
      id: '477',
      name: 'Emely Califa',
      dob: '12/07/1963',
      regimenFiscal: 'Regimen de Dividendos',
      generation: 2,
      source: '',
      coupleId: '43'
    }, 
    {
      id: '13',
      name: 'Diego Gonzalez Ayala',
      dob: '25/10/1991',
      regimenFiscal: 'Régimen Simplificado de Confianza (RESICO)',
      source: '23', 
      generation: 2,
    },
    {
      id: '388',
      name: 'Aimee Gonzalez Ayala',
      dob: '25/10/1991',
      regimenFiscal: 'Régimen Simplificado de Confianza (RESICO)',
      source: '23', 
      generation: 2,
    },
    {
      id: '9',
      name: 'Oscar Gonzalez Califa',
      dob: '25/10/1991',
      regimenFiscal: 'Régimen Simplificado de Confianza (RESICO)',
      source: 'couple-43-477', 
      generation: 3,
    },
    {
      id: '19',
      name: 'Federico Gonzalez Califa',
      dob: '06/05/2012',
      regimenFiscal: null,
      source: 'couple-43-477', 
      generation: 3,
    },
  ]
}
