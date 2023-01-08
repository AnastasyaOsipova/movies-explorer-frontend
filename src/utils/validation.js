import React, { useCallback } from 'react';
import isEmail from 'validator/lib/isEmail';
import { CurrentUserContext } from '../contexts/currentUserContext';


export function useFormWithValidation() {
    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    const currentUser = React.useContext(CurrentUserContext);

  
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

    const handleProfileChange = (event) => {
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

        if (target.name === 'name' && currentUser.name !== values.name) {
            setIsValid(false)
        }

        if (target.name === 'email' && currentUser.email !== values.email) {
            setIsValid(false)
        }
      };
  
    const resetForm = useCallback(
      (newValues = {}, newErrors = {}, newIsValid = false) => {
        setValues(newValues);
        setErrors(newErrors);
        setIsValid(newIsValid);
      },
      [setValues, setIsValid]
    );
  
    return { values, handleChange, errors, isValid, resetForm, errors, setValues, setIsValid, handleProfileChange };
  }