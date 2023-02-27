import { STORAGE_HAS_CHANGED } from "../shared/Constants";

function useLocalStorage(key, initialValue) {
  const getValue = () => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {

      return initialValue;
    }
  };

  const setValue = (value) => {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(value));

        window.dispatchEvent(new Event(STORAGE_HAS_CHANGED));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { setValue, getValue };
}

export { useLocalStorage };
