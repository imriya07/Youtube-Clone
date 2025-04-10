import React from "react";
import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";

function MainContainer() {
  return (
    <div className="col-span-11">
      <ButtonsList />
      <VideoContainer />
    </div>
  );
}

export default MainContainer;
