import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''
  // });

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);

    // setUserInput((previousState) => {
    //     return {
    //         ...previousState, enteredTitle: event.target.value
    //     };
    // });
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    //console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    clearTitles();
  }

  function cancelHandler(event){
    event.preventDefault();
    props.onCancelExpenseData();
    clearTitles();
  }

  function clearTitles(){
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={submitHandler} onCancel={cancelHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2023-01-01"
            max="2025-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="cancel">Cancel</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
