import React from "react";
import "./style.css";

function Card(props) {
  return (
    <tr className="text-center">
      <th scope="row"><img alt="Profile" src={props.picture}/></th>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.date}</td>
    </tr>
  );
}

export default Card;
