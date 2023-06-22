import React, { useContext, useState } from "react";
import Card from "../UI/Card";
import "./TaskForm.css";
import useInput from "../UI/Input";
import TaskContext from "../Store/context";

const TaskForm = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const [formIsCanceled, setFormIsCanceled] = useState(false);
  const taskCtx = useContext(TaskContext);

  const {
    enteredValue: enteredName,
    isValid: nameIsValid,
    onChangeHandler: changeNameHandler,
    onBlurHandler: blurNameHandler,
    resetHandler: resetName,
  } = useInput((enteredName) => enteredName.trim().length > 0);

  const {
    enteredValue: enteredDescription,
    isValid: descriptionIsValid,
    onChangeHandler: changeDescriptionHandler,
    onBlurHandler: blurDescriptionHandler,
    resetHandler: resetDescription,
  } = useInput((enteredDescription) => enteredDescription.trim().length > 0);

  const {
    enteredValue: enteredDate,
    isValid: dateIsValid,
    onChangeHandler: changeDateHandler,
    onBlurHandler: blurDateHandler,
    resetHandler: resetDate,
  } = useInput(
    (enteredDate) => enteredDate !== null && enteredDate !== undefined
  );

  const submitHandler = (event) => {
    event.preventDefault();
    setFormIsSubmitted(true);

    if (nameIsValid && descriptionIsValid && dateIsValid) {
      resetName();
      resetDescription();
      resetDate();
      setFormIsSubmitted(false);
      taskCtx.addItem({
        title: enteredName,
        id: Math.random().toString(),
        description: enteredDescription,
        date: enteredDate,
      });
    }
  };

  const cancelHandler = () => {
    resetDescription();
    resetName();
    resetDate();
    setFormIsCanceled(true);
  };

  const clickHandler = () => {
    setFormIsCanceled(false);
  };

  const invalidNameClass =
    !nameIsValid && formIsSubmitted && !formIsCanceled ? "invalid-name" : "";

  const invalidDescriptionClass =
    !descriptionIsValid && formIsSubmitted && !formIsCanceled
      ? "invalid-name"
      : "";

  const invalidDateClass =
    !dateIsValid && formIsSubmitted && !formIsCanceled ? "invalid-name" : "";

  return (
    <Card className="form-wrapper">
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name"> Enter Task Name! </label>
          <input
            className={invalidNameClass}
            id="name"
            type="text"
            onChange={changeNameHandler}
            onBlur={blurNameHandler}
            value={enteredName}
          />
          {invalidNameClass && <p> Please enter a valid task name! </p>}
        </div>

        <div>
          <label htmlFor="description"> Enter Task Description! </label>
          <input
            className={invalidDescriptionClass}
            id="description"
            type="text"
            onChange={changeDescriptionHandler}
            onBlur={blurDescriptionHandler}
            value={enteredDescription}
          />
          {invalidDescriptionClass && <p> Please enter a valid task name! </p>}
        </div>

        <div>
          <label htmlFor="date"> Enter Task Date! </label>
          <input
            className={invalidDateClass}
            id="date"
            type="date"
            onChange={changeDateHandler}
            onBlur={blurDateHandler}
            value={enteredDate}
            min="2023-01-01"
            max="2023-12-31"
          />
          {invalidDateClass && <p> Please select a valid date! </p>}
        </div>
        <div className="button-div">
          <button className='submit-button' onClick={clickHandler}> Submit </button>
          <button className='cancel-button' onClick={cancelHandler}> Cancel </button>
        </div>
      </form>
    </Card>
  );
};

export default TaskForm;
