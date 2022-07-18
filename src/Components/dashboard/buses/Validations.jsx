import React from "react";

const RegisterForm = async (
    values,
    successCallback,
    errorCallback
  ) => {
    if (true) successCallback();
    else errorCallback();
  };

const initialValues = {
    company: "",
    type:"",
    plateNumber: "",
    manufacturer:"",
    capacity:"",
    yearOfManufacturing:"",
    formSubmitted: false,
    success: false
}

export const FormValidation = ()=>{

    const [values, setValues] = React.useState(initialValues);
    
    const [errors, setErrors] = React.useState({});
    const validations = (fieldValues = values) => {
        let tmp = {...errors}

        if("company" in fieldValues){
            tmp.company = fieldValues.company? "":"Required field."
        }
        if("type" in fieldValues){
            tmp.type = fieldValues.type?"":"Required field."
        }
        if("plateNumber" in fieldValues){
            tmp.plateNumber = fieldValues.type? "":"Required field."
            if (fieldValues.platenumber){
                tmp.platenumber = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.platenumber)
                ? ""
                : "platenumber is not valid."
            }
        }
        if("manufacturer" in fieldValues){
            tmp.manufacturer = fieldValues.manufacturer?"":"Required field."
        }
        if("capacity" in fieldValues){
            tmp.capacity = fieldValues.capacity?"":"Required field."
        }
        if("yearOfManufacturing" in fieldValues){
            tmp.yearOfManufacturing = fieldValues.yom?"":"Required field."
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
        fieldValues.company &&
        fieldValues.type &&
        fieldValues.platenumber &&
        fieldValues.manufacturer &&
        fieldValues.capacity &&
        fieldValues.yom &&
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
            await RegisterForm(values, handleSuccess, handleError);
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
