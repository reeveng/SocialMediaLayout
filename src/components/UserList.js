import React from 'react';
import { Link } from 'react-router-dom';

const formatFollowerCount = (followerCount) => {
  return `${followerCount} Followers`
}

const UserList = ({ userList }) => {
  return (
    <div className="c-list">
      {userList.map((user) => {
        return (
          <div className="c-list__item">
            <img className="c-list__item__img" src={user.profile.picture.src} alt={`${user.username}`} />
            <div className="c-list__item__info">
              <h3 className="c-list__item__username">
                {user.username}
              </h3>
              <div className="c-list__item__followCount">
                {formatFollowerCount(user.followerCount)}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default UserList;