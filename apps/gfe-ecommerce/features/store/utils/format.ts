export const formatCentsToDollars = (cents: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(cents / 100);
};

export const formatRating = (rating: number) => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(rating);
};

export const formatPercentage = (percentage: number) => {
  return Number(percentage / 100 / 100).toLocaleString(undefined, {
    style: 'percent',
    minimumFractionDigits: 0,
  });
};
