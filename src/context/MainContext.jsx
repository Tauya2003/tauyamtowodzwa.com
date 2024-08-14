import { createContext, useState } from "react";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitMessage = async (e) => {
    setSuccess(false);
    setError(false);
    setLoading(true);
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append("access_key", "8dcec50a-644c-4309-b927-7c5b351375d6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setSuccess(true);
        e.target.reset();
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const contextData = {
    submitMessage,

    success,
    error,
    loading,
  };

  return (
    <MainContext.Provider value={contextData}>{children}</MainContext.Provider>
  );
};
