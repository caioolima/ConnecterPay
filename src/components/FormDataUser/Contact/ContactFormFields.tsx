import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form"; 
import { schema } from "@/hooks/pages/useFormPageData";
import { z } from "zod";

interface ContactFormFieldsProps {
  form: UseFormReturn<z.infer<typeof schema>>; 
  setShowContactFields: (value: boolean) => void;
  isPending: boolean;
}

const ContactFormFields = ({ form, setShowContactFields, isPending }: ContactFormFieldsProps) => {
  return (
    <>
      <h1 className="font-bold text-xl mb-4">Seus dados para contato:</h1>

      <FormField
        control={form.control}
        name="nome"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nome</FormLabel>
            <FormControl>
              <Input placeholder="Digite seu nome" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="example@gmail.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="dataNascimento"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Data de Nascimento</FormLabel>
            <FormControl>
              <Input type="date" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="telefone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Telefone</FormLabel>
            <FormControl>
              <Input placeholder="(XX) XXXXX-XXXX" {...field} maxLength={15} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="flex justify-between space-x-4">
        <Button
          type="button"
          onClick={() => setShowContactFields(false)}
          className="w-full md:w-auto text-lg py-3"
        >
          Voltar
        </Button>

        <Button type="submit" className="w-full md:w-auto text-lg py-3" isLoading={isPending}>
          Calcular
        </Button>
      </div>
    </>
  );
};

export default ContactFormFields;
