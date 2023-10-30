import React from "react";
import Friend from "./Friend";

export default function FriendsList({
  initialFriends,
  onSelectedFriend,
  selectedFriend,
}) {
  let friends = initialFriends;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelectedFriend={onSelectedFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
