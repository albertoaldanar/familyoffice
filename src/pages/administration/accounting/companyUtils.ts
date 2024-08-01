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

export const formatOwnersData = (companySelected) => {
    const formattedData = {
      family: [],
      company: []
    };
  
    companySelected.owners.forEach(owner => {
      const ownerData = {
        label: owner.name,
        value: owner.coreId,
        pct: owner.pct,
        capitalSocial: owner.capitalSocial || null
      };
  
      if (owner.type === "family") {
        formattedData.family.push(ownerData);
      } else if (owner.type === "company") {
        formattedData.company.push(ownerData);
      }
    });
  
    return formattedData;
};
