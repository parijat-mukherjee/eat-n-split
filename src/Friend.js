import React from "react";
import Button from "./Button";

export default function Friend({ friend, onSelectedFriend, selectedFriend }) {
  const match = selectedFriend?.id === friend.id;

  return (
    <li className={match ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance === 0 && <p>You and {friend.name} are square</p>}

      <Button onClick={() => onSelectedFriend(friend)}>
        {match ? "Close" : "Select"}
      </Button>
    </li>
  );
}
