export const generateNodesAndEdges = (
  investmentCommittee,
  structureName,
  type
) => {
  const initialNodes = [];
  const initialEdges = [];

  const rootNode = {
    id: "root",
    position: { x: 500, y: 300 },
    data: { name: structureName, role: "root", type },
    type: "customNode",
  };

  initialNodes.push(rootNode);

  const angleStep = (2 * Math.PI) / investmentCommittee.length;
  const radius = 250;

  investmentCommittee.forEach((member, index) => {
    const angle = index * angleStep;
    const positionX = 500 + radius * Math.cos(angle);
    const positionY = 300 + radius * Math.sin(angle);

    const node = {
      id: member.id,
      position: { x: positionX, y: positionY },
      data: {
        name: member.name,
        role: member.role,
        id: member.id,
        providerCategory: member.providerCategory,
      },
      type: "customNode",
    };

    initialNodes.push(node);

    initialEdges.push({
      id: `e${rootNode.id}-${member.id}`,
      source: rootNode.id,
      target: member.id,
    });
  });

  return { initialNodes, initialEdges };
};

export const formatAvailableFamilyMember = (familyList, membershipType) => {
  const membership = membershipType === 'consejoFamiliar' ? 'isMemberFC': 'isMemberIC';
  if(!familyList.members.length){
    return [];
  }

  if (familyList) {
    return familyList.members
      .filter((member) => !member[membership])
      .map((member) => ({
        value: member.id,
        label: member.name,
      }));
  }
};

export const formatAvailableExternalProviders = (providerList, membershipType) => {
  const membership = membershipType === 'consejoFamiliar' ? 'isMemberFC' : 'isMemberIC';

  if(!providerList.length){
    return [];
  }

  return providerList.flatMap((category) =>
    category.proveedores
      .filter((provider) => !provider[membership])
      .map((provider) => ({
        value: provider.id,
        label: `${provider.nombre} (${category.categoria})`,
      }))
  );
};
