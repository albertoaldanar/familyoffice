export const reportsData = {
  familyName: "Aldana Ríos",
  currency: "MXN",
  from: {
    year: "2024",
    month: "Enero",
  },
  to: {
    year: "2024",
    month: "Abril",
  },
  content: ["Obligaciones", "Governanza", "Inversiones y activos"],
  highlights: [
    "Pago de seguro vida (Seguros Monterrey) Alejandra Aldana",
    "Declaración Fiscal menusal Aldana Clima integral (4)",
    "Delcaración fiscal menusal Celsius SA de CV (4)",
    "Declaración Anual Aldana Clima integral",
    "Delcaración Anual Celsius SA de CV",
    "Cobro de prestamo Intrafamiliar Aldana Clima Integral a Alejandra Aldana (4)",
    "Pago de credito hipotecario - Departamento la Marina (4)",
    "Pago de mantenimento Vehicular - Departamento la Marina (2)",
    "Pago de seguro Médico (MAPFRE) Patricia Rios Collantes",
    "Pago de arrendamiento inmobiliario (Departamento Calgary)-Ana Sofia Aldana (4)",
  ],
  companiesObligations: [
    {
      companyName: "Aldana Clima Integral SA de CV",
      taxes: [
        {
          amountTaxReportMonthly: 4,
          amountTaxReportYearly: 1,
          totalSales: "$4,500,000.00",
          totalExpenses: "$1,254,000.00",
          netProfit: "$1,14,000.00",
          reportList: [
            {
              type: "Mensual",
              iva: true,
              isr: true,
              forYear: 2024,
              forMonth: "Diciembre",
              reportDay: "15/01/2024",
            },
            {
              type: "Mensual",
              iva: true,
              isr: true,
              forYear: 2024,
              forMonth: "Enero",
              reportDay: "15/02/2024",
            },
            {
              type: "Mensual",
              iva: true,
              isr: true,
              forYear: 2024,
              forMonth: "Febrero",
              reportDay: "15/03/2024",
            },
            {
              type: "Mensual",
              iva: true,
              isr: true,
              forYear: 2024,
              forMonth: "Marzo",
              reportDay: "15/04/2024",
            },
            {
              type: "Anual",
              iva: true,
              isr: true,
              forYear: 2023,
              forMonth: "--",
              reportDay: "15/04/2024",
            },
          ],
        },
      ],
      debt: [
        {
          debtTotal: "$ 8,500,000.00",
          amountPayableBeginDate: "$ 4,500,000.00",
          amountPayableEndDate: "$ 3,900,000.00",
          debt: [
            {
              totalDebt: "$ 7,000,000.00",
              concept: "Prestamo para desarrollo de oficinas nuevas",
              paymentFrequency: "Mensual",
              creditor: "Banregio",
              interestRate: "28",
              amountPayableBeginDate: "$ 3,400,000.00",
              amountPayableEndDate: "$ 3,000,000.00",
              payments: [
                {
                  year: 2024,
                  month: "Enero",
                  amount: "$100,000.00",
                  paymentDay: "18/01/2024",
                },
                {
                  year: 2024,
                  month: "Febrero",
                  amount: "$100,000.00",
                  paymentDay: "01/02/2024",
                },
                {
                  year: 2024,
                  month: "Marzo",
                  amount: "$100,000.00",
                  paymentDay: "10/03/2024",
                },
                {
                  year: 2024,
                  month: "Abril",
                  amount: "$100,000.00",
                  paymentDay: "02/04/2024",
                },
              ],
            },
            {
              totalDebt: "$ 1,500,000.00",
              concept: "Prestamo Ing. Aldana para pagos de nómina",
              paymentFrequency: "Mensual",
              creditor: "Alberto Aldana Fariñas",
              interestRate: "0",
              amountPayableBeginDate: "$ 1,300,000.00",
              amountPayableEndDate: "$ 900,000.00",
              payments: [
                {
                  year: 2024,
                  month: "Enero",
                  amount: "$100,000.00",
                  paymentDay: "04/01/2024",
                },
                {
                  year: 2024,
                  month: "Febrero",
                  amount: "$100,000.00",
                  paymentDay: "10/02/2024",
                },
                {
                  year: 2024,
                  month: "Marzo",
                  amount: "$100,000.00",
                  paymentDay: "01/03/2024",
                },
                {
                  year: 2024,
                  month: "Abril",
                  amount: "$100,000.00",
                  paymentDay: "02/04/2024",
                },
              ],
            },
          ],
        },
      ],
      collecting: [
        {
          debtTotal: "$ 80,000.00",
          amountReceivableBeginDate: "$ 70,000.00",
          amountReceivableEndDate: "$ 40,000.00",
          debt: [
            {
              totalDebt: "$ 80,000.00",
              concept: "Prestamo personal Alejandra Aldana Ríos",
              paymentFrequency: "Mensual",
              debtor: "Alejandra Aldana Ríos",
              interestRate: "0",
              amountReceivableBeginDate: "$ 70,000.00",
              amountReceivableEndDate: "$ 40,000.00",
              payments: [
                {
                  year: 2024,
                  month: "Enero",
                  amount: "$10,000.00",
                  paymentDay: "18/01/2024",
                },
                {
                  year: 2024,
                  month: "Febrero",
                  amount: "$10,000.00",
                  paymentDay: "01/02/2024",
                },
                {
                  year: 2024,
                  month: "Marzo",
                  amount: "$10,000.00",
                  paymentDay: "10/03/2024",
                },
                {
                  year: 2024,
                  month: "Abril",
                  amount: "$10,000.00",
                  paymentDay: "02/04/2024",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  familyMembersObligations: [
    {
      familyMemberName: "Alberto Aldana Fariñas",
      taxRegime: "Regimen de dividendos",
      taxReportFrequency: ["Anual"],
      taxes: [
        {
          reportList: [
            {
              type: "Anual",
              iva: true,
              isr: true,
              forYear: 2023,
              forMonth: "--",
              reportDay: "15/04/2024",
            },
          ],
        },
      ],
      debt: [
        {
          debtTotal: "$ 3,500,000.00",
          amountPayableBeginDate: "$ 1,500,000.00",
          amountPayableEndDate: "$ 1,180,000.00",
          debt: [
            {
              totalDebt: "$ 3,500,000.00",
              concept: "Prestamo personal para invesión inmobiliaria",
              paymentFrequency: "Mensual",
              creditor: "BBVA",
              interestRate: "19",
              amountPayableBeginDate: "$ 1,500,000.00",
              amountPayableEndDate: "$ 1,180,000.00",
              payments: [
                {
                  year: 2024,
                  month: "Enero",
                  amount: "$80,000.00",
                  paymentDay: "18/01/2024",
                },
                {
                  year: 2024,
                  month: "Febrero",
                  amount: "$80,000.00",
                  paymentDay: "01/02/2024",
                },
                {
                  year: 2024,
                  month: "Marzo",
                  amount: "$80,000.00",
                  paymentDay: "10/03/2024",
                },
                {
                  year: 2024,
                  month: "Abril",
                  amount: "$80,000.00",
                  paymentDay: "02/04/2024",
                },
              ],
            },
          ],
        },
      ],
      collecting: [
        {
          debtTotal: "$ 180,000.00",
          amountReceivableBeginDate: "$ 170,000.00",
          amountReceivableEndDate: "$ 70,000.00",
          debt: [
            {
              totalDebt: "$ 80,000.00",
              type: "Prestamo a tercero",
              concept: "Prestamo personal Daniel Aldana Fariñas",
              paymentFrequency: "Mensual",
              debtor: " Daniel Aldana Fariñas",
              interestRate: "0",
              amountReceivableBeginDate: "$ 80,000.00",
              amountReceivableEndDate: "$ 40,000.00",
              payments: [
                {
                  year: 2024,
                  month: "Enero",
                  amount: "$10,000.00",
                  paymentDay: "18/01/2024",
                },
                {
                  year: 2024,
                  month: "Febrero",
                  amount: "$10,000.00",
                  paymentDay: "01/02/2024",
                },
                {
                  year: 2024,
                  month: "Marzo",
                  amount: "$10,000.00",
                  paymentDay: "10/03/2024",
                },
                {
                  year: 2024,
                  month: "Abril",
                  amount: "$10,000.00",
                  paymentDay: "02/04/2024",
                },
              ],
            },
            {
              totalDebt: "$ 100,000.00",
              concept: "Prestamo a Alberto Aldana Ríos",
              paymentFrequency: "Mensual",
              type: "Intrafamiliar",
              debtor: "Alberto Aldana Ríos",
              interestRate: "0",
              amountReceivableBeginDate: "$ 40,000.00",
              amountReceivableEndDate: "$ 20,000.00",
              payments: [
                {
                  year: 2024,
                  month: "Enero",
                  amount: "$5,000.00",
                  paymentDay: "18/01/2024",
                },
                {
                  year: 2024,
                  month: "Febrero",
                  amount: "$5,000.00",
                  paymentDay: "01/02/2024",
                },
                {
                  year: 2024,
                  month: "Marzo",
                  amount: "$5,000.00",
                  paymentDay: "10/03/2024",
                },
                {
                  year: 2024,
                  month: "Abril",
                  amount: "$5,000.00",
                  paymentDay: "02/04/2024",
                },
              ],
            },
          ],
        },
      ],
      insurances: {
        lifeInsurances: [
          {
            insuranceCompany: 'Seguros Monterrey',
            paymentFrequency: 'Mensual', 
            from: '20/12/2022',
            to: '20/12/2025',
            payments: [
              {
                year: '2024',
                month: 'Enero', 
                from: '02/01/2024', 
                to: '31/01/2024'
              }, 
              {
                year: '2024',
                month: 'Febrero', 
                from: '02/02/2024', 
                to: '28/02/2024'
              }, 
              {
                year: '2024',
                month: 'Marzo', 
                from: '02/03/2024', 
                to: '31/03/2024'
              }, 
              {
                year: '2024',
                month: 'Abril', 
                from: '01/04/2024', 
                to: '31/04/2024'
              }
            ]
          }
        ],
        medicalInsurances: [
          {
            insuranceCompany: 'GNP Seguros',
            paymentFrequency: 'Anual',
            from: '01/01/2022',
            to: '01/01/2026',
            payments: [
              {
                year: '2024',
                month: 'Enero', 
                from: '01/01/2024', 
                to: '01/01/2025', 
              }
            ]
          }, 
        ]
      }
    },
    {
      familyMemberName: "Patricia Ríos Collantes",
      taxRegime: "Regimen de dividendos",
      taxReportFrequency: ["Anual"],
      taxes: [
        {
          reportList: [
            {
              type: "Anual",
              iva: true,
              isr: true,
              forYear: 2023,
              forMonth: "--",
              reportDay: "15/04/2024",
            },
          ],
        },
      ],
      debt: [],
      collecting: [],
      insurances: {
        lifeInsurances: [
          {
            insuranceCompany: 'Seguros Monterrey',
            paymentFrequency: 'Mensual', 
            from: '20/12/2022',
            to: '20/12/2025',
            payments: [
              {
                year: '2024',
                month: 'Enero', 
                from: '02/01/2024', 
                to: '31/01/2024'
              }, 
              {
                year: '2024',
                month: 'Febrero', 
                from: '02/02/2024', 
                to: '28/02/2024'
              }, 
              {
                year: '2024',
                month: 'Marzo', 
                from: '02/03/2024', 
                to: '31/03/2024'
              }, 
              {
                year: '2024',
                month: 'Abril', 
                from: '01/04/2024', 
                to: '31/04/2024'
              }
            ]
          }
        ],
        medicalInsurances: [
          {
            insuranceCompany: 'GNP Seguros',
            paymentFrequency: 'Anual',
            from: '01/01/2022',
            to: '01/01/2026',
            payments: [
              {
                year: '2024',
                month: 'Enero', 
                from: '01/01/2024', 
                to: '01/01/2025', 
              }
            ]
          }, 
        ]
      }
    },
  ],
  assetsObligations: {
    realState: [
      {
        name: 'Casa Montebello Cipres', 
        location: 'México', 
        owners:[
          {
            name: 'Alberto Aldana Fariñas',
            pct: '50%'
          }, 
          {
            name: 'Patricia Ríos Collantes',
            pct: '50%'
          }
        ],
        taxProperty: {
          paymentFrequency: 'Anual',
          payments: [
            {
              amount: '$35,000.00',
              year: '2024',
              month: 'Enero',
              from: '01/01/2024',
              to: '01/01/2025',
            }
          ]
        },
        mantainance: {
          name: 'Cuota Administración privada colinas',
          payments: [
            {
              amount: '$4,000.00',
              year: '2024',
              month: 'Enero',
              paymentDay: '10/01/2024'
            },
            {
              amount: '$4,000.00',
              year: '2024',
              month: 'Febrero',
              paymentDay: '09/02/2024'
            }, 
            {
              amount: '$4,000.00',
              year: '2024',
              month: 'Marzo',
              paymentDay: '07/03/2024'
            }, 
            {
              amount: '$4,000.00',
              year: '2024',
              month: 'Abril',
              paymentDay: '09/04/2024'
            }
          ]
        },
        insurances: [],
        debt: [],
        rentCollecting:[]
      }, 
      {
        name: 'Departamento La marina', 
        location: 'México', 
        owners:[
          {
            name: 'Alberto Aldana Fariñas',
            pct: '100%'
          },
        ], 
        taxProperty: {
          paymentFrequency: 'Anual',
          payments: [
            {
              amount: '$14,000.00',
              year: '2024',
              month: 'Enero',
              from: '01/01/2024',
              to: '01/01/2025',
            }
          ]
        },
        mantainance: {
          name: 'Cuota Administración Costa veleros',
          payments: [
            {
              amount: '$2,500.00',
              year: '2024',
              month: 'Enero',
              paymentDay: '10/01/2024'
            },
            {
              amount: '$2,500.00',
              year: '2024',
              month: 'Febrero',
              paymentDay: '09/02/2024'
            }, 
            {
              amount: '$4,000.00',
              year: '2024',
              month: 'Abril',
              paymentDay: '09/04/2024'
            }
          ]
        },
        insurances: [],
        debt: [
          {
            totalDebt: "$ 1,000,500.00",
            paymentFrequency: "Mensual",
            debtor: "Scotia Bank",
            interestRate: "19",
            amountPayableBeginDate: "$ 200,000.00",
            amountPayableEndDate: "$ 60,000.00",
            payments: [
              {
                year: 2024,
                month: "Enero",
                amount: "$35,000.00",
                paymentDay: "18/01/2024",
              },
              {
                year: 2024,
                month: "Febrero",
                amount: "$35,000.00",
                paymentDay: "01/02/2024",
              },
              {
                year: 2024,
                month: "Marzo",
                amount: "$35,000.00",
                paymentDay: "10/03/2024",
              },
              {
                year: 2024,
                month: "Abril",
                amount: "$35,000.00",
                paymentDay: "02/04/2024",
              },
            ],
          },
        ],
        rentCollecting: {
          tenant: 'John Williams',
          collecting: [
            {
              amount: '$14,500.00',
              year: '2024',
              month: 'Enero',
              paymentDay: '10/01/2024'
            },
            {
              amount: '$14,500.00',
              year: '2024',
              month: 'Febrero',
              paymentDay: '09/02/2024'
            }, 
            {
              amount: '$14,500.00',
              year: '2024',
              month: 'Marzo',
              paymentDay: '09/03/2024'
            }, 
            {
              amount: '$14,000.00',
              year: '2024',
              month: 'Abril',
              paymentDay: '09/04/2024'
            }
          ]
        }
      }
    ],
    vehicles: [
      {
        name: 'BYD-HAN', 
        location: 'México', 
        owners:[
          {
            name: 'Alberto Aldana Fariñas',
            pct: '100%'
          },
        ], 
        taxProperty: {},
        mantainance: {},
        insurances: [
          {
            paymentFrequency: 'Anual',
            payments: [
              {
                amount: '$45,000.00',
                year: '2024',
                month: 'Enero',
                from: '01/01/2024',
                to: '01/01/2025',
              }
            ]
          }
        ],
        debt: [],
        rentCollecting: {}
      }, 
      {
        name: 'Audi-Q5', 
        location: 'México', 
        owners:[
          {
            name: 'Alberto Aldana Rios',
            pct: '100%'
          },
        ], 
        taxProperty: {},
        mantainance: {},
        insurances: [
          {
            paymentFrequency: 'Anual',
            payments: [
              {
                amount: '$23,000.00',
                year: '2024',
                month: 'Enero',
                from: '01/01/2024',
                to: '01/01/2025',
              }
            ]
          }
        ],
        debt: [],
        rentCollecting: {}
      }
    ]
  }, 
  investmentsAndAssets: {
    stockInvestments: [
      {
        bank: 'Scotia Bank', 
        accountNumber: '6641232', 
        owners: [
          {
            name: 'Alberto Aldana Fariñas', 
            pct: '100%'
          }
        ],
        totalValueBeginDate: '$ 10,800,000.00',
        totalValueEndDate: '$ 11,800,000.00',
        valuations: [
          {
            month: 'Enero', 
            year: 2024, 
            amount: '$ 10,800,000.00'
          }, 
          {
            month: 'Febrero', 
            year: 2024, 
            amount: '$ 10,900,000.00'
          },
          {
            month: 'Marzo', 
            year: 2024, 
            amount: '$ 10,900,000.00'
          },
          {
            month: 'Abril', 
            year: 2024, 
            amount: '$ 11,800,000.00'
          },
        ]
      }, 
      {
        bank: 'Santander', 
        accountNumber: '79441232', 
        owners: [
          {
            name: 'Alberto Aldana Fariñas', 
            pct: '100%'
          }
        ],
        totalValueBeginDate: '$ 1,800,000.00',
        totalValueEndDate: '$ 1,300,000.00',
        valuations: [
          {
            month: 'Enero', 
            year: 2024, 
            amount: '$ 1,800,000.00'
          }, 
          {
            month: 'Febrero', 
            year: 2024, 
            amount: '$ 2,100,000.00'
          },
          {
            month: 'Marzo', 
            year: 2024, 
            amount: '$ 1,400,000.00'
          },
          {
            month: 'Abril', 
            year: 2024, 
            amount: '$ 1,300,000.00'
          },
        ]
      }
    ], 
    bankAccountsCompanies: [
      {
        name: 'Aldana Clima Integral',
        accounts: [
          {
            bank: 'Banorte',
            accountNumber: '2402843991',
            totalValueBeginDate: '$ 800,000.00',
            totalValueEndDate: '$ 300,000.00',
            valuations: [
              {
                month: 'Enero', 
                year: 2024, 
                amount: '$ 800,000.00'
              }, 
              {
                month: 'Febrero', 
                year: 2024, 
                amount: '$ 1,00,000.00'
              },
              {
                month: 'Marzo', 
                year: 2024, 
                amount: '$ 400,000.00'
              },
              {
                month: 'Abril', 
                year: 2024, 
                amount: '$ 300,000.00'
              },
            ]
          }, 
          {
            bank: 'HSBC',
            accountNumber: '438392511',
            totalValueBeginDate: '$ 100,000.00',
            totalValueEndDate: '$ 350,000.00',
            valuations: [
              {
                month: 'Enero', 
                year: 2024, 
                amount: '$ 100,000.00'
              }, 
              {
                month: 'Febrero', 
                year: 2024, 
                amount: '$ 235,000.00'
              },
              {
                month: 'Marzo', 
                year: 2024, 
                amount: '$ 350,000.00'
              },
              {
                month: 'Abril', 
                year: 2024, 
                amount: '$ 350,000.00'
              },
            ]
          }
        ]
      }, 
      {
        name: 'Celsius SA de CV',
        accounts: [
          {
            bank: 'Banorte',
            accountNumber: '241332322',
            currency: 'MXN',
            totalValueBeginDate: '$ 450,000.00',
            totalValueEndDate: '$ 156,000.00',
            valuations: [
              {
                month: 'Enero', 
                year: 2024, 
                amount: '$ 800,000.00'
              }, 
              {
                month: 'Febrero', 
                year: 2024, 
                amount: '$ 1,00,000.00'
              },
              {
                month: 'Marzo', 
                year: 2024, 
                amount: '$ 400,000.00'
              },
              {
                month: 'Abril', 
                year: 2024, 
                amount: '$ 300,000.00'
              },
            ]
          }, 
          {
            bank: 'BBVA',
            accountNumber: '345234524344',
            currency: 'MXN',
            totalValueBeginDate: '$ 644,000.00',
            totalValueEndDate: '$ 769,000.00',
            valuations: [
              {
                month: 'Enero', 
                year: 2024, 
                amount: '$ 100,000.00'
              }, 
              {
                month: 'Febrero', 
                year: 2024, 
                amount: '$ 235,000.00'
              },
              {
                month: 'Marzo', 
                year: 2024, 
                amount: '$ 350,000.00'
              },
              {
                month: 'Abril', 
                year: 2024, 
                amount: '$ 350,000.00'
              },
            ]
          },
          {
            bank: 'BBVA',
            accountNumber: '34524344',
            currency: 'MXN',
            totalValueBeginDate: '$ 425,000.00',
            totalValueEndDate: '$ 425,000.00',
            valuations: [
              {
                month: 'Enero', 
                year: 2024, 
                amount: '$ 100,000.00'
              }, 
              {
                month: 'Febrero', 
                year: 2024, 
                amount: '$ 235,000.00'
              },
              {
                month: 'Marzo', 
                year: 2024, 
                amount: '$ 350,000.00'
              },
              {
                month: 'Abril', 
                year: 2024, 
                amount: '$ 350,000.00'
              },
            ]
          }
        ]
      }
    ], 
    bankAccountsFamilyMembers: [
      {
        name: 'Alberto Aldana Fariñas',
        accounts: [
          {
            bank: 'Banorte',
            accountNumber: '2402843991',
            totalValueBeginDate: '$ 800,000.00',
            totalValueEndDate: '$ 300,000.00',
            valuations: [
              {
                month: 'Enero', 
                year: 2024, 
                amount: '$ 800,000.00'
              }, 
              {
                month: 'Febrero', 
                year: 2024, 
                amount: '$ 1,00,000.00'
              },
              {
                month: 'Marzo', 
                year: 2024, 
                amount: '$ 400,000.00'
              },
              {
                month: 'Abril', 
                year: 2024, 
                amount: '$ 300,000.00'
              },
            ]
          }, 
          {
            bank: 'Santander',
            accountNumber: '438392511',
            totalValueBeginDate: '$ 100,000.00',
            totalValueEndDate: '$ 350,000.00',
            valuations: [
              {
                month: 'Enero', 
                year: 2024, 
                amount: '$ 100,000.00'
              }, 
              {
                month: 'Febrero', 
                year: 2024, 
                amount: '$ 235,000.00'
              },
              {
                month: 'Marzo', 
                year: 2024, 
                amount: '$ 350,000.00'
              },
              {
                month: 'Abril', 
                year: 2024, 
                amount: '$ 350,000.00'
              },
            ]
          }
        ]
      }, 
      {
        name: 'Patricia Ríos Collantes',
        accounts: [
          {
            bank: 'Banorte',
            accountNumber: '241332322',
            currency: 'MXN',
            totalValueBeginDate: '$ 450,000.00',
            totalValueEndDate: '$ 156,000.00',
            valuations: [
              {
                month: 'Enero', 
                year: 2024, 
                amount: '$ 800,000.00'
              }, 
              {
                month: 'Febrero', 
                year: 2024, 
                amount: '$ 1,00,000.00'
              },
              {
                month: 'Marzo', 
                year: 2024, 
                amount: '$ 400,000.00'
              },
              {
                month: 'Abril', 
                year: 2024, 
                amount: '$ 300,000.00'
              },
            ]
          }, 
          {
            bank: 'BBVA',
            accountNumber: '345234524344',
            currency: 'MXN',
            totalValueBeginDate: '$ 644,000.00',
            totalValueEndDate: '$ 769,000.00',
            valuations: [
              {
                month: 'Enero', 
                year: 2024, 
                amount: '$ 100,000.00'
              }, 
              {
                month: 'Febrero', 
                year: 2024, 
                amount: '$ 235,000.00'
              },
              {
                month: 'Marzo', 
                year: 2024, 
                amount: '$ 350,000.00'
              },
              {
                month: 'Abril', 
                year: 2024, 
                amount: '$ 350,000.00'
              },
            ]
          },
          {
            bank: 'Banamex',
            accountNumber: '34524344',
            currency: 'MXN',
            totalValueBeginDate: '$ 425,000.00',
            totalValueEndDate: '$ 425,000.00',
            valuations: [
              {
                month: 'Enero', 
                year: 2024, 
                amount: '$ 100,000.00'
              }, 
              {
                month: 'Febrero', 
                year: 2024, 
                amount: '$ 235,000.00'
              },
              {
                month: 'Marzo', 
                year: 2024, 
                amount: '$ 350,000.00'
              },
              {
                month: 'Abril', 
                year: 2024, 
                amount: '$ 350,000.00'
              },
            ]
          }
        ]
      }
    ], 
    privateEquityFunds: [
      {
        fundName: 'ABC fund', 
        totalReturnsBeginDate: '$ 14,000.00',
        totalReturnsEndDate: '$ 19,000.00',
        owners:[
          {
            name: 'Alberto Aldana Fariñas',
            pct: '100%'
          },
        ], 
        investment: '$145,000.00', 
        currency: 'USD', 
        returnsInPeriod: [
          {
            amount: '$ 5,000.00',
            month: 'Febrero',
            year: 2024
          }
        ]
      }, 
      {
        fundName: 'Crossboard Fund', 
        totalReturnsBeginDate: '$ 50,000.00',
        totalReturnsEndDate: '$ 150,000.00',
        owners:[
          {
            name: 'Alberto Aldana Fariñas',
            pct: '50%'
          },
          {
            name: 'Alberto Aldana Rios',
            pct: '50%'
          },
        ], 
        investment: '$2,800,000.00', 
        currency: 'MXN', 
        returnsInPeriod: [
          {
            amount: '$ 100,000.00',
            month: 'Abril',
            year: 2024
          }
        ]
      }, 
    ],
    privateEquityCapital: [
      {
        investmentCompany: 'Restaurante Alejo', 
        sharePercentage: '25%',
        valuationPreMoney: '$ 1,500,000.00',
        valuationBeginDate: '$ 5,000,000.00',
        valuationEndDate: '$ 5,000,000.00',
        investmentAmount: '$ 4,200,000.00',
        owners:[
          {
            name: 'Alberto Aldana Fariñas',
            pct: '33%'
          },
          {
            name: 'Patricia Rios Collantes',
            pct: '33%'
          },
          {
            name: 'Alberto Aldana Ríos',
            pct: '33%'
          },
        ], 
        currency: 'MXN', 
      },
    ], 
    realStateRents: [
      {
        propertyName: 'Departamento Victoria, Mazatlán', 
        totalCollectingInPeriod: '$ 56,000.00',
        collecting: [
          {
            month: 'Enero', 
            year: 2024, 
            amount: '$ 14,000.00'
          }, 
          {
            month: 'Febrero', 
            year: 2024, 
            amount: '$ 14,00,000.00'
          },
          {
            month: 'Marzo', 
            year: 2024, 
            amount: '$ 14,000.00'
          },
          {
            month: 'Abril', 
            year: 2024, 
            amount: '$ 14,000.00'
          },
        ],
        owners:[
          {
            name: 'Patricia Rios Collantes',
            pct: '100%'
          },
        ], 
        currency: 'MXN', 
      },
    ]
  }, 
  wealthBalance: {
    currency: 'MXN',
    realState: {
      valuationStartDate: '$ 33,500,000.00',
      valuationEndDate: '$ 33,500,000.00'
    },
    bankAccounts: {
      valuationStartDate: '$ 4,500,000.00',
      valuationEndDate: '$ 4,800,000.00'
    },
    companies: {
      valuationStartDate: '$ 23,500,000.00',
      valuationEndDate: '$ 23,500,000.00'
    },
    stockInvestments: {
      valuationStartDate: '$ 2,500,000.00',
      valuationEndDate: '$ 2,835,000.00' 
    }, 
    vehicles: {
      valuationStartDate: '$ 4,500,000.00',
      valuationEndDate: '$ 4,500,000.00' 
    },
    artAndCollections: {
      valuationStartDate: '$ 500,000.00',
      valuationEndDate: '$ 500,000.00' 
    },
    loansCollecting: {
      valuationStartDate: '$ 850,000.00',
      valuationEndDate: '$ 678,500.00' 
    },
    privateEquityFund: {
      valuationStartDate: '$ 850,000.00',
      valuationEndDate: '$ 850,500.00' 
    }, 
    privateEquityCapital: {
      valuationStartDate: '$ 1,850,000.00',
      valuationEndDate: '$ 1,850,000.00' 
    }, 
    debt: {
      valuationStartDate: '$ 8,850,000.00',
      valuationEndDate: '$ 8,390,000.00' 
    }
  }
};
