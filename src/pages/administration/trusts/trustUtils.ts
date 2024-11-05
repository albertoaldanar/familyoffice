export const formatOtherTrusts = (trusts, selectedTrust) => {
  if (!trusts.length) {
    return [];
  }

  return trusts
    .filter((trust) => trust.id !== selectedTrust.id)
    .map((trust) => ({
      value: trust.id,
      label: `${trust.trustNumber}-${trust.trusteeBank}`,
    }));
};
