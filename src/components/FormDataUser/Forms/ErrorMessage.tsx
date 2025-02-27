import React from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <div className="text-red-500 text-sm mt-2">{message}</div>;
};

export default ErrorMessage;
