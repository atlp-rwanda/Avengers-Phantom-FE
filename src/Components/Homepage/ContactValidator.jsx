import React from "react";

const ContactForm = async (
    values,
    successCallback,
    errorCallback
  ) => {
    if (true) successCallback();
    else errorCallback();
  };

const initialValues = {
    firstname: "",
    lastname:"",
    email: "",
    subject:"",
    message:"",
    formSubmitted: false,
    success: false
}

export const ContactValidator = ()=>{

    const [values, setValues] = React.useState(initialValues);
    
    const [errors, setErrors] = React.useState({});
    const validations = (fieldValues = values) => {
        let tmp = {...errors}

        if("firstname" in fieldValues){
            tmp.firstname = fieldValues.firstname? "":"Required field."
        }
        if("lastname" in fieldValues){
            tmp.lastname = fieldValues.lastname?"":"Required field."
        }
        if("email" in fieldValues){
            tmp.email = fieldValues.lastname? "":"Required field."
            if (fieldValues.email){
                tmp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
                ? ""
                : "Email is not valid."
            }
        }
        if("subject" in fieldValues){
            tmp.subject = fieldValues.subject?"":"Required field."
        }
        if("message" in fieldValues){
            tmp.message = fieldValues.message?"":"Required field."
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
        fieldValues.firstname &&
        fieldValues.lastname &&
        fieldValues.email &&
        fieldValues.subject &&
        fieldValues.message &&
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
            await ContactForm(values, handleSuccess, handleError);
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
