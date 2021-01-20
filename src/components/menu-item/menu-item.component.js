import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

//instead of props we are using exact props that are passed, to avoid props.***
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  //dynamically adding size with the className, look into the scss file
  <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`, //using `` to make dynamic value as string & using ${} for placing the dynamic value
      }}
    />

    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
