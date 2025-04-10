import React from "react";

const VideoCard = ({ info }) => {
  if (!info) return null; // Ensure data is available before rendering

  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle } = snippet || {};

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img
        className="rounded-lg"
        alt="thumbnail"
        src={thumbnails?.medium?.url}
      />
      <ul>
        <li>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount}</li>
      </ul>
    </div>
  );
};

export const AddVideoCard = ({ info }) => {
  return (
    <div className="p-1 border border-red-900">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
