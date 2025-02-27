import React, { useState } from "react";
import { schema, useFormPageData } from "@/hooks/pages/useFormPageData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import DebtFormFields from "../Debt/DebtFormFields";
import DialogDataUser from "../../DialogDataUser/DialogDataUser";

import ContactFormFields from "../Contact/ContactFormFields";
import { z } from "zod";

const FormDataUser = () => {
  const { isPending, mutate, form, calculatedValue } = useFormPageData();
  const [showContactFields, setShowContactFields] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);

  const handleProceed = async () => {
    const isValid = await form.trigger([
      "valorTotalDivida",
      "valorParcelaDivida",
      "numeroTotalParcelas",
      "numeroParcelasPagas",
    ]);

    if (isValid) {
      setShowContactFields(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleFormSubmit = (data: z.infer<typeof schema>) => {
    mutate(data);
    setOpenDialog(true);  // Abrir o dialog após a submissão do formulário
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-6 md:px-12 lg:px-16 space-y-8 md:space-x-12 flex-wrap mt-16 md:mt-0">
      <div className="w-full md:w-1/2 lg:max-w-3xl p-8 space-y-6 flex flex-col bg-primary-light rounded-lg">
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight max-w-2xl">
          Diga adeus aos juros abusivos com a Connecter Pay!
        </h2>
        <p className="text-lg">
           Com a nossa calculadora, você pode simular suas parcelas e encontrar a melhor forma de quitar sua dívida de maneira justa.
          Não perca tempo, simule agora e veja o quanto pode economizar!
        </p>
      </div>

      <div className="flex flex-col w-full md:w-auto space-y-8">
        <Card className="w-full max-w-xl bg-white shadow-lg p-8 rounded-lg">
          <CardHeader>
            <CardTitle className="text-3xl">Calculadora</CardTitle>
            <CardDescription className="text-sm">
              Preencha os campos da calculadora e descubra quanto você pode economizar na sua parcela!
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-5">
                {!showContactFields ? (
                  <DebtFormFields form={form} handleProceed={handleProceed} isFormValid={isFormValid} />
                ) : (
                  <ContactFormFields form={form} setShowContactFields={setShowContactFields} isPending={isPending} />
                )}
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>

      <DialogDataUser
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        formData={{
          valorTotalDivida: form.getValues().valorTotalDivida,
          valorParcelaDivida: form.getValues().valorParcelaDivida,
          numeroTotalParcelas: form.getValues().numeroTotalParcelas,
          numeroParcelasPagas: form.getValues().numeroParcelasPagas,
           valorCalculado: (calculatedValue ?? 0).toString(),
        }}
      />
    </div>
  );
};

export default FormDataUser;
