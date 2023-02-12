import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [selectedFilter, setSelectedFilter] = useState("2019");

  function changeExpenseFilterHandler(changedFilter) {
    setSelectedFilter(changedFilter);
  }

  // filter expenses array based on selected filter
  const filteredExpenses = props.items.filter(
    (x) => x.date.getFullYear().toString() === selectedFilter
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedFilter}
          onChangeExpenseFilter={changeExpenseFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
