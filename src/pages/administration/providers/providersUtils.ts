export const formatProviderContacts = (providers) => {
  return providers.flatMap((category) =>
    category.proveedores.map((contact) => ({
      label: `${contact.nombre} - ${contact.type}`,
      value: contact.id,
    }))
  );
};


export const formatProviderSelected = (contact) => {
    if(!contact.length){
      return [];
    }
  
    if (contact) {
      return contact.map((member) => ({
          value: member.coreId,
          label: `${member.name}-${member.type}`,
          name: member.name,
          type: member.type,
          location: member.location,
          number: member.number,
          email: member.email
        }));
    }
  };