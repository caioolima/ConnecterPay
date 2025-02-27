import { useEffect, useState } from "react";
import UserDataDisplay from "./UserDataDisplay";
import SimulationTable from "./SimulationTable";
import { SimulationData, UserData } from "@/services/types";

export default function DataDisplay() {
  const [formData, setFormData] = useState<SimulationData[]>([]);
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData") || "[]");
    if (savedData.length > 0) {
      const { nome, email, telefone, dataNascimento } = savedData[0];
      setUserData({ nome, email, telefone, dataNascimento });
      setFormData(savedData);
    }
  }, []);

  const handleClearData = () => {
    localStorage.removeItem("formData");
    setFormData([]);
    setUserData(null);
    console.log("Simulações limpas!");
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">Dados Armazenados</h1>

      {(!userData && formData.length === 0) ? (
        <div className="mb-8 p-6">
          <div className="flex justify-center items-center h-64 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl p-6">
            <p className="text-xl font-semibold text-gray-600 dark:text-white text-center">
              Nenhum dado encontrado
            </p>
          </div>
        </div>
      ) : (
        <>
          {userData && <UserDataDisplay userData={userData} />}
          {formData.length > 0 && <SimulationTable formData={formData} onClear={handleClearData} />}
        </>
      )}
    </div>
  );
}
