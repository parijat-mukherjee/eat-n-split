import React, { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const friendExpense = bill ? bill - userExpense : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !userExpense) return;

    let owed = 0;

    if (whoIsPaying === "user") {
      owed = friendExpense;
    } else {
      owed = -userExpense;
    }

    onSplitBill(owed);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💵Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>Your Expense</label>
      <input
        type="text"
        value={userExpense}
        onChange={(e) =>
          Number(e.target.value) > bill
            ? userExpense
            : setUserExpense(Number(e.target.value))
        }
      />

      <label>{selectedFriend.name}'s Expense</label>
      <input type="text" disabled value={friendExpense} />

      <label>🤑Who is Paying the Bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
