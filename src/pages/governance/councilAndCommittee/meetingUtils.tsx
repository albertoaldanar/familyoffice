export const formatMeeting = (data) => {
  return data.map((item) => ({
    label: `# ${item.meetingNumber} - ${item.title}`,
    value: item.id,
  }));
};


export const formatSignleMeeting = (data) => {
  return {
    label: `# ${data.meetingNumber} - ${data.title}`,
    value: data.id,
  };
};

