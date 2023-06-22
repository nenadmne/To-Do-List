import {useState} from "react";

const useInput = (validateValue) =>{
    const[enteredValue, setEnteredValue]= useState('');
    const onChangeHandler=(event)=>{
        setEnteredValue(event.target.value)
    }

    const[isTouched, setIsTouched]= useState(false);
    const onBlurHandler=()=>{
        setIsTouched(true)
    }

    const resetHandler = () =>{
        setIsTouched(false);
        setEnteredValue('');
    }

    const isValid = validateValue(enteredValue) && isTouched;

    return {
        enteredValue,
        isValid,
        onChangeHandler,
        onBlurHandler,
        resetHandler,
    }
    
}


export default useInput;