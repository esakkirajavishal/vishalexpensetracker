import React from 'react';

type Expe= {
  date:string;
  amount:number;
  type:'Add'|'Remove';
};

type ExpeListProps = {
  expenses:Expe[];
};
const ExpenseList:React.FC<ExpeListProps>=({expenses})=>{
  return(
    <div>
      <div className='c2'><h2>Transactions:</h2>
      <ul>
        {expenses.map((expense,index) => (
         <li key={index}>
        Date:{ expense.date },Amount:{expense.amount},Type:{expense.type}
     </li>
    ))}
      </ul></div>
    </div>
  );
};
export default ExpenseList;
