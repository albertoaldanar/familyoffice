export const generateNodesAndEdges = (family) => {
  const initialNodes = [];
  const initialEdges = [];
  const generationCounts = {};
  const nodePositions = {};

  family.members.forEach((member) => {
    if (!generationCounts[member.generation]) {
      generationCounts[member.generation] = 0;
    }
    generationCounts[member.generation] += 1;
  });

  const memberNodes = family.members.map((member) => {
    const generationMultiplier = member.generation * 1.5;
    let positionX;

    if (generationCounts[member.generation] === 1) {
      const sourceParent = family.members.find((m) => m.id === member.source);
      positionX = sourceParent ? nodePositions[sourceParent.id].x : 500;
    } else {
      const siblingCount = Object.values(nodePositions).filter(
        //@ts-ignore
        (pos) => pos.generation === member.generation
      ).length;

      positionX = 500 - 300 + siblingCount * 350;
    }

    const positionY = generationMultiplier * 100;
    nodePositions[member.id] = { x: positionX, y: positionY, generation: member.generation };

    return {
      id: member.id,
      position: { x: positionX, y: positionY },
      data: { name: member.name, dob: member.dob, regimenFiscal: member.regimenFiscal, id: member.id, generation: member.generation},
      type: 'customNode',
    };
  });

  const coupleNodes = [];
  const couples = family.members.reduce((acc, member) => {
    if (member.coupleId) {
      const coupleId = member.coupleId < member.id ? `${member.coupleId}-${member.id}` : `${member.id}-${member.coupleId}`;
      acc[coupleId] = acc[coupleId] || [];
      acc[coupleId].push(member);
    }
    return acc;
  }, {});
  //@ts-ignore
  Object.entries(couples).forEach(([coupleId, [member1, member2]]) => {
    const positionX = (nodePositions[member1.id].x + nodePositions[member2.id].x) / 1.7;
    const positionY = nodePositions[member1.id].y + 100;

    coupleNodes.push({
      id: `couple-${coupleId}`,
      position: { x: positionX, y: positionY },
      data: { name: 'Couple' },
      type: 'customNode',
    });

    initialEdges.push({
      id: `e${member1.id}-couple-${coupleId}`,
      source: member1.id,
      target: `couple-${coupleId}`,
    });

    initialEdges.push({
      id: `e${member2.id}-couple-${coupleId}`,
      source: member2.id,
      target: `couple-${coupleId}`,
    });
  });

  const lastNameNode = {
    id: 'root',
    position: { x: 500, y: 30 },
    data: { name: family.lastName, generation: 0, id: 'root' },
    type: 'customNode',
  };

  initialNodes.push(lastNameNode, ...memberNodes, ...coupleNodes);

  family.members.forEach((member) => {
    if (member.source) {
      initialEdges.push({
        id: `e${member.source}-${member.id}`,
        source: member.source,
        target: member.id,
      });
    }
  });

  return { initialNodes, initialEdges };
};
