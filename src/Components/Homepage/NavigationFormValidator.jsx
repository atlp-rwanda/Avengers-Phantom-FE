import React from "react";

const NavigationForm = async (
    values,
    successCallback,
    errorCallback
  ) => {
    if (true) successCallback();
    else errorCallback();
  };

const initialValues = {
    startinpoint: "",
    destination:"",
    formSubmitted: false,
    success: false
}

export const NavigationFormValidator = ()=>{

    const [values, setValues] = React.useState(initialValues);
    
    const [errors, setErrors] = React.useState({});
    const validations = (fieldValues = values) => {
        let tmp = {...errors}

        if("startingpoint" in fieldValues){
            tmp.startingpoint = fieldValues.startingpoint? "":"Please enter starting point."
        }
        if("destination" in fieldValues){
            tmp.destination = fieldValues.destination?"":"Please enter destination."
        }
        setErrors({
            ...tmp
            });
    }

    const handleInputValue = (e) => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        });
        validations({[name]:value});
    };
    const formIsValid = (fieldValues = values) => {
        const isValid =
        fieldValues.destination &&
        fieldValues.startingpoint &&
        Object.values(errors).every((x) => x === "");
  
      return isValid;
    }
    const handleSuccess = ()=>{
        setValues({
            ...initialValues,
            formSubmitted:true,
            success:true
        })
    }

    const handleError = ()=>{
        setValues({
            ...initialValues,
            formSubmitted:true,
            success:false
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const isValid =
          Object.values(errors).every((x) => x === "") && formIsValid();
        if (isValid) {
            await NavigationForm(values, handleSuccess, handleError);
        }
      };
    return {
    values,
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    errors
    };
}
