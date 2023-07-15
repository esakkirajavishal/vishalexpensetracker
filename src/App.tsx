import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';


type Expense = {
  date:string;
  amount:number;
  type:'Add'|'Remove';
};
const App:React.FC=() => {
  const[balance,setBalance]=useState<number>(550);
  const [expenses,setExpenses]=useState<Expense[]>([]);
    const handleAddExpense=(amount:number,type:'Add'|'Remove') => {
    if(type ==='Add') {
     setBalance(balance +amount);
    }else{
      if(amount > balance) {
       alert('Insufficient balance');
      return;
  }
    setBalance(balance - amount);
    }
    const date = new Date().toISOString();
    const newExpense:Expense={date,amount,type };
    setExpenses([...expenses,newExpense]);
  };
  return (
    <div>
    <h1>Vishal Expense Tracker</h1>
    <h2>Balance:{balance}</h2>
    <ExpenseForm onAddExpe={handleAddExpense} />
    <ExpenseList expenses={expenses} />
    </div>
  );
};
export default App;
