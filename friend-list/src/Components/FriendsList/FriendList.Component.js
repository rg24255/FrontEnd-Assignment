import React, { useState, useEffect } from "react";
import FriendDetail from "./FriendDetail.Component";
import { v4 as uuidv4 } from "uuid";
import "./FriendList.scss";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [isValid, setValid] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults(friends);
  }, [friends]);
  const validate = value => {
    var regex = /^[a-zA-Z ]{2,30}$/;
    return regex.test(value);
  };

  const addToFavourite = id => {
    setFriends(
      friends.map(item => {
        if (item.id === id) {
          return { ...item, favourite: !item.favourite };
        }
        return item;
      })
    );
  };
  const deleteFriend = id => {
    setFriends(friends.filter(item => item.id !== id));
  };
  const handleKeyPress = event => {
    const friend = { id: "", name: "", favourite: false };

    if (event.key === "Enter") {
      const valid = validate(event.target.value);
      setValid(!valid);
      if (valid) {
        friend.id = uuidv4();
        friend.name = event.target.value;

        setFriends(prevStat => [...prevStat, friend]);

        event.target.value = "";
      }
      event.preventDefault();
    }
  };

  const onSearchChange = event => {
    function filterIt(arr, searchKey) {
      return arr.filter(obj =>
        Object.keys(obj).some(key =>
          String(obj[key])
            .toLowerCase()
            .includes(searchKey)
        )
      );
    }
    const results = filterIt(friends, String(event.target.value).toLowerCase());
    setSearchResults(results);
  };
  return (
    <div className="input-container">
      <form onSubmit={handleKeyPress}>
        <input
          className="input-field"
          type="text"
          placeholder="Enter Your Friends Name"
          onKeyPress={handleKeyPress}
          onChange={onSearchChange}
        />
        {isValid && (
          <div className="error-text">Please Enter Valid Data!!!</div>
        )}
      </form>
      <FriendDetail
        friends={searchResults}
        addToFavourite={addToFavourite}
        deleteFriend={deleteFriend}
      />
    </div>
  );
};

export default FriendsList;
