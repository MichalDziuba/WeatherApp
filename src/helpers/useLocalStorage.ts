import { useEffect } from "react";
import { useState } from "react";

const getSavedValue = (key, initialValue) => {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue) return savedValue;
    if(initialValue instanceof Function)
    return initialValue;
};
export const useLocalStorage = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return [value, setValue];
};
