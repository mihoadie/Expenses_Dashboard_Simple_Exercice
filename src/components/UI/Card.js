import React from "react";
import "./Card.css";
/*  "container components" with props.children 
      (components without data, with the purpous of managing/optimizing CSS for example) 
*/
const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
