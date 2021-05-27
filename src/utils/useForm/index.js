import {useState} from 'react';

export const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);
  return [
    values,
    (type, params) => {
      if (type === 'reset') return setValues(initialValue);
      return setValues({...values, [type]: params});
    },
  ];
};
