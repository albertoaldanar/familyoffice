export function transformAccountData(data) {
  return data.families.map((family) => ({
      label: family.lastName,
      value: family.id,
    }))
}
