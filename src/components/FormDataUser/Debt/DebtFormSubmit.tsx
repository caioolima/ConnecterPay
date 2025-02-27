export const handleFormSubmit = (handleProceed: () => void, setErrorMessage: (msg: string) => void) => {
    setErrorMessage("");
    handleProceed();
  };
  