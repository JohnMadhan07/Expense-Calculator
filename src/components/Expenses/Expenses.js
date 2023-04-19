import React, { useState } from "react";
import ExpensesFilter from "../NewExpenses/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
function Expenses(props) {
  const [filteredyear, setfilteredyear] = useState("2019");
  const expensefilterHandler = (filteryear) => {
    setfilteredyear(filteryear);
    console.log(filteryear);
  };
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredyear;
    
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredyear}
        onExpenseFilter={expensefilterHandler}
      />
    <ExpensesChart expense={filteredExpense}/>
    <ExpensesList expenselist={filteredExpense}></ExpensesList>
     
    </Card>
  );
}
export default Expenses;
