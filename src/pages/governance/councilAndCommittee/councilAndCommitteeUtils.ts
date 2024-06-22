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

export const formatMember = (memberList) => {
  if(!memberList.length){
    return [];
  }

  if (memberList) {
    return memberList.map((member) => ({
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

export function hasDateTimePassed(date: string, time: string): boolean {
  const currentDateTime = new Date();
  const [day, month, year] = date.split('/').map(Number);
  const [timeString, modifier] = time.split(' '); 
  let [hours, minutes] = timeString.split(':').map(Number);

  if (modifier.toLowerCase() === 'pm' && hours < 12) {
    hours += 12;
  } else if (modifier.toLowerCase() === 'am' && hours === 12) {
    hours = 0;
  }

  const inputDateTime = new Date(year, month - 1, day, hours, minutes);

  return inputDateTime < currentDateTime;
}

export const findMostFrequentChoice = (participants): string => {
  const choiceCount: { [key: string]: number } = {};

  participants.forEach(participant => {
    const choice = participant.choiceSelected;
    if (choiceCount[choice]) {
      choiceCount[choice]++;
    } else {
      choiceCount[choice] = 1;
    }
  });

  let mostFrequentChoice = '';
  let maxCount = 0;

  for (const choice in choiceCount) {
    if (choiceCount[choice] > maxCount) {
      maxCount = choiceCount[choice];
      mostFrequentChoice = choice;
    }
  }

  return `${mostFrequentChoice} (${maxCount} votos)`;
};

export function daysLeftUntil(deadlineDate: string): string {
  const [day, month, year] = deadlineDate.split('/').map(Number);
  
  const deadline = new Date(year, month - 1, day);
  const today = new Date();
  const differenceInTime = deadline.getTime() - today.getTime();
  
  const daysLeft = Math.ceil(differenceInTime / (1000 * 3600 * 24));
  
  if (daysLeft < 0) {
    return "The deadline has already passed.";
  } else if (daysLeft === 0) {
    return "The deadline is today.";
  } else {
    return `${daysLeft} dias.`;
  }
}
export const calculateVotePercentages = (participants) => {
  const totalVotes = participants.length;
  const voteCounts: { [choice: string]: number } = {};

  participants.forEach(participant => {
    const choice = participant.choiceSelected || 'Sin respuesta';
    if (voteCounts[choice]) {
      voteCounts[choice]++;
    } else {
      voteCounts[choice] = 1;
    }
  });

  const votePercentages = Object.entries(voteCounts).map(([choice, count]) => ({
    response: choice,
    percentage: (count / totalVotes) * 100
  }));

  return votePercentages;
};

export const calculateMostVoted = (participants) => {
  const voteCounts = {};

  participants.forEach((participant) => {
    const choice = participant.choiceSelected || 'Sin respuesta';
    if (voteCounts[choice]) {
      voteCounts[choice]++;
    } else {
      voteCounts[choice] = 1;
    }
  });

  let mostVoted = '';
  let maxVotes = 0;
  let tie = false;

  for (const [choice, count] of Object.entries(voteCounts)) {
    if (count > maxVotes) {
      //@ts-ignore
      maxVotes = count;
      mostVoted = choice;
      tie = false; // Reset tie if a new maximum is found
    } else if (count === maxVotes) {
      tie = true; // Set tie to true if there is a tie in votes
    }
  }

  return tie ? 'TIE' : mostVoted;
};