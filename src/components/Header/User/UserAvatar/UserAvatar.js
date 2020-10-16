import React from "react";
import { FcBusinessman } from "react-icons/fc";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "./UserAvatar.module.scss";
import avatar from "../../../../assets/images/avatar.jpg";

const UserAvatar = ({ toggleOpen }) => {
  return (
    <div className={styles.user_information}>
      <div className={styles.user_avatar}>
        {avatar ? (
          <img
            className={styles.user_avatar__image}
            src={avatar}
            alt="User avatar"
          />
        ) : (
          <FcBusinessman />
        )}
      </div>
      <div className={styles.user_name}>Joseph Cox</div>
      {toggleOpen ? (
        <div className={styles.user_up_arrow}>
          <FaChevronUp />
        </div>
      ) : (
        <div className={styles.user_down_arrow}>
          <FaChevronDown />
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
