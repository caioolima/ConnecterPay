export const formatCurrency = (value: string): string => {
    const numericValue = value.replace(/\D/g, "");
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(numericValue) / 100);
  };
  