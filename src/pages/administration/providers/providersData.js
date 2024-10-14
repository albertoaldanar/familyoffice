export const providers = [
  {
    id: 23,
    categoria: "Asesores inmobiliarios",
    mostrar: true,
    proveedores: [
      {
        id: 1,
        nombre: 'Cesar Tamyo', 
        empresa: 'Cesar Tamayo bienes raices',
        type: 'Asesor Inmobiliario',
        location: 'Mazatlan, Sinaloa',
        linkedAssets: [
          {
            id: 1,
            coreId: 29,
            type: 'realState',
            name: "Casa La primavera San Anselmo 2083",
          },
        ],
        telefono: '6671057068',
        correo: 'cesar@tamayo.com',
        puesto: 'Director',
        isMemberIC: false,
        isMemberFC: false,
        registroDeServicios: [
          {
            id: 23,
            fecha: '12/02/2024',
            concepto: 'Servicio de venta de casa la primavera',
            reciboOFactura: '',
            documentoOEntrgable: '',
            descripcion: ''
          }
        ]
      }
    ],
  },
  {
    id: 98,
    categoria: "Fiscalistas",
    mostrar: true,
    proveedores: [
      {
        id: 1,
        nombre: 'Agustín Reyes', 
        empresa: 'Reyes y asociados',
        type: 'Fiscalista',
        location: 'CDMX',
        linkedAssets: [
        ],
        telefono: '5512057068',
        correo: 'agustin@reyesyasociados.com',
        puesto: 'Fiscalista',
        isMemberIC: false,
        isMemberFC: false,
        registroDeServicios: []
      }
    ],
  },
  {
    id: 50,
    categoria: "Asesores financieros",
    mostrar: true,
    proveedores: [
      {
        id: 34,
        location: 'Culiacan, Sinaloa',
        nombre: 'Raul Gallego León', 
        empresa: 'Scotia Bank',
        telefono: '6671057068',
        correo: 'raul@gallegosbanca.com',
        puesto: 'Banquero privado',
        type: 'Consultor Financiero',
        isMemberIC: true,
        isMemberFC: false,
        linkedAssets: [
          {
            id: 44,
            coreId: 2,
            type: 'privateEquity', 
            name: "Fondo ABC-Venture Capital",
          },
          {
            id: 4,
            coreId: 1,
            type: 'bankAccount', 
            name: "Santander-100434346583",
          },
        ],
        registroDeServicios: []
      },
      {
        id: 24,
        nombre: 'David Aldana Cañedo', 
        empresa: 'Grupo Auria',
        location: 'Culiacan, Sinaloa',
        type: 'Consultor Financiero',
        telefono: '6671057068',
        correo: 'david@aldana.com',
        puesto: 'CEO Family office',
        isMemberIC: true,
        isMemberFC: false,
        linkedAssets: [
          {
            id: 44,
            coreId: 2,
            type: 'privateEquity', 
            name: "Fondo ABC-Venture Capital",
          },
        ],
        registroDeServicios: []
      }, 
      {
        id: 254,
        nombre: 'Santiago Ortiz', 
        empresa: 'Fambell',
        location: 'Guadalajara, Jalisco',
        telefono: '6671057068',
        type: 'Consultor Financiero',
        correo: 'santiago@ortiz.com',
        puesto: 'Account manager Family Office',
        isMemberIC: true,
        isMemberFC: true,
        linkedAssets: [],
        registroDeServicios: []
      },      
      {
        id: 554,
        nombre: 'Ruben Cota', 
        empresa: 'ABC Finanzas',
        location: 'Guadalajara, Jalisco',
        telefono: '6671057068',
        type: 'Consultor Financiero',
        correo: 'santiago@ortiz.com',
        puesto: 'Director',
        isMemberIC: true,
        isMemberFC: false,
        linkedAssets: [],
        registroDeServicios: []
      }
    ],
  },
  {
    id: 24,
    categoria: "Notarios",
    mostrar: true,
    proveedores: [
      {
        id: 17,
        nombre: 'Juan Diaz Zalazar', 
        empresa: 'Diaz Zalazar notarios',
        location: 'Ciudad de México, México',
        telefono: '6671057068',
        correo: 'juan@diazzalazar.com',
        type: 'Notario',
        puesto: 'Director',
        isMemberIC: false,
        isMemberFC: false,
        linkedAssets: [
          {
            id: 2,
            coreId: 23,
            type: 'company',
            name: "Agricola Carrasco SA de CV",
          },
        ],
        registroDeServicios: [
          {
            id: 26,
            fecha: '12/02/2024',
            concepto: 'Escritrura casa de la marina',
            reciboOFactura: 'https://googledrive.com/erg3440398f4fmv',
            documentoOEntrgable: 'https://googledrive.com/erg3440398f4fmv',
            descripcion: 'Se escrituro Departamento Puerta Cabo Village.'
          }
        ]
      },
      {
        id: 2,
        nombre: 'Daniel Ortega', 
        empresa: 'Daniel Ortega Notaria',
        location: 'Culiacan, Sinaloa',
        telefono: '6671057068',
        correo: 'daniel@ortega.com',
        puesto: 'Abogado',
        isMemberIC: false,
        isMemberFC: false,
        type: 'Abogado',
        linkedAssets: [],
        registroDeServicios: [
          {
            id: 12,
            fecha: '12/02/2024',
            concepto: 'Acta constitutiva Agricola Carrasco SA de CV',
            reciboOFactura: 'https://googledrive.com/erg3440398f4fmv',
            documentoOEntrgable: 'https://googledrive.com/erg3440398f4fmv',
            descripcion: ''
          }
        ]
      }
    
    ],
  },
];
