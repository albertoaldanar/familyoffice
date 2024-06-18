export const family = {
  lastName: 'Familia Aldana Ríos',
  members: [
    {
      id: '23',
      name: 'Francisco Alberto Aldana Rios',
      dob: '06/02/1963',
      regimenFiscal: 'Regimen de Dividendos',
      generation: 1,
      address: 'Col Montebello Calle Cipres 233 Privada Colinas del Parque 81076',
      gender: 'Masculino',
      source: 'root',
      rfc: 'AJFNIEU',
      pasport: 'https://www.google.drive/1423nger', 
      birthCertificate: 'https://www.google.drive/1423nger',
      coupleId: '43',  // Link to the couple node
    },
    {
      id: '43',
      name: 'Patricia Ríos Collantes',
      dob: '12/07/1963',
      address: 'Col Montebello Calle Cipres 233 Privada Colinas del Parque 81076',
      regimenFiscal: 'Regimen de Dividendos',
      generation: 1,
      gender: 'Femenino',
      rfc: 'PSJ3JDJ',
      source: 'root',
      pasport: 'https://www.google.drive/1423nger', 
      birthCertificate: 'https://www.google.drive/1423nger',
      coupleId: '23',  // Link to the couple node
    },
    {
      id: '13',
      name: 'Alejandra Aldana Ríos',
      dob: '10/25/1991',
      address: 'Col Montebello Calle Cipres 233 Privada Colinas del Parque 81076',
      gender: 'Femenino',
      rfc: 'AAR2313B',
      regimenFiscal: 'Régimen Simplificado de Confianza (RESICO)',
      source: 'couple-23-43',  // Link to the couple node
      generation: 2,
      pasport: 'https://www.google.drive/1423nger', 
      birthCertificate: 'https://www.google.drive/1423nger',
      coupleId: null,
    },
    {
      id: '12',
      name: 'Alberto Aldana Ríos',
      dob: '02/16/1994',
      address: 'Col Montebello Calle Cipres 233 Privada Colinas del Parque 81076',
      gender: 'Masculino',
      rfc: 'AAR4Z13B',
      regimenFiscal: 'Regimen de Introducción Fiscal (RIF)',
      source: 'couple-23-43',
      generation: 2,
      pasport: 'https://www.google.drive/1423nger', 
      birthCertificate: 'https://www.google.drive/1423nger',
      coupleId: null,
    },
    {
      id: '9',
      name: 'Ana Sofia Aldana Ríos',
      dob: '03/18/1998',
      address: 'Col Montebello Calle Cipres 233 Privada Colinas del Parque 81076',
      gender: 'Femenino',
      rfc: 'AAR9413B',
      regimenFiscal: 'Régimen Simplificado de Confianza (RESICO)',
      source: 'couple-23-43',
      generation: 2,
      pasport: 'https://www.google.drive/1423nger', 
      birthCertificate: 'https://www.google.drive/1423nger',
      coupleId: null,
    },
    {
      id: '19',
      name: 'Gustavo Miranda Aldana',
      gender: 'Masculino',
      address: 'Col Montebello Calle Cipres 233 Privada Colinas del Parque 81076',
      rfc: null,
      dob: '06/05/2012',
      regimenFiscal: null,
      source: '13',
      generation: 3,
      pasport: 'https://www.google.drive/1423nger', 
      birthCertificate: 'https://www.google.drive/1423nger',
      coupleId: null,
    },
  ],
}

export const councilAndCommittieesData = {
  investmentCommittee: [
    {
      name: 'Francisco Aldana Fariñas', 
      role: 'Miembro Familiar', 
      id: '23'
    },
    {
      name: 'Alberto Aldana Ríos', 
      role: 'Miembro Familiar', 
      id: '12'
    }, 
    {
      name: 'Raul Aldana Fariñas', 
      role: 'Asesor financiero', 
      id: '34', 
      providerCategory: 50
    },     
    {
      name: 'David Aldana Cañedo', 
      role: 'Asesor Family Office', 
      id: '24', 
      providerCategory: 50
    }, 
  ], 
  familyCouncil: [
    {
      id: '23',
      name: 'Francisco Alberto Aldana Rios',
      role: 'Miembro Familiar', 
    },
    {
      id: '43',
      name: 'Patricia Ríos Collantes',
      role: 'Miembro Familiar', 
    },
    {
      id: '13',
      name: 'Alejandra Aldana Ríos',
      role: 'Miembro Familiar', 
    },
    {
      id: '12',
      name: 'Alberto Aldana Ríos',
      role: 'Miembro Familiar', 
    },
    {
      id: '9',
      name: 'Ana Sofia Aldana Ríos',
      role: 'Miembro Familiar', 
    },
    {
      name: 'David Aldana Cañedo', 
      role: 'Asesor Family Office', 
      id: '24', 
      providerCategory: 50
    }, 
    {
      name: 'Santiago Ortiz', 
      role: 'Account manager Family Office', 
      id: '254',
      providerCategory: 50
    }, 
  ]
}