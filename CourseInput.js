import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isInputEmpty, setIsInputEmpty] = useState(true);

  const goalInputChangeHandler = (event) => {
    const inputValue = event.target.value;
    setEnteredValue(inputValue);
    setIsInputEmpty(inputValue.trim() === "");
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!isInputEmpty) {
      props.onAddGoal(enteredValue);
      setEnteredValue("");
      setIsInputEmpty(true);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit" disabled={isInputEmpty}>
        Add Goal
      </Button>
    </form>
  );
};

export default CourseInput;
