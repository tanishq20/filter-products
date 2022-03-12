export const fastDeliveryFilter = (fastDelivery, data) =>
  fastDelivery ? data.filter((item) => item.fastDelivery) : data
