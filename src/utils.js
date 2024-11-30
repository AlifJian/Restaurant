export const formatNumber = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "decimal",
    }).format(number);
  };
