import React, { useCallback } from 'react';
import isEmail from 'validator/lib/isEmail';


export function useFormWithValidation() {
    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

  
    const handleChange = (event) => {
      const target = event.target;
      const name = target.name;
      const value = target.value;

      if (name === 'email') {
        if (!isEmail(value)) {
          target.setCustomValidity(target.validationMessage);
        } else {
          target.setCustomValidity('');
        }
      }


      setValues({...values, [name]: value});
      setIsValid(target.closest("form").checkValidity());
      setErrors({ ...errors, [name]: target.validationMessage })
    };
  
    const resetForm = useCallback(
      (newValues = {}, newErrors = {}, newIsValid = false) => {
        setValues(newValues);
        setErrors(newErrors);
        setIsValid(newIsValid);
      },
      [setValues, setIsValid]
    );
  
    return { values, handleChange, errors, isValid, resetForm, errors, setValues, setIsValid };
  }