import { useState, useEffect } from 'react';

const controller = new AbortController();
const controllerSignal = controller.signal;

interface ReturnType {
  data: string;
}

const useDebounce: (dataSearch: string, debounce: number) => ReturnType = (
  dataSearch,
  debounce,
) => {
  const [data, setData] = useState<string>('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setData(dataSearch);
    }, debounce);
    return () => {
      clearTimeout(timeout);
    };
  }, [dataSearch]);

  return { data };
};

export default useDebounce;
