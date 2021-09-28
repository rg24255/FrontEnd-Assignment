import React, { useState } from "react";
import { StarButton, DeleteButton } from "../Button.Component";
import "./FriendList.scss";
import PropTypes from "prop-types";
const FriendDetail = props => {
  const { friends, addToFavourite, deleteFriend } = props;
  const [offset, setOffset] = useState(0);
  const itemsPerPage = 4;
  const changePage = offset => {
    setOffset(offset);
  };
  //Sorting
  const sortedlist = friends.sort(function(x, y) {
    return x.favourite === y.favourite ? 0 : x.favourite ? -1 : 1;
  });

  let listItems = [];
  for (
    let i = offset * itemsPerPage;
    i < offset * itemsPerPage + itemsPerPage;
    i++
  ) {
    if (i >= sortedlist.length) {
      break;
    }
    listItems.push(sortedlist[i]);
  }
  let btns = [];
  const max = Math.ceil(sortedlist.length / itemsPerPage);
  for (let i = 1; i <= max; i++) {
    const elem = (
      <button className="pagination-btn" onClick={() => changePage(i - 1)}>
        {i}
      </button>
    );
    btns.push(elem);
  }
  const nextButton = (
    <button
      className="pagination-btn"
      onClick={() => changePage(offset + 1)}
      disabled={offset === max - 1}
    >
      {">"}
    </button>
  );
  const prevButton = (
    <button
      className="pagination-btn"
      onClick={() => changePage(offset - 1)}
      disabled={offset === 0}
    >
      {"<"}
    </button>
  );
  btns = [prevButton, ...btns, nextButton];
  console.log("current page", offset);
  return (
    <div className="friend-detail-container">
      <ul>
        {listItems.map(item => (
          <li key={item.id} className="detail-container">
            <div className="max-text">
              {item.name}
              <br></br>
              <span className="min-text">is your friend</span>
            </div>
            <StarButton
              flag={item.favourite}
              onClick={() => addToFavourite(item.id)}
            />
            <DeleteButton
              onClick={() => {
                if (
                  window.confirm(
                    `Are you sure you wish unfriend ${item.name} ?`
                  )
                )
                  deleteFriend(item.id);
              }}
            />
          </li>
        ))}
      </ul>

      {sortedlist.length > 4 && (
        <div className="pagination">
          <p className="pageNo">{offset + 1}</p>
          {btns}
        </div>
      )}
    </div>
  );
};
FriendDetail.propTypes = {
  addToFavourite: PropTypes.func
};
FriendDetail.defaultProps = {
  addToFavourite: () => {}
};
export default FriendDetail;
