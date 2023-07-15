import React,{useState} from'react';

type ExpeformProps={
 onAddExpe:(amount:number,type:'Add'|'Remove')=>void;
};
  const Expeform:React.FC<ExpeformProps>=({onAddExpe})=>{
  const[amount,setAmount]= useState<number>(0);
  const[type,setType] =useState<'Add'|'Remove'>('Add');
  const h= (e: React.FormEvent) => {
    e.preventDefault();
    onAddExpe(amount, type);
    setAmount(0);
  };
  return (
    <div className='c1'>
    <form onSubmit={h}>
      <label>
        Amount:
        <input
    type="number"
     value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}/>
      </label>
      <label>
        Type:
       <select value={type} onChange={(e)=>setType(e.target.value as 'Add' | 'Remove')}>
      <option value="Add">Add</option>
     <option value="Remove">Remove</option>
      </select>
      </label>
      <button type="submit">Add Expense</button>
    </form>
    </div>
  );
};

export default Expeform;
