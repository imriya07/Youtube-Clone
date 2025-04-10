import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../Utils/constants";
import VideoCard, { AddVideoCard } from "./VideoCard.js";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [Videos, setVideos] = useState([]);
  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data?.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap h-[500px] overflow-y-auto">
      {Videos[0] && <AddVideoCard info={Videos[0]} />}
      {Videos.map((Video) => (
        <Link to={"/watch?v=" + Video.id} key={Video.id}>
          <VideoCard key={Video.id} info={Video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
