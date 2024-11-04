export const currentUser = {
  id: "12",
  name: "Javier Carrasco Nieto",
  role: "Miembro Familiar",
};

export const councilAndCommittieesData = {
  investmentCommittee: {
    members: [
      {
        name: "Francisco Carrasco Ramos",
        role: "Miembro Familiar",
        id: "23",
      },
      {
        name: "Javier Carrasco Nieto",
        role: "Miembro Familiar",
        id: "12",
      },
      {
        name: "Raul Gallego León",
        role: "Asesor financiero",
        id: "34",
        providerCategory: 50,
      },
      {
        name: "David Aldana Cañedo",
        role: "Asesor Family Office",
        id: "24",
        providerCategory: 50,
      },
      {
        id: "254",
        providerCategory: 50,
        name: 'Santiago Ortiz', 
        role: 'Consultor Financiero',
      },
      {
        id: "554",
        providerCategory: 50,
        name: 'Ruben Cota', 
        role: ' Director ABC Finanzas',
      } 
    ],
    meetings: [
      {
        id: 343,
        meetingNumber: "1",
        status: "Finalizada",
        title: "Junta de iniciaión de Comite de Inversión",
        linkedPreviousMeeting: {
          id: null,
        },
        participants: [
          {
            name: "Francisco Carrasco Ramos",
            role: "Miembro Familiar",
            id: "23",
          },
          {
            name: "Javier Carrasco Nieto",
            role: "Miembro Familiar",
            id: "12",
          },
          {
            name: "Raul Gallego León",
            role: "Asesor financiero",
            id: "34",
            providerCategory: 50,
          },
          {
            name: "David Aldana Cañedo",
            role: "Asesor Family Office",
            id: "24",
            providerCategory: 50,
          },
        ],
        votings: [
          {
            id: 82,
            title:
              "Todos los miembros del comite deben presentar reporte semanal",
            isVotingFinished: false,
            hiddenVotes: true,
            createdBy: {
              name: "Santiago Ortiz",
              role: "Account manager Family Office",
              id: "254",
            },
            participants: [
              {
                name: "Francisco Carrasco Ramos",
                role: "Miembro Familiar",
                id: "23",
                choiceSelected: null,
              },
              {
                name: "Javier Carrasco Nieto",
                role: "Miembro Familiar",
                id: "12",
                choiceSelected: "A FAVOR",
              },
              {
                name: "Raul Gallego León",
                role: "Asesor financiero",
                id: "34",
                providerCategory: 50,
                choiceSelected: null,
              },
              {
                name: "David Aldana Cañedo",
                role: "Asesor Family Office",
                id: "24",
                providerCategory: 50,
                choiceSelected: null,
              },
            ],
            deadlineDate: "28/06/2024",
            options: ["A FAVOR", "EN CONTRA"],
            description: `
              Esta votación es para decidir si todos los miembros del comite deben presentar reporte semanal
            `,
          },
        ],
        date: "12/05/2024",
        time: "10:00 am",
        modality: "Presencial",
        location: "Club de golf la primavera",
        meetingSubjects: [
          "Formato de los entregables que se tienen que mostrar en cada junta.",
          "Presentación de cada uno de los integrantes y cual es su relación con la familia",
          "Fijar objetivos proncipales del comite de inverión para este año",
        ],
        callToAction: [
          {
            title:
              "Cada miembro debera presentar un template de resultados bimestrales para ser aprovado por la familia",
            result: null,
          },
          {
            title:
              "David Aldana hara una presentación para siguiente junta donde mostrara plan financiero para proximo año",
            result: null,
          },
        ],
        reviewOfMinutes: [],
      },
      {
        id: 344,
        title:
          "Segunda junta presentar oportunidad de inversion de desarrollo inmboiliario en madrid",
        meetingNumber: "2",
        status: "Finalizada",
        linkedPreviousMeeting: { id: null },
        participants: [
          {
            name: "Francisco Carrasco Ramos",
            role: "Miembro Familiar",
            id: "23",
          },
          {
            name: "Javier Carrasco Nieto",
            role: "Miembro Familiar",
            id: "12",
          },
          {
            name: "Raul Gallego León",
            role: "Asesor financiero",
            id: "34",
            providerCategory: 50,
          },
          {
            name: "David Aldana Cañedo",
            role: "Asesor Family Office",
            id: "24",
            providerCategory: 50,
          },
        ],
        votings: [],
        date: "12/05/2024",
        time: "10:00 am",
        modality: "Presencial",
        location: "Oficinas Mutualismo",
        meetingSubjects: [
          "Esta junta se realizo para presentar una oportunidad de inversion de un desarrollo inmobiliario en madrid.",
        ],
        callToAction: [
          {
            title:
              "Presentar una desición de la inversión de desarrollo en Madrid",
            result: null,
          },
        ],
        reviewOfMinutes: [],
      },
      {
        id: 542,
        title: "Tercer junta definición de roles en Comite de Inversión",
        meetingNumber: "3",
        status: "Finalizada",
        linkedPreviousMeeting: {
          id: 343,
          meetingNumber: "1",
          title: "Junta de iniciaión de Comite de Inversión",
        },
        participants: [
          {
            name: "Francisco Carrasco Ramos",
            role: "Miembro Familiar",
            id: "23",
          },
          {
            name: "Javier Carrasco Nieto",
            role: "Miembro Familiar",
            id: "12",
          },
          {
            name: "Raul Gallego León",
            role: "Asesor financiero",
            id: "34",
            providerCategory: 50,
          },
          {
            name: "David Aldana Cañedo",
            role: "Asesor Family Office",
            id: "24",
            providerCategory: 50,
          },
        ],
        votings: [],
        date: "12/05/2024",
        time: "10:00 am",
        modality: "Presencial",
        location: "Club de golf la primavera",
        meetingSubjects: [
          "Revisión de los formatos entregables que brindaron todos los miembros.",
        ],
        callToAction: [],
        reviewOfMinutes: [
          {
            title:
              "Cada miembro debera presentar un template de resultados bimestrales para ser aprovado por la familia",
            result: null,
          },
          {
            title:
              "David Aldana hara una presentación para siguiente junta donde mostrara plan financiero para proximo año ",
            result: null,
          },
        ],
      },
    ],
  },
  familyCouncil: {
    members: [
      {
        id: "23",
        name: "Francisco Carrasco Ramos",
        role: "Miembro Familiar",
      },
      {
        id: "43",
        name: "Diana Nieto Vega",
        role: "Miembro Familiar",
      },
      {
        id: "13",
        name: "Adriana Carrasco Nieto",
        role: "Miembro Familiar",
      },
      {
        id: "12",
        name: "Javier Carrasco Nieto",
        role: "Miembro Familiar",
      },
      {
        id: "9",
        name: "Sofia Carrasco Nieto",
        role: "Miembro Familiar",
      },
      {
        name: "David Aldana Cañedo",
        role: "Asesor Family Office",
        id: "24",
        providerCategory: 50,
      },
      {
        name: "Santiago Ortiz",
        role: "Account manager Family Office",
        choiceSelected: "EN CONTRA",
        id: "254",
        providerCategory: 50,
      },
    ],
    meetings: [
      {
        id: 411,
        meetingNumber: "1",
        status: "Finalizada",
        title: "Junta de iniciaión de Consejo familiar",
        linkedPreviousMeeting: {
          id: null
        },
        participants: [
          {
            name: "Francisco Carrasco Ramos",
            role: "Miembro Familiar",
            id: "23",
          },
          {
            name: "Javier Carrasco Nieto",
            role: "Miembro Familiar",
            id: "12",
          },
        ],
        votings: [],
        date: "12/05/2024",
        time: "10:00 am",
        modality: "Presencial",
        location: "Club de golf la primavera",
        meetingSubjects: [
          "Presentación de cada uno de los miembros del consejo familiar",
          "Presentación de objetivos y metas del consejo familiar para este año",
          "Presentación de Account Manager con todos los miembros de la familia",
        ],
        callToAction: [
          {
            title:
              "Todos los miembros deben traer llenado el documento de identidad que se les enviara en esta junta",
            result: null,
          },
        ],
        reviewOfMinutes: [],
      },
      {
        id: 391,
        title: "Segunda junta definición de roles en consejo familiar",
        meetingNumber: "2",
        status: "Finalizada",
        linkedPreviousMeeting: {
          id: 411,
          meetingNumber: "1",
          title: "Junta de iniciaión de consejo familiar",
        },
        votings: [
          {
            id: 82,
            title:
              "Los menores de edad deben de participar en el consejo familiar",
            isVotingFinished: true,
            hiddenVotes: true,
            createdBy: {
              name: "Santiago Ortiz",
              role: "Account manager Family Office",
              id: "254",
            },
            participants: [
              {
                id: "23",
                name: "Francisco Carrasco Ramos",
                role: "Miembro Familiar",
                choiceSelected: "A FAVOR",
              },
              {
                id: "43",
                name: "Diana Nieto Vega",
                role: "Miembro Familiar",
                choiceSelected: "A FAVOR",
              },
              {
                id: "13",
                name: "Adriana Carrasco Nieto",
                role: "Miembro Familiar",
                choiceSelected: "A FAVOR",
              },
              {
                id: "12",
                name: "Javier Carrasco Nieto",
                role: "Miembro Familiar",
                choiceSelected: "A FAVOR",
              },
              {
                id: "9",
                name: "Sofia Carrasco Nieto",
                role: "Miembro Familiar",
                choiceSelected: "EN CONTRA",
              },
              {
                name: "David Aldana Cañedo",
                role: "Asesor Family Office",
                choiceSelected: "A FAVOR",
                id: "24",
                providerCategory: 50,
              },
              {
                name: "Santiago Ortiz",
                role: "Account manager Family Office",
                choiceSelected: "EN CONTRA",
                id: "254",
                providerCategory: 50,
              },
            ],
            deadlineDate: "28/06/2024",
            options: ["A FAVOR", "EN CONTRA"],
            description: `
              Esta votación es para decidir si los menores de edad en la familia deberian de tener un rol en el consejo familiar
            `,
          },
        ],
        participants: [
          {
            name: "Francisco Carrasco Ramos",
            role: "Miembro Familiar",
            id: "23",
          },
          {
            name: "Javier Carrasco Nieto",
            role: "Miembro Familiar",
            id: "12",
          },
          {
            id: "43",
            role: "Miembro Familiar",
            name: "Diana Nieto Vega",
          },
        ],
        date: "12/05/2024",
        time: "10:00 am",
        modality: "Presencial",
        location: "Club de golf la primavera",
        meetingSubjects: [
          "Se realizo votación de inculir a menores en el consejo familiar",
          "Conversación acerca de las votaciones relacionadas con activos fijos.",
        ],
        callToAction: [
          {
            title:
              "Todos los miembros deben aprender las reglas del comite para la siguiente junta.",
            result: null,
          },
        ],
        reviewOfMinutes: [
          {
            title:
              "Todos los miembros deben traer llenado el documento de identidad que se les enviara en esta junta",
            result: "Cumplido",
          },
        ],
      },
      {
        id: 401,
        title: "Tercer junta tercer bimestre",
        meetingNumber: "3",
        status: "Finalizada",
        linkedPreviousMeeting: {
          id: 391,
          meetingNumber: "2",
          title: "Segunda junta definición de roles en consejo familiar",
        },
        votings: [],
        participants: [
          {
            name: "Francisco Carrasco Ramos",
            role: "Miembro Familiar",
            id: "23",
          },
          {
            name: "Javier Carrasco Nieto",
            role: "Miembro Familiar",
            id: "12",
          },
          {
            id: "43",
            role: "Miembro Familiar",
            name: "Diana Nieto Vega",
          },
        ],
        date: "12/05/2024",
        time: "10:00 am",
        modality: "Presencial",
        location: "Restaurante Cayena",
        meetingSubjects: [],
        callToAction: [],
        reviewOfMinutes: [
          {
            title:
              "Todos los miembros deben aprender las reglas del comite para la siguiente junta.",
            result: "Cumplido",
          },
        ],
      },
    ],
  },
  virtualFamilyOffice: {
    members: [
      {
        id: "23",
        name: "Francisco Carrasco Ramos",
        role: "Miembro Familiar",
      },
      {
        id: "43",
        name: "Diana Nieto Vega",
        role: "Miembro Familiar",
      },
      {
        id: "12",
        name: "Javier Carrasco Nieto",
        role: "Miembro Familiar",
      },
      {
        name: "Luz Amelia Jacobo",
        role: "Contadora Empresas",
        id: "24",
        providerCategory: 50,
      },
      {
        name: "Sergio Salcido",
        role: "Abogado",
        id: "254",
        providerCategory: 50,
      },
      {
        providerCategory: 98,
        id: "1",
        name: 'Agustín Reyes', 
        role: 'Fiscalista',
      }
    ],
    meetings: [
      {
        id: 411,
        meetingNumber: "1",
        status: "Finalizada",
        title: "Junta de iniciaión de Virtual Familiy Office",
        linkedPreviousMeeting: {
          id: null
        },
        participants: [
          {
            name: "Francisco Carrasco Ramos",
            role: "Miembro Familiar",
            id: "23",
          },
          {
            name: "Javier Carrasco Nieto",
            role: "Miembro Familiar",
            id: "12",
          },
          {
            name: "Luz Amelia Jacobo",
            role: "Contadora Empresas",
            id: "24",
            providerCategory: 50,
          },
          {
            name: "Sergio Salcido",
            role: "Abogado",
            id: "254",
            providerCategory: 50,
          },
        ],
        votings: [],
        date: "12/05/2024",
        time: "10:00 am",
        modality: "Presencial",
        location: "Ofincias Agricola Carrasco",
        meetingSubjects: [
          "Presentación de cada uno de los miembros del virtual Family Offiece",
          "Declaración de intenciones y objectivos de parte del account manager",
        ],
        callToAction: [
          {
            title:
              "Todos los miembros deben traer llenado con lo aprendido en la primera junta de Virtual Family Office",
            result: null,
          },
        ],
        reviewOfMinutes: [],
      },
    ],
    tasks:[
      {
        id: 12,
        description: 'Entregar un reporte fiscal del cumplimiento fiscal del año pasado y añadirlo al libro de auditorias',
        userAsigned: {
            name: "Luz Amelia Jacobo",
            role: "Contadora Empresas",
            id: "24",
            providerCategory: 50,
        },
        title: 'Entregar reporte fiscal del año pasado',
        status: 'En curso',
        document: "https://www.google.drive/1423nger",
        createdDate: '10/09/2024'
      }, 
      // {
      //   description: 'Entregar un reporte fiscal del cumplimiento fiscal del año pasado y añadirlo al libro de auditorias',
      //   userAsigned: {
      //       name: "Luz Amelia Jacobo",
      //       role: "Contadora Empresas",
      //       id: "24",
      //       providerCategory: 50,
      //   },
      //   title: 'Entregar reporte fiscal del año pasado',
      //   status: 'En proceso',
      //   document: "https://www.google.drive/1423nger",
      //   createdDate: '10/09/2024'
      // }, 
      // {
      //   description: 'Entregar un reporte fiscal del cumplimiento fiscal del año pasado y añadirlo al libro de auditorias',
      //   userAsigned: {
      //       name: "Luz Amelia Jacobo",
      //       role: "Contadora Empresas",
      //       id: "24",
      //       providerCategory: 50,
      //   },
      //   title: 'Entregar reporte fiscal del año pasado',
      //   status: 'En proceso',
      //   document: "https://www.google.drive/1423nger",
      //   createdDate: '10/09/2024'
      // }, 
      // {
      //   description: 'Entregar un reporte fiscal del cumplimiento fiscal del año pasado y añadirlo al libro de auditorias',
      //   userAsigned: {
      //       name: "Luz Amelia Jacobo",
      //       role: "Contadora Empresas",
      //       id: "24",
      //       providerCategory: 50,
      //   },
      //   title: 'Entregar reporte fiscal del año pasado',
      //   status: 'En proceso',
      //   document: "https://www.google.drive/1423nger",
      //   createdDate: '10/09/2024'
      // }, 
      // {
      //   description: 'Entregar un reporte fiscal del cumplimiento fiscal del año pasado y añadirlo al libro de auditorias',
      //   userAsigned: {
      //       name: "Luz Amelia Jacobo",
      //       role: "Contadora Empresas",
      //       id: "24",
      //       providerCategory: 50,
      //   },
      //   title: 'Entregar reporte fiscal del año pasado',
      //   status: 'En proceso',
      //   document: "https://www.google.drive/1423nger",
      //   createdDate: '10/09/2024'
      // }
    ]
  },
};
