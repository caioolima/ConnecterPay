import React from "react";
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from "@react-pdf/renderer";
import { SimulationData } from "@/services/types";

interface SimulationPDFProps {
  formData: SimulationData[];
}

const SimulationPDF = ({ formData }: SimulationPDFProps) => {

  const styles = StyleSheet.create({
    page: {
      padding: 30,
    },
    section: {
      marginBottom: 10,
    },
    table: {
      marginTop: 20,
      width: "100%",
    },
    row: {
      flexDirection: "row",
      borderBottom: 1,
      borderColor: "#000",
    },
    cell: {
      padding: 5,
      flex: 1,
      fontSize: 10,
      textAlign: "center",
    },
    header: {
      backgroundColor: "#f2f2f2",
      fontWeight: "bold",
    },
  });

  // Gerar o PDF
  const MyDocument = () => (
    <Document>
      <Page style={styles.page}>
        <Text style={{ fontSize: 18, marginBottom: 20, fontWeight: "bold" }}>
          Simulações Realizadas
        </Text>
        
        <View style={styles.table}>
          <View style={[styles.row, styles.header]}>
            <Text style={styles.cell}>Simulação</Text>
            <Text style={styles.cell}>Valor Total da Dívida</Text>
            <Text style={styles.cell}>Valor da Parcela</Text>
            <Text style={styles.cell}>Número Total de Parcelas</Text>
            <Text style={styles.cell}>Número de Parcelas Pagas</Text>
            <Text style={styles.cell}>Valor Calculado</Text>
          </View>
          
          {formData.map((item, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.cell}>{item.id}</Text>
              <Text style={styles.cell}>{item.valorTotalDivida}</Text>
              <Text style={styles.cell}>{item.valorParcelaDivida}</Text>
              <Text style={styles.cell}>{item.numeroTotalParcelas}</Text>
              <Text style={styles.cell}>{item.numeroParcelasPagas}</Text>
              <Text style={styles.cell}>{item.valorCalculado}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );

  return (
    <PDFDownloadLink document={<MyDocument />} fileName="simulacoes.pdf">
      {({ loading }) =>
        loading ? (
          <button className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white font-semibold text-sm sm:text-base rounded-lg hover:bg-blue-600 transition">
            Carregando PDF...
          </button>
        ) : (
          <button className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white font-semibold text-sm sm:text-base rounded-lg hover:bg-blue-600 transition">
            Gerar PDF
          </button>
        )
      }
    </PDFDownloadLink>
  );
};

export default SimulationPDF;
