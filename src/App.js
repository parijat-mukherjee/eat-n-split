import React from "react";
import FriendsList from "./FriendsList";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [formVisible, setFormVisible] = useState(false);
  const [newFriend, setNewFriend] = useState("");
  const [newImage, setNewImage] = useState("https://i.pravatar.cc/48");
  const [newFriendData, setNewFriendData] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleSetFormVisible() {
    setFormVisible((visible) => !visible);
  }

  function handleSetNewFriend(e) {
    setNewFriend(e.target.value);
  }

  function handleSetNewImage(e) {
    setNewImage(e.target.value);
  }

  function handleSetNewFriendData(e) {
    e.preventDefault();

    if (!newFriend || !newImage) return;

    const newEntry = {
      id: crypto.randomUUID(),
      name: newFriend,
      image: newImage,
      balance: Math.floor(Math.random() * (100 - 1 + 1) + 1),
    };

    setNewFriendData((prev) => [...prev, newEntry]);

    setNewFriend("");
    setNewImage("https://i.pravatar.cc/48");
    setFormVisible(false);
  }

  function handleSetSelectedFriend(friend) {
    setSelectedFriend((prev) => (prev?.id === friend.id ? null : friend));
    if (formVisible) setFormVisible(false);
  }

  function handleSplitBill(value) {
    setNewFriendData((prev) =>
      prev.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          initialFriends={newFriendData}
          onSelectedFriend={handleSetSelectedFriend}
          selectedFriend={selectedFriend}
        />

        <FormAddFriend
          isVisible={formVisible}
          handleSetFormVisible={handleSetFormVisible}
          newFriend={newFriend}
          onSetNewFriend={handleSetNewFriend}
          newImage={newImage}
          onSetNewImage={handleSetNewImage}
          onSetNewFriendData={handleSetNewFriendData}
        />

        <Button onClick={handleSetFormVisible}>
          {formVisible ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          key={selectedFriend.id}
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
