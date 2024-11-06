export const privateEquityStats = {
  numberOfProperties: 6,
  totalValueOfPrivateEquity: [
    {
      currency: 'MXN',
      value: '4,500,000.00'
    }, 
    {      
      currency: 'USD',
      value: '236,804.96'
    },
    {      
      currency: 'EUR',
      value: '212,906.60'
    }
  ],
  totalValueOfPrivateEquityFunds: [
    {
      currency: 'MXN',
      value: '400,000.00'
    }, 
    {      
      currency: 'USD',
      value: '19,804.96'
    },
    {      
      currency: 'EUR',
      value: '16,906.60'
    }
  ],
  totalValueOfPrivateEquityDirect: [
    {
      currency: 'MXN',
      value: '4,100,000.00'
    }, 
    {      
      currency: 'USD',
      value: '206,804.96'
    },
    {      
      currency: 'EUR',
      value: '196,906.60'
    }
  ],
  byCurrency: [
    {
      type: 'USD', 
      value: 28
    }, 
    {
      type: 'MXN', 
      value: 74
    }, 
  ], 
  byAssets: [
    {
      type: 'Inversion restaurante amigo',
      value: [
        { currency: 'MXN', value: 810000 },
        { currency: 'USD', value: 44550 },
        { currency: 'EUR', value: 40500 }
      ]
    },
    {
      type: 'Startup: App de assets managemt',
      value: [
        { currency: 'MXN', value: 100000 },
        { currency: 'USD', value: 5500 },
        { currency: 'EUR', value: 5000 }
      ]
    },
    {
      type: 'Inversión fondo ABC',
      value: [
        { currency: 'MXN', value: 200000 },
        { currency: 'USD', value: 11000 },
        { currency: 'EUR', value: 10000 }
      ]
    }
  ], 
  byType: [
    {
      type: 'Directo-Capital',
      value: [
        { currency: 'MXN', value: 8000000 },
        { currency: 'USD', value: 421285.46 },
        { currency: 'EUR', value: 378098.34 }
      ]
    },
    {
      type: 'Directo-Deuda',
      value: [
        { currency: 'MXN', value: 10000000 },
        { currency: 'USD', value: 526606.83 },
        { currency: 'EUR', value: 472622.93 }
      ]
    },
    {
      type: 'A través de fondos',
      value: [
        { currency: 'MXN', value: 5000000 },
        { currency: 'USD', value: 263303.41 },
        { currency: 'EUR', value: 236311.47 }
      ]
    }
  ],
  byStage: [
    {
      type: 'Seed',
      value: [
        { currency: 'MXN', value: 810000 },
        { currency: 'USD', value: 44550 },
        { currency: 'EUR', value: 40500 }
      ]
    },
    {
      type: 'Serie A',
      value: [
        { currency: 'MXN', value: 10000 },
        { currency: 'USD', value: 550 },
        { currency: 'EUR', value: 500 }
      ]
    },
    {
      type: 'Serie B',
      value: [
        { currency: 'MXN', value: 20000 },
        { currency: 'USD', value: 1100 },
        { currency: 'EUR', value: 1000 }
      ]
    }
  ], 
  byOwners: [
    {
      type: 'Miembro 1 (Padre)', 
      value: [
        {
          currency: 'MXN',
          value: 850000
        }, 
        {      
          currency: 'USD',
          value: 44757.05
        },
        {      
          currency: 'EUR',
          value: 40238.83
        }
      ]
    },
    {
      type: 'Empresa Agricola SA de CV',
      value: [
        {
          currency: 'MXN',
          value: 300000
        }, 
        {      
          currency: 'USD',
          value: 15795.96
        },
        {      
          currency: 'EUR',
          value: 14201.36
        }
      ] 
    }, 
  ],
  byUsage: [
    {
      type: 'Renta', 
      value: 4
    }, 
    {
      type: 'Especulación', 
      value: 3
    }, 
    {
      type: 'Inversión', 
      value: 1
    },
    {
      type: 'Uso habitacional', 
      value: 1
    }, 
  ], 
  byCountry: [
    {
      type: 'México',
      value: [
        {
          currency: 'MXN',
          value: 45000
        }, 
        {      
          currency: 'USD',
          value: 2370.43
        },
        {      
          currency: 'EUR',
          value: 2131.27
        }
      ] 
    }, 
    {
      type: 'Brazil', 
      value: [
        {
          currency: 'MXN',
          value: 134000
        }, 
        {      
          currency: 'USD',
          value: 7058.62
        },
        {      
          currency: 'EUR',
          value: 6346.44
        }
      ] 
    }, 
  ], 
  byIndustrie: [
    {
      type: 'Startups-tech',
      value: [
        { currency: 'MXN', value: 12000000 },
        { currency: 'USD', value: 631928.19 },
        { currency: 'EUR', value: 567147.51 }
      ]
    },
    {
      type: 'Construcción',
      value: [
        { currency: 'MXN', value: 9000000 },
        { currency: 'USD', value: 473946.14 },
        { currency: 'EUR', value: 425360.64 }
      ]
    },
    {
      type: 'Finanzas',
      value: [
        { currency: 'MXN', value: 15000000 },
        { currency: 'USD', value: 789910.25 },
        { currency: 'EUR', value: 709236.80 }
      ]
    },
    {
      type: 'Entretenimiento',
      value: [
        { currency: 'MXN', value: 7000000 },
        { currency: 'USD', value: 368621.11 },
        { currency: 'EUR', value: 331642.05 }
      ]
    }
  ],  
  returnsByPeriodsFunds: [
    {
      name: 'Fondo ABC',
      values: [
        {
          year: 2024,
          month: "Enero",
          value: [
            {
              currency: "MXN",
              value: 35000,
            },
            {
              currency: "USD",
              value: 1897.85,
            },
            {
              currency: "EUR",
              value: 1783.50,
            },
          ],
        },
        {
          year: 2024,
          month: "Febrero",
          value: [
            {
              currency: "MXN",
              value: 35000,  // No change from Enero
            },
            {
              currency: "USD",
              value: 1897.85,  // No change
            },
            {
              currency: "EUR",
              value: 1783.50,  // No change
            },
          ],
        },
        {
          year: 2024,
          month: "Marzo",
          value: [
            {
              currency: "MXN",
              value: 38000,
            },
            {
              currency: "USD",
              value: 2060.12,
            },
            {
              currency: "EUR",
              value: 1936.40,
            },
          ],
        },
        {
          year: 2024,
          month: "Abril",
          value: [
            {
              currency: "MXN",
              value: 38000,  // No change from Marzo
            },
            {
              currency: "USD",
              value: 2060.12,  // No change
            },
            {
              currency: "EUR",
              value: 1936.40,  // No change
            },
          ],
        },
        {
          year: 2024,
          month: "Mayo",
          value: [
            {
              currency: "MXN",
              value: 42000,
            },
            {
              currency: "USD",
              value: 2278.20,
            },
            {
              currency: "EUR",
              value: 2142.00,
            },
          ],
        },
        {
          year: 2024,
          month: "Junio",
          value: [
            {
              currency: "MXN",
              value: 45000,
            },
            {
              currency: "USD",
              value: 2442.90,
            },
            {
              currency: "EUR",
              value: 2294.90,
            },
          ],
        },
        {
          year: 2024,
          month: "Julio",
          value: [
            {
              currency: "MXN",
              value: 45000,  // No change from Junio
            },
            {
              currency: "USD",
              value: 2442.90,  // No change
            },
            {
              currency: "EUR",
              value: 2294.90,  // No change
            },
          ],
        },
        {
          year: 2024,
          month: "Agosto",
          value: [
            {
              currency: "MXN",
              value: 47000,
            },
            {
              currency: "USD",
              value: 2551.53,
            },
            {
              currency: "EUR",
              value: 2395.70,
            },
          ],
        },
        {
          year: 2024,
          month: "Septiembre",
          value: [
            {
              currency: "MXN",
              value: 47000,  // No change from Agosto
            },
            {
              currency: "USD",
              value: 2551.53,  // No change
            },
            {
              currency: "EUR",
              value: 2395.70,  // No change
            },
          ],
        },
      ],
    }, 
    {
      name: 'RMN fund',
      values: [
        {
          year: 2024,
          month: "Enero",
          value: [
            {
              currency: "MXN",
              value: 38000,
            },
            {
              currency: "USD",
              value: 2060.12,
            },
            {
              currency: "EUR",
              value: 1936.40,
            },
          ],
        },
        {
          year: 2024,
          month: "Febrero",
          value: [
            {
              currency: "MXN",
              value: 38000,  // No change from Enero
            },
            {
              currency: "USD",
              value: 2060.12,  // No change
            },
            {
              currency: "EUR",
              value: 1936.40,  // No change
            },
          ],
        },
        {
          year: 2024,
          month: "Marzo",
          value: [
            {
              currency: "MXN",
              value: 41000,
            },
            {
              currency: "USD",
              value: 2225.12,
            },
            {
              currency: "EUR",
              value: 2080.10,
            },
          ],
        },
        {
          year: 2024,
          month: "Abril",
          value: [
            {
              currency: "MXN",
              value: 41000,  // No change from Marzo
            },
            {
              currency: "USD",
              value: 2225.12,  // No change
            },
            {
              currency: "EUR",
              value: 2080.10,  // No change
            },
          ],
        },
        {
          year: 2024,
          month: "Mayo",
          value: [
            {
              currency: "MXN",
              value: 45000,
            },
            {
              currency: "USD",
              value: 2442.90,
            },
            {
              currency: "EUR",
              value: 2294.90,
            },
          ],
        },
        {
          year: 2024,
          month: "Junio",
          value: [
            {
              currency: "MXN",
              value: 47000,
            },
            {
              currency: "USD",
              value: 2551.53,
            },
            {
              currency: "EUR",
              value: 2395.70,
            },
          ],
        },
        {
          year: 2024,
          month: "Julio",
          value: [
            {
              currency: "MXN",
              value: 47000,  // No change from Junio
            },
            {
              currency: "USD",
              value: 2551.53,  // No change
            },
            {
              currency: "EUR",
              value: 2395.70,  // No change
            },
          ],
        },
        {
          year: 2024,
          month: "Agosto",
          value: [
            {
              currency: "MXN",
              value: 49000,
            },
            {
              currency: "USD",
              value: 2660.16,
            },
            {
              currency: "EUR",
              value: 2500.50,
            },
          ],
        },
        {
          year: 2024,
          month: "Septiembre",
          value: [
            {
              currency: "MXN",
              value: 49000,  // No change from Agosto
            },
            {
              currency: "USD",
              value: 2660.16,  // No change
            },
            {
              currency: "EUR",
              value: 2500.50,  // No change
            },
          ],
        },
      ],
    }, 
    {
      name: 'Fondo PQR',
      values: [
        {
          year: 2024,
          month: "Enero",
          value: [
            {
              currency: "MXN",
              value: 45000,
            },
            {
              currency: "USD",
              value: 2442.90,
            },
            {
              currency: "EUR",
              value: 2294.90,
            },
          ],
        },
        {
          year: 2024,
          month: "Febrero",
          value: [
            {
              currency: "MXN",
              value: 45000,  // No change from Enero
            },
            {
              currency: "USD",
              value: 2442.90,  // No change
            },
            {
              currency: "EUR",
              value: 2294.90,  // No change
            },
          ],
        },
        {
          year: 2024,
          month: "Marzo",
          value: [
            {
              currency: "MXN",
              value: 47000,
            },
            {
              currency: "USD",
              value: 2551.53,
            },
            {
              currency: "EUR",
              value: 2395.70,
            },
          ],
        },
        {
          year: 2024,
          month: "Abril",
          value: [
            {
              currency: "MXN",
              value: 49000,
            },
            {
              currency: "USD",
              value: 2660.16,
            },
            {
              currency: "EUR",
              value: 2500.50,
            },
          ],
        },
        {
          year: 2024,
          month: "Mayo",
          value: [
            {
              currency: "MXN",
              value: 49000,  // No change from Abril
            },
            {
              currency: "USD",
              value: 2660.16,  // No change
            },
            {
              currency: "EUR",
              value: 2500.50,  // No change
            },
          ],
        },
        {
          year: 2024,
          month: "Junio",
          value: [
            {
              currency: "MXN",
              value: 50000,
            },
            {
              currency: "USD",
              value: 2714.48,
            },
            {
              currency: "EUR",
              value: 2550.00,
            },
          ],
        },
        {
          year: 2024,
          month: "Julio",
          value: [
            {
              currency: "MXN",
              value: 50000,  // No change from Junio
            },
            {
              currency: "USD",
              value: 2714.48,  // No change
            },
            {
              currency: "EUR",
              value: 2550.00,  // No change
            },
          ],
        },
        {
          year: 2024,
          month: "Agosto",
          value: [
            {
              currency: "MXN",
              value: 52000,
            },
            {
              currency: "USD",
              value: 2823.11,
            },
            {
              currency: "EUR",
              value: 2650.80,
            },
          ],
        },
        {
          year: 2024,
          month: "Septiembre",
          value: [
            {
              currency: "MXN",
              value: 52000,  // No change from Agosto
            },
            {
              currency: "USD",
              value: 2823.11,  // No change
            },
            {
              currency: "EUR",
              value: 2650.80,  // No change
            },
          ],
        },
      ],
    }
  ],
  countries: ['Mexico', 'Brazil']
}