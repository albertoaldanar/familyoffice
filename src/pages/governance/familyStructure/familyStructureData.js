export const family = {
  lastName: 'Familia Carrasco Nieto',
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
      name: 'Francisco Carrasco Ramos',
      dob: '06/02/1963',
      regimenFiscal: 'Regimen de Dividendos',
      generation: 1,
      address: 'Casa La primavera San Anselmo 2083',
      gender: 'Masculino',
      source: 'root',
      rfc: 'AJFNIEU',
      pasport: 'https://www.google.drive/1423nger', 
      birthCertificate: 'https://www.google.drive/1423nger',
      coupleId: '43',
      isMemberIC: true,
      isMemberFC: true,
      trusteeOf: [],
      nationalities: ['Española', 'Mexicana'],
      obligations: {
        lifeInsurances: [],
        medicalInsurances: [],
        taxes: [
          {
            id: 29,
            rfc: "NFINE324NFJ",
            regimenFiscal: "Regimen de Dividendos",
            country: 'México',
            visibility: [
              {
                id: '43',
                type: 'Family',
                name: 'Diana Nieto Vega',
                hasVisibility: true,
                hasPostMortemVisibility: true
              }, 
              {
                id: '12',
                type: 'Family',
                name: 'Javier Carrasco Nieto',
                hasVisibility: false, 
                hasPostMortemVisibility: true
              }, 
              {
                id: '13',
                type: 'Family',
                name: 'Adriana Carrasco Nieto',
                hasVisibility: false, 
                hasPostMortemVisibility: true
              },
              {
                id: '34',
                type: 'Provider',
                name: 'Raul Gallego León',
                hasVisibility: false, 
                hasPostMortemVisibility: false
              },
              {
                id: '24',
                type: 'Provider',
                name: 'Luz Amelia Jacobo',
                hasVisibility: true, 
                hasPostMortemVisibility: true
              }
            ]
          }
        ], 
        debt: [
          {
            id: 28,
            tipo: 'Prestamo de tercero',
            acreedor: "Servando Aldana F.",
            monto: "10,000,000.00",
            pagado: "610,000.00",
            porPagar: "45,000.00",
            interes: "0",
            proxPago: "29/12/2024",
            frecuenciaDePago: "Mensual",
            moneda: "MXN",
            visibility: [
              {
                id: '43',
                type: 'Family',
                name: 'Diana Nieto Vega',
                hasVisibility: true,
                hasPostMortemVisibility: true
              }, 
              {
                id: '12',
                type: 'Family',
                name: 'Javier Carrasco Nieto',
                hasVisibility: true, 
                hasPostMortemVisibility: true
              }, 
              {
                id: '13',
                type: 'Family',
                name: 'Adriana Carrasco Nieto',
                hasVisibility: false, 
                hasPostMortemVisibility: true
              },
              {
                id: '34',
                type: 'Provider',
                name: 'Raul Gallego León',
                hasVisibility: false, 
                hasPostMortemVisibility: false
              },
              {
                id: '24',
                type: 'Provider',
                name: 'Luz Amelia Jacobo',
                hasVisibility: false, 
                hasPostMortemVisibility: true
              }
            ]
          }
        ], 
        loansCollecting: [
          {
            id: 33,
            deudor: "Raul Quintero Flores",
            proxCobro: "10/10/2024",
            country: 'México',
            debtor: {
              name: 'Raul Quintero Flores',
            },
            tipo: "Deuda Capital privado",
            monto: "10,000,000.00 ",
            porPagar: "10,000,000.00",
            pagado: "1000.00",
            moneda: "MXN",
            interes: "9",
            visibility: [
              {
                id: '43',
                type: 'Family',
                name: 'Diana Nieto Vega',
                hasVisibility: true,
                hasPostMortemVisibility: true
              }, 
              {
                id: '12',
                type: 'Family',
                name: 'Javier Carrasco Nieto',
                hasVisibility: true, 
                hasPostMortemVisibility: true
              }, 
              {
                id: '13',
                type: 'Family',
                name: 'Adriana Carrasco Nieto',
                hasVisibility: false, 
                hasPostMortemVisibility: true
              },
              {
                id: '34',
                type: 'Provider',
                name: 'Raul Gallego León',
                hasVisibility: false, 
                hasPostMortemVisibility: false
              },
              {
                id: '24',
                type: 'Provider',
                name: 'Luz Amelia Jacobo',
                hasVisibility: false, 
                hasPostMortemVisibility: true
              }
            ]
          }
        ]
      },
      assets: [
        {
          id: 91,
          name: 'Grupo Carrasco Holding SA de CV',
          type: 'company',
          pct: '100',
          value: '123,000,000.00',
          currency: 'MXN',
          country: 'México', 
          visibility: [
            {
              id: '43',
              type: 'Family',
              name: 'Diana Nieto Vega',
              hasVisibility: true,
              hasPostMortemVisibility: true
            }, 
            {
              id: '12',
              type: 'Family',
              name: 'Javier Carrasco Nieto',
              hasVisibility: true,
              hasPostMortemVisibility: true
            }, 
            {
              id: '13',
              type: 'Family',
              name: 'Adriana Carrasco Nieto',
              hasVisibility: false,
              hasPostMortemVisibility: true
            },
            {
              id: '34',
              type: 'Provider',
              name: 'Raul Gallego León',
              hasVisibility: false,
              hasPostMortemVisibility: false
            },
            {
              id: '24',
              type: 'Provider',
              name: 'Luz Amelia Jacobo',
              hasVisibility: true,
              hasPostMortemVisibility: true
            }
          ]
        },
        {
          id: 53,
          name: 'CN Farmer trade LLC',
          type: 'company',
          pct: '20',
          value: '11,200,000.00',
          currency: 'USD',
          country: 'USA', 
          visibility: [
            {
              id: '43',
              type: 'Family',
              name: 'Diana Nieto Vega',
              hasVisibility: true,
              hasPostMortemVisibility: true
            }, 
            {
              id: '12',
              type: 'Family',
              name: 'Javier Carrasco Nieto',
              hasVisibility: true,
              hasPostMortemVisibility: true
            }, 
            {
              id: '13',
              type: 'Family',
              name: 'Adriana Carrasco Nieto',
              hasVisibility: false,
              hasPostMortemVisibility: false
            }, 
            {
              id: '34',
              type: 'Provider',
              name: 'Raul Gallego León',
              hasVisibility: false,
              hasPostMortemVisibility: false
            },
            {
              id: '24',
              type: 'Provider',
              name: 'Luz Amelia Jacobo',
              hasVisibility: true,
              hasPostMortemVisibility: true
            }
          ]
        },
        {
          id: 23,
          name: 'Agricola Carrasco SA de CV',
          type: 'company',
          pct: '60',
          value: '10,000,000.00',
          currency: 'MXN',
          country: 'México', 
          visibility: [
            {
              id: '43',
              type: 'Family',
              name: 'Diana Nieto Vega',
              hasVisibility: true,
              hasPostMortemVisibility: true
            }, 
            {
              id: '12',
              type: 'Family',
              name: 'Javier Carrasco Nieto',
              hasVisibility: true,
              hasPostMortemVisibility: true
            }, 
            {
              id: '13',
              type: 'Family',
              name: 'Adriana Carrasco Nieto',
              hasVisibility: false,
              hasPostMortemVisibility: false
            }, 
            {
              id: '34',
              type: 'Provider',
              name: 'Raul Gallego León',
              hasVisibility: false,
              hasPostMortemVisibility: false
            },
            {
              id: '24',
              type: 'Provider',
              name: 'Luz Amelia Jacobo',
              hasVisibility: true,
              hasPostMortemVisibility: true
            }
          ]
        },
        {
          id: 24,
          name: 'Servicios financieros del campo CN SA de CV',
          type: 'company',
          pct: '30',
          value: '10,000,000.00',
          currency: 'MXN',
          country: 'México', 
          visibility: [
            {
              id: '43',
              type: 'Family',
              name: 'Diana Nieto Vega',
              hasVisibility: true,
              hasPostMortemVisibility: true
            }, 
            {
              id: '12',
              type: 'Family',
              name: 'Javier Carrasco Nieto',
              hasVisibility: true,
              hasPostMortemVisibility: true
            }, 
            {
              id: '13',
              type: 'Family',
              name: 'Adriana Carrasco Nieto',
              hasVisibility: false,
              hasPostMortemVisibility: true
            }, 
            {
              id: '34',
              type: 'Provider',
              name: 'Raul Gallego León',
              hasVisibility: false,
              hasPostMortemVisibility: true
            },
            {
              id: '24',
              type: 'Provider',
              name: 'Luz Amelia Jacobo',
              hasVisibility: false,
              hasPostMortemVisibility: true
            }
          ]
        },
        {
          id: 85,
          name: 'CN Market Transportation LLC',
          type: 'company',
          pct: '45',
          value: '10,000,000.00',
          currency: 'USD',
          country: 'USA', 
          visibility: [
            {
              id: '43',
              type: 'Family',
              name: 'Diana Nieto Vega',
              hasVisibility: true,
              hasPostMortemVisibility: true
            }, 
            {
              id: '12',
              type: 'Family',
              name: 'Javier Carrasco Nieto',
              hasVisibility: false,
              hasPostMortemVisibility: true
            }, 
            {
              id: '13',
              type: 'Family',
              name: 'Adriana Carrasco Nieto',
              hasVisibility: false,
              hasPostMortemVisibility: true
            }, 
            {
              id: '34',
              type: 'Provider',
              name: 'Raul Gallego León',
              hasVisibility: false,
              hasPostMortemVisibility: true
            },
            {
              id: '24',
              type: 'Provider',
              name: 'Luz Amelia Jacobo',
              hasVisibility: false,
              hasPostMortemVisibility: true
            }
          ]
        },
        {
          id: 29,
          name: 'Casa La primavera San Anselmo 2083',
          type: 'realState',
          pct: '50',
          value: '7,500,000.00',
          currency: 'MXN',
          country: 'México', 
          visibility: [
            {
              id: '43',
              name: 'Diana Nieto Vega',
              type: 'Family',
              hasVisibility: true,
              hasPostMortemVisibility: true
            }, 
            {
              id: '12',
              name: 'Javier Carrasco Nieto',
              type: 'Family',
              hasVisibility: true,
              hasPostMortemVisibility: true
            }, 
            {
              id: '13',
              name: 'Adriana Carrasco Nieto',
              type: 'Family',
              hasVisibility: true,
              hasPostMortemVisibility: true
            }, 
            {
              id: '34',
              type: 'Provider',
              name: 'Raul Gallego León',
              hasVisibility: false,
              hasPostMortemVisibility: true
            },
            {
              id: '24',
              type: 'Provider',
              name: 'Luz Amelia Jacobo',
              hasVisibility: false,
              hasPostMortemVisibility: true
            }
          ]
        },
        {
          id: 24,
          name: 'Departamento Puerta Cabo Village',
          type: 'realState',
          pct: '100',
          value: '3,000,000.00',
          currency: 'MXN',
          country: 'México', 
          visibility: [
            {
              id: '43',
              name: 'Diana Nieto Vega',
              type: 'Family',
              hasVisibility: true,
              hasPostMortemVisibility: true
            }, 
            {
              id: '12',
              name: 'Javier Carrasco Nieto',
              type: 'Family',
              hasVisibility: true,
              hasPostMortemVisibility: true
            }, 
            {
              id: '13',
              name: 'Adriana Carrasco Nieto',
              type: 'Family',
              hasVisibility: true,
              hasPostMortemVisibility: true
            }, 
            {
              id: '34',
              type: 'Provider',
              name: 'Raul Gallego León',
              hasVisibility: false,
              hasPostMortemVisibility: true
            },
            {
              id: '24',
              type: 'Provider',
              name: 'Luz Amelia Jacobo',
              hasVisibility: false,
              hasPostMortemVisibility: true
            }
          ]
        }, 
        {
          id: 1,
          name: 'Santander -100434346583',
          type: 'bankAccount',
          pct: '100',
          value: '1,000,000.00',
          currency: 'MXN',
          country: 'México', 
          visibility: [
            {
              id: '43',
              type: 'Family',
              name: 'Diana Nieto Vega',
              hasVisibility: false,
              hasPostMortemVisibility: true
            }, 
            {
              id: '12',
              type: 'Family',
              name: 'Javier Carrasco Nieto',
              hasVisibility: false,
              hasPostMortemVisibility: true
            }, 
            {
              id: '13',
              type: 'Family',
              name: 'Adriana Carrasco Nieto',
              hasVisibility: false,
              hasPostMortemVisibility: true
            }, 
            {
              id: '34',
              type: 'Provider',
              name: 'Raul Gallego León',
              hasVisibility: true,
              hasPostMortemVisibility: true
            },
            {
              id: '24',
              type: 'Provider',
              name: 'Luz Amelia Jacobo',
              hasVisibility: false,
              hasPostMortemVisibility: false
            }
          ]
        }, 
        {
          id: 159,
          name: 'Santander - 79441232',
          type: 'stockInvestment',
          pct: '50',
          value: '10,000,000.00',
          currency: 'MXN',
          country: 'México', 
          visibility: [
            {
              id: '43',
              type: 'Family',
              name: 'Diana Nieto Vega',
              hasVisibility: false,
              hasPostMortemVisibility: true
            }, 
            {
              id: '12',
              type: 'Family',
              name: 'Javier Carrasco Nieto',
              hasVisibility: false,
              hasPostMortemVisibility: true
            }, 
            {
              id: '13',
              type: 'Family',
              name: 'Adriana Carrasco Nieto',
              hasVisibility: false,
              hasPostMortemVisibility: false
            }, 
            {
              id: '34',
              type: 'Provider',
              name: 'Raul Gallego León',
              hasVisibility: true,
              hasPostMortemVisibility: true
            },
            {
              id: '24',
              type: 'Provider',
              name: 'Luz Amelia Jacobo',
              hasVisibility: false,
              hasPostMortemVisibility: false
            }
          ]
        }, 
        {
          id: 499,
          name: 'Scotia Bank - 6641232',
          type: 'stockInvestment',
          pct: '50',
          value: '2,000,000.00',
          currency: 'MXN',
          country: 'México', 
          visibility: [
            {
              id: '43',
              type: 'Family',
              name: 'Diana Nieto Vega',
              hasVisibility: false,
              hasPostMortemVisibility: true
            }, 
            {
              id: '12',
              type: 'Family',
              name: 'Javier Carrasco Nieto',
              hasVisibility: false,
              hasPostMortemVisibility: true
            }, 
            {
              id: '13',
              type: 'Family',
              name: 'Adriana Carrasco Nieto',
              hasVisibility: false,
              hasPostMortemVisibility: true
            }, 
            {
              id: '34',
              type: 'Provider',
              name: 'Raul Gallego León',
              hasVisibility: true,
              hasPostMortemVisibility: true
            },
            {
              id: '24',
              type: 'Provider',
              name: 'Luz Amelia Jacobo',
              hasVisibility: false,
              hasPostMortemVisibility: true
            }
          ]
        },
        {
          id: 3,
          name: 'HAN BYD',
          type: 'vehicle',
          pct: '100',
          value: '60,000.00',
          currency: 'USD',
          country: 'USA', 
          visibility: [
            {
              id: '43',
              type: 'Family',
              name: 'Diana Nieto Vega',
              hasVisibility: true,
              hasPostMortemVisibility: true
            }, 
            {
              id: '12',
              type: 'Family',
              name: 'Javier Carrasco Nieto',
              hasVisibility: true,
              hasPostMortemVisibility: true
            }, 
            {
              id: '13',
              type: 'Family',
              name: 'Adriana Carrasco Nieto',
              hasVisibility: true,
              hasPostMortemVisibility: true
            }, 
            {
              id: '34',
              type: 'Provider',
              name: 'Raul Gallego León',
              hasVisibility: false,
              hasPostMortemVisibility: true
            },
            {
              id: '24',
              type: 'Provider',
              name: 'Luz Amelia Jacobo',
              hasVisibility: false,
              hasPostMortemVisibility: true
            }
          ]
        },
        {
          id: 43,
          name: 'Coleccion de arte de Gerhard Richter',
          type: 'artAndOthers',
          pct: '100',
          value: '5000000.00',
          currency: 'EUR',
          country: 'España', 
          visibility: [
            {
              id: '43',
              name: 'Diana Nieto Vega',
              type: 'Family',
              hasVisibility: true,
              hasPostMortemVisibility: true
            }, 
            {
              id: '12',
              name: 'Javier Carrasco Nieto',
              type: 'Family',
              hasVisibility: false,
              hasPostMortemVisibility: true
            }, 
            {
              id: '13',
              name: 'Adriana Carrasco Nieto',
              type: 'Family',
              hasVisibility: false,
              hasPostMortemVisibility: true
            }, 
            {
              id: '34',
              type: 'Provider',
              name: 'Raul Gallego León',
              hasVisibility: false,
              hasPostMortemVisibility: false
            },
            {
              id: '24',
              type: 'Provider',
              name: 'Luz Amelia Jacobo',
              hasVisibility: false,
              hasPostMortemVisibility: false
            }
          ]
        },
      ], 
      trustor:[
        {
          id: 20,
          trustNumber: "0014233",
          trusteeBank: "Santander",
          visibility: [
            {
              id: '43',
              type: 'Family',
              name: 'Diana Nieto Vega',
              hasVisibility: false,
              hasPostMortemVisibility: true
            }, 
            {
              id: '12',
              type: 'Family',
              name: 'Javier Carrasco Nieto',
              hasVisibility: false,
              hasPostMortemVisibility: true
            }, 
            {
              id: '13',
              type: 'Family',
              name: 'Adriana Carrasco Nieto',
              hasVisibility: false,
              hasPostMortemVisibility: true
            },
            {
              id: '34',
              type: 'Provider',
              name: 'Raul Gallego León',
              hasVisibility: false,
              hasPostMortemVisibility: false
            },
            {
              id: '24',
              type: 'Provider',
              name: 'Luz Amelia Jacobo',
              hasVisibility: false,
              hasPostMortemVisibility: false
            }
          ]
        }, 
        {
          id: 90,
          trustNumber: "144002",
          trusteeBank: "BBVA",
          visibility: [
            {
              id: '43',
              type: 'Family',
              name: 'Diana Nieto Vega',
              hasVisibility: false,
              hasPostMortemVisibility: true
            }, 
            {
              id: '12',
              type: 'Family',
              name: 'Javier Carrasco Nieto',
              hasVisibility: false,
              hasPostMortemVisibility: true
            }, 
            {
              id: '13',
              type: 'Family',
              name: 'Adriana Carrasco Nieto',
              hasVisibility: false,
              hasPostMortemVisibility: true
            },
            {
              id: '34',
              type: 'Provider',
              name: 'Raul Gallego León',
              hasVisibility: false,
              hasPostMortemVisibility: false
            },
            {
              id: '24',
              type: 'Provider',
              name: 'Luz Amelia Jacobo',
              hasVisibility: false,
              hasPostMortemVisibility: false
            }
          ]
        },
      ],
      wills: [
        {
          id: 23,
          name: 'Testamento Familia (México)', 
          visibility: [
            {
              id: '43',
              type: 'Family',
              name: 'Diana Nieto Vega',
              hasVisibility: false,
              hasPostMortemVisibility: true
            }, 
            {
              id: '12',
              type: 'Family',
              name: 'Javier Carrasco Nieto',
              hasVisibility: false,
              hasPostMortemVisibility: true
            }, 
            {
              id: '13',
              type: 'Family',
              name: 'Adriana Carrasco Nieto',
              hasVisibility: false,
              hasPostMortemVisibility: true
            },
            {
              id: '34',
              type: 'Provider',
              name: 'Raul Gallego León',
              hasVisibility: false,
              hasPostMortemVisibility: false
            },
            {
              id: '24',
              type: 'Provider',
              name: 'Luz Amelia Jacobo',
              hasVisibility: false,
              hasPostMortemVisibility: false
            }
          ]
        }, 
        {
          id: 26,
          name: 'Codicilo Testamento (México)', 
          visibility: [
            {
              id: '43',
              type: 'Family',
              name: 'Diana Nieto Vega',
              hasVisibility: false,
              hasPostMortemVisibility: true
            }, 
            {
              id: '12',
              type: 'Family',
              name: 'Javier Carrasco Nieto',
              hasVisibility: false,
              hasPostMortemVisibility: true
            }, 
            {
              id: '13',
              type: 'Family',
              name: 'Adriana Carrasco Nieto',
              hasVisibility: false,
              hasPostMortemVisibility: true
            },
            {
              id: '34',
              type: 'Provider',
              name: 'Raul Gallego León',
              hasVisibility: false,
              hasPostMortemVisibility: false
            },
            {
              id: '24',
              type: 'Provider',
              name: 'Luz Amelia Jacobo',
              hasVisibility: false,
              hasPostMortemVisibility: false
            }
          ]
        }, 
      ]
    },
    {
      id: '43',
      name: 'Diana Nieto Vega',
      trusteeOf: [
        {
          name: 'Fideicomiso 0014233-Santander',
          coreId: 20,
        },
        {
          name: 'Fideicomiso 144002 BBVA',
          coreId: 90,
        }
      ],
      dob: '12/07/1963',
      address: 'Casa La primavera San Anselmo 2083',
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
      nationalities: ['Española', 'Mexicana'],
      obligations: {
        lifeInsurances: [

        ],
        medicalInsurances: [

        ],
        taxes: [], 
        debt: [

        ], 
        loansCollecting: []
      },
      assets: [
        {
          id: 29,
          name: 'Casa La primavera San Anselmo 2083',
          type: 'realState',
          pct: '50',
          value: '7,500,000.00',
          currency: 'MXN',
          country: 'México'
        },
        {
          id: 42,
          name: 'Oficinas mutualismo',
          type: 'realState',
          pct: '100',
          value: '16,500,000.00',
          currency: 'MXN',
          country: 'México'
        }, 
        {
          id: 159,
          name: 'Santander - 79441232',
          type: 'stockInvestment',
          pct: '50',
          value: '10,000,000.00',
          currency: 'MXN',
          country: 'México'
        }, 
        {
          id: 499,
          name: 'Scotia Bank - 6641232',
          type: 'stockInvestment',
          pct: '50',
          value: '20,000,000.00',
          currency: 'MXN',
          country: 'México'
        }
      ]
    },
    {
      id: '13',
      name: 'Adriana Carrasco Nieto',
      nationalities: ['Mexicana'],
      trusteeOf: [
        {
          name: 'Fideicomiso 144002 BBVA',
          coreId: 90,
        }
      ],
      dob: '10/25/1991',
      address: 'Casa La primavera San Anselmo 2083',
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
      obligations: {
        lifeInsurances: [
          {
            id: 21,
            country: 'México',
            proxPago: "29/09/2024",
            nombreAseguradora: "Seguros Monterrey",
            moneda: "MXN",
            vigenciaDel: "12/01/2024",
            vigenciaAl: "12/01/2024",
          }
        ],
        medicalInsurances: [],
        taxes: [
          {
            id: 23,
            rfc: "NFINE324NFJ",
            regimenFiscal: "Régimen Simplificado de Confianza (RESICO)",
            country: 'México'
          }
        ], 
        debt: [
          {
            id: 2,
            proxPago: "10/10/2024",
            country: 'México',
            creditor: {
              name: 'Servicios financieros del campo CN SA de CV',
              type: 'Empresa Familiar', 
              linkedItemId: 24
            },
            tipo: "Prestamo intrafamiliar",
            monto: "10,000.00",
            porPagar: "9,000.00",
            pagado: "1000.00",
            moneda: "MXN",
            interes: "0",
          }
        ], 
        loansCollecting: []
      },
      assets: [
        {
          id: 53,
          name: 'CN Farmer trade LLC',
          type: 'company',
          pct: '20',
          value: '11,200,000.00',
          currency: 'USD',
          country: 'USA'
        },
      ]
    },
    {
      id: '12',
      name: 'Javier Carrasco Nieto',
      nationalities: ['Mexicana'],
      trusteeOf: [
        {
          name: 'Fideicomiso 144002 BBVA',
          coreId: 90,
        }
      ],
      dob: '02/16/1994',
      address: 'Casa La primavera San Anselmo 2083',
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
      obligations: {
        lifeInsurances: [
          {
            id: 20,
            nombreAseguradora: "Seguros Monterrey",
            moneda: "MXN",
            country: 'México',
            vigenciaDel: "20/12/2022",
            vigenciaAl: "20/12/2070",
            proxPago: "29/09/2024",
          }
        ],
        medicalInsurances: [

        ],
        taxes: [
          {
            id: 26,
            rfc: "NFINE324NFJ",
            regimenFiscal: "Regimen de Introducción Fiscal (RIF)",
            country: 'México'
          }
        ], 
        debt: [

        ], 
        loansCollecting: []
      },
      assets: [
        {
          id: 1,
          name: 'Audi A3',
          type: 'vehicle',
          pct: '100',
          value: '650,000.00',
          currency: 'MXN',
          country: 'México'
        },
        {
          id: 24,
          name: 'Servicios financieros del campo CN SA de CV',
          type: 'company',
          pct: '30',
          value: '10,000,000.00',
          currency: 'MXN',
          country: 'México'
        },
        {
          id: 53,
          name: 'CN Farmer trade LLC',
          type: 'company',
          pct: '20',
          value: '11,200,000.00',
          currency: 'USD',
          country: 'USA'
        },
      ]
    },
    {
      id: '9',
      name: 'Sofia Carrasco Nieto',
      trusteeOf: [
        {
          name: 'Fideicomiso 144002 BBVA',
          coreId: 90,
        }
      ],
      nationalities: ['Mexicana'],
      obligations: {
        lifeInsurances: [
          {
            id: 22,
            proxPago: "29/09/2024",
            country: 'México',
            nombreAseguradora: "Seguros Monterrey",
            moneda: "MXN",
            vigenciaDel: "12/01/2024",
            vigenciaAl: "12/01/2024",
          }
        ],
        medicalInsurances: [

        ],
        taxes: [], 
        debt: [

        ], 
        loansCollecting: []
      },
      dob: '03/18/1998',
      address: 'Casa La primavera San Anselmo 2083',
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
      assets: []
    },
    {
      id: '19',
      name: 'Mateo Carrasco Soler',      
      trusteeOf: [],
      nationalities: ['Mexicana', 'Estadounidense'],
      obligations: {
        lifeInsurances: [],
        medicalInsurances: [],
        taxes: [], 
        debt: [], 
        loansCollecting: []
      },
      gender: 'Masculino',
      address: 'Casa La primavera San Anselmo 2083',
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
      assets: []
    },
  ],
}


export const familyS = {
  lastName: 'Familia Aldana Schmidt',
  members: [
    {
      id: '23',
      name: 'Francisco Carrasco Ramos',
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
