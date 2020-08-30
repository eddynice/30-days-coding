import React,{useState} from 'react'

export const AddTransaction = () => {
  const [text, setText]  = useState('');
  const [amount, setAmount ] = useState(0);
  return (
    <>
    <h3>Add New transaction</h3>
    <form>
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="form-group" placeholder="Enter text..."/>

      </div>
      <div className="form-control">
        <label htmlFor="amount">Amount <br/>
        </label>
       <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="form-group" placeholder="Enter Amount ..." />

      </div>
      <button className="btn btn-primary">Add transaction</button>
      </form>     
    </>
  )
}
