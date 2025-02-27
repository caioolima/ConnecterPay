import React from "react";
import { SimulationData } from "@/services/types";
import { DataTableDisplay } from "./data-table/DataTableDisplay";
import columnsDataTableDisplay from "./data-table/columsDataTableDisplay";
import SimulationPDF from "./SimulationPDF";

interface SimulationTableProps {
  formData: SimulationData[];
  onClear: () => void;
}

const SimulationTable = ({ formData, onClear }: SimulationTableProps) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 mt-16">Simulações Realizadas</h2>
      <DataTableDisplay columns={columnsDataTableDisplay} data={formData} />
      <div className="mt-6 flex space-x-4">
        <button
          onClick={onClear}
          className="px-4 py-2 sm:px-6 sm:py-3 bg-red-500 text-white font-semibold text-sm sm:text-base rounded-lg hover:bg-red-600 transition"
        >
          Limpar Simulações
        </button>

        <SimulationPDF formData={formData} />
      </div>
    </div>
  );
};

export default SimulationTable;
