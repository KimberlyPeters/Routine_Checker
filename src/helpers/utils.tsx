import { useState } from 'react';

const usePasswordVisibility = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return { passwordVisible, togglePasswordVisibility };
};

export default usePasswordVisibility;
