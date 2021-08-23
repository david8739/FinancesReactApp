import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setYear] = useState("2021");

  function saveDateHandler(year) {
    setYear(year);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onSaveDate={saveDateHandler}
        ></ExpensesFilter>

        {props.expenses
          .filter((expense) => {
            return expense.date.getFullYear().toString() === filteredYear;
          })
          .map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </Card>
    </div>
  );
}

export default Expenses;
