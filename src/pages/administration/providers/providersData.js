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
    id: 50,
    categoria: "Asesores financieros",
    mostrar: true,
    proveedores: [
      {
        id: 34,
        nombre: 'Raul Aldana Fariñas', 
        empresa: 'Scotia Bank',
        telefono: '6671057068',
        correo: 'raul@aldana.com',
        puesto: 'Banquero privado',
        isMemberIC: true,
        isMemberFC: false,
        registroDeServicios: [
        ]
      },
      {
        id: 24,
        nombre: 'David Aldana Cañedo', 
        empresa: 'Grupo Auria',
        telefono: '6671057068',
        correo: 'david@aldana.com',
        puesto: 'CEO Family office',
        isMemberIC: true,
        isMemberFC: false,
        registroDeServicios: [
        ]
      }, 
      {
        id: 254,
        nombre: 'Santiago Ortiz', 
        empresa: 'Fambell',
        telefono: '6671057068',
        correo: 'santiago@ortiz.com',
        puesto: 'Account manager Family Office',
        isMemberIC: true,
        isMemberFC: true,
        registroDeServicios: [
        ]
      } 
    ],
  },
  {
    id: 24,
    categoria: "Notarios",
    mostrar: true,
    proveedores: [
      {
        id: 1,
        nombre: 'Juan Diaz Zalazar', 
        empresa: 'Diaz Zalazar notarios',
        telefono: '6671057068',
        correo: 'juan@diazzalazar.com',
        puesto: 'Director',
        isMemberIC: false,
        isMemberFC: false,
        registroDeServicios: [
          {
            id: 26,
            fecha: '12/02/2024',
            concepto: 'Escritrura casa de la marina',
            reciboOFactura: 'https://googledrive.com/erg3440398f4fmv',
            documentoOEntrgable: 'https://googledrive.com/erg3440398f4fmv',
            descripcion: 'Se escrituro la casa de la marina Mazatlan, Sinaloa.'
          }
        ]
      },
      {
        id: 2,
        nombre: 'Daniel Ortega', 
        empresa: 'Daniel Ortega Notaria',
        telefono: '6671057068',
        correo: 'daniel@ortega.com',
        puesto: 'Abogado',
        isMemberIC: false,
        isMemberFC: false,
        registroDeServicios: [
          {
            id: 12,
            fecha: '12/02/2024',
            concepto: 'Acta constitutiva Aldana Clima Integral',
            reciboOFactura: 'https://googledrive.com/erg3440398f4fmv',
            documentoOEntrgable: 'https://googledrive.com/erg3440398f4fmv',
            descripcion: ''
          }
        ]
      }
    
    ],
  },
];
