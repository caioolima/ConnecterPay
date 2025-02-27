import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { schema } from "@/hooks/pages/useFormPageData";

import { validateForm } from "./DebtValidation";
import { handleFormSubmit } from "./DebtFormSubmit";
import { formatCurrency } from "./formatCurrency";
import InputField from "../Forms/InputField";
import ErrorMessage from "../Forms/ErrorMessage";

interface DebtFormFieldsProps {
  form: UseFormReturn<z.infer<typeof schema>>;
  handleProceed: () => void;
  isFormValid: boolean;
}

const DebtFormFields = ({ form, handleProceed }: DebtFormFieldsProps) => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = () => {
    const values = form.getValues();
    const validationError = validateForm(values);

    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    handleFormSubmit(handleProceed, setErrorMessage);
  };

  return (
    <>
      <InputField
        name="valorTotalDivida"
        label="Valor total da dívida (R$)"
        placeholder="Digite o valor total da dívida"
        form={form}
        formatValue={formatCurrency}
      />

      <InputField
        name="valorParcelaDivida"
        label="Valor da parcela da dívida (R$)"
        placeholder="Digite o valor da parcela da dívida"
        form={form}
        formatValue={formatCurrency}
      />

      <InputField
        name="numeroTotalParcelas"
        label="Número total de parcelas"
        placeholder="Digite o número total de parcelas"
        form={form}
        type="number"
      />

      <InputField
        name="numeroParcelasPagas"
        label="Número de parcelas pagas"
        placeholder="Digite o número de parcelas pagas"
        form={form}
        type="number"
      />

      <div className="flex justify-end">
        <Button type="button" onClick={handleSubmit} className="text-lg py-3">
          Prosseguir
        </Button>
      </div>

      {errorMessage && <ErrorMessage message={errorMessage} />}
    </>
  );
};

export default DebtFormFields;
