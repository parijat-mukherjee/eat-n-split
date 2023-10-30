import React from "react";
import Button from "./Button";

export default function FormAddFriend({
  isVisible,
  handleSetFormVisible,
  newFriend,
  onSetNewFriend,
  newImage,
  onSetNewImage,
  onSetNewFriendData,
}) {
  return (
    isVisible && (
      <form className="form-add-friend" onSubmit={onSetNewFriendData}>
        <label>😊😊Friend Name</label>
        <input type="text" value={newFriend} onChange={onSetNewFriend} />

        <label>😂😂Image URL</label>
        <input type="text" value={newImage} onChange={onSetNewImage} />
        <Button>Add Friend</Button>
      </form>
    )
  );
}
