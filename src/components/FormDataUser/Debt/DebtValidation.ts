export const validateForm = (values: any): string | null => {
    const { numeroParcelasPagas, numeroTotalParcelas, valorTotalDivida, valorParcelaDivida } = values;
  
    const parsedValorTotalDivida = parseFloat(valorTotalDivida.replace(/\D/g, "")) / 100;
    const parsedValorParcelaDivida = parseFloat(valorParcelaDivida.replace(/\D/g, "")) / 100;
  
    if (!valorTotalDivida || parsedValorTotalDivida === 0) {
      return "O valor total da dívida não pode ser zero.";
    }
    if (!valorParcelaDivida || parsedValorParcelaDivida === 0) {
      return "O valor da parcela da dívida não pode ser zero.";
    }
    if (!numeroTotalParcelas || parseInt(numeroTotalParcelas) === 0) {
      return "O número total de parcelas não pode ser zero.";
    }
    if (!numeroParcelasPagas || parseInt(numeroParcelasPagas) === 0) {
      return "O número de parcelas pagas não pode ser zero.";
    }
    if (parseInt(numeroParcelasPagas) > parseInt(numeroTotalParcelas)) {
      return "O número de parcelas pagas não pode ser maior que o número total de parcelas.";
    }
    if (parsedValorParcelaDivida > parsedValorTotalDivida) {
      return "O valor da parcela da dívida não pode ser maior que o valor total da dívida.";
    }
  
    return null;
  };
  