export const formatCompany = (companies) => {
    if(!companies.length){
      return [];
    }
  
    if (companies) {
      return companies.map((member) => ({
          value: member.id,
          label: member.nombre,
        }));
    }
};

export const formatTrust = (companies) => {
  if(!companies.length){
    return [];
  }

  if (companies) {
    return companies.map((member) => ({
        value: member.id,
        label: `${member.trustNumber}-${member.trusteeBank}`,
      }));
  }
};

export const formatOwnersData = (companySelected) => {
    const formattedData = {
      family: [],
      company: [],
      trust: []
    };
  
    companySelected.owners.forEach(owner => {
      const ownerData = {
        label: owner.name || owner.nombre,
        value: owner.coreId,
        pct: owner.pct,
        capitalSocial: owner.capitalSocial || null
      };
  
      if (owner.type === "family") {
        formattedData.family.push(ownerData);
      } else if (owner.type === "company") {
        formattedData.company.push(ownerData);
      } else if (owner.type === "trust") {
        formattedData.trust.push(ownerData);
      }
    });
  
    return formattedData;
};

export const renderFlag = (nationality: string) => {
  if(nationality === 'USA'){
    return <i className="flag flag-us"></i>
  } else if(nationality === 'Mexicana' || nationality === 'México'){
    return <i className="flag flag-mx"></i>
  } else if(nationality === 'Canada'){
    return <i className="flag flag-ca"></i>
  } else if(nationality === 'España'){
    return <i className="flag flag-es"></i>
  } else if(nationality === 'Brazil'){
    return <i className="flag flag-br"></i>
  } else if(nationality === 'Inglaterra'){
    return <i className="flag flag-gb"></i>
  } 
  return;
};

export const countryOptions = [
  { value: "México", label: "México" },
  { value: "USA", label: "USA" },
  { value: "Canada", label: "Canada" },
  { value: "España", label: "España" },
  { value: "Inglaterra", label: "Inglaterra" },
  { value: "Brazil", label: "Brazil" },
];
