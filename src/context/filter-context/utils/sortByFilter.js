export const sortByFilter = (sortBy, data) => {
  const copyData = [...data]
  switch (sortBy) {
    case 'low-to-high':
      return copyData.sort((a, b) => Number(a.price) - Number(b.price))
    case 'high-to-low':
      return copyData.sort((a, b) => Number(b.price) - Number(a.price))
    default:
      return data
  }
}
