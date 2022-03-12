export const ratingFilter = (rating, data) => {
  switch (rating) {
    case 4:
      return data.filter((item) => item.ratings >= 4)
    case 3:
      return data.filter((item) => item.ratings >= 3)
    case 2:
      return data.filter((item) => item.ratings >= 2)
    case 1:
      return data.filter((item) => item.ratings >= 1)
    default:
      return data
  }
}
