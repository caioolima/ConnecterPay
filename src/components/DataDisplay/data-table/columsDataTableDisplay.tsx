import { ColumnDef } from "@tanstack/react-table";
import { SimulationData } from "@/services/types";

const parseCurrency = (value: string | number): number => {
  const valueString = typeof value === 'number' ? value.toString() : value;
  return parseFloat(valueString.replace(/[^\d,-]/g, '').replace(',', '.'));
};


const columnsDataTableDisplay: ColumnDef<SimulationData>[] = [
  {
    accessorKey: "id",
    header: "Simulação",
    cell: ({ getValue }) => {
      const value = getValue();
      return (
        <span className="text-gray-800 font-medium">
          {typeof value === "string" || typeof value === "number" ? value : "Valor Inválido"}
        </span>
      );
    },
  },

  {
    accessorKey: "valorTotalDivida",
    header: "Valor Total da Dívida",
    cell: ({ getValue }) => {
      const value = getValue() as string;
      return (
        <span className="text-red-600 font-semibold">
          {typeof value === "string"
            ? new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
              maximumFractionDigits: 2,
            }).format(parseCurrency(value))
            : "Valor Inválido"}
        </span>
      );
    },
  },

  {
    accessorKey: "valorParcelaDivida",
    header: "Valor da Parcela",
    cell: ({ getValue }) => {
      const value = getValue() as string;
      return (
        <span className="text-green-600 font-semibold">
          {typeof value === "string"
            ? new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
              maximumFractionDigits: 2,
            }).format(parseCurrency(value))
            : "Valor Inválido"}
        </span>
      );
    },
  },

  {
    accessorKey: "numeroTotalParcelas",
    header: "Número Total de Parcelas",
    cell: ({ getValue }) => {
      const value = getValue();
      return (
        <span className="text-blue-600 font-medium">
          {typeof value === "string" ? value : "Número Inválido"}
        </span>
      );
    },
  },

  {
    accessorKey: "numeroParcelasPagas",
    header: "Número de Parcelas Pagas",
    cell: ({ getValue }) => {
      const value = getValue();
      return (
        <span className="text-yellow-600 font-medium">
          {typeof value === "string" ? value : "Número Inválido"}
        </span>
      );
    },
  },

  {
    accessorKey: "valorCalculado",
    header: "Valor Calculado",
    cell: ({ getValue }) => {
      const value = getValue();
  
      if (value === null || value === undefined) {
        return <span className="text-gray-800 font-semibold">Valor Inválido</span>;
      }
  
      const formattedValue =
        typeof value === "number"
          ? new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
              maximumFractionDigits: 2,
            }).format(value)
          : "Valor Inválido";
  
      return <span className="text-gray-800 font-semibold">{formattedValue}</span>;
    },
  }
  
];

export default columnsDataTableDisplay;
