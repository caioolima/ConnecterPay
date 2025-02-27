import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";

interface InputFieldProps {
  name: string;
  label: string;
  placeholder: string;
  form: any;
  type?: string;
  formatValue?: (value: string) => string;
}

const InputField = ({ name, label, placeholder, form, type = "text", formatValue }: InputFieldProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              {...field}
              type={type}
              inputMode="numeric"
              placeholder={placeholder}
              value={field.value || ""}
              onChange={(e) => field.onChange(formatValue ? formatValue(e.target.value) : e.target.value)}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputField;
