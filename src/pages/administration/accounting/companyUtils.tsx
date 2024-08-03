//@ts-ignore
import usa from '../../../assets/images/flags/us.svg';
//@ts-ignore
import mx from '../../../assets/images/flags/mx.svg';
//@ts-ignore
import ca from '../../../assets/images/flags/ca.svg';
//@ts-ignore
import es from '../../../assets/images/flags/es.svg';

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

export const renderFlag = (nationality: string) => {
  if(nationality === 'USA'){
    return <img style={{width: 25, height: 25, borderRadius: 10}} src={usa} alt="usa" />
  } else if(nationality === 'Mexicana' || nationality === 'México'){
    return <img style={{width: 25, height: 25, borderRadius: 10}} src={mx} alt="mx" />
  } else if(nationality === 'Canada'){
    return <img style={{width: 25, height: 25, borderRadius: 10}} src={ca} alt="canada" />
  } else if(nationality === 'España'){
    return <img style={{width: 25, height: 25, borderRadius: 10}} src={es} alt="españa" />
  } 

  return;
};
