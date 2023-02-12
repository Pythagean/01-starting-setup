import React, {useState} from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props){

    const [showForm, setShowForm] = useState(false);

    function addNewExpenseClickHandler(){
        setShowForm((prevState) => {
            return !prevState;
        });
    }

    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setShowForm(false);
    }

    function cancelExpenseDataHandler(){
        setShowForm(false);
    }

    let newExpenseContent = <button onClick={addNewExpenseClickHandler}>Add New Expense</button>;
    if (showForm){
        newExpenseContent = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpenseData={cancelExpenseDataHandler} />;
    }

    return (
        <div className="new-expense">
            {newExpenseContent}
        </div>
    );
}

export default NewExpense;