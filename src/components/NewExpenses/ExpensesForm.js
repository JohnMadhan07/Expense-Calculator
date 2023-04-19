import React, { useState } from "react";
import "./ExpensesForm.css";
function ExpensesForm(props) {
  const [changedTitle, setchangedTitle] = useState("");
  const [changedAmount, setchangedAmount] = useState("");
  const [changedDate, setchangedDate] = useState("");

  const titlechangeHandler = (event) => {
    setchangedTitle(event.target.value);
  };
  const amountchangeHandler = (event) => {
    setchangedAmount(event.target.value);
  };
  const datechangeHandler = (event) => {
    setchangedDate(event.target.value);
  };

  const expenses = {
    title: changedTitle,
    amount: changedAmount,
    date: new Date(changedDate),
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onsaveExpenseData(expenses);
    setchangedTitle("");
    setchangedDate("");
    setchangedAmount("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input
            type="text"
            value={changedTitle}
            onChange={titlechangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={changedAmount}
            onChange={amountchangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            min="2019-05-22"
            max="2022-11-11"
            value={changedDate}
            onChange={datechangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">AddExpense</button>
        <button type="submit" onClick={props.oncancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
export default ExpensesForm;

/* const [userInput, setInput] = useState({
    changedTitle: "",
    changedAmount: "",
    changedDate: "",
  });

  const titlechangeHandler = (event) => {
    setInput((prevState)=>{
            return ({...prevState, changedTitle:event.target.value})
        })
    }
  const amountchangeHandler = (event) => {
    setInput((prevState)=>{
        return ({...prevState, changedAmount:event.target.value})
    })
  };
  const datechangeHandler = (event) => {
    setInput((prevState)=>{
        return ({...prevState, changedDate:event.target.value})
    })
  }; */
