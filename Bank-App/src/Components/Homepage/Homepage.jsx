import React, { useState } from "react";

import "./homepage.css";
import { v4 as uuid } from "uuid";
export default function Hompepage() {
  const [formValues, setFormValues] = useState({});
  const [cards, setCards] = useState([]);
  const [numberOfAccounts, setNumberOfAccounts] = useState(0);

  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newCard = { ...formValues, id: uuid() };
    setCards([...cards, newCard]);
    setFormValues({});
    setNumberOfAccounts(numberOfAccounts + 1);
  }
  function handleDelete(id) {
    setCards(cards.filter((card) => id !== card.id));
    setNumberOfAccounts(numberOfAccounts - 1);
  }

  return (
    <>
     
      <div>
        <form className="formm " onSubmit={handleSubmit}>
          <label htmlFor="">Customer Name</label>
          <input
            type="text"
            onChange={handleChange}
            name="customerName"
            value={formValues.customerName || ""}
          />
          <label htmlFor="">Account Number </label>
          <input
            type="text"
            onChange={handleChange}
            name="accountNumber"
            value={formValues.accountNumber || ""}
          />
          <label htmlFor="">Account Type </label>
          <input
            type="text"
            onChange={handleChange}
            name="accountType"
            value={formValues.accountType || ""}
          />
          <input type="submit" value="Submit" className="submit-button" />
        </form>
        <div className="cards-container">
       
         
          <div className="number">Number of Accounts: {numberOfAccounts}  </div>
                 <br/>  <br/>  <br/>  <br/>  <br/> <br/> 

          {cards &&
            cards.map((card, index) => (
              <div key={card.id} className="card">
                <div className="id">{card.id}</div>
                <div className="customerName">Customer Name: {card.customerName}</div>
                <div className="accountNumber">Account Number:{card.accountNumber}</div>
                <div className="accountType">Account Type:{card.accountType}</div>
                <button
                  onClick={() => handleDelete(card.id)}
                  className="delete"
                >
                  Delete Account
                </button>
              </div>
            ))}
        </div>
      </div>
     
    </>
  );
}
