import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export const schema = z.object({
  nome: z.string(),
  email: z.string().email(),
  telefone: z.string(),
  dataNascimento: z.string(),
  valorTotalDivida: z.string(),
  valorParcelaDivida: z.string(),
  numeroTotalParcelas: z.string(),
  numeroParcelasPagas: z.string(),
})
  .refine((data) => {
    const numeroParcelasPagas = parseInt(data.numeroParcelasPagas, 10);
    const numeroTotalParcelas = parseInt(data.numeroTotalParcelas, 10);
    return numeroParcelasPagas <= numeroTotalParcelas;
  }, {
    message: "O número de parcelas pagas não pode ser maior que o número total de parcelas",
    path: ["numeroParcelasPagas"],
  })
  .refine((data) => {
    const parseCurrency = (value: string) => 
      parseFloat(value.replace(/[^\d,]/g, "").replace(",", "."));

    const valorTotalDivida = parseCurrency(data.valorTotalDivida);
    const valorParcelaDivida = parseCurrency(data.valorParcelaDivida);

    return valorParcelaDivida <= valorTotalDivida;
  }, {
    message: "O valor da parcela da dívida não pode ser maior que o valor total da dívida",
    path: ["valorParcelaDivida"],
  });

export function useFormPageData() {
  const [calculatedValue, setCalculatedValue] = useState<string | null>(null);

  const { isPending, mutate } = useMutation({
    mutationFn: async (data: z.infer<typeof schema>) => {
      const parseCurrency = (value: string) => 
        parseFloat(value.replace(/[^\d,]/g, "").replace(",", "."));

      const valorNumerico = parseCurrency(data.valorParcelaDivida);

      if (isNaN(valorNumerico)) {
        console.error("Valor da parcela inválido:", data.valorParcelaDivida);
        return;
      }

      const valorCalculado = (valorNumerico / 2) + 7.50;
      const valorCalculadoFormatado = valorCalculado.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

      data.valorParcelaDivida = valorCalculadoFormatado;

      const previousData = JSON.parse(localStorage.getItem("formData") || "[]");
      const newId = previousData.length + 1;
      const newData = [...previousData, { ...data, valorParcelaDivida: valorCalculadoFormatado, valorCalculado, id: newId }];
      localStorage.setItem("formData", JSON.stringify(newData));

      setCalculatedValue(valorCalculadoFormatado);

      return { ...data, valorParcelaDivida: valorCalculadoFormatado, id: newId };
    },

    onError: (error: unknown) => {
      console.error("Erro inesperado ao calcular:", error instanceof Error ? error.message : error);
    },
    onSuccess: () => {
      console.log("Cálculo realizado.");
    },
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {} as z.infer<typeof schema>,
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    mutate(data);
  };

  return {
    isPending,
    mutate,
    form,
    onSubmit,
    calculatedValue,
  };
}
