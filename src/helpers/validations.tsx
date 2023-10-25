import { useState } from "react";

const useFieldValidation = () => {
  const validateEmail = (email: string) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    return passwordRegex.test(password);
  };

  return { validateEmail, validatePassword };
};

export default useFieldValidation;
