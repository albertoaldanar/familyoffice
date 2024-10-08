import React from 'react'

const MenuItems = [
  {
    Items: [
      {
        icon: (<i className="side-menu__icon fe fe-home text-black fs-17"></i>),
        type: 'sub',
        Name:'',
        active: false,
        selected: false,
        title: 'Inicio',
        pathname: `${import.meta.env.BASE_URL}homeDashboard`,
        class:'',
        color:'',
        badgetxt:'',
        children: null
      },
    ]
  },
  {
    Items: [
      {
        icon: (<i className="side-menu__icon fe fe-download"></i>),
        type: 'sub',
        Name:'',
        active: false,
        selected: false,
        title: 'Reportes',
        pathname: `${import.meta.env.BASE_URL}reports`,
        class:'',
        color:'',
        badgetxt:'',
        children: null
      },
    ]
  },
  {
    Items: [
      {
        icon: (<i className="side-menu__icon fe fe-calendar text-black fs-17"></i>),
        type: 'sub',
        Name:'',
        active: false,
        selected: false,
        title: 'Administración',
        class:'',
        color:'',
        badgetxt:'',      
        children: [
          { path: `${import.meta.env.BASE_URL}governance/familyStructure`, type: 'link', active: false, selected: false, title: 'Familia' },
          { path: `${import.meta.env.BASE_URL}administration/payments`, type: 'link', active: false, selected: false, title: 'Tabla de cumplimientos' },
          { path: `${import.meta.env.BASE_URL}administration/companies`, type: 'link', active: false, selected: false, title: 'Empresas y fideicomisos' },
          { path: `${import.meta.env.BASE_URL}administration/assets/realState`, type: 'link', active: false, selected: false, title: 'Portafolio de activos' },
          { path: `${import.meta.env.BASE_URL}administration/providers`, type: 'link', active: false, selected: false, title: 'Proveedores y contactos' },

        ]
      }
    ]
  },
  {
    Items: [
      {
        icon: (<i className="side-menu__icon ri-git-repository-private-line"></i>),
        type: 'sub',
        Name:'',
        active: false,
        selected: false,
        title: 'Gobernanza',
        class:'',
        color:'',
        badgetxt:'',      
        children: [
          { path: `${import.meta.env.BASE_URL}governance/familyCouncil`, type: 'link', active: false, selected: false, title: 'Consejo Familiar' },
          { path: `${import.meta.env.BASE_URL}governance/investmentCommittee`, type: 'link', active: false, selected: false, title: 'Comité de inversión' },
          { path: `${import.meta.env.BASE_URL}governance/investmentCommittee`, type: 'link', active: false, selected: false, title: 'Virtual Family Office' },

        ]
      },
    ]
  },

  {
    Items: [
      {
        icon: (<i className="side-menu__icon ri-bar-chart-2-line"></i>),
        type: 'sub',
        Name:'',
        active: false,
        selected: false,
        title: 'Inversiones',
        class:'',
        color:'',
        badgetxt:'',      
        children: [
          { path: `${import.meta.env.BASE_URL}investments/realStateDashboard`, type: 'link', active: false, selected: false, title: 'Bienes raices' },
          { path: `${import.meta.env.BASE_URL}investments/loansDashboard`, type: 'link', active: false, selected: false, title: 'Prestamos por cobrar' },
          { path: `${import.meta.env.BASE_URL}investments/stockInvestmentDashboard`, type: 'link', active: false, selected: false, title: 'Bursatil' },
          { path: `${import.meta.env.BASE_URL}investments/privateEquityDashboard`, type: 'link', active: false, selected: false, title: 'Capital Privado' },
        ]
      },
    ]
  },  
]
export default MenuItems
