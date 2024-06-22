export const currentUser = {
  id: "12",
  name: "Alberto Aldana Ríos",
  role: "Miembro Familiar",
}

export const councilAndCommittieesData = {
  investmentCommittee: {
    members: [
      {
        name: "Francisco Aldana Fariñas",
        role: "Miembro Familiar",
        id: "23",
      },
      {
        name: "Alberto Aldana Ríos",
        role: "Miembro Familiar",
        id: "12",
      },
      {
        name: "Raul Aldana Fariñas",
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
    meetings: [
      {
        id: 343,
        title: "Junta de iniciaión de Comite de Inversión",
        participants: [
          {
            name: "Francisco Aldana Fariñas",
            role: "Miembro Familiar",
            id: "23",
          },
          {
            name: "Alberto Aldana Ríos",
            role: "Miembro Familiar",
            id: "12",
          },
          {
            name: "Raul Aldana Fariñas",
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
        date: "12/05/2024",
        time: '10:00 am',
        modality: "Presencial",
        location: "Club de golf la primavera",
        meetingSubjects: `
        -Hello Mark, hey I am having an issue running nightingale after the node upgrade. In MBH I am fine, but this is the error I am getting in nightingale. 
        
        -Hmm in this case scenario it will never show as  return this.renderMembershipNotificationsAlert(); will always be rendered
        
        -Because as it doesn’t return the alert we can’t dismiss it and therefore this.isMembershipPopupShown will never be set to true and so return this.renderOnBoardingToolTip(); will never render 
        
        -Hey Doug Hiba UX approved the changes of the PR and all comments have been solved, I’ve been barely able to work on this in the past days as I was working on a Santokh’s US, but now is ready
        `,
        callToAction: `
        -Hello Mark, hey I am having an issue running nightingale after the node upgrade. In MBH I am fine, but this is the error I am getting in nightingale. 
        
        -Hmm in this case scenario it will never show as  return this.renderMembershipNotificationsAlert(); will always be rendered
        
        -Because as it doesn’t return the alert we can’t dismiss it and therefore this.isMembershipPopupShown will never be set to true and so return this.renderOnBoardingToolTip(); will never render 
        
        -Hey Doug Hiba UX approved the changes of the PR and all comments have been solved, I’ve been barely able to work on this in the past days as I was working on a Santokh’s US, but now is ready
        `,
      },
    ],
    votings: [
      {
        id: 223,
        title: "Invertir en bienes raices Mazatlán",
        isVotingFinished: true,
        hiddenVotes: false,
        createdBy: {
          name: "Raul Aldana Fariñas",
          role: "Asesor financiero",
          id: "34",
        },
        participants: [
          {
            name: "Francisco Aldana Fariñas",
            role: "Miembro Familiar",
            id: "23",
            choiceSelected: 'Si'
          },
          {
            name: "Alberto Aldana Ríos",
            role: "Miembro Familiar",
            id: "12",
            choiceSelected: 'No'
          },
          {
            name: "Raul Aldana Fariñas",
            role: "Asesor financiero",
            id: "34",
            providerCategory: 50,
            choiceSelected: 'No'
          },
          {
            name: "David Aldana Cañedo",
            role: "Asesor Family Office",
            id: "24",
            providerCategory: 50,
            choiceSelected: 'No'
          },
        ],
        deadlineDate: "28/06/2024",
        options:[
          'Si', 
          'No', 
          'Voto nulo'
        ],
        description: `
          Esta votación es para decidir se se utilizara el capital de la familia para invertir en los siguientes desarrollos en Mazatlá, sinaloa
          - Estellare: $20,000,000 MXN
          - Centro comercial la marina: $15,000,000 MXN
          - Departamentos el CID la marina: $8,000,000 MXN
        `,
      },
    ],
  },
  familyCouncil: {
    members: [
      {
        id: "23",
        name: "Francisco Alberto Aldana Rios",
        role: "Miembro Familiar"
      },
      {
        id: "43",
        name: "Patricia Ríos Collantes",
        role: "Miembro Familiar"
      },
      {
        id: "13",
        name: "Alejandra Aldana Ríos",
        role: "Miembro Familiar"
      },
      {
        id: "12",
        name: "Alberto Aldana Ríos",
        role: "Miembro Familiar"
      },
      {
        id: "9",
        name: "Ana Sofia Aldana Ríos",
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
        choiceSelected: 'EN CONTRA',
        id: "254",
        providerCategory: 50,
      },
    ],
    meetings: [],
    votings: [
      {
        id: 82,
        title: "Vender empresa familiar de abuelo",
        isVotingFinished: true,
        hiddenVotes: false,
        createdBy: {
          name: "Santiago Ortiz",
          role: "Account manager Family Office",
          id: "254",
        },
        participants: [
          {
            id: "23",
            name: "Francisco Alberto Aldana Rios",
            role: "Miembro Familiar",
            choiceSelected: 'A FAVOR'
          },
          {
            id: "43",
            name: "Patricia Ríos Collantes",
            role: "Miembro Familiar",
            choiceSelected: 'A FAVOR'
          },
          {
            id: "13",
            name: "Alejandra Aldana Ríos",
            role: "Miembro Familiar",
            choiceSelected: 'A FAVOR'
          },
          {
            id: "12",
            name: "Alberto Aldana Ríos",
            role: "Miembro Familiar",
            choiceSelected: 'A FAVOR'
          },
          {
            id: "9",
            name: "Ana Sofia Aldana Ríos",
            role: "Miembro Familiar",
            choiceSelected: 'EN CONTRA'
          },
          {
            name: "David Aldana Cañedo",
            role: "Asesor Family Office",
            choiceSelected: 'A FAVOR',
            id: "24",
            providerCategory: 50,
          },
          {
            name: "Santiago Ortiz",
            role: "Account manager Family Office",
            choiceSelected: 'EN CONTRA',
            id: "254",
            providerCategory: 50,
          },
        ],
        deadlineDate: "28/06/2024",
        options:[
          'A FAVOR', 
          'EN CONTRA', 
        ],
        description: `
          Esta votación es para decidir si se vendera la empresa familiar del abuelo y repartir en partes iguales el valor de la venta
          - La oferta formal es por 45,000,000 MXN de Grupo Martinez
        `,
      },
    ],
  },
};
