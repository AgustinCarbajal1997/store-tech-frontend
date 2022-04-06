import React, { useState, useEffect } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { setFavorites } from "../../store/actions/auth.action";

const BookMark = ({ dataUser, productId, dispatch, access_token }) => {
  const [isBooked, setIsBooked] = useState(false);
  useEffect(() => {
    const book = dataUser.favorites.find((id) => productId === id);
    book ? setIsBooked(true) : setIsBooked(false);
  }, [dataUser, productId]);
  const onSaveProductHandle = () => {
    dispatch(setFavorites(access_token, productId));
  };
  return (
    <div className="book-mark-container">
      {isBooked ? (
        <FaBookmark
          size={28}
          color="#440099"
          style={{ cursor: "pointer" }}
          onClick={onSaveProductHandle}
        />
      ) : (
        <FaRegBookmark
          size={28}
          color="#440099"
          style={{ cursor: "pointer" }}
          onClick={onSaveProductHandle}
        />
      )}
    </div>
  );
};

export default BookMark;
