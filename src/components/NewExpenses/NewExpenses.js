import "./NewExpenses.css";
import ExpensesForm from "./ExpensesForm";
import React,{useState} from "react";
function NewExpenses(props) {
const saveExpenseHandler=(expenseData)=>{
  const expense={
    ...expenseData,
    id:Math.random().toString()
  };
  props.onAddExpense(expense)
}
const [isEditing, setEditing] = useState(false);
const editHandler = () => {
  setEditing(true);
};
const cancelHandler=()=>{
  setEditing(false)
  }


  return (
    <div className="new-expense">
      {!isEditing&&<button type="button" onClick={editHandler}>Add new Expense</button>}
    {isEditing && <ExpensesForm onsaveExpenseData={saveExpenseHandler} oncancel={cancelHandler}></ExpensesForm>}
    </div>
  );
} 
export default NewExpenses;
