// src/services/types.ts

export interface UserData {
  nome: string;
  email: string;
  telefone: string;
  dataNascimento: string;
}

export interface SimulationData {
  id?: number;
  valorTotalDivida: string;
  valorParcelaDivida: string;
  numeroTotalParcelas: string;
  numeroParcelasPagas: string;
  valorCalculado: string;
}