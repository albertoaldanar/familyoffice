export const family = {
  lastName: 'Familia Aldana Ríos',
  documents:{
    vfo: {
      elp: 'https://www.google.drive/1423nger', 
      investmentPolicy: 'https://www.google.drive/1423nger'
    },
    family: {
      testamento: '',
      protocoloFam: 'https://www.google.drive/1423nger',
      actasAsamblea: [
        {
          nombre: 'Acta de asamblea 1',
          url: 'https://www.google.drive/1423nger'
        }, 
        {
          nombre: 'Acta de asamblea 2',
          url: 'https://www.google.drive/1423nger'
        },
        {
          nombre: 'Acta de asamblea 2',
          url: 'https://www.google.drive/1423nger'
        },
      ],
      fideicomisos: [
        {
          nombre: 'Fiso',
          url: 'https://www.google.drive/1423nger'
        }, 
        {
          nombre: 'Fiso USA',
          url: 'https://www.google.drive/1423nger'
        }
      ]
    }
  },
  members: [
    {
      id: '23',
      name: 'Francisco Aldana Fariñas',
      dob: '06/02/1963',
      regimenFiscal: 'Regimen de Dividendos',
      generation: 1,
      address: 'Col Montebello Calle Cipres 233 Privada Colinas del Parque 81076',
      gender: 'Masculino',
      source: 'root',
      rfc: 'AJFNIEU',
      pasport: 'https://www.google.drive/1423nger', 
      birthCertificate: 'https://www.google.drive/1423nger',
      coupleId: '43',
      isMemberIC: true,
      isMemberFC: true,
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
      coupleId: '23',
      isMemberIC: false,
      isMemberFC: true,
    },
    {
      id: '13',
      name: 'Alejandra Aldana Ríos',
      dob: '10/25/1991',
      address: 'Col Montebello Calle Cipres 233 Privada Colinas del Parque 81076',
      gender: 'Femenino',
      rfc: 'AAR2313B',
      regimenFiscal: 'Régimen Simplificado de Confianza (RESICO)',
      source: 'couple-23-43',
      generation: 2,
      pasport: 'https://www.google.drive/1423nger', 
      birthCertificate: 'https://www.google.drive/1423nger',
      coupleId: null,
      isMemberIC: false,
      isMemberFC: true,
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
      isMemberIC: true,
      isMemberFC: true,
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
      isMemberIC: false,
      isMemberFC: true,
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
      isMemberIC: false,
      isMemberFC: false,
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
