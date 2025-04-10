import React from "react";
import Button from "./Button";
const List = [
  "All",
  "Music",
  "Gaming",
  "News",
  "Sports",
  "Live",
  "Learning",
  "Fashion",
  "Movies",
  "Technology",
  "Comedy",
];

function ButtonsList() {
  return (
    <div className="flex flex-wrap">
      {List.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
}

export default ButtonsList;
