export const reportsData = {
  familyName: "Familia Ejemplo Demo",
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
    "Pago de seguro vida (Seguros Monterrey) Miembro 2 (Madre)",
    "Declaración Fiscal menusal Empresa Agricola SA de CV (4)",
    "Delcaración fiscal menusal Empresa financiera SA de CV (4)",
    "Declaración Anual Empresa Agricola SA de CV",
    "Delcaración Anual Empresa financiera SA de CV",
    "Cobro de prestamo Intrafamiliar Empresa Agricola SA de CV a Miembro 4 (Hija) (4)",
    "Pago de credito hipotecario - Departamento Cabo la Marina (4)",
    "Pago de mantenimento Vehicular - Departamento Cabo la Marina (2)",
    "Pago de seguro Médico (MAPFRE) Miembro 4 (Hija)",
    "Pago de arrendamiento inmobiliario (Departamento Londres) - Miembro 5 (Hija) (4)",
  ],
  companiesObligations: [
    {
      companyName: "Empresa Agricola SA de CV",
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
              concept: "Prestamo Ing para pagos de nómina",
              paymentFrequency: "Mensual",
              creditor: "Miembro 1 (Padre)",
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
              concept: "Prestamo personal Miembro 4 (Hija)",
              paymentFrequency: "Mensual",
              debtor: "Miembro 4 (Hija)",
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
      familyMemberName: "Miembro 1 (Padre)",
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
              concept: "Prestamo personal Juan Amigo",
              paymentFrequency: "Mensual",
              debtor: "Juan Amigo",
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
              concept: "Prestamo a Miembro 3 (Hijo)",
              paymentFrequency: "Mensual",
              type: "Intrafamiliar",
              debtor: "Miembro 3 (Hijo)",
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
            insuranceCompany: "Seguros Monterrey",
            paymentFrequency: "Mensual",
            from: "20/12/2022",
            to: "20/12/2025",
            payments: [
              {
                year: "2024",
                month: "Enero",
                from: "02/01/2024",
                to: "31/01/2024",
              },
              {
                year: "2024",
                month: "Febrero",
                from: "02/02/2024",
                to: "28/02/2024",
              },
              {
                year: "2024",
                month: "Marzo",
                from: "02/03/2024",
                to: "31/03/2024",
              },
              {
                year: "2024",
                month: "Abril",
                from: "01/04/2024",
                to: "31/04/2024",
              },
            ],
          },
        ],
        medicalInsurances: [
          {
            insuranceCompany: "GNP Seguros",
            paymentFrequency: "Anual",
            from: "01/01/2022",
            to: "01/01/2026",
            payments: [
              {
                year: "2024",
                month: "Enero",
                from: "01/01/2024",
                to: "01/01/2025",
              },
            ],
          },
        ],
      },
    },
    {
      familyMemberName: "Miembro 4 (Hija)",
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
            insuranceCompany: "Seguros Monterrey",
            paymentFrequency: "Mensual",
            from: "20/12/2022",
            to: "20/12/2025",
            payments: [
              {
                year: "2024",
                month: "Enero",
                from: "02/01/2024",
                to: "31/01/2024",
              },
              {
                year: "2024",
                month: "Febrero",
                from: "02/02/2024",
                to: "28/02/2024",
              },
              {
                year: "2024",
                month: "Marzo",
                from: "02/03/2024",
                to: "31/03/2024",
              },
              {
                year: "2024",
                month: "Abril",
                from: "01/04/2024",
                to: "31/04/2024",
              },
            ],
          },
        ],
        medicalInsurances: [
          {
            insuranceCompany: "GNP Seguros",
            paymentFrequency: "Anual",
            from: "01/01/2022",
            to: "01/01/2026",
            payments: [
              {
                year: "2024",
                month: "Enero",
                from: "01/01/2024",
                to: "01/01/2025",
              },
            ],
          },
        ],
      },
    },
  ],
  assetsObligations: {
    realState: [
      {
        name: "Casa Culiacan 322",
        location: "México",
        owners: [
          {
            name: "Miembro 1 (Padre)",
            pct: "50%",
          },
          {
            name: "Miembro 2 (Madre)",
            pct: "50%",
          },
        ],
        taxProperty: {
          paymentFrequency: "Anual",
          payments: [
            {
              amount: "$35,000.00",
              year: "2024",
              month: "Enero",
              from: "01/01/2024",
              to: "01/01/2025",
            },
          ],
        },
        mantainance: {
          name: "Cuota Administración privada colinas",
          payments: [
            {
              amount: "$4,000.00",
              year: "2024",
              month: "Enero",
              paymentDay: "10/01/2024",
            },
            {
              amount: "$4,000.00",
              year: "2024",
              month: "Febrero",
              paymentDay: "09/02/2024",
            },
            {
              amount: "$4,000.00",
              year: "2024",
              month: "Marzo",
              paymentDay: "07/03/2024",
            },
            {
              amount: "$4,000.00",
              year: "2024",
              month: "Abril",
              paymentDay: "09/04/2024",
            },
          ],
        },
        insurances: [],
        debt: [],
        rentCollecting: [],
      },
      {
        name: "Departamento Puerta Cabo Village",
        location: "México",
        owners: [
          {
            name: "Miembro 1 (Padre)",
            pct: "100%",
          },
        ],
        taxProperty: {
          paymentFrequency: "Anual",
          payments: [
            {
              amount: "$14,000.00",
              year: "2024",
              month: "Enero",
              from: "01/01/2024",
              to: "01/01/2025",
            },
          ],
        },
        mantainance: {
          name: "Cuota Administración Costa veleros",
          payments: [
            {
              amount: "$2,500.00",
              year: "2024",
              month: "Enero",
              paymentDay: "10/01/2024",
            },
            {
              amount: "$2,500.00",
              year: "2024",
              month: "Febrero",
              paymentDay: "09/02/2024",
            },
            {
              amount: "$4,000.00",
              year: "2024",
              month: "Abril",
              paymentDay: "09/04/2024",
            },
          ],
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
          tenant: "John Williams",
          collecting: [
            {
              amount: "$14,500.00",
              year: "2024",
              month: "Enero",
              paymentDay: "10/01/2024",
            },
            {
              amount: "$14,500.00",
              year: "2024",
              month: "Febrero",
              paymentDay: "09/02/2024",
            },
            {
              amount: "$14,500.00",
              year: "2024",
              month: "Marzo",
              paymentDay: "09/03/2024",
            },
            {
              amount: "$14,000.00",
              year: "2024",
              month: "Abril",
              paymentDay: "09/04/2024",
            },
          ],
        },
      },
    ],
    vehicles: [
      {
        name: "BYD-HAN",
        location: "México",
        owners: [
          {
            name: "Miembro 1 (Padre)",
            pct: "100%",
          },
        ],
        taxProperty: {},
        mantainance: {},
        insurances: [
          {
            paymentFrequency: "Anual",
            payments: [
              {
                amount: "$45,000.00",
                year: "2024",
                month: "Enero",
                from: "01/01/2024",
                to: "01/01/2025",
              },
            ],
          },
        ],
        debt: [],
        rentCollecting: {},
      },
      {
        name: "Audi-Q5",
        location: "México",
        owners: [
          {
            name: "Miembro 3 (Hijo)",
            pct: "100%",
          },
        ],
        taxProperty: {},
        mantainance: {},
        insurances: [
          {
            paymentFrequency: "Anual",
            payments: [
              {
                amount: "$23,000.00",
                year: "2024",
                month: "Enero",
                from: "01/01/2024",
                to: "01/01/2025",
              },
            ],
          },
        ],
        debt: [],
        rentCollecting: {},
      },
    ],
  },
  otherPayments: [
    {
      name: "Colegiatura Maestria Miembro 5 (Hija)",
      paymentFrequency: 'Mensual',
      currency: 'MXN', 
      payments: [
        {
          amount: "$35,000.00",
          year: "2024",
          month: "Enero",
          paymentDay: "01/01/2024",
        },
        {
          amount: "$35,000.00",
          year: "2024",
          month: "Febrero",
          paymentDay: "01/02/2024",
        },
        {
          amount: "$35,000.00",
          year: "2024",
          month: "Marzo",
          paymentDay: "01/01/2024",
        },
        {
          amount: "$35,000.00",
          year: "2024",
          month: "Abril",
          paymentDay: "01/04/2024",
        },
      ],
    },
    {
      name: "Cutoa Country Club Cuiliacan",
      paymentFrequency: 'Anual',
      currency: 'MXN', 
      payments: [
        {
          amount: "$50,000.00",
          year: "2024",
          month: "Enero",
          paymentDay: "01/06/2024",
        },
      ],
    },
    {
      name: "Arrendamiento Departamento Londres - Miembro 5 (Hija)",
      paymentFrequency: 'Mensual',
      currency: 'CAD', 
      payments: [
        {
          amount: "1,400.00",
          year: "2024",
          month: "Enero",
          paymentDay: "01/01/2024",
        },
        {
          amount: "1,400.00",
          year: "2024",
          month: "Febrero",
          paymentDay: "01/02/2024",
        },
        {
          amount: "1,400.00",
          year: "2024",
          month: "Marzo",
          paymentDay: "01/01/2024",
        },
        {
          amount: "1,400.00",
          year: "2024",
          month: "Abril",
          paymentDay: "01/04/2024",
        },
      ],
    }
  ],
  investmentsAndAssets: {
    stockInvestments: [
      {
        bank: "Scotia Bank",
        accountNumber: "6641232",
        owners: [
          {
            name: "Miembro 1 (Padre)",
            pct: "100%",
          },
        ],
        totalValueBeginDate: "$ 10,800,000.00",
        totalValueEndDate: "$ 11,800,000.00",
        valuations: [
          {
            month: "Enero",
            year: 2024,
            amount: "$ 10,800,000.00",
          },
          {
            month: "Febrero",
            year: 2024,
            amount: "$ 10,900,000.00",
          },
          {
            month: "Marzo",
            year: 2024,
            amount: "$ 10,900,000.00",
          },
          {
            month: "Abril",
            year: 2024,
            amount: "$ 11,800,000.00",
          },
        ],
      },
      {
        bank: "Santander",
        accountNumber: "79441232",
        owners: [
          {
            name: "Miembro 1 (Padre)",
            pct: "100%",
          },
        ],
        totalValueBeginDate: "$ 1,800,000.00",
        totalValueEndDate: "$ 1,300,000.00",
        valuations: [
          {
            month: "Enero",
            year: 2024,
            amount: "$ 1,800,000.00",
          },
          {
            month: "Febrero",
            year: 2024,
            amount: "$ 2,100,000.00",
          },
          {
            month: "Marzo",
            year: 2024,
            amount: "$ 1,400,000.00",
          },
          {
            month: "Abril",
            year: 2024,
            amount: "$ 1,300,000.00",
          },
        ],
      },
    ],
    bankAccountsCompanies: [
      {
        name: "Empresa Agricola SA de CV",
        accounts: [
          {
            bank: "Banorte",
            currency: "MXN",
            accountNumber: "2402843991",
            totalValueBeginDate: "$ 800,000.00",
            totalValueEndDate: "$ 300,000.00",
            valuations: [
              {
                month: "Enero",
                year: 2024,
                amount: "$ 800,000.00",
              },
              {
                month: "Febrero",
                year: 2024,
                amount: "$ 1,00,000.00",
              },
              {
                month: "Marzo",
                year: 2024,
                amount: "$ 400,000.00",
              },
              {
                month: "Abril",
                year: 2024,
                amount: "$ 300,000.00",
              },
            ],
          },
          {
            bank: "HSBC",
            currency: "MXN",
            accountNumber: "438392511",
            totalValueBeginDate: "$ 100,000.00",
            totalValueEndDate: "$ 350,000.00",
            valuations: [
              {
                month: "Enero",
                year: 2024,
                amount: "$ 100,000.00",
              },
              {
                month: "Febrero",
                year: 2024,
                amount: "$ 235,000.00",
              },
              {
                month: "Marzo",
                year: 2024,
                amount: "$ 350,000.00",
              },
              {
                month: "Abril",
                year: 2024,
                amount: "$ 350,000.00",
              },
            ],
          },
        ],
      },
      {
        name: "Empresa financiera SA de CV",
        accounts: [
          {
            bank: "Banorte",
            accountNumber: "241332322",
            currency: "MXN",
            totalValueBeginDate: "$ 450,000.00",
            totalValueEndDate: "$ 156,000.00",
            valuations: [
              {
                month: "Enero",
                year: 2024,
                amount: "$ 800,000.00",
              },
              {
                month: "Febrero",
                year: 2024,
                amount: "$ 1,00,000.00",
              },
              {
                month: "Marzo",
                year: 2024,
                amount: "$ 400,000.00",
              },
              {
                month: "Abril",
                year: 2024,
                amount: "$ 300,000.00",
              },
            ],
          },
          {
            bank: "BBVA",
            accountNumber: "345234524344",
            currency: "USD",
            totalValueBeginDate: "$ 644,000.00",
            totalValueEndDate: "$ 769,000.00",
            valuations: [
              {
                month: "Enero",
                year: 2024,
                amount: "$ 100,000.00",
              },
              {
                month: "Febrero",
                year: 2024,
                amount: "$ 235,000.00",
              },
              {
                month: "Marzo",
                year: 2024,
                amount: "$ 350,000.00",
              },
              {
                month: "Abril",
                year: 2024,
                amount: "$ 350,000.00",
              },
            ],
          },
          {
            bank: "BBVA",
            accountNumber: "34524344",
            currency: "MXN",
            totalValueBeginDate: "$ 425,000.00",
            totalValueEndDate: "$ 425,000.00",
            valuations: [
              {
                month: "Enero",
                year: 2024,
                amount: "$ 100,000.00",
              },
              {
                month: "Febrero",
                year: 2024,
                amount: "$ 235,000.00",
              },
              {
                month: "Marzo",
                year: 2024,
                amount: "$ 350,000.00",
              },
              {
                month: "Abril",
                year: 2024,
                amount: "$ 350,000.00",
              },
            ],
          },
        ],
      },
    ],
    bankAccountsFamilyMembers: [
      {
        name: "Miembro 1 (Padre)",
        accounts: [
          {
            bank: "Banorte",
            accountNumber: "2402843991",
            currency: "MXN",
            totalValueBeginDate: "$ 800,000.00",
            totalValueEndDate: "$ 300,000.00",
            valuations: [
              {
                month: "Enero",
                year: 2024,
                amount: "$ 800,000.00",
              },
              {
                month: "Febrero",
                year: 2024,
                amount: "$ 1,00,000.00",
              },
              {
                month: "Marzo",
                year: 2024,
                amount: "$ 400,000.00",
              },
              {
                month: "Abril",
                year: 2024,
                amount: "$ 300,000.00",
              },
            ],
          },
          {
            bank: "Santander",
            accountNumber: "438392511",
            currency: "MXN",
            totalValueBeginDate: "$ 100,000.00",
            totalValueEndDate: "$ 350,000.00",
            valuations: [
              {
                month: "Enero",
                year: 2024,
                amount: "$ 100,000.00",
              },
              {
                month: "Febrero",
                year: 2024,
                amount: "$ 235,000.00",
              },
              {
                month: "Marzo",
                year: 2024,
                amount: "$ 350,000.00",
              },
              {
                month: "Abril",
                year: 2024,
                amount: "$ 350,000.00",
              },
            ],
          },
        ],
      },
      {
        name: "Miembro 2 (Madre)",
        accounts: [
          {
            bank: "Banorte",
            accountNumber: "241332322",
            currency: "MXN",
            totalValueBeginDate: "$ 450,000.00",
            totalValueEndDate: "$ 156,000.00",
            valuations: [
              {
                month: "Enero",
                year: 2024,
                amount: "$ 800,000.00",
              },
              {
                month: "Febrero",
                year: 2024,
                amount: "$ 1,00,000.00",
              },
              {
                month: "Marzo",
                year: 2024,
                amount: "$ 400,000.00",
              },
              {
                month: "Abril",
                year: 2024,
                amount: "$ 300,000.00",
              },
            ],
          },
          {
            bank: "BBVA",
            accountNumber: "345234524344",
            currency: "MXN",
            totalValueBeginDate: "$ 644,000.00",
            totalValueEndDate: "$ 769,000.00",
            valuations: [
              {
                month: "Enero",
                year: 2024,
                amount: "$ 100,000.00",
              },
              {
                month: "Febrero",
                year: 2024,
                amount: "$ 235,000.00",
              },
              {
                month: "Marzo",
                year: 2024,
                amount: "$ 350,000.00",
              },
              {
                month: "Abril",
                year: 2024,
                amount: "$ 350,000.00",
              },
            ],
          },
          {
            bank: "Banamex",
            accountNumber: "34524344",
            currency: "MXN",
            totalValueBeginDate: "$ 425,000.00",
            totalValueEndDate: "$ 425,000.00",
            valuations: [
              {
                month: "Enero",
                year: 2024,
                amount: "$ 100,000.00",
              },
              {
                month: "Febrero",
                year: 2024,
                amount: "$ 235,000.00",
              },
              {
                month: "Marzo",
                year: 2024,
                amount: "$ 350,000.00",
              },
              {
                month: "Abril",
                year: 2024,
                amount: "$ 350,000.00",
              },
            ],
          },
        ],
      },
    ],
    privateEquityFunds: [
      // {
      //   fundName: "ABC fund",
      //   totalReturnsBeginDate: "$ 14,000.00",
      //   totalReturnsEndDate: "$ 19,000.00",
      //   owners: [
      //     {
      //       name: "Miembro 1 (Padre)",
      //       pct: "100%",
      //     },
      //   ],
      //   investment: "$145,000.00",
      //   currency: "USD",
      //   returnsInPeriod: [
      //     {
      //       amount: "$ 5,000.00",
      //       month: "Febrero",
      //       year: 2024,
      //     },
      //   ],
      // },
      {
        fundName: "Crossboard Fund",
        totalReturnsBeginDate: "$ 50,000.00",
        totalReturnsEndDate: "$ 150,000.00",
        owners: [
          {
            name: "Miembro 1 (Padre)",
            pct: "50%",
          },
          {
            name: "Miembro 3 (Hijo)",
            pct: "50%",
          },
        ],
        investment: "$2,800,000.00",
        currency: "MXN",
        returnsInPeriod: [
          {
            amount: "$ 100,000.00",
            month: "Abril",
            year: 2024,
          },
        ],
      },
    ],
    privateEquityCapital: [
      {
        investmentCompany: "Restaurante Alejo",
        sharePercentage: "25%",
        valuationPreMoney: "$ 1,500,000.00",
        valuationBeginDate: "$ 5,000,000.00",
        valuationEndDate: "$ 5,000,000.00",
        investmentAmount: "$ 4,200,000.00",
        owners: [
          {
            name: "Miembro 1 (Padre)",
            pct: "33%",
          },
          {
            name: "Miembro 2 (Madre)",
            pct: "33%",
          },
          {
            name: "Miembro 3 (Hijo)",
            pct: "33%",
          },
        ],
        currency: "MXN",
      },
    ],
    realStateRents: [
      {
        propertyName: "Departamento Victoria, Mazatlán",
        totalCollectingInPeriod: "$ 56,000.00",
        collecting: [
          {
            month: "Enero",
            year: 2024,
            amount: "$ 14,000.00",
          },
          {
            month: "Febrero",
            year: 2024,
            amount: "$ 14,00,000.00",
          },
          {
            month: "Marzo",
            year: 2024,
            amount: "$ 14,000.00",
          },
          {
            month: "Abril",
            year: 2024,
            amount: "$ 14,000.00",
          },
        ],
        owners: [
          {
            name: "Miembro 4 (Hija)",
            pct: "100%",
          },
        ],
        currency: "MXN",
      },
    ],
    collectingOverview: {
      currency: 'MXN',
      creditors: [
        {
          creditorName: "Miembro 1 (Padre)",
          collectingBeginDate: "$ 120,000.00",
          collectingEndDate: "$ 105,000.00",
        },
        {
          creditorName: "Empresa Holding SA de CV",
          collectingBeginDate: "$ 1,200,000.00",
          collectingEndDate: "$ 900,000.00",
        },
        {
          creditorName: "Miembro 2 (Madre)",
          collectingBeginDate: "$ 200,000.00",
          collectingEndDate: "$ 200,000.00",
        },
        {
          creditorName: "Empresa financiera SA de CV",
          collectingBeginDate: "$ 450,000.00",
          collectingEndDate: "$ 150,000.00",
        }
      ]
    },
  },
  wealthBalance: {
    currency: "MXN",
    realState: {
      valuationStartDate: "$ 33,500,000.00",
      valuationEndDate: "$ 33,500,000.00",
    },
    bankAccounts: {
      valuationStartDate: "$ 4,500,000.00",
      valuationEndDate: "$ 4,800,000.00",
    },
    companies: {
      valuationStartDate: "$ 23,500,000.00",
      valuationEndDate: "$ 23,500,000.00",
    },
    stockInvestments: {
      valuationStartDate: "$ 2,500,000.00",
      valuationEndDate: "$ 2,835,000.00",
    },
    vehicles: {
      valuationStartDate: "$ 4,500,000.00",
      valuationEndDate: "$ 4,500,000.00",
    },
    artAndCollections: {
      valuationStartDate: "$ 500,000.00",
      valuationEndDate: "$ 500,000.00",
    },
    loansCollecting: {
      valuationStartDate: "$ 850,000.00",
      valuationEndDate: "$ 678,500.00",
    },
    privateEquityFund: {
      valuationStartDate: "$ 850,000.00",
      valuationEndDate: "$ 850,500.00",
    },
    privateEquityCapital: {
      valuationStartDate: "$ 1,850,000.00",
      valuationEndDate: "$ 1,850,000.00",
    },
    debt: {
      valuationStartDate: "$ 8,850,000.00",
      valuationEndDate: "$ 8,390,000.00",
    },
    totalAssetValue: {
      valuationStartDate: "$ 79,530,000.00",
      valuationEndDate: "$ 89,529,410.00",
    },
  },
  governance: {
    investmentCommittee: {
      meetings: [
        {
          meetingName:
            "Reunion # 2 de Comite de inversión - Tercer junta tercer bimestre",
          meetingDay: "12/04/2024",
          participants: "4/5",
        },
      ],
      voatings: [],
    },
    familyCouncil: {
      meetings: [
        {
          meetingName:
            "Reunion # 3 de Consejo Familiar - Tercer junta tercer bimestre",
          meetingDay: "05/03/2024",
          participants: "5/5",
        },
      ],
      voatings: [
        {
          voatingName:
            "Votación - Todos los miembros del comite deben presentar reporte semanal",
          result: "En contra",
          participants: "5/5",
        },
      ],
    },
  },
};
