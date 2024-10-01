import React, { createContext, useState } from "react";

// Create Context
export const FormContext = createContext(); // This is the context

export const FormProvider = ({ children }) => { // This is the provider that wraps your app
  const [formData, setFormData] = useState({
    employees: 35,
    salary: 106,
    email: "",
    daysDown: 40,
    billingType: "annualRevenue",
    rate: 40,
    sum: 0
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};