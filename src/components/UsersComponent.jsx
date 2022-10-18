import React from "react";
import { useEffect, useState } from "react";

const UsersComponent = ({ name }) => {
  const [names, setNames] = useState([
    "Ram",
    "Sita",
    "Hanuman",
    "Laxman",
    "Bharat",
    "Meghanad",
    "Rakesh",
    "Sima",
  ]);

  const renderNames = () => {
    return names
      .filter((el) => el.toLowerCase().includes(name))
      .map((el) => <div key={Math.random()}>{el}</div>);
  };
  return (
    <div>
      <div>{renderNames()}</div>
    </div>
  );
};

export default UsersComponent;
